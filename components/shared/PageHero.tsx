import Link from 'next/link'
import { ChevronRight, ArrowRight } from 'lucide-react'
import Container from '@/components/ui/Container'
import AnimateIn from '@/components/ui/AnimateIn'

interface BreadcrumbItem { label: string; href?: string }
interface CtaButton { label: string; href: string; variant: 'primary' | 'secondary' }

interface PageHeroProps {
  eyebrow?: string
  title: string
  titleHighlight?: string
  subtitle?: string
  breadcrumbs?: BreadcrumbItem[]
  ctaButtons?: CtaButton[]
  badge?: string
}

export default function PageHero({ eyebrow, title, titleHighlight, subtitle, breadcrumbs, ctaButtons, badge }: PageHeroProps) {
  return (
    <div className="relative overflow-hidden py-16 md:py-24 bg-white dark:bg-ink-950">
      {/* dot grid */}
      <div aria-hidden className="absolute inset-0 opacity-[0.3] dark:opacity-[0.1]"
        style={{ backgroundImage:'radial-gradient(circle,rgba(0,0,0,0.08) 1px,transparent 1px)', backgroundSize:'28px 28px', maskImage:'linear-gradient(to bottom,transparent,black 20%,black 80%,transparent)' }} />
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_0%,rgba(232,68,10,0.06),transparent_70%)]" />
      {/* top beam */}
      <div aria-hidden className="absolute top-0 left-0 right-0 h-px overflow-hidden">
        <div className="h-px w-1/3 bg-gradient-to-r from-transparent via-brand-400/40 to-transparent animate-beam" />
      </div>

      <Container className="relative">
        {/* Breadcrumb */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <AnimateIn>
            <nav className="flex items-center gap-1.5 mb-6 text-xs font-[500]" aria-label="Breadcrumb">
              {breadcrumbs.map((crumb, i) => (
                <span key={i} className="flex items-center gap-1.5">
                  {i > 0 && <ChevronRight size={12} className="text-ink-300 dark:text-ink-600" />}
                  {crumb.href && i < breadcrumbs.length - 1
                    ? <Link href={crumb.href} className="text-ink-400 dark:text-ink-500 hover:text-brand-500 transition-colors">{crumb.label}</Link>
                    : <span className={i === breadcrumbs.length - 1 ? 'text-brand-500 font-[600]' : 'text-ink-400 dark:text-ink-500'}>{crumb.label}</span>
                  }
                </span>
              ))}
            </nav>
          </AnimateIn>
        )}

        {eyebrow && (
          <AnimateIn>
            <span className="inline-block text-[0.7rem] font-[750] tracking-[0.14em] uppercase text-brand-500 mb-3">{eyebrow}</span>
          </AnimateIn>
        )}

        {badge && (
          <AnimateIn delay={0.04}>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-[600] bg-amber-500/10 text-amber-500 border border-amber-500/20 mb-4">{badge}</span>
          </AnimateIn>
        )}

        <AnimateIn delay={0.07}>
          <h1 className="text-[2.6rem] md:text-[3.4rem] lg:text-[3.8rem] font-[850] tracking-[-0.045em] leading-[1.05] text-ink-900 dark:text-ink-50 mb-5 max-w-[680px] text-balance">
            {title}{titleHighlight && (<> <span className="text-gradient">{titleHighlight}</span></>)}
          </h1>
        </AnimateIn>

        {subtitle && (
          <AnimateIn delay={0.14}>
            <p className="text-lg text-ink-500 dark:text-ink-400 leading-relaxed max-w-[520px] mb-8">{subtitle}</p>
          </AnimateIn>
        )}

        {ctaButtons && ctaButtons.length > 0 && (
          <AnimateIn delay={0.2} className="flex flex-wrap gap-3">
            {ctaButtons.map((btn, i) => (
              <Link key={i} href={btn.href}
                className={btn.variant === 'primary'
                  ? 'group inline-flex items-center gap-2 text-sm font-[700] text-white bg-brand-500 hover:bg-brand-600 px-6 py-3 rounded-xl transition-all duration-200 hover:-translate-y-px hover:shadow-brand shine'
                  : 'inline-flex items-center gap-2 text-sm font-[600] text-ink-700 dark:text-ink-300 bg-white dark:bg-ink-900 border border-ink-200 dark:border-ink-700 hover:border-brand-400 hover:text-brand-500 px-6 py-3 rounded-xl transition-all duration-200 hover:-translate-y-px'
                }>
                {btn.label}
                {btn.variant === 'primary' && <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />}
              </Link>
            ))}
          </AnimateIn>
        )}
      </Container>
    </div>
  )
}
