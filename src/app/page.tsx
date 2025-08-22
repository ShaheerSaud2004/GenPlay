'use client'

import { useState } from 'react'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { DemoSection } from '@/components/DemoSection'
import { Steps } from '@/components/Steps'
import { FeatureCards } from '@/components/FeatureCards'
import { CTASection } from '@/components/CTASection'
import { Footer } from '@/components/Footer'
import { VideoLightbox } from '@/components/VideoLightbox'
import { WaitlistModal } from '@/components/WaitlistModal'
import { Toaster, useToast } from '@/components/ui/Toaster'

export default function HomePage() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false)
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const { toasts, removeToast, success, error } = useToast()

  return (
    <main className="min-h-screen bg-background text-white relative overflow-hidden">
      {/* Unified Background Layers */}
      <div className="fixed inset-0 bg-gradient-to-br from-background via-slate-900 to-slate-800" />
      <div className="fixed inset-0 grid-bg opacity-20" />
      <div className="fixed inset-0 noise-bg opacity-50" />
      
      {/* Animated Gradient Mesh */}
      <div className="fixed inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent/5 via-transparent to-accent-2/5 animate-pulse-slow" />
        <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-gradient-to-bl from-green-400/10 via-transparent to-transparent animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-gradient-to-tr from-blue-400/8 via-transparent to-transparent animate-pulse-slow" style={{ animationDelay: '4s' }} />
      </div>
      
      {/* Enhanced Gradient Orbs */}
      <div className="fixed top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-accent/25 to-green-400/25 rounded-full blur-3xl animate-drift" />
      <div className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-accent-2/20 to-blue-400/20 rounded-full blur-3xl animate-drift-reverse" style={{ animationDelay: '2s' }} />
      
      {/* Floating Particles */}
      <div className="fixed inset-0">
        {/* Large floating orbs */}
        <div className="absolute top-[20%] left-[10%] w-4 h-4 bg-accent/30 rounded-full animate-float" />
        <div className="absolute top-[60%] left-[15%] w-2 h-2 bg-accent-2/40 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-[30%] right-[20%] w-3 h-3 bg-green-400/25 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-[40%] right-[10%] w-5 h-5 bg-blue-400/20 rounded-full animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-[70%] left-[70%] w-2 h-2 bg-accent/35 rounded-full animate-float" style={{ animationDelay: '4s' }} />
        <div className="absolute top-[15%] right-[40%] w-3 h-3 bg-purple-400/25 rounded-full animate-float" style={{ animationDelay: '5s' }} />
      </div>
      
      {/* Geometric Patterns */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/2 w-32 h-32 border border-accent/20 rotate-45 animate-spin-slow" />
        <div className="absolute bottom-1/3 left-1/4 w-24 h-24 border border-accent-2/20 rotate-12 animate-pulse-slow" />
        <div className="absolute top-1/3 right-1/4 w-16 h-16 border-2 border-green-400/15 rounded-full animate-ping-slow" />
      </div>

      <div className="relative z-10">
        <Header onWaitlistOpen={() => setIsWaitlistOpen(true)} />
      
      <Hero
        onWaitlistOpen={() => setIsWaitlistOpen(true)}
        onVideoOpen={() => setIsVideoOpen(true)}
      />
      
      <DemoSection onVideoOpen={() => setIsVideoOpen(true)} />
      
      <Steps />
      
      <FeatureCards />
      
      <CTASection onWaitlistOpen={() => setIsWaitlistOpen(true)} />
      
        <Footer />
      </div>

      {/* Modals */}
      <VideoLightbox
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
      />
      
      <WaitlistModal
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
        onSuccess={success}
        onError={error}
      />

      {/* Toast notifications */}
      <Toaster toasts={toasts} onRemove={removeToast} />
    </main>
  )
}
