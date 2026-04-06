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
    const handler = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <>
      <nav className={cn(
        'fixed top-0 left-0 right-0 z-50 nav-blur transition-all duration-300',
        scrolled
          ? 'bg-white/90 dark:bg-[#0e0c0b]/90 border-b border-neutral-200 dark:border-neutral-800 shadow-sm'
          : 'bg-white/80 dark:bg-[#0e0c0b]/80 border-b border-neutral-200/60 dark:border-neutral-800/60'
      )}>
        <div className="max-w-[1180px] mx-auto px-6 h-[68px] flex items-center justify-between gap-6">

          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0 group">
            <Image
              src="/logo-transparent.png"
              alt="ET Data Solutions"
              width={130}
              height={40}
              priority
              className="h-[34px] w-auto object-contain object-left transition-opacity duration-200 group-hover:opacity-70"
              style={{ imageRendering: 'crisp-edges' }}
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-0.5 ml-auto">
            {links.map(l => (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  'text-sm font-[450] px-3 py-1.5 rounded-lg transition-all duration-150',
                  pathname === l.href
                    ? 'text-brand-500 bg-brand-50 dark:bg-brand-500/10'
                    : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                )}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact#form"
              className="ml-3 inline-flex items-center gap-1.5 text-sm font-[500] text-white bg-brand-500 hover:bg-brand-600 px-4 py-2 rounded-xl transition-all duration-150 hover:-translate-y-px hover:shadow-[0_4px_14px_rgba(232,68,10,0.35)]"
            >
              Get Started
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Right: theme + burger */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-neutral-200 dark:border-neutral-700 text-neutral-500 dark:text-neutral-400 hover:border-brand-500 hover:text-brand-500 hover:bg-brand-50 dark:hover:bg-brand-500/10 transition-all duration-150"
            >
              {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
            </button>
            <button
              onClick={() => setOpen(o => !o)}
              aria-label="Toggle menu"
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg border border-neutral-200 dark:border-neutral-700 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-all duration-150"
            >
              {open ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={cn(
          'md:hidden overflow-hidden transition-all duration-300 border-t border-neutral-200 dark:border-neutral-800',
          open ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0 pointer-events-none border-transparent'
        )}>
          <div className="px-5 py-3 flex flex-col gap-1 bg-white/95 dark:bg-[#0e0c0b]/95 nav-blur">
            {links.map(l => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={cn(
                  'text-sm font-[450] px-3 py-2.5 rounded-lg transition-all duration-150',
                  pathname === l.href
                    ? 'text-brand-500 bg-brand-50 dark:bg-brand-500/10'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                )}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact#form"
              onClick={() => setOpen(false)}
              className="mt-2 text-sm font-[500] text-white bg-brand-500 hover:bg-brand-600 px-4 py-3 rounded-xl text-center transition-all duration-150"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>
      {/* Spacer */}
      <div className="h-[68px]" />
    </>
  )
}
