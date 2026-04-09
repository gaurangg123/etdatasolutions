import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
  bg?: 'white' | 'gray' | 'dark'
  size?: 'md' | 'lg'
}

export default function Section({ children, className, id, bg = 'white', size = 'lg' }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        size === 'lg' && 'py-20 md:py-28',
        size === 'md' && 'py-14 md:py-20',
        bg === 'white' && 'bg-white dark:bg-[#0e0c0b]',
        bg === 'gray'  && 'bg-neutral-50 dark:bg-[#0a0908]',
        bg === 'dark'  && 'bg-neutral-900 dark:bg-neutral-950',
        className,
      )}
    >
      {children}
    </section>
  )
}
