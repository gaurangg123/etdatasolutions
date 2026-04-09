'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Button from '@/components/ui/Button'
import CountUp from '@/components/ui/CountUp'
import Container from '@/components/ui/Container'

const stats = [
  { n: '99%',  label: 'Accuracy Rate',    sub: 'Across all services'   },
  { n: '10+',  label: 'Years Delivering', sub: 'In business since 2014' },
  { n: '100+', label: 'Clients Served',   sub: 'US · UK · CA · AU'     },
  { n: '24/7', label: 'Always Operating', sub: 'Zero gaps in delivery' },
]

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '10%'])
  const opacity = useTransform(scrollYProgress, [0, 0.65], [1, 0])

  return (
    <section ref={ref} className="relative flex items-center justify-center overflow-hidden bg-white dark:bg-[#0e0c0b] min-h-[calc(100vh-72px)]">
      {/* Grid */}
      <div aria-hidden className="absolute inset-0 pointer-events-none opacity-[0.35] dark:opacity-[0.12]"
        style={{ backgroundImage:'linear-gradient(rgba(0,0,0,0.07) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,0.07) 1px,transparent 1px)', backgroundSize:'56px 56px', maskImage:'radial-gradient(ellipse 80% 80% at 50% 50%,black 20%,transparent 100%)' }} />
      {/* Glows */}
      <div aria-hidden className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_50%_40%_at_70%_10%,rgba(232,68,10,0.09),transparent_70%)]" />
      <div aria-hidden className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_35%_30%_at_5%_90%,rgba(232,68,10,0.04),transparent_70%)]" />

      <motion.div style={{ y, opacity }} className="relative z-10 w-full">
        <Container className="py-16 sm:py-22 md:py-28">
          <div className="max-w-[820px] mx-auto text-center">
            {/* Trust badge */}
            <motion.div {...fade(0)} className="inline-flex items-center gap-2.5 bg-brand-50 dark:bg-brand-500/10 border border-brand-200 dark:border-brand-500/25 rounded-full px-4 py-2 mb-8">
              <span aria-hidden className="w-2 h-2 rounded-full bg-brand-500 animate-pulse-dot flex-shrink-0" />
              <span className="text-xs font-[700] tracking-[0.09em] uppercase text-brand-500">
                Trusted by 100+ businesses · US · UK · CA · AU · Est. 2014
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1 {...fade(0.07)}
              className="text-[2.8rem] sm:text-[3.6rem] md:text-[4.4rem] lg:text-[5rem] font-[800] tracking-[-0.045em] leading-[1.04] text-neutral-900 dark:text-white mb-5">
              Outsource the work<br className="hidden sm:block" />
              {' '}that&apos;s slowing your{' '}
              <span className="text-brand-500">team down</span>
            </motion.h1>

            {/* Sub */}
            <motion.p {...fade(0.14)}
              className="text-lg md:text-xl text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-[540px] mx-auto mb-3">
              We handle staffing, data entry, QA testing, and data engineering — so your core team can focus on the work that actually moves the needle.
            </motion.p>
            <motion.p {...fade(0.18)} className="text-sm text-neutral-400 dark:text-neutral-500 mb-10">
              India-based. Globally delivered. 99% accuracy guaranteed. From $499/month.
            </motion.p>

            {/* CTAs */}
            <motion.div {...fade(0.24)} className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-14">
              <Button href="/contact#form" variant="primary" size="lg" arrow>
                Book a Free Consultation
              </Button>
              <Button href="/services" variant="secondary" size="lg">
                View Services
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div {...fade(0.30)}
              className="grid grid-cols-2 md:grid-cols-4 border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden gap-px bg-neutral-200 dark:bg-neutral-800 max-w-[680px] mx-auto">
              {stats.map(s => (
                <div key={s.label} className="bg-white dark:bg-[#0e0c0b] px-5 py-5 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors text-left">
                  <div className="text-[1.8rem] md:text-[2rem] font-[800] tracking-[-0.05em] text-brand-500 leading-none mb-1.5">
                    <CountUp value={s.n} />
                  </div>
                  <div className="text-sm font-[650] text-neutral-800 dark:text-neutral-200 mb-0.5">{s.label}</div>
                  <div className="text-xs text-neutral-400 dark:text-neutral-500">{s.sub}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </Container>
      </motion.div>
    </section>
  )
}
