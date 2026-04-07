'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Users, Database, CheckSquare, BarChart2, Check, Clock, Lock, Globe, ChevronRight, Quote, Star, TrendingUp, Shield, Zap } from 'lucide-react'
import { services } from '@/lib/services'
import AnimateIn from '@/components/ui/AnimateIn'
import CountUp from '@/components/ui/CountUp'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
})

const svcIcons: Record<string, React.ReactNode> = {
  staffing: <Users size={22} />,
  data:     <Database size={22} />,
  qa:       <CheckSquare size={22} />,
  dataeng:  <BarChart2 size={22} />,
}

const svcImages: Record<string, string> = {
  staffing: '/staffing.jpg',
  data:     '/data-analytics.jpg',
  qa:       '/qa-testing.jpg',
  dataeng:  '/data-engineering.jpg',
}

const stats = [
  { n: '99%',  l: 'Accuracy Rate'    },
  { n: '10+',  l: 'Years Active'     },
  { n: '4',    l: 'Verticals'        },
  { n: '24/7', l: 'Availability'     },
]

const whyItems = [
  { icon: Check,      title: '99% Accuracy Guaranteed',    desc: 'Multi-level QC from operator to specialist — every single project, every time.'    },
  { icon: Clock,      title: 'Any Scale, Any Timeline',    desc: 'Short or long-term. A single project or a full ongoing engagement. We adapt.'      },
  { icon: Shield,     title: 'Secure & Confidential',      desc: 'Utmost integrity for all time-critical, information-sensitive data assignments.'    },
  { icon: Globe,      title: 'India-based Cost Advantage', desc: 'World-class technical skills at highly competitive rates. Round-the-clock coverage.' },
]

const testimonials = [
  {
    quote: "ET Data Solutions completely transformed our data processing workflow. Accuracy is consistently above 99% and their turnaround times are outstanding.",
    name: "Sarah Mitchell",
    role: "Operations Director",
    company: "TechFlow Inc.",
    rating: 5,
  },
  {
    quote: "We've relied on their QA testing for 2 years. They catch issues that automated tools miss. The team is professional, communicative, and incredibly thorough.",
    name: "James Kowalski",
    role: "VP Engineering",
    company: "AppCore Solutions",
    rating: 5,
  },
  {
    quote: "Their staffing team placed 3 VAs within a week. Candidate quality and onboarding support made the whole process completely seamless. Highly recommended.",
    name: "Priya Sharma",
    role: "CEO",
    company: "GrowthBase Ltd.",
    rating: 5,
  },
]

