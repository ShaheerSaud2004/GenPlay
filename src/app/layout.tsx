import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: 'GenPlay - From prompt to playable in seconds',
  description: 'GenPlay turns plain English into a playable Unity scene. Great for students, designers, and rapid prototyping.',
  keywords: ['Unity', 'game development', 'AI', 'rapid prototyping', 'game design', 'education'],
  authors: [{ name: 'Shaheer' }],
  creator: 'Shaheer',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://genplay.dev',
    title: 'GenPlay - From prompt to playable in seconds',
    description: 'GenPlay turns plain English into a playable Unity scene. Great for students, designers, and rapid prototyping.',
    siteName: 'GenPlay',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'GenPlay - From prompt to playable in seconds',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GenPlay - From prompt to playable in seconds',
    description: 'GenPlay turns plain English into a playable Unity scene. Great for students, designers, and rapid prototyping.',
    images: ['/og.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/genplay-logo.png',
    shortcut: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Plausible Analytics */}
        {process.env.PLAUSIBLE_DOMAIN && (
          <Script
            defer
            data-domain={process.env.PLAUSIBLE_DOMAIN}
            src="https://plausible.io/js/script.js"
          />
        )}
      </head>
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
