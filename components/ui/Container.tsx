import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

export default function Container({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn('max-w-container mx-auto px-5 sm:px-6 lg:px-8', className)}>
      {children}
    </div>
  )
}
