'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import CountUp from '@/components/ui/CountUp'
import Container from '@/components/ui/Container'
import { ArrowRight, Shield, Clock, Star } from 'lucide-react'

const stats = [
  { n: '99%',  label: 'Accuracy Rate',    sub: 'Multi-level QC on every project' },
  { n: '10+',  label: 'Years Experience', sub: 'Operating globally since 2014'   },
  { n: '100+', label: 'Clients Served',   sub: 'Across US, UK, Canada & AU'      },
  { n: '24/7', label: 'Always On',        sub: 'No gaps. Any timezone.'          },
]

const trustPills = [
  { icon: Shield, text: '30-day guarantee' },
  { icon: Clock,  text: 'First delivery in 7 days' },
  { icon: Star,   text: 'Rated 4.9/5 by clients' },
]

const f = (delay = 0) => ({
  initial:    { opacity: 0, y: 20 },
  animate:    { opacity: 1, y: 0  },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
})

function scrollTo(id: string) {
  const el = document.getElementById(id)
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 68, behavior: 'smooth' })
}

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y       = useTransform(scrollYProgress, [0, 1], ['0%', '8%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section
      id="hero"
      ref={ref}
      className="relative overflow-hidden bg-white dark:bg-ink-950"
    >
      {/* ── Light mode subtle radial accent ── */}
      <div aria-hidden className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 65% -5%, rgba(232,68,10,0.06) 0%, transparent 65%)',
        }}
      />
      {/* Dark mode deeper glow */}
      <div aria-hidden className="hidden dark:block absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 65% -5%, rgba(232,68,10,0.14) 0%, transparent 65%), radial-gradient(ellipse 50% 50% at 20% 70%, rgba(14,28,50,0.6) 0%, transparent 70%)',
        }}
      />

      {/* Subtle dot grid — light only */}
      <div aria-hidden className="absolute inset-0 pointer-events-none opacity-[0.35] dark:opacity-0"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.06) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage: 'radial-gradient(ellipse 80% 65% at 50% 25%, black 20%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 65% at 50% 25%, black 20%, transparent 100%)',
        }}
      />

      {/* Animated top beam */}
      <div aria-hidden className="absolute top-0 left-0 right-0 h-px overflow-hidden">
        <div className="h-px w-1/3 bg-gradient-to-r from-transparent via-brand-400/40 to-transparent animate-beam" />
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10">
        {/* ── Top padding tight — content fits at 100% zoom ── */}
        <Container className="py-12 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_430px] gap-10 xl:gap-16 items-center">

            {/* ── LEFT copy ── */}
            <div>
              {/* Live badge — Fix 5: green pulsing dot */}
              <motion.div {...f(0)} className="inline-flex items-center gap-2 mb-5">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-[600] bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  Now accepting new clients
                </span>
              </motion.div>

              {/* H1 — sized so it fits at 100% zoom without overflow */}
              <motion.h1 {...f(0.07)}
                className="font-[850] tracking-[-0.045em] leading-[1.05] text-ink-900 dark:text-white text-balance mb-4
                  text-[2.4rem] sm:text-[3rem] md:text-[3.4rem] lg:text-[3.6rem] xl:text-[4rem]"
              >
                Your team should be{' '}
                <span className="text-gradient">growing</span>
                {' '}the business{' '}
                <span className="text-ink-300 dark:text-ink-600">— not buried in busywork.</span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p {...f(0.13)}
                className="text-[1rem] md:text-[1.075rem] text-ink-500 dark:text-ink-400 leading-[1.65] max-w-[500px] mb-2"
              >
                ET Data Solutions takes staffing, data entry, QA testing, and data engineering
                off your plate — so your core team can focus on what actually creates value.
              </motion.p>

              {/* Tagline */}
              <motion.p {...f(0.17)} className="text-sm text-ink-400 dark:text-ink-500 mb-7">
                India-based. Globally delivered. 99% accuracy. Starting from{' '}
                <span className="font-[650] text-ink-600 dark:text-ink-300">$499/month</span>.
              </motion.p>

              {/* CTAs */}
              <motion.div {...f(0.22)} className="flex flex-col sm:flex-row gap-3 mb-6">
                <button
                  onClick={() => scrollTo('contact')}
                  className="group inline-flex items-center justify-center gap-2
                    text-[0.9375rem] font-[700] text-white bg-brand-500 hover:bg-brand-600
                    px-7 py-3 rounded-xl transition-all duration-200
                    hover:-translate-y-px hover:shadow-brand active:scale-[0.97] shine"
                >
                  Book a Free Consultation
                  <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                </button>
                <button
                  onClick={() => scrollTo('services')}
                  className="inline-flex items-center justify-center gap-2
                    text-[0.9375rem] font-[600] text-ink-700 dark:text-ink-300
                    bg-white dark:bg-ink-900
                    border border-ink-200 dark:border-ink-700
                    hover:border-brand-400 hover:text-brand-500
                    px-7 py-3 rounded-xl transition-all duration-200
                    hover:-translate-y-px hover:shadow-card active:scale-[0.97]"
                >
                  See What We Handle
                </button>
              </motion.div>

              {/* Trust pills */}
              <motion.div {...f(0.28)} className="flex flex-wrap gap-4">
                {trustPills.map(p => (
                  <div key={p.text} className="inline-flex items-center gap-1.5 text-xs font-[550] text-ink-400 dark:text-ink-500">
                    <p.icon size={12} className="text-brand-500 flex-shrink-0" />
                    {p.text}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* ── RIGHT — Dashboard card ── */}
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.97 }}
              animate={{ opacity: 1, x: 0,  scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:block"
            >
              <div className="relative">
                {/* Glow */}
                <div aria-hidden className="absolute -inset-4 bg-brand-500/6 dark:bg-brand-500/10 rounded-[32px] blur-2xl" />

                {/* Card — themed correctly for light/dark */}
                <div className="relative bg-white dark:bg-ink-900
                  border border-ink-200 dark:border-white/8
                  rounded-3xl overflow-hidden animate-float
                  shadow-card-hover dark:shadow-[0_24px_60px_rgba(0,0,0,0.45)]">

                  {/* macOS titlebar */}
                  <div className="px-5 py-3.5 border-b border-ink-100 dark:border-white/6 flex items-center gap-2 bg-ink-50 dark:bg-white/[0.03]">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                    </div>
                    <span className="text-[0.7rem] font-[600] text-ink-400 dark:text-white/30 ml-2">
                      operations-dashboard.etds
                    </span>
                  </div>

                  {/* Stats grid */}
                  <div className="grid grid-cols-2 gap-px bg-ink-100 dark:bg-white/5">
                    {stats.map(s => (
                      <div key={s.label}
                        className="bg-white dark:bg-ink-900 p-4 hover:bg-ink-50 dark:hover:bg-ink-800/80 transition-colors"
                      >
                        <div className="text-[1.75rem] font-[850] tracking-[-0.05em] text-brand-500 leading-none mb-1">
                          <CountUp value={s.n} />
                        </div>
                        <div className="text-[0.8125rem] font-[650] text-ink-800 dark:text-ink-200 mb-0.5">{s.label}</div>
                        <div className="text-[0.675rem] text-ink-400 dark:text-ink-500 leading-tight">{s.sub}</div>
                      </div>
                    ))}
                  </div>

                  {/* CTA strip */}
                  <div className="px-5 py-3.5 bg-ink-50 dark:bg-white/[0.02] border-t border-ink-100 dark:border-white/6">
                    <button
                      onClick={() => scrollTo('contact')}
                      className="flex items-center justify-between w-full text-sm font-[650] text-brand-500 hover:text-brand-600 transition-colors group"
                    >
                      <span>Get a free operations audit</span>
                      <ArrowRight size={13} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Mobile stats 2×2 grid */}
          <motion.div {...f(0.32)}
            className="mt-8 lg:hidden grid grid-cols-2 gap-px bg-ink-200 dark:bg-white/8 border border-ink-200 dark:border-white/10 rounded-2xl overflow-hidden"
          >
            {stats.map(s => (
              <div key={s.label} className="bg-white dark:bg-ink-900 px-4 py-3.5">
                <div className="text-[1.6rem] font-[850] tracking-[-0.05em] text-brand-500 leading-none mb-0.5">
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
