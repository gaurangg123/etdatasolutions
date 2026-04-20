import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

interface BadgeProps { children: ReactNode; variant?: 'default' | 'brand' | 'outline'; className?: string }

export default function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span className={cn(
      'inline-flex items-center gap-1.5 text-xs font-[650] tracking-[0.02em] rounded-full px-2.5 py-1',
      variant === 'default' && 'bg-ink-100 dark:bg-ink-800 text-ink-600 dark:text-ink-400',
      variant === 'brand'   && 'bg-brand-50 dark:bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-200 dark:border-brand-500/25',
      variant === 'outline' && 'border border-ink-200 dark:border-ink-700 text-ink-500 dark:text-ink-400',
      className,
    )}>
      {children}
    </span>
  )
}
