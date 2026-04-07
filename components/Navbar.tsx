'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { useTheme } from './ThemeProvider'
import { cn } from '@/lib/utils'
import { Sun, Moon, Menu, X, ArrowRight } from 'lucide-react'

const links = [
  { href: '/',         label: 'Home'     },
  { href: '/about',    label: 'About'    },
  { href: '/services', label: 'Services' },
  { href: '/contact',  label: 'Contact'  },
]

export default function Navbar() {
  const pathname = usePathname()
  const { theme, toggle } = useTheme()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <>
      <nav className={cn(
        'fixed top-0 left-0 right-0 z-50 nav-blur transition-all duration-300',
        scrolled
          ? 'bg-white/92 dark:bg-[#0e0c0b]/92 border-b border-neutral-200 dark:border-neutral-800 shadow-sm'
          : 'bg-white/85 dark:bg-[#0e0c0b]/85 border-b border-neutral-200/50 dark:border-neutral-800/50'
      )} style={{ height: 'var(--nav-h, 72px)' }}>
        <div className="max-w-container mx-auto px-6 h-full flex items-center justify-between gap-8">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0 group">
            <div className="relative w-[48px] h-[48px] flex-shrink-0">
              <Image
                src="/logo-transparent.png"
                alt="ET Data Solutions logo"
                fill
                priority
                className="object-contain group-hover:opacity-80 transition-opacity duration-200"
              />
            </div>
            <span className="text-[1.05rem] font-[700] tracking-[-0.02em] text-neutral-900 dark:text-neutral-100 group-hover:text-brand-500 transition-colors duration-200 hidden sm:block leading-tight">
              ET Data Solutions
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1 ml-auto">
            {links.map(l => (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  'text-sm font-[500] px-3.5 py-2 rounded-lg transition-all duration-150',
                  pathname === l.href
                    ? 'text-brand-500 bg-brand-50 dark:bg-brand-500/10 font-[600]'
                    : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800/60'
                )}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact#form"
              className="ml-4 inline-flex items-center gap-2 text-sm font-[600] text-white bg-brand-500 hover:bg-brand-600 px-5 py-2.5 rounded-xl transition-all duration-150 hover:-translate-y-px hover:shadow-[0_4px_16px_rgba(232,68,10,0.4)]"
            >
              Get Started <ArrowRight size={15} />
            </Link>
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="w-10 h-10 flex items-center justify-center rounded-xl border border-neutral-200 dark:border-neutral-700 text-neutral-500 dark:text-neutral-400 hover:border-brand-500 hover:text-brand-500 hover:bg-brand-50 dark:hover:bg-brand-500/10 transition-all duration-150"
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              onClick={() => setOpen(o => !o)}
              aria-label="Toggle menu"
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl border border-neutral-200 dark:border-neutral-700 text-neutral-500 dark:text-neutral-400 transition-all duration-150"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={cn(
          'md:hidden overflow-hidden transition-all duration-300 border-t border-neutral-200 dark:border-neutral-800',
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none border-transparent'
        )}>
          <div className="px-5 py-4 flex flex-col gap-1.5 bg-white/98 dark:bg-[#0e0c0b]/98 nav-blur">
            {links.map(l => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={cn(
                  'text-base font-[500] px-4 py-3 rounded-xl transition-all duration-150',
                  pathname === l.href
                    ? 'text-brand-500 bg-brand-50 dark:bg-brand-500/10 font-[600]'
                    : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800/60'
                )}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact#form"
              onClick={() => setOpen(false)}
              className="mt-2 text-base font-[600] text-white bg-brand-500 hover:bg-brand-600 px-4 py-3.5 rounded-xl text-center transition-all duration-150"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>
      <div style={{ height: 'var(--nav-h, 72px)' }} />
    </>
  )
}
