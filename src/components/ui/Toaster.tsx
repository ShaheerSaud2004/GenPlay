'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { CheckCircle, XCircle, X } from 'lucide-react'

interface Toast {
  id: string
  message: string
  type: 'success' | 'error'
  duration?: number
}

interface ToasterProps {
  toasts: Toast[]
  onRemove: (id: string) => void
}

export function Toaster({ toasts, onRemove }: ToasterProps) {
  return (
    <div className="fixed bottom-4 right-4 z-50 space-y-2">
      {toasts.map((toast) => (
        <ToastItem key={toast.id} toast={toast} onRemove={onRemove} />
      ))}
    </div>
  )
}

function ToastItem({ toast, onRemove }: { toast: Toast; onRemove: (id: string) => void }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Animate in
    const timer = setTimeout(() => setIsVisible(true), 10)
    
    // Auto remove
    const removeTimer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(() => onRemove(toast.id), 300)
    }, toast.duration || 5000)

    return () => {
      clearTimeout(timer)
      clearTimeout(removeTimer)
    }
  }, [toast.id, toast.duration, onRemove])

  return (
    <div
      className={cn(
        'flex items-center gap-3 p-4 bg-card border rounded-2xl shadow-lg transition-all duration-300 min-w-80',
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full',
        toast.type === 'success' ? 'border-accent' : undefined,
        toast.type === 'error' ? 'border-red-500' : undefined
      )}
    >
      {toast.type === 'success' && (
        <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
      )}
      {toast.type === 'error' && (
        <XCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
      )}
      
      <p className="text-sm text-slate-200 flex-1">{toast.message}</p>
      
      <button
        onClick={() => {
          setIsVisible(false)
          setTimeout(() => onRemove(toast.id), 300)
        }}
        className="text-slate-400 hover:text-slate-200 flex-shrink-0"
        aria-label="Close notification"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  )
}

// Hook for managing toasts
export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([])

  const addToast = (message: string, type: 'success' | 'error', duration?: number) => {
    const id = Math.random().toString(36).substr(2, 9)
    setToasts((prev) => [...prev, { id, message, type, duration }])
  }

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id))
  }

  const success = (message: string, duration?: number) => addToast(message, 'success', duration)
  const error = (message: string, duration?: number) => addToast(message, 'error', duration)

  return {
    toasts,
    addToast,
    removeToast,
    success,
    error,
  }
}
