import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

interface Props {
  children:   ReactNode
  className?: string
  narrow?:    boolean  // max-w-3xl for focused content
}

export default function Container({ children, className, narrow }: Props) {
  return (
    <div className={cn(
      narrow ? 'max-w-3xl' : 'max-w-container',
      'mx-auto px-5 sm:px-6 lg:px-8',
      className,
    )}>
      {children}
    </div>
  )
}
