'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { useTheme } from '@/components/ThemeProvider'
import { cn } from '@/lib/utils'
import { Sun, Moon, Menu, X, Phone } from 'lucide-react'

const links = [
  { href: '/',             label: 'Home'         },
  { href: '/about',        label: 'About'        },
  { href: '/services',     label: 'Services'     },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/contact',      label: 'Contact'      },
]

export default function Navbar() {
  const pathname  = usePathname()
  const { theme, toggle } = useTheme()
  const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])
  useEffect(() => { setOpen(false) }, [pathname])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const isActive = (href: string) => href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <>
      {/* ── Top bar — desktop only ── */}
      <div className="hidden md:flex items-center justify-between bg-ink-100 dark:bg-ink-900 border-b border-ink-200 dark:border-ink-800 px-6 py-1.5">
        <a href="tel:+13023579776"
          className="flex items-center gap-1.5 text-xs font-[500] text-ink-500 dark:text-ink-400 hover:text-brand-500 transition-colors">
          <Phone size={11} /> +1-302-357-9776
        </a>
        <Link href="/contact"
          className="text-xs font-[650] text-white bg-brand-500 hover:bg-brand-600 px-3 py-1 rounded-lg transition-colors">
          Free Consultation
        </Link>
      </div>

      {/* ── Main nav ── */}
      <nav
        className={cn(
          'sticky top-0 left-0 right-0 z-[200] nav-glass transition-all duration-300',
          scrolled
            ? 'bg-white/95 dark:bg-ink-950/95 border-b border-ink-200/80 dark:border-ink-800/80 shadow-sm'
            : 'bg-white/80 dark:bg-ink-950/80 border-b border-transparent',
        )}
        style={{ height: '64px' }}
      >
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6 h-full flex items-center justify-between gap-4">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0 group min-w-0">
            <div className="relative w-10 h-10 flex-shrink-0">
              <Image src="/logo-transparent.png" alt="ET Data Solutions" fill priority
                className="object-contain transition-opacity group-hover:opacity-75" />
            </div>
            <div className="hidden sm:block min-w-0">
              <span className="block text-[0.9375rem] font-[700] tracking-[-0.02em] text-ink-900 dark:text-ink-50 group-hover:text-brand-500 transition-colors leading-tight truncate">
                ET Data Solutions
              </span>
              <span className="block text-[0.65rem] text-ink-400 dark:text-ink-500 font-[500] tracking-[0.03em] leading-tight">
                Outsourcing · Est. 2014
              </span>
            </div>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-0.5">
            {links.map(l => {
              const active = isActive(l.href)
              return (
                <Link key={l.href} href={l.href}
                  className={cn(
                    'relative text-sm font-[500] px-3 py-2 rounded-lg transition-all duration-150 whitespace-nowrap',
                    active
                      ? 'text-brand-500 font-[650]'
                      : 'text-ink-500 dark:text-ink-400 hover:text-ink-900 dark:hover:text-ink-100 hover:bg-ink-100/60 dark:hover:bg-ink-800/50'
                  )}>
                  {l.label}
                  {active && <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-[2px] rounded-full bg-brand-500" />}
                </Link>
              )
            })}
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            <button onClick={toggle} aria-label="Toggle theme"
              className="w-9 h-9 flex items-center justify-center rounded-xl border border-ink-200 dark:border-ink-700 text-ink-400 dark:text-ink-500 hover:border-brand-400 hover:text-brand-500 hover:bg-brand-50 dark:hover:bg-brand-500/10 transition-all">
              {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
            </button>
            <Link href="/contact"
              className="hidden md:inline-flex items-center gap-1.5 text-sm font-[650] text-white bg-brand-500 hover:bg-brand-600 px-4 py-2 rounded-xl transition-all hover:-translate-y-px hover:shadow-brand">
              Get Started
            </Link>
            <button onClick={() => setOpen(o => !o)} aria-label={open ? 'Close menu' : 'Open menu'}
              className={cn('md:hidden w-9 h-9 flex items-center justify-center rounded-xl border transition-all',
                open ? 'border-brand-400 bg-brand-50 dark:bg-brand-500/10 text-brand-500'
                      : 'border-ink-200 dark:border-ink-700 text-ink-400 dark:text-ink-500')}>
              {open ? <X size={17} /> : <Menu size={17} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      {open && <div className="fixed inset-0 z-[190] bg-ink-950/25 backdrop-blur-sm md:hidden" onClick={() => setOpen(false)} aria-hidden />}

      {/* Mobile drawer */}
      <div className={cn('fixed left-0 right-0 z-[195] md:hidden transition-all duration-300',
        open ? 'top-[64px] opacity-100 pointer-events-auto' : 'top-[64px] -translate-y-2 opacity-0 pointer-events-none')}>
        <div className="bg-white/97 dark:bg-ink-950/97 nav-glass border-b border-ink-200 dark:border-ink-800 shadow-card-hover px-4 py-3 flex flex-col gap-1">
          {links.map(l => (
            <Link key={l.href} href={l.href}
              className={cn('text-[0.975rem] font-[500] px-4 py-3 rounded-xl transition-all',
                isActive(l.href)
                  ? 'text-brand-500 font-[700] bg-brand-50 dark:bg-brand-500/10'
                  : 'text-ink-700 dark:text-ink-300 hover:bg-ink-100/60 dark:hover:bg-ink-800/50')}>
              {l.label}
            </Link>
          ))}
          <div className="mt-2 mb-1 flex flex-col gap-2 pt-2 border-t border-ink-100 dark:border-ink-800">
            <Link href="/contact"
              className="flex items-center justify-center text-sm font-[700] text-white bg-brand-500 hover:bg-brand-600 px-6 py-3 rounded-xl transition-all">
              Free Consultation
            </Link>
            <a href="tel:+13023579776"
              className="flex items-center justify-center gap-2 text-sm font-[500] text-ink-500 dark:text-ink-400 py-2">
              <Phone size={14} /> +1-302-357-9776
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
