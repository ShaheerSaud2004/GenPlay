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
      className="max-w-4xl"
    >
      <div className="aspect-video w-full bg-black rounded-lg overflow-hidden">
        {/* Primary: YouTube embed */}
        <iframe
          src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
          title="GenPlay Demo Video"
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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
      
      <div className="mt-6 text-center">
        <h3 className="text-lg font-semibold text-white mb-2">
          GenPlay Demo: From Prompt to Playable
        </h3>
        <p className="text-slate-300 text-sm">
          Watch how a simple text prompt becomes a fully playable Unity scene in seconds.
        </p>
      </div>
    </Modal>
  )
}
