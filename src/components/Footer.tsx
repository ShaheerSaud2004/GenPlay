import Link from 'next/link'
import Image from 'next/image'
import { Github, Twitter, Play } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-800 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <div className="relative w-8 h-8">
                <Image
                  src="/genplay-logo.png"
                  alt="GenPlay Logo"
                  width={32}
                  height={32}
                  className="rounded-lg"
                />
              </div>
              <span className="text-xl font-bold text-white">GenPlay</span>
            </Link>
            <p className="text-slate-400 text-sm max-w-md">
              Turn plain English into playable Unity scenes. Perfect for students, 
              educators, and rapid prototyping.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-medium mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/demo" className="text-slate-400 hover:text-accent transition-colors text-sm">
                  Demo
                </Link>
              </li>
              <li>
                <Link href="/roadmap" className="text-slate-400 hover:text-accent transition-colors text-sm">
                  Roadmap
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-medium mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-slate-400 hover:text-accent transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © {currentYear} GenPlay. Built by Shaheer.
          </p>
          
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <a
              href="https://twitter.com/genplay"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-accent transition-colors"
              aria-label="Follow on Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/genplay"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-accent transition-colors"
              aria-label="View on GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
