'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Button from '@/components/ui/Button'
import CountUp from '@/components/ui/CountUp'
import Container from '@/components/ui/Container'
import { ArrowRight, Shield, Clock, Star } from 'lucide-react'
import Link from 'next/link'

const stats = [
  { n:'99%',  label:'Accuracy Rate',    sub:'Multi-level QC on every project' },
  { n:'10+',  label:'Years Experience', sub:'Operating globally since 2014'   },
  { n:'100+', label:'Clients Served',   sub:'Across US, UK, Canada & AU'      },
  { n:'24/7', label:'Always On',        sub:'No gaps. Any timezone.'          },
]

const trustPills = [
  { icon: Shield, text: '30-day guarantee' },
  { icon: Clock,  text: 'First delivery in 7 days' },
  { icon: Star,   text: 'Rated 4.9/5 by clients' },
]

const f = (delay = 0) => ({
  initial:    { opacity:0, y:20 },
  animate:    { opacity:1, y:0  },
  transition: { duration:0.6, delay, ease:[0.22,1,0.36,1] },
})

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target:ref, offset:['start start','end start'] })
  const y       = useTransform(scrollYProgress, [0,1], ['0%','8%'])
  const opacity = useTransform(scrollYProgress, [0,0.6], [1,0])

  return (
    <section
      ref={ref}
      className="relative flex items-center min-h-[calc(100vh-68px)] overflow-hidden bg-surface dark:bg-ink-950"
    >
      {/* ── Fine dot grid background ── */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          maskImage: 'radial-gradient(ellipse 75% 75% at 50% 40%, black 30%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 75% 75% at 50% 40%, black 30%, transparent 100%)',
          opacity: 0.45,
        }}
      />
      <div aria-hidden className="dark:opacity-[0.15] opacity-0 absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* ── Brand glow ── */}
      <div aria-hidden className="absolute pointer-events-none inset-0
        bg-[radial-gradient(ellipse_60%_50%_at_60%_-5%,rgba(232,68,10,0.07),transparent_75%)]
        dark:bg-[radial-gradient(ellipse_60%_50%_at_60%_-5%,rgba(232,68,10,0.12),transparent_75%)]" />
      <div aria-hidden className="absolute pointer-events-none
        top-1/4 -left-40 w-[500px] h-[500px] rounded-full
        bg-brand-500/5 dark:bg-brand-500/8 blur-[100px]" />

      {/* ── Animated beam ── */}
      <div aria-hidden className="absolute top-0 left-0 right-0 h-px overflow-hidden">
        <div className="h-px w-1/3 bg-gradient-to-r from-transparent via-brand-500/60 to-transparent animate-beam" />
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10 w-full pt-10 pb-16 md:pt-14 md:pb-24">
        <Container>
          {/* Two-column layout on large screens */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-16 items-center">

            {/* ── LEFT — copy ── */}
            <div>
              {/* Status badge */}
              <motion.div {...f(0)} className="inline-flex items-center gap-2 mb-7">
                <div className="flex items-center gap-2 bg-brand-50 dark:bg-brand-500/10 border border-brand-200 dark:border-brand-500/20 rounded-full pl-2.5 pr-4 py-1.5">
                  <span aria-hidden className="w-2 h-2 rounded-full bg-brand-500 animate-pulse-dot flex-shrink-0" />
                  <span className="text-xs font-[700] tracking-[0.08em] uppercase text-brand-600 dark:text-brand-400">
                    Now accepting new clients
                  </span>
                </div>
              </motion.div>

              {/* H1 */}
              <motion.h1 {...f(0.06)}
                className="text-[2.6rem] sm:text-[3.2rem] lg:text-[3.8rem] xl:text-[4.4rem] font-[800] tracking-[-0.045em] leading-[1.05] text-ink-900 dark:text-white mb-6 text-balance"
              >
                Your team should be{' '}
                <span className="relative">
                  <span className="text-gradient">growing</span>
                </span>
                {' '}the business —{' '}
                <span className="text-ink-400 dark:text-ink-500">not buried in busywork.</span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p {...f(0.12)}
                className="text-[1.1rem] md:text-xl text-ink-500 dark:text-ink-400 leading-[1.7] max-w-[520px] mb-4"
              >
                ET Data Solutions takes staffing, data entry, QA testing, and data engineering off your plate — so your core team can focus on what actually creates value.
              </motion.p>
              <motion.p {...f(0.16)} className="text-sm text-ink-400 dark:text-ink-500 mb-9">
                India-based. Globally delivered. 99% accuracy. Starting from{' '}
                <span className="font-[650] text-ink-700 dark:text-ink-300">$499/month</span>.
              </motion.p>

              {/* CTAs */}
              <motion.div {...f(0.22)} className="flex flex-col sm:flex-row gap-3 mb-9">
                <Button href="/contact#form" variant="primary" size="xl" arrow className="shine">
                  Book a Free Consultation
                </Button>
                <Button href="/services" variant="secondary" size="xl">
                  See What We Handle
                </Button>
              </motion.div>

              {/* Trust pills */}
              <motion.div {...f(0.28)} className="flex flex-wrap gap-3">
                {trustPills.map(p => (
                  <div key={p.text} className="inline-flex items-center gap-1.5 text-xs font-[550] text-ink-500 dark:text-ink-400">
                    <p.icon size={13} className="text-brand-500 flex-shrink-0" />
                    {p.text}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* ── RIGHT — stats card ── */}
            <motion.div
              initial={{ opacity:0, x:20, scale:0.97 }}
              animate={{ opacity:1, x:0,  scale:1 }}
              transition={{ duration:0.7, delay:0.2, ease:[0.22,1,0.36,1] }}
              className="hidden lg:block"
            >
              <div className="relative">
                {/* Floating glow */}
                <div aria-hidden className="absolute -inset-4 bg-brand-500/5 dark:bg-brand-500/10 rounded-[32px] blur-2xl" />

                {/* Card */}
                <div className="relative bg-white dark:bg-ink-900 border border-ink-200 dark:border-ink-800 rounded-3xl shadow-card-hover overflow-hidden animate-float">
                  {/* Header */}
                  <div className="px-6 py-4 border-b border-ink-100 dark:border-ink-800 flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                      <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                      <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                    </div>
                    <span className="text-xs font-[600] text-ink-400 ml-2">operations-dashboard.etds</span>
                  </div>

                  {/* Stats grid */}
                  <div className="grid grid-cols-2 gap-px bg-ink-100 dark:bg-ink-800">
                    {stats.map((s, i) => (
                      <div
                        key={s.label}
                        className={`bg-white dark:bg-ink-900 p-5 transition-colors hover:bg-ink-50 dark:hover:bg-ink-800/80 ${i === 0 ? '' : ''}`}
                      >
                        <div className="text-[2rem] font-[800] tracking-[-0.05em] text-brand-500 leading-none mb-1.5">
                          <CountUp value={s.n} />
                        </div>
                        <div className="text-sm font-[650] text-ink-800 dark:text-ink-200 mb-0.5">{s.label}</div>
                        <div className="text-[0.72rem] text-ink-400 dark:text-ink-500 leading-tight">{s.sub}</div>
                      </div>
                    ))}
                  </div>

                  {/* Bottom CTA strip */}
                  <div className="px-5 py-4 bg-ink-50 dark:bg-ink-950 border-t border-ink-100 dark:border-ink-800">
                    <Link
                      href="/contact#form"
                      className="flex items-center justify-between text-sm font-[650] text-brand-500 hover:text-brand-600 transition-colors group"
                    >
                      <span>Get a free operations audit</span>
                      <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ── Mobile stats strip ── */}
          <motion.div {...f(0.32)} className="mt-12 lg:hidden grid grid-cols-2 gap-px bg-ink-200 dark:bg-ink-800 border border-ink-200 dark:border-ink-800 rounded-2xl overflow-hidden">
            {stats.map(s => (
              <div key={s.label} className="bg-white dark:bg-ink-900 px-5 py-4">
                <div className="text-[1.7rem] font-[800] tracking-[-0.05em] text-brand-500 leading-none mb-1">
                  <CountUp value={s.n} />
                </div>
                <div className="text-sm font-[650] text-ink-800 dark:text-ink-200">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </Container>
      </motion.div>
    </section>
  )
}
