'use client'

import { Modal } from './ui/Modal'

interface VideoLightboxProps {
  isOpen: boolean
  onClose: () => void
}

export function VideoLightbox({ isOpen, onClose }: VideoLightboxProps) {
  // YouTube video ID for GenPlay demo
  const YOUTUBE_VIDEO_ID = '5LNEtzQtoMw'
  
  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose}
      className="max-w-[45vw] w-full mx-4"
    >
      <div className="relative">
        {/* Video Container */}
        <div className="w-full bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl overflow-hidden border border-slate-600 shadow-2xl" style={{ aspectRatio: '16/9', minHeight: '30vh' }}>
          {/* Primary: YouTube embed */}
          <iframe
            src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0&modestbranding=1&color=white&iv_load_policy=3&fs=1`}
            title="GenPlay Demo Video"
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowFullScreen
          />
          
          {/* Fallback: Local video (uncomment and comment out iframe above to use) */}
          {/* 
          <video
            controls
            autoPlay
            className="w-full h-full"
            poster="/demo-poster.jpg"
          >
            <source src="/demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          */}
        </div>
        
        {/* Video Info - Compact */}
        <div className="mt-6 text-center">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-3 py-1.5 mb-3">
            <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></div>
            <span className="text-accent text-xs font-medium">Live Demo</span>
          </div>
          
          <h3 className="text-xl font-bold text-white mb-2 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            GenPlay Demo: From Prompt to Playable
          </h3>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto">
            Watch how a simple text prompt becomes a fully playable Unity scene in seconds.
          </p>
          
          {/* Feature highlights - Compact */}
          <div className="flex justify-center items-center gap-6 mt-4">
            <div className="flex items-center gap-1.5 text-slate-300">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
              <span className="text-xs">Instant Generation</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-300">
              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
              <span className="text-xs">Unity Compatible</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-300">
              <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
              <span className="text-xs">Fully Playable</span>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  )
}
