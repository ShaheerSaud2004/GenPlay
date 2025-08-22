'use client'

import { useState } from 'react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { WaitlistModal } from '@/components/WaitlistModal'
import { Toaster, useToast } from '@/components/ui/Toaster'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Check, Clock, Zap, Calendar, Users, Sparkles, ChevronRight, CheckCircle2, ArrowRight } from 'lucide-react'

export default function RoadmapPage() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false)
  const { toasts, removeToast, success, error } = useToast()

  const roadmapPhases = [
    {
      id: 'current',
      title: 'In Development',
      period: 'Now',
      status: 'in-progress' as const,
      icon: Zap,
      color: 'accent',
      description: 'Building the foundation for revolutionary game creation',
      features: [
        'Unity editor plugin development',
        'Core prompt processing system',
        'Basic scene generation framework',
        'Alpha testing with early users',
        'Documentation and setup guides',
      ],
      progress: 75
    },
    {
      id: 'mvp',
      title: 'MVP Launch',
      period: 'Next 4-6 Weeks',
      status: 'planned' as const,
      icon: CheckCircle2,
      color: 'blue',
      description: 'First playable version with core features',
      features: [
        'Prompt → auto-generate Unity scene (platformer/top-down)',
        'Player movement, jump, camera controls',
        'Enemy AI with damage-on-contact',
        'Health bar & Game Over overlay with Restart',
        'One-click scene bootstrap',
      ],
      progress: 0
    },
    {
      id: 'enhanced',
      title: 'Enhanced Features',
      period: '2-3 Months',
      status: 'planned' as const,
      icon: Sparkles,
      color: 'purple',
      description: 'Advanced tools for creators and educators',
      features: [
        'Asset templates (coins, platforms, enemies, HUD packs)',
        'Save/load project templates',
        'Multiplayer-ready starter scenes',
        'In-editor "Prompt Console" for live tweaking',
        'Classroom mode with lesson scripts',
      ],
      progress: 0
    },
    {
      id: 'advanced',
      title: 'Advanced Platform',
      period: '6+ Months',
      status: 'future' as const,
      icon: Calendar,
      color: 'emerald',
      description: 'Cross-platform support and AI-powered features',
      features: [
        'Godot & Unreal Engine support',
        'Asset marketplace integration',
        'AI-assisted level design',
        '3D scene generation (FPS, third-person)',
        'Cloud sync + web editor version',
      ],
      progress: 0
    }
  ]

  return (
    <main className="min-h-screen bg-background text-white relative overflow-hidden">
      {/* Unified Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-background via-slate-900 to-slate-800" />
      <div className="fixed inset-0 grid-bg opacity-20" />
      <div className="fixed inset-0 noise-bg opacity-50" />
      
      {/* Animated Gradient Mesh */}
      <div className="fixed inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent/5 via-transparent to-accent-2/5 animate-pulse-slow" />
        <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-gradient-to-bl from-green-400/10 via-transparent to-transparent animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-gradient-to-tr from-blue-400/8 via-transparent to-transparent animate-pulse-slow" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative z-10">
        <Header onWaitlistOpen={() => setIsWaitlistOpen(true)} />
        
        {/* Hero section */}
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-accent/10 border border-accent/20 rounded-full backdrop-blur-sm">
                <Sparkles className="h-5 w-5 text-accent" />
                <span className="text-accent font-semibold">Product Roadmap</span>
              </div>
              
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
                  The Future of
                </span>
                <br />
                <span className="bg-gradient-to-r from-accent via-green-400 to-emerald-400 bg-clip-text text-transparent">
                  Game Creation
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                From prompt to playable game in seconds. Here's how we're revolutionizing 
                game development for everyone.
              </p>
            </div>
          </div>
        </section>

        {/* Modern Horizontal Roadmap Timeline */}
        <section className="pb-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              {/* Desktop Horizontal View */}
              <div className="hidden lg:block">
                <div className="relative">
                  {/* Icons with Arrows */}
                  <div className="flex items-center justify-center mb-12 gap-4">
                    {roadmapPhases.map((phase, index) => {
                      const Icon = phase.icon
                      const statusConfig = {
                        completed: { iconBg: 'bg-green-500', iconColor: 'text-white', borderColor: 'border-green-500/50' },
                        'in-progress': { iconBg: 'bg-accent', iconColor: 'text-background', borderColor: 'border-accent/50' },
                        planned: { iconBg: 'bg-blue-500', iconColor: 'text-white', borderColor: 'border-blue-500/50' },
                        future: { iconBg: 'bg-slate-600', iconColor: 'text-slate-200', borderColor: 'border-slate-500/50' }
                      }
                      const config = statusConfig[phase.status]
                      
                      return (
                        <div key={phase.id} className="flex items-center">
                          {/* Icon */}
                          <div className="animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                            <div className={`w-16 h-16 rounded-3xl ${config.iconBg} border-2 ${config.borderColor} flex items-center justify-center shadow-xl relative overflow-hidden backdrop-blur-sm`}>
                              <Icon className={`h-8 w-8 ${config.iconColor}`} strokeWidth={2} />
                              {phase.status === 'in-progress' && (
                                <div className={`absolute inset-0 ${config.iconBg} animate-ping opacity-30 rounded-3xl`}></div>
                              )}
                            </div>
                          </div>
                          
                          {/* Arrow (except for last item) */}
                          {index < roadmapPhases.length - 1 && (
                            <div className="mx-8 animate-slide-up" style={{ animationDelay: `${index * 0.2 + 0.1}s` }}>
                              <ArrowRight 
                                className={`h-8 w-8 ${
                                  phase.status === 'completed' || phase.status === 'in-progress' 
                                    ? 'text-accent' 
                                    : 'text-slate-600'
                                } transition-colors duration-500`}
                                strokeWidth={2}
                              />
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                  
                  {/* Cards Below Timeline */}
                  <div className="grid grid-cols-4 gap-8 mt-12">
                    {roadmapPhases.map((phase, index) => (
                      <HorizontalRoadmapCard 
                        key={phase.id} 
                        phase={phase} 
                        index={index}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile Vertical View */}
              <div className="lg:hidden space-y-12">
                {roadmapPhases.map((phase, index) => (
                  <RoadmapPhase 
                    key={phase.id} 
                    phase={phase} 
                    index={index}
                    isLast={index === roadmapPhases.length - 1}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="pb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-accent-2/20 to-accent/20 rounded-3xl blur-xl"></div>
                <div className="relative bg-gradient-to-r from-accent/10 via-accent-2/10 to-accent/10 border border-accent/30 rounded-3xl p-12 text-center backdrop-blur-sm">
                  <div className="mb-8">
                    <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-accent/20 border border-accent/40 rounded-full">
                      <Users className="h-5 w-5 text-accent" />
                      <span className="text-accent font-semibold">Shape the Future</span>
                    </div>
                    
                    <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
                      Your Voice Matters in Our Journey
                    </h3>
                    
                    <p className="text-xl text-slate-300 leading-relaxed mb-8">
                      Join our beta community and help us prioritize features. 
                      Every piece of feedback shapes what we build next.
                    </p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button
                      onClick={() => setIsWaitlistOpen(true)}
                      size="lg"
                      className="text-lg px-10 py-4 bg-accent hover:bg-green-400 shadow-lg hover:shadow-accent/25 transition-all duration-300"
                    >
                      Join Beta Community
                    </Button>
                    <p className="text-sm text-slate-400">
                      Free • No spam • Unsubscribe anytime
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>

      <WaitlistModal
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
        onSuccess={success}
        onError={error}
      />

      <Toaster toasts={toasts} onRemove={removeToast} />
    </main>
  )
}

// Modern Roadmap Phase Component
interface RoadmapPhaseProps {
  phase: {
    id: string
    title: string
    period: string
    status: 'completed' | 'in-progress' | 'planned' | 'future'
    icon: any
    color: string
    description: string
    features: string[]
    progress: number
  }
  index: number
  isLast: boolean
}

// Horizontal Roadmap Card Component for Desktop (without icon)
interface HorizontalRoadmapCardProps {
  phase: {
    id: string
    title: string
    period: string
    status: 'completed' | 'in-progress' | 'planned' | 'future'
    icon: any
    color: string
    description: string
    features: string[]
    progress: number
  }
  index: number
}

function HorizontalRoadmapCard({ phase, index }: HorizontalRoadmapCardProps) {
  const { title, period, status, description, features, progress } = phase

  const statusConfig = {
    completed: {
      bgGradient: 'from-green-500/20 to-emerald-500/20',
      borderColor: 'border-green-500/50',
      progressColor: 'bg-green-500',
      badgeVariant: 'accent' as const,
    },
    'in-progress': {
      bgGradient: 'from-accent/20 to-green-400/20',
      borderColor: 'border-accent/50',
      progressColor: 'bg-accent',
      badgeVariant: 'accent' as const,
    },
    planned: {
      bgGradient: 'from-blue-500/20 to-blue-400/20',
      borderColor: 'border-blue-500/50',
      progressColor: 'bg-blue-500',
      badgeVariant: 'secondary' as const,
    },
    future: {
      bgGradient: 'from-slate-600/20 to-slate-500/20',
      borderColor: 'border-slate-500/50',
      progressColor: 'bg-slate-600',
      badgeVariant: 'default' as const,
    }
  }

  const config = statusConfig[status]

  return (
    <div className="group animate-slide-up" style={{ animationDelay: `${index * 0.2 + 0.1}s` }}>
      <div className={`bg-gradient-to-br ${config.bgGradient} border ${config.borderColor} rounded-3xl p-6 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 min-h-[420px] flex flex-col`}>
        {/* Header */}
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <Badge variant={config.badgeVariant} className="text-xs mb-3">
            {period}
          </Badge>
          <p className="text-slate-300 text-sm leading-relaxed">{description}</p>
          
          {/* Progress Indicator */}
          {status === 'in-progress' && progress > 0 && (
            <div className="mt-4">
              <div className="text-center mb-2">
                <span className="text-xs font-medium text-slate-300">{progress}% Complete</span>
              </div>
              <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                <div 
                  className={`h-full ${config.progressColor} rounded-full transition-all duration-1000 ease-out`}
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          )}
        </div>
        
        {/* Features List */}
        <div className="flex-1 space-y-3">
          {features.slice(0, 4).map((feature, featureIndex) => (
            <div 
              key={featureIndex} 
              className="flex items-start gap-3 p-3 bg-slate-900/50 rounded-xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300"
            >
              <div className="flex-shrink-0 mt-1">
                {status === 'completed' ? (
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                ) : status === 'in-progress' ? (
                  <Clock className="h-4 w-4 text-accent" />
                ) : (
                  <ChevronRight className="h-4 w-4 text-slate-400" />
                )}
              </div>
              <span className="text-slate-200 text-sm leading-relaxed">{feature}</span>
            </div>
          ))}
          {features.length > 4 && (
            <div className="text-center pt-2">
              <span className="text-slate-400 text-xs font-medium">
                +{features.length - 4} more features
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// Original Horizontal Roadmap Phase Component for Desktop
interface HorizontalRoadmapPhaseProps {
  phase: {
    id: string
    title: string
    period: string
    status: 'completed' | 'in-progress' | 'planned' | 'future'
    icon: any
    color: string
    description: string
    features: string[]
    progress: number
  }
  index: number
}

function HorizontalRoadmapPhase({ phase, index }: HorizontalRoadmapPhaseProps) {
  const { title, period, status, icon: Icon, description, features, progress } = phase

  const statusConfig = {
    completed: {
      bgGradient: 'from-green-500/20 to-emerald-500/20',
      borderColor: 'border-green-500/50',
      iconBg: 'bg-green-500',
      iconColor: 'text-white',
      progressColor: 'bg-green-500',
      badgeVariant: 'accent' as const,
    },
    'in-progress': {
      bgGradient: 'from-accent/20 to-green-400/20',
      borderColor: 'border-accent/50',
      iconBg: 'bg-accent',
      iconColor: 'text-background',
      progressColor: 'bg-accent',
      badgeVariant: 'accent' as const,
    },
    planned: {
      bgGradient: 'from-blue-500/20 to-blue-400/20',
      borderColor: 'border-blue-500/50',
      iconBg: 'bg-blue-500',
      iconColor: 'text-white',
      progressColor: 'bg-blue-500',
      badgeVariant: 'secondary' as const,
    },
    future: {
      bgGradient: 'from-slate-600/20 to-slate-500/20',
      borderColor: 'border-slate-500/50',
      iconBg: 'bg-slate-600',
      iconColor: 'text-slate-200',
      progressColor: 'bg-slate-600',
      badgeVariant: 'default' as const,
    }
  }

  const config = statusConfig[status]

  return (
    <div className="relative animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
      {/* Timeline Marker */}
      <div className="relative z-10 flex justify-center mb-8">
        <div className={`w-16 h-16 rounded-3xl ${config.iconBg} border-2 ${config.borderColor} flex items-center justify-center shadow-xl relative overflow-hidden backdrop-blur-sm`}>
          <Icon className={`h-8 w-8 ${config.iconColor}`} strokeWidth={2} />
          {status === 'in-progress' && (
            <div className={`absolute inset-0 ${config.iconBg} animate-ping opacity-30 rounded-3xl`}></div>
          )}
        </div>
      </div>
      
      {/* Content Card */}
      <div className="group">
        <div className={`bg-gradient-to-br ${config.bgGradient} border ${config.borderColor} rounded-3xl p-6 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 min-h-[480px] flex flex-col`}>
          {/* Header */}
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <Badge variant={config.badgeVariant} className="text-xs mb-3">
              {period}
            </Badge>
            <p className="text-slate-300 text-sm leading-relaxed">{description}</p>
            
            {/* Progress Indicator */}
            {status === 'in-progress' && progress > 0 && (
              <div className="mt-4">
                <div className="text-center mb-2">
                  <span className="text-xs font-medium text-slate-300">{progress}% Complete</span>
                </div>
                <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${config.progressColor} rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>
            )}
          </div>
          
          {/* Features List */}
          <div className="flex-1 space-y-3">
            {features.slice(0, 4).map((feature, featureIndex) => (
              <div 
                key={featureIndex} 
                className="flex items-start gap-3 p-3 bg-slate-900/50 rounded-xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300"
              >
                <div className="flex-shrink-0 mt-1">
                  {status === 'completed' ? (
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                  ) : status === 'in-progress' ? (
                    <Clock className="h-4 w-4 text-accent" />
                  ) : (
                    <ChevronRight className="h-4 w-4 text-slate-400" />
                  )}
                </div>
                <span className="text-slate-200 text-sm leading-relaxed">{feature}</span>
              </div>
            ))}
            {features.length > 4 && (
              <div className="text-center pt-2">
                <span className="text-slate-400 text-xs font-medium">
                  +{features.length - 4} more features
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function RoadmapPhase({ phase, index, isLast }: RoadmapPhaseProps) {
  const { title, period, status, icon: Icon, color, description, features, progress } = phase

  const statusConfig = {
    completed: {
      bgGradient: 'from-green-500/20 to-emerald-500/20',
      borderColor: 'border-green-500/50',
      iconBg: 'bg-green-500',
      iconColor: 'text-white',
      progressColor: 'bg-green-500',
      badgeVariant: 'accent' as const,
      timelineColor: 'bg-green-500'
    },
    'in-progress': {
      bgGradient: 'from-accent/20 to-green-400/20',
      borderColor: 'border-accent/50',
      iconBg: 'bg-accent',
      iconColor: 'text-background',
      progressColor: 'bg-accent',
      badgeVariant: 'accent' as const,
      timelineColor: 'bg-accent'
    },
    planned: {
      bgGradient: 'from-blue-500/20 to-blue-400/20',
      borderColor: 'border-blue-500/50',
      iconBg: 'bg-blue-500',
      iconColor: 'text-white',
      progressColor: 'bg-blue-500',
      badgeVariant: 'secondary' as const,
      timelineColor: 'bg-blue-500'
    },
    future: {
      bgGradient: 'from-slate-600/20 to-slate-500/20',
      borderColor: 'border-slate-500/50',
      iconBg: 'bg-slate-600',
      iconColor: 'text-slate-200',
      progressColor: 'bg-slate-600',
      badgeVariant: 'default' as const,
      timelineColor: 'bg-slate-600'
    }
  }

  const config = statusConfig[status]

  return (
    <div className="relative animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
      {/* Timeline Line */}
      {!isLast && (
        <div className="absolute left-6 top-16 w-0.5 h-full bg-slate-700 z-0">
          <div className={`w-full h-16 ${config.timelineColor} opacity-50`}></div>
        </div>
      )}
      
      <div className="flex gap-8 items-start relative z-10">
        {/* Icon & Timeline Marker */}
        <div className="flex-shrink-0 relative">
          <div className={`w-12 h-12 rounded-2xl ${config.iconBg} border-2 ${config.borderColor} flex items-center justify-center shadow-xl relative overflow-hidden backdrop-blur-sm`}>
            <Icon className={`h-6 w-6 ${config.iconColor}`} strokeWidth={2} />
            {status === 'in-progress' && (
              <div className={`absolute inset-0 ${config.iconBg} animate-ping opacity-30 rounded-2xl`}></div>
            )}
          </div>
        </div>
        
        {/* Content Card */}
        <div className="flex-1 group">
          <div className={`bg-gradient-to-br ${config.bgGradient} border ${config.borderColor} rounded-3xl p-8 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]`}>
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-2xl font-bold text-white">{title}</h3>
                  <Badge variant={config.badgeVariant} className="text-sm">
                    {period}
                  </Badge>
                </div>
                <p className="text-slate-300 text-lg leading-relaxed">{description}</p>
              </div>
              
              {/* Progress Indicator */}
              {status === 'in-progress' && progress > 0 && (
                <div className="flex-shrink-0">
                  <div className="text-right mb-2">
                    <span className="text-sm font-medium text-slate-300">{progress}% Complete</span>
                  </div>
                  <div className="w-24 h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${config.progressColor} rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Features Grid */}
            <div className="grid gap-4">
              {features.map((feature, featureIndex) => (
                <div 
                  key={featureIndex} 
                  className="flex items-start gap-4 p-4 bg-slate-900/50 rounded-2xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:bg-slate-900/70"
                >
                  <div className="flex-shrink-0 mt-1">
                    {status === 'completed' ? (
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                    ) : status === 'in-progress' ? (
                      <Clock className="h-5 w-5 text-accent" />
                    ) : (
                      <ChevronRight className="h-5 w-5 text-slate-400" />
                    )}
                  </div>
                  <span className="text-slate-200 leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
