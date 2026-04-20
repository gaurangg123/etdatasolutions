import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

interface SectionProps {
  children:   ReactNode
  className?: string
  id?:        string
  label?:     string
  bg?:        'white' | 'gray' | 'dark'
  size?:      'sm' | 'md' | 'lg'
}

export default function Section({ children, className, id, label, bg='white', size='lg' }: SectionProps) {
  return (
    <section
      id={id}
      aria-label={label}
      className={cn(
        size === 'sm' && 'py-10 md:py-14',
        size === 'md' && 'py-14 md:py-20',
        size === 'lg' && 'py-20 md:py-28',
        bg === 'white' && 'bg-white dark:bg-ink-950',
        bg === 'gray'  && 'bg-ink-50 dark:bg-[#0a0908]',
        bg === 'dark'  && 'bg-ink-900 dark:bg-ink-950',
        className,
      )}
    >
      {children}
    </section>
  )
}
