'use client'
import { cn } from '@/lib/utils'
import { ArrowRight, Loader2 } from 'lucide-react'
import type { ReactNode } from 'react'

interface ButtonProps {
  variant?:  'primary' | 'secondary' | 'ghost' | 'white' | 'outline'
  size?:     'xs' | 'sm' | 'md' | 'lg' | 'xl'
  href?:     string
  arrow?:    boolean
  loading?:  boolean
  children:  ReactNode
  className?: string
  onClick?:  () => void
  type?:     'button' | 'submit'
  disabled?: boolean
  external?: boolean
}

const base = [
  'relative inline-flex items-center justify-center gap-2',
  'font-[650] rounded-xl select-none whitespace-nowrap',
  'transition-all duration-200',
  'active:scale-[0.96]',
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2',
  'disabled:opacity-50 disabled:pointer-events-none',
  'overflow-hidden',
].join(' ')

const variants = {
  primary: [
    'bg-brand-500 text-white',
    'hover:bg-brand-600 hover:-translate-y-px hover:shadow-brand',
  ].join(' '),
  secondary: [
    'bg-white dark:bg-ink-800 text-ink-800 dark:text-ink-100',
    'border border-ink-200 dark:border-ink-700',
    'hover:border-brand-400 dark:hover:border-brand-500',
    'hover:bg-ink-50 dark:hover:bg-ink-700',
    'hover:-translate-y-px',
  ].join(' '),
  ghost: [
    'text-brand-500 dark:text-brand-400',
    'hover:bg-brand-50 dark:hover:bg-brand-500/10',
  ].join(' '),
  white: [
    'bg-white text-brand-600 font-[700]',
    'hover:bg-ink-50 hover:-translate-y-px hover:shadow-lg',
  ].join(' '),
  outline: [
    'bg-transparent text-ink-700 dark:text-ink-300',
    'border border-ink-300 dark:border-ink-600',
    'hover:border-brand-500 hover:text-brand-500',
    'hover:-translate-y-px',
  ].join(' '),
}

const sizes = {
  xs: 'text-xs  px-3   py-1.5 h-7',
  sm: 'text-sm  px-4   py-2   h-8',
  md: 'text-sm  px-5   py-2.5 h-10',
  lg: 'text-[0.925rem] px-6 py-3 h-11',
  xl: 'text-base px-8  py-3.5 h-12',
}

function smoothScrollTo(id: string) {
  const el = document.getElementById(id)
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 68, behavior: 'smooth' })
}

export default function Button({
  variant='primary', size='md', href, arrow, loading, children, className, onClick, type='button', disabled, external,
}: ButtonProps) {
  const cls = cn(base, variants[variant], sizes[size], className)

  const inner = (
    <>
      {loading && <Loader2 size={14} className="animate-spin flex-shrink-0" />}
      <span className="relative z-10">{children}</span>
      {arrow && !loading && <ArrowRight size={14} className="flex-shrink-0 relative z-10 transition-transform duration-200 group-hover:translate-x-0.5" />}
    </>
  )

  // Handle single-page anchor links (e.g. #contact, /contact#form, /#audit)
  if (href) {
    const anchorMatch = href.match(/#(.+)/)
    if (anchorMatch) {
      const id = anchorMatch[1]
      return (
        <button
          type="button"
          onClick={() => smoothScrollTo(id)}
          className={cn(cls, 'group')}
          disabled={disabled || loading}
        >
          {inner}
        </button>
      )
    }
    // External link
    if (external || href.startsWith('http')) {
      return (
        <a href={href} className={cn(cls, 'group')} target="_blank" rel="noopener noreferrer">
          {inner}
        </a>
      )
    }
    // Tel / mailto
    if (href.startsWith('tel:') || href.startsWith('mailto:')) {
      return <a href={href} className={cn(cls, 'group')}>{inner}</a>
    }
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled || loading} className={cn(cls, 'group')}>
      {inner}
    </button>
  )
}
