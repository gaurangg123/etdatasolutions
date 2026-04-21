'use client'
import Image from 'next/image'
import { useState, useEffect, useCallback } from 'react'
import { useTheme } from '@/components/ThemeProvider'
import { cn } from '@/lib/utils'
import { Sun, Moon, Menu, X, Phone } from 'lucide-react'

// Single-page navigation — each item scrolls to a section by ID
const links = [
  { id: 'hero',         label: 'Home'     },
  { id: 'about',        label: 'About'    },
  { id: 'services',     label: 'Services' },
  { id: 'contact',      label: 'Contact'  },
]

function scrollTo(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  const navH = 68
  const top = el.getBoundingClientRect().top + window.scrollY - navH
  window.scrollTo({ top, behavior: 'smooth' })
}

export default function Navbar() {
  const { theme, toggle } = useTheme()
  const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive]   = useState('hero')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12)
      // Highlight active section based on scroll position
      const sections = links.map(l => document.getElementById(l.id))
      const navH = 80
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i]
        if (el && el.getBoundingClientRect().top <= navH) {
          setActive(links[i].id)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const handleNav = useCallback((id: string) => {
    setOpen(false)
    scrollTo(id)
  }, [])

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-[200] nav-glass transition-all duration-300',
          scrolled
            ? 'bg-white/92 dark:bg-ink-950/92 border-b border-ink-200/80 dark:border-ink-800/80 shadow-[0_1px_0_0_rgba(0,0,0,0.04)]'
            : 'bg-white/75 dark:bg-ink-950/75 border-b border-transparent',
        )}
        style={{ height: 'var(--nav-h,68px)' }}
      >
        <div className="max-w-container mx-auto px-4 sm:px-6 h-full flex items-center justify-between gap-4">

          {/* Logo */}
          <button
            onClick={() => handleNav('hero')}
            className="flex items-center gap-2.5 flex-shrink-0 group min-w-0"
          >
            <div className="relative w-[36px] h-[36px] flex-shrink-0">
              <Image
                src="/logo-transparent.png" alt="ET Data Solutions"
                fill priority
                className="object-contain transition-opacity duration-200 group-hover:opacity-70"
              />
            </div>
            <div className="hidden sm:flex items-center gap-3 min-w-0">
              <div className="min-w-0">
                <span className="block text-[0.9375rem] font-[750] tracking-[-0.02em] text-ink-900 dark:text-ink-50 group-hover:text-brand-500 transition-colors leading-tight">
                  ET Data Solutions
                </span>
                <span className="block text-[0.65rem] text-ink-400 dark:text-ink-500 font-[500] tracking-[0.03em] leading-tight">
                  Outsourcing · Est. 2014
                </span>
              </div>
              <div className="hidden md:block w-px h-6 bg-ink-200 dark:bg-ink-700 flex-shrink-0 ml-1" />
            </div>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-0.5 ml-2 mr-3">
            {links.map(l => {
              const isActive = active === l.id
              return (
                <button
                  key={l.id}
                  onClick={() => handleNav(l.id)}
                  className={cn(
                    'nav-link-ul relative text-[0.875rem] font-[500] px-3.5 py-2 rounded-lg transition-all duration-150 whitespace-nowrap',
                    isActive
                      ? 'text-brand-500 font-[650]'
                      : 'text-ink-500 dark:text-ink-400 hover:text-ink-900 dark:hover:text-ink-100 hover:bg-ink-100/60 dark:hover:bg-ink-800/50'
                  )}
                >
                  {l.label}
                  {isActive && (
                    <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-[2px] rounded-full bg-brand-500" />
                  )}
                </button>
              )
            })}
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            <a
              href="tel:+13023579776"
              className="hidden lg:flex items-center gap-1.5 text-xs font-[600] text-ink-500 dark:text-ink-400 hover:text-brand-500 transition-colors mr-1"
            >
              <Phone size={13} />
              +1-302-357-9776
            </a>

            {/* Theme toggle */}
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="w-9 h-9 flex items-center justify-center rounded-xl border border-ink-200 dark:border-ink-700 text-ink-400 dark:text-ink-500 hover:border-brand-400 hover:text-brand-500 hover:bg-brand-50 dark:hover:bg-brand-500/10 transition-all"
            >
              {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
            </button>

            {/* CTA */}
            <button
              onClick={() => handleNav('contact')}
              className="hidden md:inline-flex items-center gap-1.5 text-sm font-[650] text-white bg-brand-500 hover:bg-brand-600 px-4 py-2 rounded-xl transition-all duration-200 hover:-translate-y-px hover:shadow-brand shine"
            >
              Get Started
            </button>

            {/* Burger */}
            <button
              onClick={() => setOpen(o => !o)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              className={cn(
                'md:hidden w-9 h-9 flex items-center justify-center rounded-xl border transition-all',
                open
                  ? 'border-brand-400 bg-brand-50 dark:bg-brand-500/10 text-brand-500'
                  : 'border-ink-200 dark:border-ink-700 text-ink-400 dark:text-ink-500',
              )}
            >
              {open ? <X size={17} /> : <Menu size={17} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 z-[190] bg-ink-950/25 dark:bg-ink-950/50 backdrop-blur-sm md:hidden"
          onClick={() => setOpen(false)} aria-hidden
        />
      )}

      {/* Mobile panel */}
      <div className={cn(
        'fixed left-0 right-0 z-[195] md:hidden transition-all duration-300',
        open ? 'top-[68px] opacity-100 pointer-events-auto' : 'top-[68px] -translate-y-2 opacity-0 pointer-events-none'
      )}>
        <div className="bg-white/96 dark:bg-ink-950/96 nav-glass border-b border-ink-200 dark:border-ink-800 shadow-card-hover px-4 py-3 flex flex-col gap-1">
          {links.map(l => (
            <button
              key={l.id}
              onClick={() => handleNav(l.id)}
              className={cn(
                'text-left text-[0.975rem] font-[500] px-4 py-3.5 rounded-xl transition-all',
                active === l.id
                  ? 'text-brand-500 font-[700] bg-brand-50 dark:bg-brand-500/10'
                  : 'text-ink-700 dark:text-ink-300 hover:bg-ink-100/60 dark:hover:bg-ink-800/50',
              )}
            >
              {l.label}
            </button>
          ))}
          <div className="mt-2 mb-1 flex flex-col gap-2">
            <button
              onClick={() => handleNav('contact')}
              className="w-full flex items-center justify-center gap-2 text-[0.9375rem] font-[700] text-white bg-brand-500 hover:bg-brand-600 px-6 py-3 rounded-xl transition-all shine"
            >
              Book a Free Consultation
            </button>
            <a href="tel:+13023579776"
              className="flex items-center justify-center gap-2 text-sm font-[500] text-ink-500 dark:text-ink-400 py-2.5"
            >
              <Phone size={14} /> +1-302-357-9776
            </a>
          </div>
        </div>
      </div>

      <div style={{ height: 'var(--nav-h,68px)' }} aria-hidden />
    </>
  )
}
