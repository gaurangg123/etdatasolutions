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

// Item 4: standardize section padding to 96px top/bottom desktop, 64px mobile
export default function Section({ children, className, id, label, bg='white', size='lg' }: SectionProps) {
  return (
    <section
      id={id}
      aria-label={label}
      className={cn(
        // sm = 48/64, md = 64/80, lg = 64/96 (matches 96px desktop / 64px mobile requirement)
        size === 'sm' && 'py-10 md:py-12',
        size === 'md' && 'py-16 md:py-20',
        size === 'lg' && 'py-16 md:py-24',
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
