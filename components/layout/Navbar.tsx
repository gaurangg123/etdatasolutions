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
  const pathname = usePathname()
  const { theme, toggle } = useTheme()
  const [open, setOpen] = useState(false)

  useEffect(() => { setOpen(false) }, [pathname])
  useEffect(() => {
    document.body.style.overflow = ''  // body scroll is always hidden via CSS
  }, [open])

  const isActive = (href: string) => href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <div className="bg-white dark:bg-ink-950">
      {/* Top bar — desktop only */}
      <div className="hidden md:flex items-center justify-between bg-ink-100 dark:bg-ink-900 border-b border-ink-200 dark:border-ink-800 px-6 py-1.5">
        <a href="tel:+13023579776" className="flex items-center gap-1.5 text-xs font-[500] text-ink-500 dark:text-ink-400 hover:text-brand-500 transition-colors">
          <Phone size={11} /> +1-302-357-9776
        </a>
        <Link href="/contact" className="text-xs font-[650] text-white bg-brand-500 hover:bg-brand-600 px-3 py-1 rounded-lg transition-colors">
          Free Consultation
        </Link>
      </div>

      {/* Main nav */}
      <nav className="nav-glass bg-white/95 dark:bg-ink-950/95 border-b border-ink-200 dark:border-ink-800" style={{ height: '56px' }}>
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6 h-full flex items-center justify-between gap-4">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0 group">
            <div className="relative w-9 h-9 flex-shrink-0">
              <Image src="/logo-transparent.png" alt="ET Data Solutions" fill priority className="object-contain group-hover:opacity-75 transition-opacity" />
            </div>
            <div className="hidden sm:block">
              <span className="block text-[0.875rem] font-[700] tracking-[-0.02em] text-ink-900 dark:text-ink-50 group-hover:text-brand-500 transition-colors leading-tight">ET Data Solutions</span>
              <span className="block text-[0.625rem] text-ink-400 dark:text-ink-500 font-[500] tracking-[0.03em]">Outsourcing · Est. 2014</span>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-0.5">
            {links.map(l => {
              const active = isActive(l.href)
              return (
                <Link key={l.href} href={l.href}
                  className={cn('relative text-sm font-[500] px-3 py-2 rounded-lg transition-all whitespace-nowrap',
                    active ? 'text-brand-500 font-[650]' : 'text-ink-500 dark:text-ink-400 hover:text-ink-900 dark:hover:text-ink-100 hover:bg-ink-100/60 dark:hover:bg-ink-800/50')}>
                  {l.label}
                  {active && <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-[2px] rounded-full bg-brand-500" />}
                </Link>
              )
            })}
          </div>

          {/* Right */}
          <div className="flex items-center gap-2">
            <button onClick={toggle} aria-label="Toggle theme"
              className="w-8 h-8 flex items-center justify-center rounded-xl border border-ink-200 dark:border-ink-700 text-ink-400 dark:text-ink-500 hover:border-brand-400 hover:text-brand-500 transition-all">
              {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
            </button>
            <Link href="/contact"
              className="hidden md:inline-flex items-center text-sm font-[650] text-white bg-brand-500 hover:bg-brand-600 px-4 py-1.5 rounded-xl transition-all hover:-translate-y-px hover:shadow-brand">
              Free Consultation
            </Link>
            <button onClick={() => setOpen(o => !o)} aria-label="Menu"
              className={cn('md:hidden w-8 h-8 flex items-center justify-center rounded-xl border transition-all',
                open ? 'border-brand-400 bg-brand-50 text-brand-500' : 'border-ink-200 dark:border-ink-700 text-ink-400 dark:text-ink-500')}>
              {open ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-white/98 dark:bg-ink-950/98 border-b border-ink-200 dark:border-ink-800 px-4 py-3 flex flex-col gap-1">
          {links.map(l => (
            <Link key={l.href} href={l.href}
              className={cn('text-[0.9375rem] font-[500] px-4 py-3 rounded-xl transition-all',
                isActive(l.href) ? 'text-brand-500 font-[700] bg-brand-50 dark:bg-brand-500/10' : 'text-ink-700 dark:text-ink-300 hover:bg-ink-100/60 dark:hover:bg-ink-800/50')}>
              {l.label}
            </Link>
          ))}
          <div className="mt-2 pt-2 border-t border-ink-100 dark:border-ink-800 flex flex-col gap-2">
            <Link href="/contact" className="flex items-center justify-center text-sm font-[700] text-white bg-brand-500 hover:bg-brand-600 py-3 rounded-xl transition-all">
              Free Consultation
            </Link>
            <a href="tel:+13023579776" className="flex items-center justify-center gap-2 text-sm text-ink-500 py-2">
              <Phone size={13} /> +1-302-357-9776
            </a>
          </div>
        </div>
      )}
    </div>
  )
}
