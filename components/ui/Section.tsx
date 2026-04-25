import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

interface SectionProps {
  children:    ReactNode
  className?:  string
  id?:         string
  label?:      string
  bg?:         'white' | 'gray' | 'dark'
  size?:       'sm' | 'md' | 'lg'
}

// F3: Tightened padding scale
export default function Section({ children, className, id, label, bg = 'white', size = 'lg' }: SectionProps) {
  return (
    <section
      id={id}
      aria-label={label}
      className={cn(
        size === 'sm' && 'py-8  md:py-10',
        size === 'md' && 'py-10 md:py-12',
        size === 'lg' && 'py-12 md:py-16',
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