// Tech stack / partner logos as text wordmarks (production substitute for real logos)
const techLogos = [
  { name: 'Snowflake',        color: '#29B5E8' },
  { name: 'Databricks',       color: '#FF3621' },
  { name: 'Microsoft Fabric', color: '#0078D4' },
  { name: 'Power BI',         color: '#F2C811' },
  { name: 'Tableau',          color: '#E97627' },
  { name: 'Salesforce',       color: '#00A1E0' },
  { name: 'SAP',              color: '#0FAAFF' },
  { name: 'AWS',              color: '#FF9900' },
  { name: 'Azure',            color: '#0089D6' },
  { name: 'Google Cloud',     color: '#4285F4' },
]

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '12%'])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative flex flex-col items-center justify-center overflow-hidden bg-white dark:bg-[#0e0c0b] min-h-[calc(100vh-72px)]">
        {/* Grid background */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.45] dark:opacity-[0.2]"
          style={{ backgroundImage:'linear-gradient(rgba(0,0,0,0.07) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,0.07) 1px,transparent 1px)', backgroundSize:'60px 60px', maskImage:'radial-gradient(ellipse 80% 80% at 50% 50%,black 20%,transparent 100%)' }} />
        {/* Warm glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_65%_15%,rgba(232,68,10,0.08),transparent_65%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_35%_at_5%_85%,rgba(232,68,10,0.05),transparent_65%)] pointer-events-none" />

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 w-full max-w-container mx-auto px-6 py-20 md:py-28 text-center">

          {/* Badge */}
          <motion.div {...fade(0)} className="inline-flex items-center gap-2.5 bg-brand-50 dark:bg-brand-500/10 border border-brand-200 dark:border-brand-500/25 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse-dot flex-shrink-0" />
            <span className="text-xs font-[700] tracking-[0.1em] uppercase text-brand-500">India-based · Global reach · Est. 2014</span>
          </motion.div>

          {/* H1 — large, tight, impactful */}
          <motion.h1 {...fade(0.08)}
            className="text-5xl sm:text-6xl md:text-7xl font-[800] tracking-[-0.045em] leading-[1.04] text-neutral-900 dark:text-neutral-50 mb-6 text-balance mx-auto max-w-4xl">
            Intelligent data solutions<br className="hidden sm:block" />
            {' '}for the{' '}
            <span className="text-brand-500">modern enterprise</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p {...fade(0.16)}
            className="text-lg md:text-xl text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-[540px] mx-auto mb-10">
            Cost-effective outsourcing for staffing, data processing, QA testing, and data engineering — built for businesses that demand precision and scale.
          </motion.p>

          {/* CTAs */}
          <motion.div {...fade(0.24)} className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16">
            <Link href="/contact#form"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-base font-[600] text-white bg-brand-500 hover:bg-brand-600 px-8 py-4 rounded-2xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(232,68,10,0.4)]">
              Get a Free Consultation <ArrowRight size={17} />
            </Link>
            <Link href="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-base font-[500] text-neutral-700 dark:text-neutral-300 bg-white dark:bg-neutral-800/60 border border-neutral-300 dark:border-neutral-700 hover:border-brand-400 dark:hover:border-brand-500 px-8 py-4 rounded-2xl transition-all duration-200 hover:-translate-y-0.5">
              Explore Services
            </Link>
          </motion.div>

          {/* Stats strip */}
          <motion.div {...fade(0.32)}
            className="grid grid-cols-2 md:grid-cols-4 border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden max-w-[640px] mx-auto gap-px bg-neutral-200 dark:bg-neutral-800">
            {stats.map(s => (
              <div key={s.l} className="bg-white dark:bg-[#0e0c0b] px-6 py-5 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors duration-150 text-left">
                <div className="text-3xl font-[800] tracking-[-0.05em] text-brand-500 leading-none mb-1.5">
                  <CountUp value={s.n} />
                </div>
                <div className="text-xs font-[600] tracking-[0.08em] uppercase text-neutral-400 dark:text-neutral-500">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ── TECH STACK LOGO MARQUEE ───────────────────────────────── */}
      <div className="border-y border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#0a0908] py-5 overflow-hidden">
        <p className="text-center text-xs font-[600] tracking-[0.1em] uppercase text-neutral-400 dark:text-neutral-600 mb-4">Technologies & Platforms we work with</p>
        <div className="relative flex">
          <div className="flex gap-12 animate-marquee whitespace-nowrap">
            {[...techLogos, ...techLogos].map((logo, i) => (
              <span key={i} className="inline-flex items-center gap-2 text-sm font-[700] text-neutral-400 dark:text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors px-2 cursor-default flex-shrink-0">
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: logo.color }} />
                {logo.name}
              </span>
            ))}
          </div>
          <div className="absolute top-0 flex gap-12 animate-marquee2 whitespace-nowrap">
            {[...techLogos, ...techLogos].map((logo, i) => (
              <span key={i} className="inline-flex items-center gap-2 text-sm font-[700] text-neutral-400 dark:text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors px-2 cursor-default flex-shrink-0">
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: logo.color }} />
                {logo.name}
              </span>
            ))}
          </div>
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-neutral-50 dark:from-[#0a0908] to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-neutral-50 dark:from-[#0a0908] to-transparent pointer-events-none" />
        </div>
      </div>

      {/* ── SERVICES GRID ─────────────────────────────────────────── */}
      <section className="py-28 bg-white dark:bg-[#0e0c0b]">
        <div className="max-w-container mx-auto px-6">
          <AnimateIn><span className="text-xs font-[700] tracking-[0.12em] uppercase text-brand-500 mb-4 block">What we do</span></AnimateIn>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-14">
            <AnimateIn delay={0.07}>
              <h2 className="text-4xl md:text-5xl font-[800] tracking-[-0.04em] text-neutral-900 dark:text-neutral-50 leading-[1.08]">
                Four verticals.<br />One partner.
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.14}>
              <p className="text-base text-neutral-500 dark:text-neutral-400 max-w-[380px] leading-relaxed">
                From talent acquisition to data lakehouses, from manual QA to Excel automation — operational complexity handled end-to-end.
              </p>
            </AnimateIn>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 border border-neutral-200 dark:border-neutral-800 rounded-3xl overflow-hidden bg-neutral-200 dark:bg-neutral-800 gap-px">
            {services.map((svc, i) => (
              <AnimateIn key={svc.id} delay={i * 0.08}>
                <Link href={`/services#${svc.id}`}
                  className="group relative flex flex-col h-full bg-white dark:bg-[#111] hover:bg-neutral-50 dark:hover:bg-[#161616] transition-colors duration-200 overflow-hidden">
                  {/* Top accent line on hover */}
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-500 to-brand-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />

                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={svcImages[svc.id]}
                      alt={svc.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
                    <div className="absolute bottom-4 left-5 w-11 h-11 rounded-xl bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white">
                      {svcIcons[svc.id]}
                    </div>
                    <span className="absolute bottom-4 right-5 text-xs font-[700] tracking-[0.14em] uppercase text-white/55">{svc.num}</span>
                  </div>

                  <div className="p-7 flex flex-col flex-1">
                    <h3 className="text-lg font-[700] tracking-[-0.025em] text-neutral-900 dark:text-neutral-100 mb-2.5">{svc.title}</h3>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-5 flex-1">{svc.description.slice(0, 118)}…</p>
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {svc.tags.slice(0, 3).map(t => (
                        <span key={t} className="text-xs font-[500] text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 px-3 py-1 rounded-full">{t}</span>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-2 text-sm font-[600] text-brand-500 group-hover:gap-3 transition-all duration-200">
                      Learn more <ChevronRight size={14} />
                    </span>
                  </div>
                </Link>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <div className="h-px bg-neutral-200 dark:bg-neutral-800" />

      {/* ── TEAM BANNER IMAGE ─────────────────────────────────────── */}
      <section className="py-28 bg-neutral-50 dark:bg-[#0a0908]">
        <div className="max-w-container mx-auto px-6">
          <AnimateIn>
            <div className="relative rounded-3xl overflow-hidden h-[380px] md:h-[460px]">
              <Image
                src="/team-working.jpg"
                alt="ET Data Solutions team at work"
                fill
                className="object-cover"
                sizes="(max-width: 1260px) 100vw, 1260px"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/10" />
              <div className="absolute inset-0 flex flex-col justify-center px-10 md:px-16">
                <div className="max-w-[520px]">
                  <span className="text-xs font-[700] tracking-[0.12em] uppercase text-brand-400 mb-5 block">Our team</span>
                  <h2 className="text-3xl md:text-4xl font-[800] tracking-[-0.04em] text-white leading-[1.08] mb-5">
                    Dedicated professionals.<br />Global delivery.
                  </h2>
                  <p className="text-white/65 text-base leading-relaxed mb-7 max-w-[400px]">
                    Our India-based team of operators, supervisors, trainers, and QC specialists work around the clock to deliver precision results for clients worldwide.
                  </p>
                  <Link href="/about"
                    className="inline-flex items-center gap-2 text-sm font-[600] text-white border border-white/30 hover:bg-white/15 hover:border-white/50 px-6 py-3 rounded-xl transition-all duration-150">
                    Meet the company <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      <div className="h-px bg-neutral-200 dark:bg-neutral-800" />

      {/* ── WHY US ────────────────────────────────────────────────── */}
      <section className="py-28 bg-white dark:bg-[#0e0c0b]">
        <div className="max-w-container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-center">
            <div>
              <AnimateIn><span className="text-xs font-[700] tracking-[0.12em] uppercase text-brand-500 mb-4 block">Why ET Data Solutions</span></AnimateIn>
              <AnimateIn delay={0.07}>
                <h2 className="text-4xl md:text-5xl font-[800] tracking-[-0.04em] leading-[1.08] text-neutral-900 dark:text-neutral-50 mb-6">
                  Accuracy is our<br />bottom line
                </h2>
              </AnimateIn>
              <AnimateIn delay={0.14}>
                <p className="text-base text-neutral-500 dark:text-neutral-400 leading-relaxed mb-9 max-w-[420px]">
                  All personnel are constantly monitored for quality. Operators, supervisors, trainers, verifiers and QC specialists — all trained to ensure the highest possible accuracy, every single time.
                </p>
              </AnimateIn>
              <AnimateIn delay={0.2} className="flex flex-wrap gap-3">
                <Link href="/about"
                  className="inline-flex items-center gap-2 text-sm font-[600] text-white bg-brand-500 hover:bg-brand-600 px-6 py-3 rounded-xl transition-all duration-150 hover:-translate-y-px hover:shadow-[0_6px_20px_rgba(232,68,10,0.35)]">
                  About the company
                </Link>
                <Link href="/contact#form"
                  className="inline-flex items-center gap-2 text-sm font-[500] text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700 hover:border-brand-400 dark:hover:border-brand-500 px-6 py-3 rounded-xl transition-all duration-150 hover:-translate-y-px">
                  Let&apos;s talk
                </Link>
              </AnimateIn>
            </div>
            <div className="flex flex-col gap-3.5">
              {whyItems.map((item, i) => (
                <AnimateIn key={item.title} delay={i * 0.08}>
                  <div className="group flex items-start gap-5 p-6 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl hover:border-brand-300 dark:hover:border-brand-500/40 hover:shadow-[0_6px_24px_rgba(0,0,0,0.07)] dark:hover:shadow-[0_6px_24px_rgba(0,0,0,0.35)] hover:translate-x-1 transition-all duration-250">
                    <div className="w-10 h-10 rounded-xl bg-brand-50 dark:bg-brand-500/10 border border-brand-100 dark:border-brand-500/20 flex items-center justify-center text-brand-500 flex-shrink-0 mt-0.5">
                      <item.icon size={17} />
                    </div>
                    <div>
                      <h4 className="text-base font-[700] text-neutral-900 dark:text-neutral-100 mb-1.5 tracking-[-0.015em]">{item.title}</h4>
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

      {/* ── TESTIMONIALS ──────────────────────────────────────────── */}
      <section className="py-28 bg-neutral-50 dark:bg-[#0a0908]">
        <div className="max-w-container mx-auto px-6">
          <AnimateIn><span className="text-xs font-[700] tracking-[0.12em] uppercase text-brand-500 mb-4 block">Client testimonials</span></AnimateIn>
          <AnimateIn delay={0.07}>
            <h2 className="text-4xl md:text-5xl font-[800] tracking-[-0.04em] text-neutral-900 dark:text-neutral-50 leading-[1.08] mb-14">
              Trusted by businesses<br />around the world
            </h2>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <AnimateIn key={i} delay={i * 0.1}>
                <div className="flex flex-col h-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-7 hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-[0_10px_32px_rgba(0,0,0,0.07)] dark:hover:shadow-[0_10px_32px_rgba(0,0,0,0.35)] transition-all duration-250">
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} size={15} className="text-brand-500 fill-brand-500" />
                    ))}
                  </div>
                  <Quote size={22} className="text-brand-500/25 mb-3 flex-shrink-0" />
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed flex-1 mb-6">{t.quote}</p>
                  <div className="flex items-center gap-3.5 pt-5 border-t border-neutral-100 dark:border-neutral-800">
                    <div className="w-10 h-10 rounded-full bg-brand-100 dark:bg-brand-500/20 flex items-center justify-center text-brand-600 dark:text-brand-400 text-sm font-[800] flex-shrink-0">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-sm font-[700] text-neutral-900 dark:text-neutral-100 tracking-[-0.01em]">{t.name}</div>
                      <div className="text-xs text-neutral-400 dark:text-neutral-500 mt-0.5">{t.role}, {t.company}</div>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <div className="h-px bg-neutral-200 dark:bg-neutral-800" />

      {/* ── CTA BANNER ────────────────────────────────────────────── */}
      <section className="py-28 bg-white dark:bg-[#0e0c0b]">
        <div className="max-w-container mx-auto px-6">
          <AnimateIn>
            <div className="relative rounded-3xl bg-brand-500 overflow-hidden px-10 py-24 md:px-24 text-center">
              {/* Subtle grid */}
              <div className="absolute inset-0 opacity-[0.07]"
                style={{ backgroundImage:'linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)', backgroundSize:'48px 48px' }} />
              {/* Glows */}
              <div className="absolute -top-28 -right-28 w-96 h-96 rounded-full bg-white/10 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-28 -left-28 w-96 h-96 rounded-full bg-white/10 blur-3xl pointer-events-none" />
              <div className="relative z-10 max-w-[600px] mx-auto">
                <span className="text-xs font-[700] tracking-[0.12em] uppercase text-white/55 mb-5 block">Get started today</span>
                <h2 className="text-4xl md:text-5xl font-[800] tracking-[-0.04em] text-white leading-[1.08] mb-5">
                  Ready to streamline<br />your operations?
                </h2>
                <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-[440px] mx-auto">
                  Whether you have an ongoing requirement or a single assignment — let&apos;s plan the right solution together.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact#form"
                    className="inline-flex items-center justify-center gap-2 text-base font-[600] text-brand-600 bg-white hover:bg-neutral-50 px-8 py-4 rounded-2xl transition-all duration-150 hover:-translate-y-px hover:shadow-xl">
                    Book a Free Consultation <ArrowRight size={16} />
                  </Link>
                  <a href="mailto:bobby@etdatasolutions.com"
                    className="inline-flex items-center justify-center gap-2 text-base font-[500] text-white/85 border border-white/25 hover:border-white/55 hover:bg-white/10 px-8 py-4 rounded-2xl transition-all duration-150">
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
