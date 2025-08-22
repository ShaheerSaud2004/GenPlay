# GenPlay Waitlist Setup Guide

## 🚀 Quick Test (No Setup Required)

Your waitlist buttons are already connected! You can test them right now:

1. **Click "Join Beta" in the header** - Opens the waitlist modal
2. **Fill out the form** - All fields work with validation
3. **Submit** - You'll see an error about "no storage method" but the UI works

## 🔧 To Actually Save Waitlist Data

You need to set up one of these storage methods:

### Option 1: Vercel Blob (Recommended)

1. **Deploy to Vercel** (free):
   ```bash
   npx vercel
   ```

2. **Get Blob token** in Vercel dashboard:
   - Go to Storage → Blob
   - Create a store
   - Copy the `BLOB_READ_WRITE_TOKEN`

3. **Add environment variable** in Vercel:
   ```
   BLOB_READ_WRITE_TOKEN=your_token_here
   ```

### Option 2: Email Notifications

1. **Get Resend API key** (free tier available):
   - Sign up at [resend.com](https://resend.com)
   - Get your API key

2. **Add environment variables**:
   ```
   RESEND_API_KEY=your_key_here
   NOTIFY_EMAIL=your@email.com
   ```

## 🧪 Testing Locally

1. **Create `.env.local`** in your project root:
   ```bash
   # For local testing, add one of these:
   RESEND_API_KEY=your_key_here
   NOTIFY_EMAIL=your@email.com
   ```

2. **Restart your dev server**:
   ```bash
   npm run dev -- --port 3001
   ```

3. **Test the form** - it should now save/email data!

## ✅ Current Status

- ✅ **Buttons are connected** and open the modal
- ✅ **Form validation works** (email, required fields)
- ✅ **UI is fully functional**
- ⚠️ **Data storage** needs environment setup (see above)

## 🎯 What Happens When Someone Joins

1. **With Blob**: Data saved to CSV file in Vercel Blob
2. **With Resend**: Email sent to you with signup details
3. **Without setup**: Form works but shows "no storage" error

The waitlist is ready to use! Just add your preferred storage method.
