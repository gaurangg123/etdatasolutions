import { cn } from '@/lib/utils'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { ReactNode } from 'react'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'white'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  arrow?: boolean
  children: ReactNode
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  disabled?: boolean
}

const base = 'inline-flex items-center justify-center gap-2 font-[650] rounded-xl transition-all duration-200 active:scale-[0.97] select-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500'

const variants = {
  primary:   'bg-brand-500 text-white hover:bg-brand-600 hover:-translate-y-px hover:shadow-brand',
  secondary: 'bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700 hover:border-brand-400 dark:hover:border-brand-500 hover:-translate-y-px',
  ghost:     'text-brand-500 hover:bg-brand-50 dark:hover:bg-brand-500/10 border border-transparent',
  white:     'bg-white text-brand-600 hover:bg-neutral-50 hover:-translate-y-px hover:shadow-lg',
}

const sizes = {
  sm: 'text-sm px-4 py-2.5',
  md: 'text-sm px-5 py-3',
  lg: 'text-base px-7 py-3.5',
}

export default function Button({
  variant = 'primary', size = 'md', href, arrow, children, className, onClick, type = 'button', disabled,
}: ButtonProps) {
  const cls = cn(base, variants[variant], sizes[size], disabled && 'opacity-60 cursor-not-allowed pointer-events-none', className)
  const inner = <>{children}{arrow && <ArrowRight size={15} />}</>
  if (href) return <Link href={href} className={cls}>{inner}</Link>
  return <button type={type} onClick={onClick} disabled={disabled} className={cls}>{inner}</button>
}
