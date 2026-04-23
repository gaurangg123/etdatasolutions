'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import { ChevronRight } from 'lucide-react'

interface BreadcrumbItem { label: string; href?: string }
interface CtaButton { label: string; href: string; variant?: 'primary' | 'secondary' }

interface PageHeroProps {
  breadcrumb: BreadcrumbItem[]
  title: React.ReactNode
  subtitle?: string
  ctaButtons?: CtaButton[]
  eyebrow?: string
}

const f = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function PageHero({ breadcrumb, title, subtitle, ctaButtons, eyebrow }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-ink-950 py-16 md:py-24">
      {/* Dot grid */}
      <div aria-hidden className="absolute inset-0 pointer-events-none opacity-[0.3] dark:opacity-[0.08]"
        style={{ backgroundImage:'radial-gradient(circle,rgba(0,0,0,0.08) 1px,transparent 1px)', backgroundSize:'28px 28px', maskImage:'linear-gradient(to bottom,transparent,black 20%,black 80%,transparent)' }} />
      {/* Brand radial */}
      <div aria-hidden className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_55%_45%_at_50%_0%,rgba(232,68,10,0.05),transparent_70%)]" />

      <Container className="relative">
        {/* Breadcrumb */}
        <motion.nav {...f(0)} aria-label="Breadcrumb" className="flex items-center gap-1.5 mb-6 text-xs text-ink-400 dark:text-ink-500">
          {breadcrumb.map((item, i) => (
            <span key={item.label} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight size={12} className="flex-shrink-0" />}
              {item.href
                ? <Link href={item.href} className="hover:text-brand-500 transition-colors">{item.label}</Link>
                : <span className="text-ink-600 dark:text-ink-400 font-[500]">{item.label}</span>
              }
            </span>
          ))}
        </motion.nav>

        {eyebrow && (
          <motion.span {...f(0.04)} className="inline-block text-[0.7rem] font-[750] tracking-[0.14em] uppercase text-brand-500 mb-3">
            {eyebrow}
          </motion.span>
        )}

        <motion.h1 {...f(0.08)}
          className="text-[2.4rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[3.8rem] font-[850] tracking-[-0.045em] leading-[1.05] text-ink-900 dark:text-ink-50 mb-5 max-w-[680px] text-balance"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p {...f(0.14)} className="text-lg text-ink-500 dark:text-ink-400 leading-relaxed max-w-[500px] mb-8">
            {subtitle}
          </motion.p>
        )}

        {ctaButtons && ctaButtons.length > 0 && (
          <motion.div {...f(0.20)} className="flex flex-wrap gap-3">
            {ctaButtons.map(btn => (
              <Link key={btn.href} href={btn.href}
                className={btn.variant === 'secondary'
                  ? 'inline-flex items-center gap-2 text-sm font-[650] text-ink-700 dark:text-ink-300 bg-white dark:bg-ink-800 border border-ink-200 dark:border-ink-700 hover:border-brand-400 hover:text-brand-500 px-5 py-2.5 rounded-xl transition-all hover:-translate-y-px'
                  : 'inline-flex items-center gap-2 text-sm font-[700] text-white bg-brand-500 hover:bg-brand-600 px-5 py-2.5 rounded-xl transition-all hover:-translate-y-px hover:shadow-brand shine'
                }
              >
                {btn.label}
              </Link>
            ))}
          </motion.div>
        )}
      </Container>
    </section>
  )
}
