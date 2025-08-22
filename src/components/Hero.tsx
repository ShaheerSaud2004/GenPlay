'use client'

import { Play, Sparkles } from 'lucide-react'
import { Button } from './ui/Button'
import { Badge } from './ui/Badge'

interface HeroProps {
  onWaitlistOpen?: () => void
  onVideoOpen?: () => void
}

export function Hero({ onWaitlistOpen, onVideoOpen }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Beta Badge */}
        <div className="mb-8 animate-fade-in">
          <Badge variant="accent" className="inline-flex items-center gap-2">
            <Sparkles className="h-3 w-3" />
            Beta Available Soon
          </Badge>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
          <span className="bg-gradient-to-r from-white via-slate-200 to-slate-300 bg-clip-text text-transparent">
            From prompt to playable—
          </span>
          <br />
          <span className="bg-gradient-to-r from-accent to-green-300 bg-clip-text text-transparent">
            in seconds.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl text-slate-300 max-w-3xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          GenPlay turns plain English into a playable Unity scene. 
          Great for students, designers, and rapid prototyping.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <Button onClick={onWaitlistOpen || (() => {})} size="lg" className="text-lg px-8 py-4">
            Join the Beta
          </Button>
          <Button 
            onClick={onVideoOpen || (() => {})} 
            variant="secondary" 
            size="lg" 
            className="text-lg px-8 py-4 group"
          >
            <Play className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
            Watch 30-sec Demo
          </Button>
        </div>


      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-600 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
