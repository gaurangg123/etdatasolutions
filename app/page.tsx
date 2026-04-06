'use client'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Users, Database, CheckSquare, BarChart2, Check, Clock, Lock, Globe, ChevronRight } from 'lucide-react'
import { services } from '@/lib/services'
import AnimateIn from '@/components/ui/AnimateIn'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
})

const svcIcons: Record<string, React.ReactNode> = {
  staffing: <Users size={20} />,
  data:     <Database size={20} />,
  qa:       <CheckSquare size={20} />,
  dataeng:  <BarChart2 size={20} />,
}

const stats = [
  { n: '99%',  l: 'Accuracy Rate'    },
  { n: '10+',  l: 'Years Active'     },
  { n: '4',    l: 'Verticals'        },
  { n: '24/7', l: 'Availability'     },
]

const whyItems = [
  { icon: Check,  title: '99% Accuracy Guaranteed',    desc: 'Multi-level QC from operator to specialist — every single project.'       },
  { icon: Clock,  title: 'Any Scale, Any Timeline',    desc: 'Short or long-term. A single project or an ongoing relationship.'          },
  { icon: Lock,   title: 'Secure & Confidential',      desc: 'Utmost integrity for all time-critical, information-sensitive assignments.' },
  { icon: Globe,  title: 'India-based Cost Advantage', desc: 'World-class skills at competitive rates with round-the-clock availability.' },
]

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0])

  return (
    <>
      {/* HERO */}
      <section ref={heroRef} className="relative flex flex-col items-center justify-center overflow-hidden bg-white dark:bg-[#0e0c0b] min-h-[calc(100vh-68px)]">
        <div className="absolute inset-0 opacity-50 dark:opacity-25 pointer-events-none" style={{ backgroundImage:'linear-gradient(rgba(0,0,0,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,0.06) 1px,transparent 1px)', backgroundSize:'54px 54px', maskImage:'radial-gradient(ellipse 85% 85% at 50% 50%,black 20%,transparent 100%)' }} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_62%_20%,rgba(232,68,10,0.07),transparent_65%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_35%_at_5%_80%,rgba(232,68,10,0.04),transparent_65%)] pointer-events-none" />

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 text-center px-6 py-20 max-w-[860px] mx-auto w-full">
          <motion.div {...fade(0)} className="inline-flex items-center gap-2 bg-brand-50 dark:bg-brand-500/10 border border-brand-200 dark:border-brand-500/25 rounded-full px-3.5 py-1.5 mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse-dot flex-shrink-0" />
            <span className="text-[0.67rem] font-[700] tracking-[0.1em] uppercase text-brand-500">India-based · Global reach · Est. 2014</span>
          </motion.div>

          <motion.h1 {...fade(0.07)} className="text-[clamp(2.6rem,5.5vw,4.8rem)] font-[800] tracking-[-0.045em] leading-[1.06] text-neutral-900 dark:text-neutral-50 mb-5">
            Intelligent data solutions<br />for the <span className="text-brand-500">modern enterprise</span>
          </motion.h1>

          <motion.p {...fade(0.14)} className="text-[1.05rem] text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-[480px] mx-auto mb-9">
            Cost-effective outsourcing for staffing, data processing, QA testing, and data engineering — built for businesses that demand precision and scale.
          </motion.p>

          <motion.div {...fade(0.21)} className="flex flex-wrap items-center justify-center gap-3 mb-14">
            <Link href="/contact#form" className="inline-flex items-center gap-2 text-sm font-[600] text-white bg-brand-500 hover:bg-brand-600 px-6 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(232,68,10,0.35)]">
              Get a Free Consultation <ArrowRight size={14} />
            </Link>
            <Link href="/services" className="inline-flex items-center gap-2 text-sm font-[500] text-neutral-700 dark:text-neutral-300 bg-white dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700 hover:border-brand-400 dark:hover:border-brand-500 px-6 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5">
              Explore Services
            </Link>
          </motion.div>

          <motion.div {...fade(0.28)} className="grid grid-cols-2 md:grid-cols-4 border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden max-w-[560px] mx-auto gap-px bg-neutral-200 dark:bg-neutral-800">
            {stats.map(s => (
              <div key={s.l} className="bg-white dark:bg-[#0e0c0b] px-5 py-4 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors duration-150 text-left">
                <div className="text-[1.6rem] font-[800] tracking-[-0.05em] text-brand-500 leading-none mb-1">{s.n}</div>
                <div className="text-[0.61rem] font-[600] tracking-[0.08em] uppercase text-neutral-400 dark:text-neutral-500">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* SERVICES */}
      <section className="py-24 bg-neutral-50 dark:bg-[#0a0908]">
        <div className="max-w-[1180px] mx-auto px-6">
          <AnimateIn><span className="text-[0.67rem] font-[700] tracking-[0.12em] uppercase text-brand-500 mb-3 block">What we do</span></AnimateIn>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <AnimateIn delay={0.07}><h2 className="text-3xl md:text-4xl font-[800] tracking-[-0.04em] text-neutral-900 dark:text-neutral-50 leading-[1.1]">Four verticals.<br />One partner.</h2></AnimateIn>
            <AnimateIn delay={0.14}><p className="text-neutral-500 dark:text-neutral-400 max-w-[360px] text-sm leading-relaxed">From talent acquisition to data lakehouses, from manual QA to Excel automation — operational complexity handled end-to-end.</p></AnimateIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden bg-neutral-200 dark:bg-neutral-800 gap-px">
            {services.map((svc, i) => (
              <AnimateIn key={svc.id} delay={i * 0.07}>
                <Link href={`/services#${svc.id}`} className="group relative flex flex-col h-full bg-white dark:bg-[#111] p-8 hover:bg-neutral-50 dark:hover:bg-[#151515] transition-colors duration-200 overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-500 to-brand-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-xl bg-brand-50 dark:bg-brand-500/10 border border-brand-100 dark:border-brand-500/20 flex items-center justify-center text-brand-500 group-hover:bg-brand-500 group-hover:text-white group-hover:border-brand-500 transition-all duration-200">
                      {svcIcons[svc.id]}
                    </div>
                    <span className="text-[0.61rem] font-[700] tracking-[0.14em] uppercase text-neutral-300 dark:text-neutral-700">{svc.num}</span>
                  </div>
                  <h3 className="text-[1rem] font-[700] tracking-[-0.02em] text-neutral-900 dark:text-neutral-100 mb-2">{svc.title}</h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-5 flex-1">{svc.description.slice(0, 115)}…</p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {svc.tags.slice(0, 3).map(t => (
                      <span key={t} className="text-[0.67rem] font-[500] text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 px-2.5 py-1 rounded-full">{t}</span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-[600] text-brand-500 group-hover:gap-2.5 transition-all duration-200">Learn more <ChevronRight size={12} /></span>
                </Link>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <div className="h-px bg-neutral-200 dark:bg-neutral-800" />

      {/* WHY US */}
      <section className="py-24 bg-white dark:bg-[#0e0c0b]">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <AnimateIn><span className="text-[0.67rem] font-[700] tracking-[0.12em] uppercase text-brand-500 mb-3 block">Why ET Data Solutions</span></AnimateIn>
              <AnimateIn delay={0.07}><h2 className="text-3xl md:text-4xl font-[800] tracking-[-0.04em] leading-[1.1] text-neutral-900 dark:text-neutral-50 mb-5">Accuracy is our<br />bottom line</h2></AnimateIn>
              <AnimateIn delay={0.14}><p className="text-neutral-500 dark:text-neutral-400 leading-relaxed text-[0.95rem] mb-8 max-w-[400px]">All personnel are constantly monitored for quality. Operators, supervisors, trainers, verifiers and QC specialists — all trained to ensure the highest possible accuracy.</p></AnimateIn>
              <AnimateIn delay={0.2} className="flex flex-wrap gap-3">
                <Link href="/about" className="inline-flex items-center gap-2 text-sm font-[600] text-white bg-brand-500 hover:bg-brand-600 px-5 py-2.5 rounded-xl transition-all duration-150 hover:-translate-y-px hover:shadow-[0_6px_20px_rgba(232,68,10,0.3)]">About the company</Link>
                <Link href="/contact#form" className="inline-flex items-center gap-2 text-sm font-[500] text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700 hover:border-brand-400 dark:hover:border-brand-500 px-5 py-2.5 rounded-xl transition-all duration-150 hover:-translate-y-px">Let&apos;s talk</Link>
              </AnimateIn>
            </div>
            <div className="flex flex-col gap-3">
              {whyItems.map((item, i) => (
                <AnimateIn key={item.title} delay={i * 0.08}>
                  <div className="group flex items-start gap-4 p-5 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl hover:border-brand-300 dark:hover:border-brand-500/40 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:translate-x-1 transition-all duration-250">
                    <div className="w-9 h-9 rounded-lg bg-brand-50 dark:bg-brand-500/10 border border-brand-100 dark:border-brand-500/20 flex items-center justify-center text-brand-500 flex-shrink-0">
                      <item.icon size={15} />
                    </div>
                    <div>
                      <h4 className="text-sm font-[700] text-neutral-900 dark:text-neutral-100 mb-1 tracking-[-0.01em]">{item.title}</h4>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="h-px bg-neutral-200 dark:bg-neutral-800" />

      {/* CTA */}
      <section className="py-24 bg-neutral-50 dark:bg-[#0a0908]">
        <div className="max-w-[1180px] mx-auto px-6">
          <AnimateIn>
            <div className="relative rounded-3xl bg-brand-500 overflow-hidden px-10 py-20 md:px-20 text-center">
              <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage:'linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)', backgroundSize:'44px 44px' }} />
              <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-white/10 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-white/10 blur-3xl pointer-events-none" />
              <div className="relative z-10 max-w-[540px] mx-auto">
                <span className="text-[0.67rem] font-[700] tracking-[0.12em] uppercase text-white/55 mb-4 block">Get started</span>
                <h2 className="text-3xl md:text-[2.6rem] font-[800] tracking-[-0.04em] text-white leading-[1.1] mb-4">Ready to streamline<br />your operations?</h2>
                <p className="text-white/70 text-base leading-relaxed mb-8 max-w-[400px] mx-auto">Whether you have an ongoing requirement or a single assignment — let&apos;s plan the right solution together.</p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <Link href="/contact#form" className="inline-flex items-center gap-2 text-sm font-[600] text-brand-600 bg-white hover:bg-neutral-50 px-6 py-3 rounded-xl transition-all duration-150 hover:-translate-y-px hover:shadow-lg">
                    Book a Free Consultation <ArrowRight size={14} />
                  </Link>
                  <a href="mailto:bobby@etdatasolutions.com" className="inline-flex items-center gap-2 text-sm font-[500] text-white/85 border border-white/25 hover:border-white/50 hover:bg-white/10 px-6 py-3 rounded-xl transition-all duration-150">
                    bobby@etdatasolutions.com
                  </a>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  )
}
