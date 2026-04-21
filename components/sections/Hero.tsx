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
      // Item 8: subtle gradient/mesh dark navy background
      className="relative flex items-center min-h-[calc(100vh-68px)] overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0a0908 0%, #13110e 45%, #0d1118 100%)',
      }}
    >
      {/* ── Mesh gradient background — item 8 ── */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 65% 40%, rgba(232,68,10,0.09) 0%, transparent 65%), radial-gradient(ellipse 50% 50% at 20% 70%, rgba(14,28,50,0.8) 0%, transparent 70%), radial-gradient(ellipse 60% 70% at 85% 15%, rgba(0,89,166,0.06) 0%, transparent 60%)',
        }}
      />

      {/* ── Fine dot grid ── */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.18]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.18) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          maskImage: 'radial-gradient(ellipse 75% 75% at 50% 40%, black 30%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 75% 75% at 50% 40%, black 30%, transparent 100%)',
        }}
      />

      {/* ── Brand glow ── */}
      <div aria-hidden className="absolute pointer-events-none inset-0
        bg-[radial-gradient(ellipse_60%_50%_at_60%_-5%,rgba(232,68,10,0.13),transparent_75%)]" />
      <div aria-hidden className="absolute pointer-events-none
        top-1/4 -left-40 w-[500px] h-[500px] rounded-full
        bg-brand-500/8 blur-[120px]" />

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
              {/* Item 33: "Now accepting new clients" as proper pill badge with pulsing dot */}
              <motion.div {...f(0)} className="inline-flex items-center gap-2 mb-7">
                <div className="flex items-center gap-2 bg-brand-500/15 border border-brand-500/30 rounded-full pl-2.5 pr-4 py-1.5 shadow-[0_0_20px_rgba(232,68,10,0.15)]">
                  <span aria-hidden className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75 animate-ping" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500" />
                  </span>
                  <span className="text-xs font-[700] tracking-[0.08em] uppercase text-brand-300">
                    Now accepting new clients
                  </span>
                </div>
              </motion.div>

              {/* Item 5: H1 at 56–64px desktop */}
              <motion.h1 {...f(0.06)}
                className="text-[2.6rem] sm:text-[3.4rem] lg:text-[4rem] xl:text-[4.6rem] font-[800] tracking-[-0.045em] leading-[1.04] text-white mb-6 text-balance"
              >
                Your team should be{' '}
                <span className="relative">
                  <span className="text-gradient">growing</span>
                </span>
                {' '}the business —{' '}
                <span className="text-white/40">not buried in busywork.</span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p {...f(0.12)}
                className="text-[1.1rem] md:text-xl text-white/60 leading-[1.7] max-w-[520px] mb-4"
              >
                ET Data Solutions takes staffing, data entry, QA testing, and data engineering off your plate — so your core team can focus on what actually creates value.
              </motion.p>
              <motion.p {...f(0.16)} className="text-sm text-white/40 mb-9">
                India-based. Globally delivered. 99% accuracy. Starting from{' '}
                <span className="font-[650] text-white/70">$499/month</span>.
              </motion.p>

              {/* CTAs — item 3: clear primary/secondary hierarchy */}
              <motion.div {...f(0.22)} className="flex flex-col sm:flex-row gap-3 mb-9">
                <Button href="/contact#form" variant="primary" size="xl" arrow className="shine">
                  Book a Free Consultation
                </Button>
                {/* Secondary — outlined ghost on dark bg */}
                <Link href="/services"
                  className="inline-flex items-center justify-center gap-2 text-base font-[600] text-white/80 border border-white/20 hover:border-white/40 hover:bg-white/8 hover:text-white px-8 py-3.5 rounded-xl transition-all duration-200 active:scale-[0.97]"
                >
                  See What We Handle
                </Link>
              </motion.div>

              {/* Trust pills */}
              <motion.div {...f(0.28)} className="flex flex-wrap gap-4">
                {trustPills.map(p => (
                  <div key={p.text} className="inline-flex items-center gap-1.5 text-xs font-[550] text-white/50">
                    <p.icon size={13} className="text-brand-400 flex-shrink-0" />
                    {p.text}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* ── RIGHT — stats card — item 8: floating UI with glow/shadow ── */}
            <motion.div
              initial={{ opacity:0, x:20, scale:0.97 }}
              animate={{ opacity:1, x:0,  scale:1 }}
              transition={{ duration:0.7, delay:0.2, ease:[0.22,1,0.36,1] }}
              className="hidden lg:block"
            >
              <div className="relative">
                {/* Floating glow — item 8 */}
                <div aria-hidden className="absolute -inset-6 bg-brand-500/12 rounded-[36px] blur-3xl" />
                <div aria-hidden className="absolute -inset-1 bg-white/[0.03] rounded-[30px] blur-sm" />

                {/* Card — item 8: real floating UI element feel */}
                <div className="relative bg-ink-900/95 border border-white/10 rounded-3xl shadow-[0_32px_80px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.06)] overflow-hidden animate-float backdrop-blur-xl">
                  {/* Header */}
                  <div className="px-6 py-4 border-b border-white/8 flex items-center gap-2 bg-white/[0.03]">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                      <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                      <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                    </div>
                    <span className="text-xs font-[600] text-white/30 ml-2">operations-dashboard.etds</span>
                  </div>

                  {/* Stats grid */}
                  <div className="grid grid-cols-2 gap-px bg-white/5">
                    {stats.map((s) => (
                      <div
                        key={s.label}
                        className="bg-ink-900/95 p-5 transition-colors hover:bg-ink-800/95"
                      >
                        <div className="text-[2rem] font-[800] tracking-[-0.05em] text-brand-400 leading-none mb-1.5">
                          <CountUp value={s.n} />
                        </div>
                        <div className="text-sm font-[650] text-white/80 mb-0.5">{s.label}</div>
                        <div className="text-[0.72rem] text-white/35 leading-tight">{s.sub}</div>
                      </div>
                    ))}
                  </div>

                  {/* Bottom CTA strip */}
                  <div className="px-5 py-4 bg-white/[0.03] border-t border-white/8">
                    <Link
                      href="/contact#form"
                      className="flex items-center justify-between text-sm font-[650] text-brand-400 hover:text-brand-300 transition-colors group"
                    >
                      <span>Get a free operations audit</span>
                      <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ── Mobile stats strip — item 7: 2×2 grid on mobile ── */}
          <motion.div {...f(0.32)} className="mt-12 lg:hidden grid grid-cols-2 gap-px bg-white/8 border border-white/10 rounded-2xl overflow-hidden">
            {stats.map(s => (
              <div key={s.label} className="bg-ink-900/95 px-5 py-4">
                <div className="text-[1.7rem] font-[800] tracking-[-0.05em] text-brand-400 leading-none mb-1">
                  <CountUp value={s.n} />
                </div>
                <div className="text-sm font-[650] text-white/70">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </Container>
      </motion.div>
    </section>
  )
}
