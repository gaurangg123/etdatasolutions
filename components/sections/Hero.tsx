'use client'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import CountUp from '@/components/ui/CountUp'
import Container from '@/components/ui/Container'
import { ArrowRight, Shield, Clock, Star } from 'lucide-react'

const HEADLINES = [
  "Your team should be growing the business — not buried in busywork.",
  "Stop paying full-time salaries for part-time problems.",
  "The best teams delegate everything that doesn't require their genius.",
  "Your competitors aren't working harder — they're outsourcing smarter.",
  "Every hour your team spends on data entry is an hour not spent on growth.",
]
const stats = [
  { n:'99%',  label:'Accuracy Rate',    sub:'Multi-level QC on every project' },
  { n:'10+',  label:'Years Experience', sub:'Operating globally since 2014'   },
  { n:'100+', label:'Clients Served',   sub:'Across US, UK, Canada & AU'      },
  { n:'24/7', label:'Always On',        sub:'No gaps. Any timezone.'          },
]
const trust = [
  { icon:Shield, text:'30-day guarantee' },
  { icon:Clock,  text:'First delivery in 7 days' },
  { icon:Star,   text:'Rated 4.9/5 by clients' },
]
const f = (d=0) => ({ initial:{opacity:0,y:20}, animate:{opacity:1,y:0}, transition:{duration:0.6,delay:d,ease:[0.22,1,0.36,1] as const} })

