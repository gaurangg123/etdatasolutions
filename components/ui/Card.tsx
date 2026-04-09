import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  padding?: 'sm' | 'md' | 'lg'
}

export default function Card({ children, className, hover, padding = 'md' }: CardProps) {
  return (
    <div className={cn(
      'bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-card',
      padding === 'sm' && 'p-4',
      padding === 'md' && 'p-6',
      padding === 'lg' && 'p-8 md:p-10',
      hover && 'transition-all duration-250 hover:shadow-card-hover hover:-translate-y-0.5 hover:border-neutral-300 dark:hover:border-neutral-700',
      className,
    )}>
      {children}
    </div>
  )
}
