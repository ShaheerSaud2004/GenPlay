import { Button } from './ui/Button'
import { Sparkles } from 'lucide-react'

interface CTASectionProps {
  onWaitlistOpen: () => void
}

export function CTASection({ onWaitlistOpen }: CTASectionProps) {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 border border-accent/30 rounded-full text-accent font-medium text-sm">
              <Sparkles className="h-4 w-4" />
              Limited Beta Access
            </div>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to turn <span className="bg-gradient-to-r from-accent to-green-400 bg-clip-text text-transparent">ideas into games</span>?
          </h2>
          
          <p className="text-xl text-slate-300 mb-10 leading-relaxed">
            Join hundreds of students, educators, and developers who are already 
            using GenPlay to bring their game ideas to life in seconds.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button 
              onClick={onWaitlistOpen} 
              size="lg" 
              className="text-lg px-10 py-4 bg-accent hover:bg-green-400 text-background font-semibold shadow-2xl hover:shadow-accent/30 transform hover:scale-105 transition-all duration-300 border-2 border-accent hover:border-green-400"
            >
              🚀 Get Early Access
            </Button>
            <p className="text-sm text-slate-400">
              Free • No spam • Unsubscribe anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
