'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { useTheme } from '@/components/ThemeProvider'
import { cn } from '@/lib/utils'
import { Sun, Moon, Menu, X, Phone } from 'lucide-react'
import Button from '@/components/ui/Button'

const links = [
  { href:'/',         label:'Home'     },
  { href:'/about',    label:'About'    },
  { href:'/services', label:'Services' },
  { href:'/contact',  label:'Contact'  },
]

export default function Navbar() {
  const pathname  = usePathname()
  const { theme, toggle } = useTheme()
  const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', h, { passive:true })
    return () => window.removeEventListener('scroll', h)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-[200] nav-glass transition-all duration-300',
          scrolled
            ? 'bg-white/90 dark:bg-ink-950/90 border-b border-ink-200/80 dark:border-ink-800/80 shadow-xs'
            : 'bg-white/70 dark:bg-ink-950/70 border-b border-transparent',
        )}
        style={{ height:'var(--nav-h,68px)' }}
      >
        <div className="max-w-container mx-auto px-4 sm:px-6 h-full flex items-center justify-between gap-4">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0 group min-w-0" onClick={() => setOpen(false)}>
            <div className="relative w-[38px] h-[38px] flex-shrink-0">
              <Image
                src="/logo-transparent.png" alt="ET Data Solutions"
                fill priority className="object-contain transition-opacity duration-200 group-hover:opacity-75"
              />
            </div>
            <div className="hidden sm:block min-w-0">
              <span className="block text-[0.9rem] font-[750] tracking-[-0.025em] text-ink-900 dark:text-ink-100 group-hover:text-brand-500 transition-colors leading-tight truncate">
                ET Data Solutions
              </span>
              <span className="block text-[0.65rem] text-ink-400 dark:text-ink-500 font-[500] tracking-[0.02em] leading-tight">
                Outsourcing · Est. 2014
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-0.5 ml-auto mr-3">
            {links.map(l => (
              <Link key={l.href} href={l.href}
                className={cn(
                  'relative text-sm font-[500] px-3.5 py-2 rounded-lg transition-all duration-150 whitespace-nowrap',
                  pathname === l.href
                    ? 'text-brand-500 font-[650]'
                    : 'text-ink-500 dark:text-ink-400 hover:text-ink-900 dark:hover:text-ink-100 hover:bg-ink-100/60 dark:hover:bg-ink-800/50'
                )}
              >
                {l.label}
                {pathname === l.href && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] rounded-full bg-brand-500" />
                )}
              </Link>
            ))}
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            {/* Phone — desktop only */}
            <a
              href="tel:+13023579776"
              className="hidden lg:flex items-center gap-1.5 text-xs font-[600] text-ink-500 dark:text-ink-400 hover:text-brand-500 transition-colors mr-1"
            >
              <Phone size={13} />
              <span>+1-302-357-9776</span>
            </a>

            {/* Theme toggle */}
            <button
              onClick={toggle} aria-label="Toggle theme"
              className="w-9 h-9 flex items-center justify-center rounded-xl border border-ink-200 dark:border-ink-700 text-ink-400 dark:text-ink-500 hover:border-brand-400 hover:text-brand-500 hover:bg-brand-50 dark:hover:bg-brand-500/10 transition-all"
            >
              {theme === 'dark' ? <Sun size={15}/> : <Moon size={15}/>}
            </button>

            {/* CTA — desktop */}
            <div className="hidden md:block">
              <Button href="/contact#form" variant="primary" size="sm" arrow className="shine">
                Get Started
              </Button>
            </div>

            {/* Burger — mobile */}
            <button
              onClick={() => setOpen(o => !o)} aria-label={open ? 'Close menu' : 'Open menu'}
              className={cn(
                'md:hidden w-9 h-9 flex items-center justify-center rounded-xl border transition-all',
                open
                  ? 'border-brand-400 bg-brand-50 dark:bg-brand-500/10 text-brand-500'
                  : 'border-ink-200 dark:border-ink-700 text-ink-400 dark:text-ink-500',
              )}
            >
              {open ? <X size={17}/> : <Menu size={17}/>}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 z-[190] bg-ink-950/30 dark:bg-ink-950/60 backdrop-blur-sm md:hidden"
          onClick={() => setOpen(false)} aria-hidden
        />
      )}

      {/* Mobile panel */}
      <div className={cn(
        'fixed left-0 right-0 z-[195] md:hidden transition-all duration-300 ease-spring',
        open ? 'top-[68px] opacity-100 pointer-events-auto' : 'top-[68px] -translate-y-3 opacity-0 pointer-events-none'
      )}>
        <div className="bg-white/95 dark:bg-ink-950/95 nav-glass border-b border-ink-200 dark:border-ink-800 shadow-card-hover px-4 py-3 flex flex-col gap-1">
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className={cn(
                'text-[0.975rem] font-[500] px-4 py-3.5 rounded-xl transition-all',
                pathname === l.href
                  ? 'text-brand-500 font-[700] bg-brand-50 dark:bg-brand-500/10'
                  : 'text-ink-700 dark:text-ink-300 hover:bg-ink-100/60 dark:hover:bg-ink-800/50',
              )}
            >
              {l.label}
            </Link>
          ))}
          <div className="mt-2 mb-1 flex flex-col gap-2">
            <Button href="/contact#form" variant="primary" size="lg" arrow className="w-full justify-center" onClick={() => setOpen(false)}>
              Book a Free Consultation
            </Button>
            <a href="tel:+13023579776"
              className="flex items-center justify-center gap-2 text-sm font-[500] text-ink-500 dark:text-ink-400 py-2.5"
            >
              <Phone size={14}/> +1-302-357-9776
            </a>
          </div>
        </div>
      </div>

      <div style={{ height:'var(--nav-h,68px)' }} aria-hidden />
    </>
  )
}
