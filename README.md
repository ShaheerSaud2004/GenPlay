# GenPlay Marketing Site

A modern, fast marketing site for GenPlay - a Unity editor tool that turns text prompts into playable scenes.

## 🚀 Features

- **Next.js 14** with App Router and TypeScript
- **TailwindCSS** for styling with custom brand colors
- **Responsive design** that works on all devices
- **Accessible components** with proper focus management
- **SEO optimized** with metadata, sitemap, and robots.txt
- **Analytics ready** with Vercel Analytics and Plausible support
- **Waitlist functionality** with CSV storage (Vercel Blob) or email notifications (Resend)
- **Video lightbox** for demo presentation
- **Toast notifications** for user feedback

## 🎨 Design System

- **Background**: `#0f1220` (deep navy)
- **Card**: `#171A2B`
- **Accent**: `#4ADE80` (green)
- **Accent 2**: `#60A5FA` (blue)
- **Typography**: Inter font family
- **Components**: Rounded corners, subtle animations, dark theme

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── api/waitlist/      # API endpoint for waitlist
│   ├── demo/              # Demo page
│   ├── roadmap/           # Product roadmap
│   ├── privacy/           # Privacy policy
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Homepage
│   ├── sitemap.ts         # Dynamic sitemap
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── Header.tsx        # Site header with navigation
│   ├── Hero.tsx          # Landing page hero section
│   ├── VideoLightbox.tsx # Video modal component
│   ├── WaitlistModal.tsx # Waitlist signup form
│   └── ...               # Other page components
├── lib/                  # Utility functions
├── types/                # TypeScript type definitions
public/                   # Static assets
├── logo.svg             # GenPlay logo
├── demo.mp4             # Demo video (replace with actual)
├── demo-thumbnail.jpg   # Video thumbnail (replace with actual)
└── og.png              # OpenGraph image (replace with actual)
```

## 🛠 Setup & Development

### Prerequisites

- Node.js 18+ and npm/pnpm
- (Optional) Vercel account for deployment
- (Optional) Resend account for email notifications
- (Optional) Plausible account for privacy-focused analytics

### Installation

1. **Clone and install dependencies**
   ```bash
   cd GenPlay
   npm install
   # or
   pnpm install
   ```

2. **Environment setup**
   ```bash
   cp env.example .env.local
   ```
   
   Edit `.env.local` with your actual values:
   - `PLAUSIBLE_DOMAIN`: Your domain for Plausible analytics
   - `BLOB_READ_WRITE_TOKEN`: Vercel Blob token for CSV storage
   - `RESEND_API_KEY`: Resend API key for email notifications
   - `NOTIFY_EMAIL`: Email to receive waitlist notifications

3. **Add your assets** (replace placeholders):
   - `public/demo.mp4`: Your actual demo video
   - `public/demo-thumbnail.jpg`: Video thumbnail image
   - `public/og.png`: OpenGraph social media image (1200x630)
   - `src/components/VideoLightbox.tsx`: Update YouTube video ID

4. **Run development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📤 Deployment

### Vercel (Recommended)

1. **Connect to Vercel**
   ```bash
   npx vercel
   ```

2. **Set environment variables** in Vercel dashboard:
   - Add all variables from your `.env.local`
   - Ensure `BLOB_READ_WRITE_TOKEN` is set for waitlist functionality

3. **Custom domain** (optional):
   - Add your domain in Vercel dashboard
   - Update `baseUrl` in `src/app/sitemap.ts`
   - Update OpenGraph URLs in `src/app/layout.tsx`

4. **Deploy**
   ```bash
   npx vercel --prod
   ```

### Other Platforms

The site is a standard Next.js application and can be deployed to:
- Netlify
- Railway
- DigitalOcean App Platform
- Any platform supporting Node.js

Ensure environment variables are set and build command is `npm run build`.

## 🔧 Configuration

### Analytics

- **Vercel Analytics**: Automatically enabled when deployed to Vercel
- **Plausible**: Set `PLAUSIBLE_DOMAIN` environment variable

### Waitlist Storage

Choose one or both methods:

1. **Vercel Blob** (CSV storage):
   - Set `BLOB_READ_WRITE_TOKEN` in environment
   - Data stored as CSV in Vercel Blob storage

2. **Email notifications**:
   - Set `RESEND_API_KEY` and `NOTIFY_EMAIL`
   - Receives email for each signup

### Video Configuration

In `src/components/VideoLightbox.tsx`:
- **YouTube**: Update `YOUTUBE_VIDEO_ID` constant
- **Local video**: Uncomment video element, comment out iframe

## 📝 Content Updates

### Copy Changes
- Edit text directly in component files
- Main copy is in `src/components/Hero.tsx`
- Feature descriptions in `src/components/FeatureCards.tsx`

### Roadmap Updates
- Edit `roadmapItems` array in `src/app/roadmap/page.tsx`
- Add changelog entries to `changelog` array

### SEO
- Update metadata in `src/app/layout.tsx`
- Modify sitemap in `src/app/sitemap.ts`

## 🧪 Testing

```bash
# Type checking
npm run type-check

# Linting
npm run lint

# Build test
npm run build
```

## 📊 Performance

The site is optimized for:
- **Lighthouse score**: 95+ on Performance, SEO, Best Practices
- **Accessibility**: 90+ score
- **Core Web Vitals**: All metrics in green
- **Bundle size**: Minimal dependencies, optimized images

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

Private - All rights reserved.

---

**Need help?** Open an issue or contact the development team.

**Ready to deploy?** Make sure to replace all placeholder assets and update the YouTube video ID!
