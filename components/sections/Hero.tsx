'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import CountUp from '@/components/ui/CountUp'
import Container from '@/components/ui/Container'
import { ArrowRight, Shield, Clock, Star } from 'lucide-react'
import Link from 'next/link'

const stats = [
  { n: '99%',  label: 'Accuracy Rate',    sub: 'Multi-level QC' },
  { n: '10+',  label: 'Years Experience', sub: 'Since 2014'     },
  { n: '100+', label: 'Clients Served',   sub: 'US, UK, CA, AU' },
  { n: '24/7', label: 'Always On',        sub: 'Any timezone'   },
]

const trustPills = [
  { icon: Shield, text: '30-day guarantee' },
  { icon: Clock,  text: 'First delivery in 7 days' },
  { icon: Star,   text: 'Rated 4.9/5 by clients' },
]

const f = (delay = 0) => ({
  initial:    { opacity: 0, y: 24 },
  animate:    { opacity: 1, y: 0  },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
})

function scrollToContact() {
  const el = document.getElementById('contact')
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 68, behavior: 'smooth' })
}
function scrollToServices() {
  const el = document.getElementById('services')
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 68, behavior: 'smooth' })
}

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y       = useTransform(scrollYProgress, [0, 1], ['0%', '10%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section
      id="hero"
      ref={ref}
      className="relative flex items-center min-h-[calc(100vh-68px)] overflow-hidden
        bg-white dark:bg-ink-950"
    >
      {/* ── Light mode: clean radial + brand accent ── */}
      <div aria-hidden className="absolute inset-0 pointer-events-none
        bg-[radial-gradient(ellipse_70%_55%_at_60%_-10%,rgba(232,68,10,0.05),transparent_70%)]
        dark:bg-[radial-gradient(ellipse_70%_55%_at_60%_-10%,rgba(232,68,10,0.12),transparent_70%)]" />

      {/* Light mode: subtle grid */}
      <div aria-hidden className="absolute inset-0 pointer-events-none opacity-[0.4] dark:opacity-[0.08]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.07) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage: 'radial-gradient(ellipse 80% 70% at 50% 30%, black 20%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 30%, black 20%, transparent 100%)',
        }}
      />

      {/* Dark mode: extra deep glow */}
      <div aria-hidden className="hidden dark:block absolute pointer-events-none
        top-1/3 -left-32 w-[500px] h-[500px] rounded-full
        bg-brand-500/6 blur-[120px]" />

      {/* Animated beam — top edge */}
      <div aria-hidden className="absolute top-0 left-0 right-0 h-px overflow-hidden">
        <div className="h-px w-1/3 bg-gradient-to-r from-transparent via-brand-500/50 to-transparent animate-beam" />
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10 w-full pt-12 pb-20 md:pt-16 md:pb-28">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_430px] gap-16 items-center">

            {/* ── LEFT ── */}
            <div>
              {/* Live badge */}
              <motion.div {...f(0)} className="inline-flex items-center gap-2 mb-8">
                <div className="flex items-center gap-2 bg-brand-50 dark:bg-brand-500/12 border border-brand-200 dark:border-brand-500/25 rounded-full pl-2.5 pr-4 py-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-70 animate-ping" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500" />
                  </span>
                  <span className="text-[0.7rem] font-[750] tracking-[0.08em] uppercase text-brand-600 dark:text-brand-400">
                    Now accepting new clients
                  </span>
                </div>
              </motion.div>

              {/* H1 */}
              <motion.h1 {...f(0.07)}
                className="text-[2.8rem] sm:text-[3.6rem] lg:text-[4.2rem] xl:text-[4.8rem]
                  font-[850] tracking-[-0.05em] leading-[1.03]
                  text-ink-900 dark:text-white mb-6 text-balance"
              >
                Your team should be{' '}
                <span className="text-gradient">growing</span>
                {' '}the business{' '}
                <span className="text-ink-300 dark:text-ink-600">— not buried in busywork.</span>
              </motion.h1>

              <motion.p {...f(0.13)}
                className="text-[1.1rem] md:text-xl text-ink-500 dark:text-ink-400 leading-[1.7] max-w-[520px] mb-3"
              >
                ET Data Solutions takes staffing, data entry, QA testing, and data engineering
                off your plate — so your core team can focus on what actually creates value.
              </motion.p>
              <motion.p {...f(0.17)} className="text-sm text-ink-400 dark:text-ink-500 mb-9">
                India-based. Globally delivered. 99% accuracy. Starting from{' '}
                <span className="font-[650] text-ink-700 dark:text-ink-300">$499/month</span>.
              </motion.p>

              {/* CTAs */}
              <motion.div {...f(0.22)} className="flex flex-col sm:flex-row gap-3 mb-10">
                <button
                  onClick={scrollToContact}
                  className="group inline-flex items-center justify-center gap-2 text-base font-[700]
                    text-white bg-brand-500 hover:bg-brand-600
                    px-8 py-3.5 rounded-xl transition-all duration-200
                    hover:-translate-y-px hover:shadow-brand active:scale-[0.97] shine"
                >
                  Book a Free Consultation
                  <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                </button>
                <button
                  onClick={scrollToServices}
                  className="inline-flex items-center justify-center gap-2 text-base font-[600]
                    text-ink-700 dark:text-ink-300
                    bg-white dark:bg-ink-900
                    border border-ink-200 dark:border-ink-700
                    hover:border-brand-400 dark:hover:border-brand-500/60
                    hover:text-brand-500 dark:hover:text-brand-400
                    px-8 py-3.5 rounded-xl transition-all duration-200
                    hover:-translate-y-px hover:shadow-card active:scale-[0.97]"
                >
                  See What We Handle
                </button>
              </motion.div>

              {/* Trust pills */}
              <motion.div {...f(0.28)} className="flex flex-wrap gap-5">
                {trustPills.map(p => (
                  <div key={p.text} className="inline-flex items-center gap-1.5 text-xs font-[550] text-ink-400 dark:text-ink-500">
                    <p.icon size={13} className="text-brand-500 flex-shrink-0" />
                    {p.text}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* ── RIGHT — Dashboard card ── */}
            <motion.div
              initial={{ opacity: 0, x: 24, scale: 0.96 }}
              animate={{ opacity: 1, x: 0,  scale: 1 }}
              transition={{ duration: 0.75, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:block"
            >
              <div className="relative">
                {/* Glow behind card */}
                <div aria-hidden className="absolute -inset-5 bg-brand-500/8 dark:bg-brand-500/12 rounded-[36px] blur-3xl" />

                {/* The card */}
                <div className="relative bg-white dark:bg-ink-900
                  border border-ink-200 dark:border-white/8
                  rounded-3xl shadow-card-hover dark:shadow-[0_32px_80px_rgba(0,0,0,0.5)]
                  overflow-hidden animate-float">

                  {/* macOS titlebar */}
                  <div className="px-5 py-3.5 border-b border-ink-100 dark:border-white/8 flex items-center gap-2 bg-ink-50/80 dark:bg-white/[0.03]">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                      <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                      <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                    </div>
                    <span className="text-xs font-[600] text-ink-400 dark:text-white/25 ml-2">
                      operations-dashboard.etds
                    </span>
                  </div>

                  {/* Stats grid */}
                  <div className="grid grid-cols-2 gap-px bg-ink-100 dark:bg-white/5">
                    {stats.map(s => (
                      <div
                        key={s.label}
                        className="bg-white dark:bg-ink-900 p-5 hover:bg-ink-50 dark:hover:bg-ink-800/80 transition-colors"
                      >
                        <div className="text-[2rem] font-[850] tracking-[-0.06em] text-brand-500 leading-none mb-1.5">
                          <CountUp value={s.n} />
                        </div>
                        <div className="text-sm font-[650] text-ink-800 dark:text-ink-200 mb-0.5">{s.label}</div>
                        <div className="text-[0.7rem] text-ink-400 dark:text-ink-500 leading-tight">{s.sub}</div>
                      </div>
                    ))}
                  </div>

                  {/* CTA strip */}
                  <div className="px-5 py-4 bg-ink-50/80 dark:bg-white/[0.03] border-t border-ink-100 dark:border-white/8">
                    <button
                      onClick={scrollToContact}
                      className="flex items-center justify-between w-full text-sm font-[650] text-brand-500 hover:text-brand-600 transition-colors group"
                    >
                      <span>Get a free operations audit</span>
                      <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Mobile stats — 2×2 grid */}
          <motion.div {...f(0.32)} className="mt-12 lg:hidden grid grid-cols-2 gap-px bg-ink-200 dark:bg-white/8 border border-ink-200 dark:border-white/10 rounded-2xl overflow-hidden">
            {stats.map(s => (
              <div key={s.label} className="bg-white dark:bg-ink-900 px-5 py-4">
                <div className="text-[1.8rem] font-[850] tracking-[-0.05em] text-brand-500 leading-none mb-1">
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
