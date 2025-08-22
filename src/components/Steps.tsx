import { Edit3, Zap, Play, ArrowRight } from 'lucide-react'

export function Steps() {
  const steps = [
    {
      icon: Edit3,
      title: 'Type a prompt',
      description: 'e.g., "2D platformer with a player and an enemy"',
      number: '01',
    },
    {
      icon: Zap,
      title: 'Click Generate',
      description: 'in the Unity editor',
      number: '02',
    },
    {
      icon: Play,
      title: 'Press Play',
      description: 'move, collide, health drops, Game Over screen',
      number: '03',
    },
  ]

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            How it <span className="bg-gradient-to-r from-accent to-green-400 bg-clip-text text-transparent">works</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            From idea to playable game in three simple steps
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto gap-8 md:gap-4">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="flex items-center">
                {/* Step Card */}
                <div className="text-center group animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="bg-card border border-slate-700 rounded-3xl p-8 group-hover:border-slate-600 transition-all duration-300 shadow-xl group-hover:shadow-2xl group-hover:scale-105 flex flex-col items-center justify-center min-h-[300px] w-[280px]">
                    {/* Icon container */}
                    <div className="mb-6 w-20 h-20 bg-accent rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg">
                      <Icon className="h-10 w-10 text-background" strokeWidth={1.5} />
                    </div>
                    
                    {/* Text content */}
                    <div className="text-center">
                      <h3 className="text-2xl font-semibold text-white mb-4">
                        {step.title}
                      </h3>
                      <p className="text-slate-300 leading-relaxed text-base">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden md:flex items-center justify-center mx-6">
                    <ArrowRight className="h-8 w-8 text-accent animate-pulse" strokeWidth={2} />
                  </div>
                )}

                {/* Mobile Arrow (below cards) */}
                {index < steps.length - 1 && (
                  <div className="md:hidden flex items-center justify-center my-4 rotate-90">
                    <ArrowRight className="h-8 w-8 text-accent animate-pulse" strokeWidth={2} />
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