function RotatingHeadline() {
  const [idx, setIdx] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i+1) % HEADLINES.length), 4000)
    return () => clearInterval(t)
  }, [])
  return (
    <div className="mb-6">
      <div className="relative" style={{ minHeight:'clamp(100px,18vw,180px)' }}>
        <AnimatePresence mode="wait">
          <motion.h1 key={idx}
            initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:-20 }}
            transition={{ duration:0.5, ease:[0.22,1,0.36,1] }}
            className="absolute inset-x-0 text-[clamp(1.75rem,5vw,4rem)] font-[800] tracking-tight leading-[1.1] text-ink-900 dark:text-white text-balance">
            {HEADLINES[idx]}
          </motion.h1>
        </AnimatePresence>
      </div>
      <div className="flex items-center gap-1.5 mt-3">
        {HEADLINES.map((_,i) => (
          <button key={i} onClick={() => setIdx(i)} aria-label={`Headline ${i+1}`}
            className={`rounded-full transition-all duration-300 ${i===idx ? 'w-5 h-1.5 bg-brand-500' : 'w-1.5 h-1.5 bg-ink-300 dark:bg-ink-600 hover:bg-ink-400'}`} />
        ))}
      </div>
    </div>
  )
}

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target:ref, offset:['start start','end start'] })
  const y = useTransform(scrollYProgress, [0,1], ['0%','8%'])
  const opacity = useTransform(scrollYProgress, [0,0.5], [1,0])
  return (
    <section id="hero" ref={ref} className="snap-section relative overflow-hidden bg-white dark:bg-ink-950">
      <div aria-hidden className="absolute inset-0 pointer-events-none" style={{ background:'radial-gradient(ellipse 70% 50% at 65% -5%,rgba(232,68,10,0.06) 0%,transparent 65%)' }} />
      <div aria-hidden className="hidden dark:block absolute inset-0 pointer-events-none" style={{ background:'radial-gradient(ellipse 80% 60% at 65% -5%,rgba(232,68,10,0.14) 0%,transparent 65%)' }} />
      <div aria-hidden className="absolute top-0 left-0 right-0 h-px overflow-hidden">
        <div className="h-px w-1/3 bg-gradient-to-r from-transparent via-brand-400/40 to-transparent animate-beam" />
      </div>
      <motion.div style={{ y, opacity }} className="relative z-10 w-full">
        <Container className="py-6 md:py-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] xl:grid-cols-[1fr_400px] gap-8 xl:gap-12 items-center">
            <div>
              {/* FIX 13B: Pulsing green badge */}
              <motion.div {...f(0)} className="inline-flex items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-[600] bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  Now accepting new clients
                </span>
              </motion.div>
              {/* FIX 13A: Rotating headline */}
              <motion.div {...f(0.05)}><RotatingHeadline /></motion.div>
              <motion.p {...f(0.13)} className="text-[1rem] md:text-[1.05rem] text-ink-500 dark:text-ink-400 leading-[1.65] max-w-[500px] mb-2">
                ET Data Solutions takes staffing, data entry, QA testing, and data engineering off your plate — so your core team can focus on what actually creates value.
              </motion.p>
              <motion.p {...f(0.17)} className="text-sm text-ink-400 dark:text-ink-500 mb-6">
                India-based. Globally delivered. 99% accuracy.
              </motion.p>
              <motion.div {...f(0.22)} className="flex flex-col sm:flex-row gap-3 mb-5">
                <Link href="/contact" className="group inline-flex items-center justify-center gap-2 text-[0.9375rem] font-[700] text-white bg-brand-500 hover:bg-brand-600 px-7 py-3 rounded-xl transition-all hover:-translate-y-px hover:shadow-brand active:scale-[0.97] shine">
                  Book a Free Consultation <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link href="/services" className="inline-flex items-center justify-center gap-2 text-[0.9375rem] font-[600] text-ink-700 dark:text-ink-300 bg-white dark:bg-ink-900 border border-ink-200 dark:border-ink-700 hover:border-brand-400 hover:text-brand-500 px-7 py-3 rounded-xl transition-all hover:-translate-y-px active:scale-[0.97]">
                  See What We Handle
                </Link>
              </motion.div>
              <motion.div {...f(0.28)} className="flex flex-wrap gap-4">
                {trust.map(p => (
                  <div key={p.text} className="inline-flex items-center gap-1.5 text-xs font-[550] text-ink-400 dark:text-ink-500">
                    <p.icon size={12} className="text-brand-500 flex-shrink-0" /> {p.text}
                  </div>
                ))}
              </motion.div>
            </div>
            {/* Dashboard card — hidden on mobile (FIX 14) */}
            <motion.div initial={{ opacity:0, x:20, scale:0.97 }} animate={{ opacity:1, x:0, scale:1 }} transition={{ duration:0.7, delay:0.2, ease:[0.22,1,0.36,1] }} className="hidden lg:block">
              <div className="relative">
                <div aria-hidden className="absolute -inset-4 bg-brand-500/6 dark:bg-brand-500/10 rounded-[32px] blur-2xl" />
                <div className="relative bg-white dark:bg-ink-900 border border-ink-200 dark:border-white/8 rounded-3xl overflow-hidden animate-float shadow-card-hover">
                  <div className="px-5 py-3 border-b border-ink-100 dark:border-white/6 flex items-center gap-2 bg-ink-50 dark:bg-white/[0.03]">
                    <div className="flex gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]"/><div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]"/><div className="w-2.5 h-2.5 rounded-full bg-[#28c840]"/></div>
                    <span className="text-[0.68rem] font-[600] text-ink-400 dark:text-white/30 ml-2">operations-dashboard.etds</span>
                  </div>
                  <div className="grid grid-cols-2 gap-px bg-ink-100 dark:bg-white/5">
                    {stats.map(s => (
                      <div key={s.label} className="bg-white dark:bg-ink-900 p-4 hover:bg-ink-50 dark:hover:bg-ink-800/80 transition-colors">
                        <div className="text-[1.6rem] font-[850] tracking-[-0.05em] text-brand-500 leading-none mb-1"><CountUp value={s.n} /></div>
                        <div className="text-[0.8rem] font-[650] text-ink-800 dark:text-ink-200 mb-0.5">{s.label}</div>
                        <div className="text-[0.65rem] text-ink-400 dark:text-ink-500 leading-tight">{s.sub}</div>
                      </div>
                    ))}
                  </div>
                  <div className="px-5 py-3 bg-ink-50 dark:bg-white/[0.02] border-t border-ink-100 dark:border-white/6">
                    <Link href="/contact" className="flex items-center justify-between w-full text-sm font-[650] text-brand-500 hover:text-brand-600 transition-colors group">
                      <span>Get a free operations audit</span>
                      <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          {/* Mobile stats 2×2 (FIX 14) */}
          <motion.div {...f(0.32)} className="mt-6 lg:hidden grid grid-cols-2 gap-px bg-ink-200 dark:bg-white/8 border border-ink-200 dark:border-white/10 rounded-2xl overflow-hidden">
            {stats.map(s => (
              <div key={s.label} className="bg-white dark:bg-ink-900 px-4 py-3">
                <div className="text-[1.4rem] font-[850] tracking-[-0.05em] text-brand-500 leading-none mb-0.5"><CountUp value={s.n} /></div>
                <div className="text-xs font-[650] text-ink-800 dark:text-ink-200">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </Container>
      </motion.div>
    </section>
  )
}
