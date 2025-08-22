import { NextRequest, NextResponse } from 'next/server'
import { put } from '@vercel/blob'
import { Resend } from 'resend'
import { writeFileSync, readFileSync, existsSync } from 'fs'
import { join } from 'path'
import type { WaitlistFormData } from '@/types'
import nodemailer from 'nodemailer'

// Rate limiting (simple in-memory store - use Redis in production)
const rateLimitMap = new Map<string, { count: number; lastReset: number }>()
const RATE_LIMIT_WINDOW = 60 * 1000 // 1 minute
const RATE_LIMIT_MAX = 10 // 10 requests per minute per IP

function rateLimit(ip: string): boolean {
  const now = Date.now()
  const record = rateLimitMap.get(ip)
  
  if (!record) {
    rateLimitMap.set(ip, { count: 1, lastReset: now })
    return true
  }
  
  if (now - record.lastReset > RATE_LIMIT_WINDOW) {
    record.count = 1
    record.lastReset = now
    return true
  }
  
  if (record.count >= RATE_LIMIT_MAX) {
    return false
  }
  
  record.count++
  return true
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown'
    if (!rateLimit(ip)) {
      return NextResponse.json(
        { ok: false, error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    const body: WaitlistFormData = await request.json()
    
    // Validation
    if (!body.email || !validateEmail(body.email)) {
      return NextResponse.json(
        { ok: false, error: 'Valid email is required' },
        { status: 400 }
      )
    }

    // Prepare data
    const timestamp = new Date().toISOString()
    const waitlistEntry = {
      email: body.email,
      name: body.name || '',
      role: body.role || '',
      engine: body.engine || '',
      experience: body.experience || '',
      useCase: body.useCase || '',
      timestamp,
      ip: ip.slice(0, 10), // Partial IP for privacy
    }

    // Storage methods
    let dataStored = false
    const storageResults = []

    // Try Vercel Blob for production storage
    console.log('🔍 Checking Blob storage...', { 
      hasToken: !!process.env.BLOB_READ_WRITE_TOKEN,
      tokenLength: process.env.BLOB_READ_WRITE_TOKEN?.length || 0
    })
    
    if (process.env.BLOB_READ_WRITE_TOKEN && process.env.BLOB_READ_WRITE_TOKEN !== 'placeholder_for_vercel_blob') {
      try {
        // Simple approach: Store each signup as individual JSON file and also maintain a CSV
        const filename = `waitlist/${waitlistEntry.timestamp}-${waitlistEntry.email.replace(/[^a-zA-Z0-9]/g, '_')}.json`
        
        // Store individual signup
        const { url: jsonUrl } = await put(filename, JSON.stringify(waitlistEntry, null, 2), { 
          access: 'public' 
        })
        
        // Also store in simple CSV format (overwrite each time - simpler)
        const csvRow = [
          waitlistEntry.timestamp,
          waitlistEntry.email,
          waitlistEntry.name || '',
          waitlistEntry.role || '',
          waitlistEntry.engine || '',
          waitlistEntry.experience || '',
          waitlistEntry.useCase || '',
          waitlistEntry.ip
        ].join(',')
        
        const { url: csvUrl } = await put('genplay-waitlist-latest.csv', 
          `timestamp,email,name,role,engine,experience,useCase,ip\n${csvRow}`, 
          { access: 'public' }
        )

        dataStored = true
        console.log('✅ Waitlist data stored to Blob:', { jsonUrl, csvUrl })
      } catch (blobError) {
        console.error('❌ Blob storage error:', blobError)
        storageResults.push(`Blob error: ${blobError instanceof Error ? blobError.message : String(blobError)}`)
      }
    } else {
      console.log('❌ No Blob token available')
      storageResults.push('No Blob token')
    }

    // Send emails using Gmail SMTP
    let emailsSent = false
    const emailResults = []
    
    // Check if Gmail credentials are available
    if (process.env.apppassword) {
      try {
        console.log('📧 Setting up Gmail SMTP transporter')
        
        // Create Gmail SMTP transporter
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: 'shaheersaud2004@gmail.com',
            pass: process.env.apppassword
          }
        })

        // Send confirmation email to user
        console.log('📧 Sending confirmation email to user:', waitlistEntry.email)
        
        const userEmailHtml = `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #0f1220; color: #f8fafc; border-radius: 12px;">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #4ADE80; font-size: 28px; margin-bottom: 10px;">🚀 You're In!</h1>
              <p style="color: #94a3b8; font-size: 16px;">Thanks for joining the GenPlay beta waitlist</p>
            </div>
            
            <div style="background-color: #171A2B; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h2 style="color: #4ADE80; font-size: 20px; margin-bottom: 15px;">What happens next?</h2>
              <ul style="color: #cbd5e1; line-height: 1.6; padding-left: 20px;">
                <li>We'll email you when the MVP launches (~1 month)</li>
                <li>You'll get early access before the public release</li>
                <li>Your feedback will help shape GenPlay's future</li>
                <li>Join our community of game creators and educators</li>
              </ul>
            </div>
            
            <div style="background-color: #171A2B; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h3 style="color: #60A5FA; font-size: 18px; margin-bottom: 10px;">Your signup details:</h3>
              <p style="color: #cbd5e1; margin: 5px 0;"><strong>Email:</strong> ${waitlistEntry.email}</p>
              ${waitlistEntry.name ? `<p style="color: #cbd5e1; margin: 5px 0;"><strong>Name:</strong> ${waitlistEntry.name}</p>` : ''}
              ${waitlistEntry.role ? `<p style="color: #cbd5e1; margin: 5px 0;"><strong>Role:</strong> ${waitlistEntry.role}</p>` : ''}
              ${waitlistEntry.engine ? `<p style="color: #cbd5e1; margin: 5px 0;"><strong>Engine:</strong> ${waitlistEntry.engine}</p>` : ''}
              ${waitlistEntry.experience ? `<p style="color: #cbd5e1; margin: 5px 0;"><strong>Experience:</strong> ${waitlistEntry.experience}/10</p>` : ''}
            </div>
            
            <div style="text-align: center; margin-top: 30px;">
              <p style="color: #94a3b8; font-size: 14px;">
                Questions? Reply to this email or reach out at shaheersaud2004@gmail.com
              </p>
              <p style="color: #64748b; font-size: 12px; margin-top: 15px;">
                You can unsubscribe at any time. We'll only email you about GenPlay updates.
              </p>
            </div>
          </div>
        `

        const userMailOptions = {
          from: '"GenPlay" <shaheersaud2004@gmail.com>',
          to: waitlistEntry.email,
          subject: '🎮 Welcome to GenPlay Beta Waitlist!',
          html: userEmailHtml
        }

        await transporter.sendMail(userMailOptions)
        console.log('✅ User confirmation email sent successfully')

        // Send notification email to you
        console.log('📧 Sending notification email to admin')
        
        const adminEmailHtml = `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #4ADE80;">New GenPlay Waitlist Signup 🎉</h2>
            <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; border-left: 4px solid #4ADE80;">
              <p><strong>Email:</strong> ${waitlistEntry.email}</p>
              <p><strong>Name:</strong> ${waitlistEntry.name || 'Not provided'}</p>
              <p><strong>Role:</strong> ${waitlistEntry.role || 'Not provided'}</p>
              <p><strong>Engine:</strong> ${waitlistEntry.engine || 'Not provided'}</p>
              <p><strong>Experience:</strong> ${waitlistEntry.experience || 'Not provided'}/10</p>
              <p><strong>Use Case:</strong> ${waitlistEntry.useCase || 'Not provided'}</p>
              <p><strong>Timestamp:</strong> ${waitlistEntry.timestamp}</p>
              <p><strong>IP:</strong> ${waitlistEntry.ip}</p>
            </div>
            
            <p style="margin-top: 20px; color: #64748b; font-size: 14px;">
              A confirmation email was automatically sent to the user.
            </p>
          </div>
        `

        const adminMailOptions = {
          from: '"GenPlay Notifications" <shaheersaud2004@gmail.com>',
          to: 'shaheersaud2004@gmail.com',
          subject: '🎯 New GenPlay Waitlist Signup',
          html: adminEmailHtml
        }

        await transporter.sendMail(adminMailOptions)
        console.log('✅ Admin notification email sent successfully')

        emailsSent = true
        emailResults.push('Gmail SMTP: Both emails sent successfully')
        
      } catch (emailError) {
        console.error('❌ Gmail SMTP error:', emailError)
        emailResults.push(`Gmail SMTP error: ${emailError instanceof Error ? emailError.message : String(emailError)}`)
      }
    } else {
      console.log('❌ No Gmail app password found in environment variables')
      emailResults.push('No Gmail app password')
    }

    // Log all email results
    console.log('📧 Email summary:', emailResults.join(', '))

    // Return appropriate response based on what succeeded
    if (dataStored || emailsSent) {
      const methods = []
      if (dataStored) methods.push('data stored to CSV')
      if (emailsSent) methods.push('emails sent')
      
      console.log(`✅ Waitlist signup successful: ${methods.join(' and ')}`)
      return NextResponse.json({ 
        ok: true, 
        message: 'Successfully joined waitlist! Check your email for confirmation.',
        details: {
          dataStored,
          emailsSent,
          emailResults: emailResults.join(', ')
        }
      })
    }

    // If both methods fail
    console.error('❌ No storage or email method succeeded')
    return NextResponse.json(
      { ok: false, error: 'Service temporarily unavailable. Please try again later.' },
      { status: 503 }
    )

  } catch (error) {
    console.error('Waitlist API error:', error)
    return NextResponse.json(
      { ok: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Handle OPTIONS for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}
