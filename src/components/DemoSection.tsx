import { Play } from 'lucide-react'
import { Button } from './ui/Button'
import Image from 'next/image'

interface DemoSectionProps {
  onVideoOpen: () => void
}

export function DemoSection({ onVideoOpen }: DemoSectionProps) {
  return (
    <section id="demo" className="py-24 scroll-mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            See GenPlay in action
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Watch how a simple prompt becomes a fully playable game
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Video thumbnail with play button */}
          <div className="relative group cursor-pointer" onClick={onVideoOpen}>
            <div className="aspect-video w-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden border border-slate-700 group-hover:border-accent/50 transition-colors">
              {/* Placeholder thumbnail - replace with actual video thumbnail */}
              <div className="relative w-full h-full bg-slate-900 rounded-2xl overflow-hidden">
                <Image
                  src="/Thumbnail.png"
                  alt="GenPlay Demo Thumbnail"
                  fill
                  className="object-contain"
                  priority
                  quality={100}
                  unoptimized
                />
                
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                  <div className="w-20 h-20 bg-accent hover:bg-green-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                    <Play className="h-8 w-8 text-background fill-current ml-1" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Video info */}
            <div className="mt-6 text-center">
              <Button variant="secondary" className="group">
                <Play className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo (30 seconds)
              </Button>
            </div>
          </div>

          {/* Demo highlights */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-accent font-bold text-sm">1</span>
              </div>
              <h3 className="font-semibold text-white mb-2">Text Input</h3>
              <p className="text-slate-300 text-sm">
                Simple English prompt describing the game scene
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-accent font-bold text-sm">2</span>
              </div>
              <h3 className="font-semibold text-white mb-2">Generation</h3>
              <p className="text-slate-300 text-sm">
                GenPlay creates the complete scene in Unity
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-accent font-bold text-sm">3</span>
              </div>
              <h3 className="font-semibold text-white mb-2">Play</h3>
              <p className="text-slate-300 text-sm">
                Fully functional game with movement and mechanics
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
