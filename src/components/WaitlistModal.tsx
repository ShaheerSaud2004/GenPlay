'use client'

import { useState } from 'react'
import { Modal } from './ui/Modal'
import { Button } from './ui/Button'
import { Mail, User, Briefcase, Gamepad2, Code, Sparkles } from 'lucide-react'
import { validateEmail } from '@/lib/utils'
import type { WaitlistFormData, ApiResponse } from '@/types'

interface WaitlistModalProps {
  isOpen: boolean
  onClose: () => void
  onSuccess: (message: string) => void
  onError: (message: string) => void
}

export function WaitlistModal({ isOpen, onClose, onSuccess, onError }: WaitlistModalProps) {
  const [formData, setFormData] = useState<WaitlistFormData>({
    email: '',
    name: '',
    role: undefined,
    engine: undefined,
    experience: undefined,
    useCase: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<Partial<WaitlistFormData>>({})

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrors({})

    // Validation
    const newErrors: Partial<WaitlistFormData> = {}
    if (!formData.email) {
      newErrors.email = 'Email is required'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsLoading(true)

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result: ApiResponse = await response.json()

      if (result.ok) {
        onSuccess('Thanks for joining! We\'ll email you when the beta is ready.')
        onClose()
        // Reset form
        setFormData({
          email: '',
          name: '',
          role: undefined,
          engine: undefined,
          experience: undefined,
          useCase: '',
        })
      } else {
        onError(result.error || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      onError('Network error. Please check your connection and try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleInputChange = (field: keyof WaitlistFormData, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="max-w-2xl">
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/20 rounded-2xl mb-4">
          <Sparkles className="h-8 w-8 text-accent" />
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">Join the Beta</h2>
        <p className="text-slate-300 text-sm">
          We&apos;ll only email about the beta. Unsubscribe anytime.
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-5">

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-200 mb-3">
            Email Address *
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-200"
              placeholder="your@email.com"
              required
            />
          </div>
          {errors.email && (
            <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
              <span className="w-1 h-1 bg-red-400 rounded-full"></span>
              {errors.email}
            </p>
          )}
        </div>

        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-200 mb-3">
            Name
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <User className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-200"
              placeholder="Your name"
            />
          </div>
        </div>

        {/* Role */}
        <div>
          <label htmlFor="role" className="block text-sm font-medium text-slate-200 mb-3">
            Role
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Briefcase className="h-5 w-5 text-slate-400" />
            </div>
            <select
              id="role"
              value={formData.role || ''}
              onChange={(e) => handleInputChange('role', e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600 rounded-xl text-white focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-200 appearance-none cursor-pointer"
            >
              <option value="">Select your role</option>
              <option value="student">Student</option>
              <option value="educator">Educator</option>
              <option value="indie">Indie Developer</option>
              <option value="other">Other</option>
            </select>
            <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Engine */}
        <div>
          <label htmlFor="engine" className="block text-sm font-medium text-slate-200 mb-3">
            Game Engine
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Gamepad2 className="h-5 w-5 text-slate-400" />
            </div>
            <select
              id="engine"
              value={formData.engine || ''}
              onChange={(e) => handleInputChange('engine', e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600 rounded-xl text-white focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-200 appearance-none cursor-pointer"
            >
              <option value="">Select your preferred engine</option>
              <option value="Unity">Unity</option>
              <option value="Godot">Godot</option>
              <option value="Both">Both</option>
            </select>
            <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div>
          <label htmlFor="experience" className="block text-sm font-medium text-slate-200 mb-3">
            Game Development Experience (0-10)
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Code className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="number"
              id="experience"
              min="0"
              max="10"
              value={formData.experience || ''}
              onChange={(e) => handleInputChange('experience', parseInt(e.target.value) || 0)}
              className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-200"
              placeholder="0 = Beginner, 10 = Expert"
            />
          </div>
        </div>

        {/* Use Case */}
        <div>
          <label htmlFor="useCase" className="block text-sm font-medium text-slate-200 mb-3">
            What would you use GenPlay for?
          </label>
          <textarea
            id="useCase"
            value={formData.useCase}
            onChange={(e) => handleInputChange('useCase', e.target.value)}
            rows={4}
            className="w-full px-4 py-4 bg-slate-800/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-200 resize-none"
            placeholder="e.g., Teaching game design, rapid prototyping, game jams..."
          />
        </div>

        <div className="pt-4">
          <Button
            type="submit"
            loading={isLoading}
            size="lg"
            className="w-full bg-gradient-to-r from-accent to-green-400 hover:from-green-400 hover:to-emerald-400 text-background font-bold tracking-wide shadow-2xl hover:shadow-accent/40 transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 border-2 border-accent/50 hover:border-green-400/50"
            disabled={isLoading}
          >
            <div className="flex items-center justify-center gap-2">
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-background/30 border-t-background rounded-full animate-spin"></div>
                  <span>Joining...</span>
                </>
              ) : (
                <>
                  <span className="text-xl">🚀</span>
                  <span>Join the Beta</span>
                </>
              )}
            </div>
          </Button>
          <p className="text-center text-slate-400 text-xs mt-3">
            Free • No spam • Unsubscribe anytime
          </p>
        </div>
      </form>
    </Modal>
  )
}
