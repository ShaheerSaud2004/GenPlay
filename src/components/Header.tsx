'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter, usePathname } from 'next/navigation'
import { Menu, X, Play } from 'lucide-react'
import { Button } from './ui/Button'
import { cn } from '@/lib/utils'

interface HeaderProps {
  onWaitlistOpen: () => void
}

export function Header({ onWaitlistOpen }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  const navigation = [
    { name: 'Demo', href: '#demo', isScrollLink: true },
    { name: 'Roadmap', href: '/roadmap', isScrollLink: false },
  ]

  const handleDemoClick = (e: React.MouseEvent) => {
    e.preventDefault()
    
    // If we're already on the home page, just scroll to demo
    if (pathname === '/') {
      const element = document.querySelector('#demo')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      // If we're on another page, navigate to home and then scroll to demo
      router.push('/')
      // Small delay to ensure page loads before scrolling
      setTimeout(() => {
        const element = document.querySelector('#demo')
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-8 h-8 group-hover:scale-110 transition-transform duration-200">
              <Image
                src="/genplay-logo.png"
                alt="GenPlay Logo"
                width={32}
                height={32}
                className="rounded-lg"
                priority
              />
            </div>
            <span className="text-xl font-bold text-white group-hover:text-accent transition-colors">GenPlay</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              item.isScrollLink ? (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-slate-300 hover:text-accent transition-colors font-medium cursor-pointer"
                  onClick={handleDemoClick}
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-slate-300 hover:text-accent transition-colors font-medium"
                >
                  {item.name}
                </Link>
              )
            ))}
            <Button 
              onClick={onWaitlistOpen} 
              size="md"
              className="px-6 py-2 bg-accent hover:bg-green-400 text-background font-medium min-w-[120px]"
            >
              Join Beta
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 text-slate-400 hover:text-white focus-ring"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            'md:hidden overflow-hidden transition-all duration-200 ease-in-out',
            isMenuOpen ? 'max-h-48 pb-4' : 'max-h-0'
          )}
        >
          <nav className="flex flex-col space-y-4 pt-4 border-t border-slate-800">
            {navigation.map((item) => (
              item.isScrollLink ? (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-slate-300 hover:text-accent transition-colors font-medium cursor-pointer"
                  onClick={(e) => {
                    setIsMenuOpen(false)
                    handleDemoClick(e)
                  }}
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-slate-300 hover:text-accent transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            ))}
            <Button 
              onClick={onWaitlistOpen} 
              size="md" 
              className="self-start px-6 py-2 bg-accent hover:bg-green-400 text-background font-medium min-w-[120px]"
            >
              Join Beta
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
