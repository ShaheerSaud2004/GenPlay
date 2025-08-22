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
            See GenPlay in <span className="bg-gradient-to-r from-accent to-green-400 bg-clip-text text-transparent">action</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Watch how a simple prompt becomes a fully playable game
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Video thumbnail with play button */}
          <div className="relative group cursor-pointer" onClick={onVideoOpen}>
            <div className="relative inline-block rounded-2xl overflow-hidden border border-slate-700 group-hover:border-accent/50 transition-colors">
              <Image
                src="/Thumbnail.png"
                alt="GenPlay Demo Thumbnail"
                width={1280}
                height={720}
                className="w-full h-auto rounded-2xl"
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
            
            {/* Video info */}
            <div className="mt-6 text-center">
              <Button variant="secondary" className="group">
                <Play className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo (30 seconds)
              </Button>
              
              {/* Mobile direct link */}
              <div className="mt-4 sm:hidden">
                <a 
                  href="https://www.youtube.com/watch?v=xi4QaTX_blk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent hover:text-green-400 text-sm underline transition-colors"
                >
                  View demo on YouTube
                </a>
              </div>
            </div>
          </div>

          {/* Why Choose GenPlay - Enhanced */}
          <div className="mt-24 relative">
            {/* Background elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-accent/5 rounded-3xl blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
            
            <div className="relative">
              {/* Header */}
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-6">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                  <span className="text-accent text-sm font-medium">The Future of Game Development</span>
                </div>
                <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                  Why Choose <span className="bg-gradient-to-r from-accent to-green-400 bg-clip-text text-transparent">GenPlay</span>?
                </h2>
                <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                  Transform your game development workflow with AI-powered scene generation
                </p>
              </div>
              
              {/* Benefits Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Save Time */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent via-green-400 to-emerald-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                  <div className="relative bg-slate-900/80 backdrop-blur-sm border border-slate-700 group-hover:border-accent/50 rounded-2xl p-8 text-center transition-all duration-500 group-hover:transform group-hover:-translate-y-2">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent to-green-400 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-accent/50">
                      <svg className="w-8 h-8 text-background" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">Save 100+ hours</h3>
                    <p className="text-slate-400 leading-relaxed">of development time with instant AI generation</p>
                  </div>
                </div>

                {/* No Code */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-blue-400 to-cyan-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                  <div className="relative bg-slate-900/80 backdrop-blur-sm border border-slate-700 group-hover:border-blue-400/50 rounded-2xl p-8 text-center transition-all duration-500 group-hover:transform group-hover:-translate-y-2">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-blue-500/50">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">No coding required</h3>
                    <p className="text-slate-400 leading-relaxed">Just describe your vision in plain English</p>
                  </div>
                </div>

                {/* Unity Ready */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-purple-400 to-pink-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                  <div className="relative bg-slate-900/80 backdrop-blur-sm border border-slate-700 group-hover:border-purple-400/50 rounded-2xl p-8 text-center transition-all duration-500 group-hover:transform group-hover:-translate-y-2">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-purple-500/50">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">Unity-ready scenes</h3>
                    <p className="text-slate-400 leading-relaxed">Import directly into Unity with full compatibility</p>
                  </div>
                </div>

                {/* Instant Proto */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-orange-400 to-yellow-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                  <div className="relative bg-slate-900/80 backdrop-blur-sm border border-slate-700 group-hover:border-orange-400/50 rounded-2xl p-8 text-center transition-all duration-500 group-hover:transform group-hover:-translate-y-2">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-orange-500/50">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">Instant prototyping</h3>
                    <p className="text-slate-400 leading-relaxed">From idea to playable game in seconds</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
