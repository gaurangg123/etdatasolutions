'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { useTheme } from '@/components/ThemeProvider'
import { cn } from '@/lib/utils'
import { Sun, Moon, Menu, X } from 'lucide-react'
import Button from '@/components/ui/Button'

const links = [
  { href:'/',         label:'Home'    },
  { href:'/about',    label:'About'   },
  { href:'/services', label:'Services'},
  { href:'/contact',  label:'Contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const { theme, toggle } = useTheme()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', h, { passive:true })
    return () => window.removeEventListener('scroll', h)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : ''; return () => { document.body.style.overflow = '' } }, [open])

  return (
    <>
      <nav className={cn(
        'fixed top-0 left-0 right-0 z-[200] nav-blur transition-all duration-300',
        scrolled ? 'bg-white dark:bg-[#0e0c0b] border-b border-neutral-200 dark:border-neutral-800 shadow-sm'
                 : 'bg-white/95 dark:bg-[#0e0c0b]/95 border-b border-neutral-100/70 dark:border-neutral-800/50'
      )} style={{ height:'var(--nav-h,72px)' }}>
        <div className="max-w-container mx-auto px-5 sm:px-6 h-full flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0 group min-w-0" onClick={()=>setOpen(false)}>
            <div className="relative w-10 h-10 flex-shrink-0">
              <Image src="/logo-transparent.png" alt="ET Data Solutions" fill priority className="object-contain group-hover:opacity-75 transition-opacity" />
            </div>
            <span className="text-[0.92rem] sm:text-[0.98rem] font-[700] tracking-[-0.02em] text-neutral-900 dark:text-neutral-100 group-hover:text-brand-500 transition-colors truncate leading-tight">
              ET Data Solutions
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-0.5 ml-auto">
            {links.map(l => (
              <Link key={l.href} href={l.href}
                className={cn(
                  'text-sm font-[500] px-3.5 py-2 rounded-lg transition-all duration-150 whitespace-nowrap',
                  pathname===l.href
                    ? 'text-brand-500 bg-brand-50 dark:bg-brand-500/10 font-[650]'
                    : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800/60'
                )}>
                {l.label}
              </Link>
            ))}
            <div className="ml-3">
              <Button href="/contact#form" variant="primary" size="sm" arrow>Get Started</Button>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <button onClick={toggle} aria-label="Toggle theme"
              className="w-9 h-9 flex items-center justify-center rounded-xl border border-neutral-200 dark:border-neutral-700 text-neutral-500 dark:text-neutral-400 hover:border-brand-500 hover:text-brand-500 hover:bg-brand-50 dark:hover:bg-brand-500/10 transition-all">
              {theme==='dark' ? <Sun size={15}/> : <Moon size={15}/>}
            </button>
            <button onClick={()=>setOpen(o=>!o)} aria-label={open?'Close menu':'Open menu'}
              className={cn('md:hidden w-9 h-9 flex items-center justify-center rounded-xl border transition-all', open ? 'border-brand-500 bg-brand-50 dark:bg-brand-500/10 text-brand-500' : 'border-neutral-200 dark:border-neutral-700 text-neutral-500 dark:text-neutral-400')}>
              {open ? <X size={17}/> : <Menu size={17}/>}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      {open && <div className="fixed inset-0 z-[190] bg-black/40 md:hidden" onClick={()=>setOpen(false)} aria-hidden />}

      {/* Mobile menu panel */}
      <div className={cn(
        'fixed left-0 right-0 z-[195] md:hidden transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]',
        open ? 'top-[72px] opacity-100 pointer-events-auto' : 'top-[72px] -translate-y-3 opacity-0 pointer-events-none'
      )}>
        <div className="bg-white dark:bg-[#0f0d0c] border-b border-neutral-200 dark:border-neutral-800 shadow-xl px-4 py-3 flex flex-col gap-1">
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={()=>setOpen(false)}
              className={cn(
                'text-[1rem] font-[500] px-4 py-3.5 rounded-xl transition-all',
                pathname===l.href ? 'text-brand-500 bg-brand-50 dark:bg-brand-500/10 font-[700]'
                                  : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800'
              )}>
              {l.label}
            </Link>
          ))}
          <Link href="/contact#form" onClick={()=>setOpen(false)}
            className="mt-1.5 mb-1 text-[1rem] font-[700] text-white bg-brand-500 hover:bg-brand-600 px-4 py-4 rounded-xl text-center transition-all active:scale-[0.98]">
            Get Started — Free Consultation
          </Link>
        </div>
      </div>

      <div style={{ height:'var(--nav-h,72px)' }} aria-hidden />
    </>
  )
}
