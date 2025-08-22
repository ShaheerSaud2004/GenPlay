import Link from 'next/link'
import Image from 'next/image'
import { Play } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-800 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-12">
        {/* Mobile Layout - Compact horizontal */}
        <div className="block sm:hidden">
          <div className="flex flex-col space-y-4">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 justify-center">
              <div className="relative w-6 h-6">
                <Image
                  src="/genplay-logo.png"
                  alt="GenPlay Logo"
                  width={24}
                  height={24}
                  className="rounded-lg"
                />
              </div>
              <span className="text-lg font-bold text-white">GenPlay</span>
            </Link>
            
            {/* Horizontal Links */}
            <div className="flex justify-center items-center space-x-6 text-sm">
              <Link href="#demo" className="text-slate-400 hover:text-accent transition-colors">
                Demo
              </Link>
              <Link href="/roadmap" className="text-slate-400 hover:text-accent transition-colors">
                Roadmap
              </Link>
              <Link href="/privacy" className="text-slate-400 hover:text-accent transition-colors">
                Privacy
              </Link>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden sm:grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="col-span-2">
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
            <p className="text-slate-400 text-sm max-w-md leading-relaxed">
              Turn plain English into playable Unity scenes. Perfect for students, 
              educators, and rapid prototyping.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-medium mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#demo" className="text-slate-400 hover:text-accent transition-colors text-sm">
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

        <div className="mt-4 sm:mt-8 pt-3 sm:pt-8 border-t border-slate-800 flex justify-center items-center">
          <p className="text-slate-400 text-xs sm:text-sm">
            © {currentYear} GenPlay<span className="hidden sm:inline">. Built by Shaheer</span>.
          </p>
        </div>
      </div>
    </footer>
  )
}
