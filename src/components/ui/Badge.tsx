'use client'

import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'accent' | 'secondary'
  size?: 'sm' | 'md'
  className?: string
}

export function Badge({ 
  children, 
  variant = 'default', 
  size = 'sm',
  className 
}: BadgeProps) {
  const sizeClasses = size === 'sm' ? 'px-2 py-1 text-xs' : 'px-3 py-1.5 text-sm'
  
  const variantClasses = {
    default: 'bg-slate-800 text-slate-300',
    accent: 'bg-accent text-background',
    secondary: 'bg-accent-2/20 text-accent-2'
  }[variant]

  return (
    <span
      className={cn(
        'inline-flex items-center font-medium rounded-full',
        sizeClasses,
        variantClasses,
        className
      )}
    >
      {children}
    </span>
  )
}
