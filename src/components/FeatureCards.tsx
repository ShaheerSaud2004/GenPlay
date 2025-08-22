import { Clock, Gamepad2, Heart, Wand2, Globe, Puzzle } from 'lucide-react'
import { Badge } from './ui/Badge'

export function FeatureCards() {
  const features = [
    {
      icon: Clock,
      title: '60-second time-to-first-playable',
      description: 'From prompt to playing in under a minute. No complex setup, no scripting required.',
      status: 'available' as const,
    },
    {
      icon: Gamepad2,
      title: 'Platformer & Top-Down presets',
      description: 'Choose your game style and let GenPlay handle the rest. Perfect for any genre.',
      status: 'available' as const,
    },
    {
      icon: Heart,
      title: 'Health bar + Game Over overlay',
      description: 'Complete game systems out of the box. Focus on creativity, not implementation.',
      status: 'available' as const,
    },
    {
      icon: Wand2,
      title: 'Modify by prompt',
      description: 'Change your scene on the fly with natural language. "Add double jump" and it\'s done.',
      status: 'coming' as const,
    },
    {
      icon: Globe,
      title: 'Export WebGL',
      description: 'Share your creations instantly on the web. Perfect for portfolios and showcases.',
      status: 'planned' as const,
    },
    {
      icon: Puzzle,
      title: 'Unity Editor Integration',
      description: 'Seamless plugin that works directly in Unity. No external tools or complicated workflows.',
      status: 'available' as const,
    },
  ]

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Everything you need to get <span className="bg-gradient-to-r from-accent to-green-400 bg-clip-text text-transparent">started</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Powerful features designed for students, educators, and rapid prototyping
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="card group hover:scale-105 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl flex items-center justify-center group-hover:from-accent/30 group-hover:to-accent/20 transition-colors">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-semibold text-white group-hover:text-accent transition-colors">
                        {feature.title}
                      </h3>
                      {feature.status !== 'available' && (
                        <Badge
                          variant={feature.status === 'coming' ? 'secondary' : 'default'}
                          size="sm"
                          className="ml-2 flex-shrink-0"
                        >
                          {feature.status === 'coming' ? 'Soon' : 'Planned'}
                        </Badge>
                      )}
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
