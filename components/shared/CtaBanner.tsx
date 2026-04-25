'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import { Phone, Shield, Clock, Star } from 'lucide-react'

interface CtaBannerProps {
  headline: string
  subtext?: string
  primaryBtn: { label: string; href: string }
  secondaryBtn?: { label: string; href: string }
  showGuarantees?: boolean
}

const guarantees = [
  { icon: Shield, text: '30-day guarantee' },
  { icon: Clock,  text: 'Reply in 24 hours' },
  { icon: Star,   text: 'No lock-in contract' },
]

export default function CtaBanner({ headline, subtext, primaryBtn, secondaryBtn, showGuarantees = true }: CtaBannerProps) {
  return (
    <section className="py-10 md:py-14 bg-white dark:bg-ink-950">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative rounded-[28px] overflow-hidden">
            <div className="absolute inset-0 bg-ink-900 dark:bg-ink-950" />
            <div aria-hidden className="absolute -top-40 -right-20 w-[500px] h-[500px] rounded-full bg-brand-500/20 blur-[80px]" />
            <div aria-hidden className="absolute -bottom-32 -left-16 w-[380px] h-[380px] rounded-full bg-brand-500/12 blur-[70px]" />
            <div aria-hidden className="absolute inset-0 opacity-[0.04]"
              style={{ backgroundImage:'linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)', backgroundSize:'44px 44px' }} />
            <div aria-hidden className="absolute top-0 left-0 right-0 h-px overflow-hidden">
              <div className="h-px w-1/3 mx-auto bg-gradient-to-r from-transparent via-brand-500/80 to-transparent" />
            </div>
            <div className="relative z-10 px-6 py-12 md:px-16 text-center">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 mb-7">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand-400" />
                </span>
                <span className="text-[0.7rem] font-[700] tracking-[0.1em] uppercase text-white/60">Accepting new clients now</span>
              </div>
              <h2 className="text-[2rem] sm:text-[2.6rem] md:text-[3.2rem] font-[850] tracking-[-0.04em] text-white leading-[1.08] mb-5 text-balance max-w-[560px] mx-auto">{headline}</h2>
              {subtext && <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-[400px] mx-auto">{subtext}</p>}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                <Link href={primaryBtn.href}
                  className="group inline-flex items-center justify-center gap-2 text-base font-[700] text-brand-600 bg-white hover:bg-ink-50 px-8 py-3.5 rounded-xl transition-all hover:-translate-y-px hover:shadow-[0_8px_30px_rgba(255,255,255,0.2)] active:scale-[0.97] shine">
                  {primaryBtn.label}
                </Link>
                {secondaryBtn && (
                  <Link href={secondaryBtn.href}
                    className="inline-flex items-center justify-center gap-2 text-base font-[500] text-white/80 border border-white/20 hover:border-white/40 px-8 py-3.5 rounded-xl transition-all active:scale-[0.97]">
                    <Phone size={15} /> {secondaryBtn.label}
                  </Link>
                )}
              </div>
              {showGuarantees && (
                <div className="flex flex-wrap items-center justify-center gap-5">
                  {guarantees.map(g => (
                    <div key={g.text} className="inline-flex items-center gap-2 text-xs font-[550] text-white/50">
                      <g.icon size={13} className="text-brand-400 flex-shrink-0" /> {g.text}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
