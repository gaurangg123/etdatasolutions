'use client'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import CountUp from '@/components/ui/CountUp'
import Container from '@/components/ui/Container'
import { ArrowRight, Shield, Clock, Star } from 'lucide-react'

const headlines = [
  "Your team should be growing the business — not buried in busywork.",
  "Stop paying full-time salaries for part-time problems.",
  "The best teams delegate everything that doesn't require their genius.",
  "Your competitors aren't working harder — they're outsourcing smarter.",
  "Every hour your team spends on data entry is an hour not spent on growth.",
]

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
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
})

function RotatingHeadline() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(i => (i + 1) % headlines.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="mb-6">
      {/* Fixed-height container to prevent layout shift */}
      <div className="relative min-h-[7rem] sm:min-h-[8rem] md:min-h-[9rem] lg:min-h-[10rem]">
        <AnimatePresence mode="wait">
          <motion.h1
            key={index}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-x-0 text-[clamp(1.7rem,5vw,3.6rem)] font-[850] tracking-[-0.045em] leading-[1.1] text-ink-900 dark:text-white text-balance"
          >
            {headlines[index]}
          </motion.h1>
        </AnimatePresence>
      </div>

      {/* Dot indicators */}
      <div className="flex items-center gap-1.5 mt-3">
        {headlines.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Headline ${i + 1}`}
            className={`transition-all duration-300 rounded-full ${
              i === index
                ? 'w-5 h-1.5 bg-brand-500'
                : 'w-1.5 h-1.5 bg-ink-300 dark:bg-ink-600 hover:bg-ink-400 dark:hover:bg-ink-500'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y       = useTransform(scrollYProgress, [0, 1], ['0%', '8%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section id="hero" ref={ref} className="relative overflow-hidden bg-white dark:bg-ink-950">
      {/* Backgrounds */}
      <div aria-hidden className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 50% at 65% -5%, rgba(232,68,10,0.06) 0%, transparent 65%)' }} />
      <div aria-hidden className="hidden dark:block absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 65% -5%, rgba(232,68,10,0.14) 0%, transparent 65%), radial-gradient(ellipse 50% 50% at 20% 70%, rgba(14,28,50,0.6) 0%, transparent 70%)' }} />
      <div aria-hidden className="absolute inset-0 pointer-events-none opacity-[0.35] dark:opacity-0"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.06) 1px, transparent 1px)', backgroundSize: '32px 32px', maskImage: 'radial-gradient(ellipse 80% 65% at 50% 25%, black 20%, transparent 100%)', WebkitMaskImage: 'radial-gradient(ellipse 80% 65% at 50% 25%, black 20%, transparent 100%)' }} />
      <div aria-hidden className="absolute top-0 left-0 right-0 h-px overflow-hidden">
        <div className="h-px w-1/3 bg-gradient-to-r from-transparent via-brand-400/40 to-transparent animate-beam" />
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10">
        <Container className="py-10 md:py-14 lg:py-18">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_420px] gap-8 xl:gap-14 items-center">

            {/* Left */}
            <div>
              {/* Badge — pulsing green dot */}
              <motion.div {...f(0)} className="inline-flex items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-[600] bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  Now accepting new clients
                </span>
              </motion.div>

              {/* A3: Rotating headline */}
              <motion.div {...f(0.05)}>
                <RotatingHeadline />
              </motion.div>

              <motion.p {...f(0.13)} className="text-[1rem] md:text-[1.05rem] text-ink-500 dark:text-ink-400 leading-[1.65] max-w-[500px] mb-2">
                ET Data Solutions takes staffing, data entry, QA testing, and data engineering off your plate — so your core team can focus on what actually creates value.
              </motion.p>

              {/* A2: No $499/month */}
              <motion.p {...f(0.17)} className="text-sm text-ink-400 dark:text-ink-500 mb-7">
                India-based. Globally delivered. 99% accuracy.
              </motion.p>

              <motion.div {...f(0.22)} className="flex flex-col sm:flex-row gap-3 mb-6">
                <Link href="/contact"
                  className="group inline-flex items-center justify-center gap-2 text-[0.9375rem] font-[700] text-white bg-brand-500 hover:bg-brand-600 px-7 py-3 rounded-xl transition-all duration-200 hover:-translate-y-px hover:shadow-brand active:scale-[0.97] shine">
                  Book a Free Consultation
                  <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
                <Link href="/services"
                  className="inline-flex items-center justify-center gap-2 text-[0.9375rem] font-[600] text-ink-700 dark:text-ink-300 bg-white dark:bg-ink-900 border border-ink-200 dark:border-ink-700 hover:border-brand-400 hover:text-brand-500 px-7 py-3 rounded-xl transition-all duration-200 hover:-translate-y-px hover:shadow-card active:scale-[0.97]">
                  See What We Handle
                </Link>
              </motion.div>

              <motion.div {...f(0.28)} className="flex flex-wrap gap-4">
                {trustPills.map(p => (
                  <div key={p.text} className="inline-flex items-center gap-1.5 text-xs font-[550] text-ink-400 dark:text-ink-500">
                    <p.icon size={12} className="text-brand-500 flex-shrink-0" /> {p.text}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right — dashboard card, hidden on mobile */}
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.97 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div aria-hidden className="absolute -inset-4 bg-brand-500/6 dark:bg-brand-500/10 rounded-[32px] blur-2xl" />
                <div className="relative bg-white dark:bg-ink-900 border border-ink-200 dark:border-white/8 rounded-3xl overflow-hidden animate-float shadow-card-hover dark:shadow-[0_24px_60px_rgba(0,0,0,0.45)]">
                  <div className="px-5 py-3 border-b border-ink-100 dark:border-white/6 flex items-center gap-2 bg-ink-50 dark:bg-white/[0.03]">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                    </div>
                    <span className="text-[0.7rem] font-[600] text-ink-400 dark:text-white/30 ml-2">operations-dashboard.etds</span>
                  </div>
                  <div className="grid grid-cols-2 gap-px bg-ink-100 dark:bg-white/5">
                    {stats.map(s => (
                      <div key={s.label} className="bg-white dark:bg-ink-900 p-4 hover:bg-ink-50 dark:hover:bg-ink-800/80 transition-colors">
                        <div className="text-[1.75rem] font-[850] tracking-[-0.05em] text-brand-500 leading-none mb-1"><CountUp value={s.n} /></div>
                        <div className="text-[0.8125rem] font-[650] text-ink-800 dark:text-ink-200 mb-0.5">{s.label}</div>
                        <div className="text-[0.675rem] text-ink-400 dark:text-ink-500 leading-tight">{s.sub}</div>
                      </div>
                    ))}
                  </div>
                  <div className="px-5 py-3 bg-ink-50 dark:bg-white/[0.02] border-t border-ink-100 dark:border-white/6">
                    <Link href="/contact" className="flex items-center justify-between w-full text-sm font-[650] text-brand-500 hover:text-brand-600 transition-colors group">
                      <span>Get a free operations audit</span>
                      <ArrowRight size={13} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Mobile stats — 2×2 grid */}
          <motion.div {...f(0.32)} className="mt-8 lg:hidden grid grid-cols-2 gap-px bg-ink-200 dark:bg-white/8 border border-ink-200 dark:border-white/10 rounded-2xl overflow-hidden">
            {stats.map(s => (
              <div key={s.label} className="bg-white dark:bg-ink-900 px-4 py-3.5">
                <div className="text-[1.6rem] font-[850] tracking-[-0.05em] text-brand-500 leading-none mb-0.5"><CountUp value={s.n} /></div>
                <div className="text-sm font-[650] text-ink-800 dark:text-ink-200">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </Container>
      </motion.div>
    </section>
  )
}
