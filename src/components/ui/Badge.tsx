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
  return (
    <span
      className={cn(
        'inline-flex items-center font-medium rounded-full',
        {
          'px-2 py-1 text-xs': size === 'sm',
          'px-3 py-1.5 text-sm': size === 'md',
        },
        {
          'bg-slate-800 text-slate-300': variant === 'default',
          'bg-accent text-background': variant === 'accent',
          'bg-accent-2/20 text-accent-2': variant === 'secondary',
        },
        className
      )}
    >
      {children}
    </span>
  )
}
