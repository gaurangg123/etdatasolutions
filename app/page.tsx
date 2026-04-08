'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import {
  ArrowRight, Users, Database, CheckSquare, BarChart2,
  Check, Clock, Shield, Globe, ChevronRight, Quote, Star,
  Zap, TrendingUp, FileText, Phone, Mail
} from 'lucide-react'
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
  { n: '99%',  l: 'Accuracy Rate',     sub: 'Across all services'        },
  { n: '10+',  l: 'Years Delivering',  sub: 'Since 2014'                 },
  { n: '100+', l: 'Clients Served',    sub: 'Globally'                   },
  { n: '24/7', l: 'Operations',        sub: 'Always on for you'          },
]

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
  { name: 'HubSpot',          color: '#FF7A59' },
  { name: 'Jira',             color: '#0052CC' },
]

const caseStudies = [
  {
    industry: 'Logistics Company — US',
    problem:  'Processing 5,000+ shipping invoices manually every month. Data entry errors causing delayed payments and disputes with carriers.',
    solution: 'Deployed a dedicated data entry team with 3-level QC verification. Built an Excel automation layer to auto-flag anomalies.',
    result:   '99.2% accuracy rate. Invoice processing time reduced from 14 days to 3 days. $40K saved annually in error correction costs.',
    icon:     TrendingUp,
    color:    'brand',
  },
  {
    industry: 'SaaS Startup — UK',
    problem:  'Launching v2.0 of their platform in 6 weeks with no in-house QA. Previous launch had 22 critical bugs reported by users on day one.',
    solution: 'End-to-end manual QA across 8 browsers, iOS and Android. Full regression suite plus exploratory testing.',
    result:   'Zero P1 bugs on launch day. 94% test coverage. Dev team shipped 3 weeks faster by not context-switching into QA.',
    icon:     CheckSquare,
    color:    'blue',
  },
  {
    industry: 'Healthcare Group — Canada',
    problem:  'Patient data scattered across 6 disconnected systems. Leadership had no real-time visibility into clinic performance.',
    solution: 'Built a unified Snowflake data lakehouse. Created Power BI executive dashboard with 14 KPIs updated in real-time.',
    result:   'Weekly reporting time cut from 18 hours to 25 minutes. Identified $2.3M in unbilled services within first 30 days.',
    icon:     BarChart2,
    color:    'green',
  },
]

const process = [
  { step: '01', title: 'Discovery Call',     desc: 'We spend 30 minutes understanding your exact requirement, volume, timeline, and success criteria. No generic proposals.' },
  { step: '02', title: 'Custom Proposal',    desc: 'You receive a scoped proposal with clear deliverables, timeline, pricing, and team structure — within 24 hours.' },
  { step: '03', title: 'Team Setup',         desc: 'We assign a dedicated team, complete onboarding and NDA, and set up your preferred communication and reporting cadence.' },
  { step: '04', title: 'Delivery & QC',      desc: 'Work begins. You get regular progress updates, quality reports, and direct access to your project lead.' },
  { step: '05', title: 'Review & Scale',     desc: 'Monthly reviews ensure quality stays above benchmark. Scale up or down instantly based on your changing needs.' },
]

const pricing = [
  {
    tier:     'Starter',
    price:    '$499',
    period:   '/month',
    note:     'Starting at',
    desc:     'For businesses testing outsourcing for the first time or with a single, defined project.',
    features: [
      'Dedicated team of 1–2 specialists',
      '1 service vertical',
      'Up to 40 hours/week capacity',
      'Weekly progress reports',
      'Email support, 48-hr response',
      '30-day satisfaction guarantee',
    ],
    cta:      'Get Started',
    popular:  false,
  },
  {
    tier:     'Growth',
    price:    '$1,499',
    period:   '/month',
    note:     'Starting at',
    desc:     'For growing companies with ongoing, multi-service outsourcing needs.',
    features: [
      'Dedicated team of 3–6 specialists',
      'Up to 3 service verticals',
      'Up to 160 hours/week capacity',
      'Daily progress reports',
      'Dedicated account manager',
      'Priority Slack/WhatsApp support',
      'Monthly strategy review call',
    ],
    cta:      'Book a Call',
    popular:  true,
  },
  {
    tier:     'Enterprise',
    price:    'Custom',
    period:   '',
    note:     'Tailored pricing',
    desc:     'For large teams needing full-scale outsourcing across multiple verticals.',
    features: [
      'Dedicated team of 10+ specialists',
      'All 4 service verticals',
      'Unlimited capacity scaling',
      'Real-time reporting dashboard',
      'SLA with uptime guarantee',
      'Custom onboarding & integration',
      'Quarterly business reviews',
    ],
    cta:      'Contact Sales',
    popular:  false,
  },
]

const testimonials = [
  {
    quote:   "We were drowning in invoice data. ET Data Solutions took over in week one and we haven't looked back. Errors dropped from 4% to under 0.5% — that's tens of thousands saved.",
    name:    'Michael Reeves',
    role:    'CFO',
    company: 'Apex Freight Group',
    rating:  5,
    result:  'Error rate: 4% → 0.5%',
  },
  {
    quote:   "Our last QA vendor gave us a checklist. ET Data Solutions gave us a full battle-hardened product. Every edge case, every browser. Launch was the smoothest we've ever had.",
    name:    'Lena Fischer',
    role:    'CTO',
    company: 'Flowdesk (SaaS)',
    rating:  5,
    result:  'Zero P1 bugs on launch',
  },
  {
    quote:   "I needed 3 VAs placed fast. They delivered 4 qualified candidates in 5 days, I hired 2, and both are still with us 14 months later. Genuinely impressive.",
    name:    'James Okafor',
    role:    'Founder',
    company: 'ScaleOps Ltd.',
    rating:  5,
    result:  'VAs placed in 5 days',
  },
  {
    quote:   "The Power BI dashboards they built changed how we run our business. We used to wait 3 weeks for monthly reports. Now we have live data on every screen in the office.",
    name:    'Priya Nair',
    role:    'VP Operations',
    company: 'MediGroup Canada',
    rating:  5,
    result:  'Reporting: 3 weeks → live',
  },
]

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '12%'])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <>
      {/* ══════════════════════════════════════════════════════════
          1. HERO
      ══════════════════════════════════════════════════════════ */}
      <section ref={heroRef} className="relative flex flex-col items-center justify-center overflow-hidden bg-white dark:bg-[#0e0c0b] min-h-[calc(100vh-72px)]">
        <div className="absolute inset-0 pointer-events-none opacity-[0.4] dark:opacity-[0.18]"
          style={{ backgroundImage:'linear-gradient(rgba(0,0,0,0.07) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,0.07) 1px,transparent 1px)', backgroundSize:'60px 60px', maskImage:'radial-gradient(ellipse 80% 80% at 50% 50%,black 20%,transparent 100%)' }} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_65%_15%,rgba(232,68,10,0.08),transparent_65%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_35%_at_5%_85%,rgba(232,68,10,0.04),transparent_65%)] pointer-events-none" />

        <motion.div style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 w-full max-w-container mx-auto px-5 sm:px-6 py-14 sm:py-20 md:py-28 text-center">

          {/* Trust badge */}
          <motion.div {...fade(0)} className="inline-flex items-center gap-2.5 bg-brand-50 dark:bg-brand-500/10 border border-brand-200 dark:border-brand-500/25 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse-dot flex-shrink-0" />
            <span className="text-xs font-[700] tracking-[0.1em] uppercase text-brand-500">Trusted by 100+ businesses worldwide · Est. 2014</span>
          </motion.div>

          {/* Headline — specific, outcome-driven */}
          <motion.h1 {...fade(0.08)}
            className="text-5xl sm:text-6xl md:text-7xl font-[800] tracking-[-0.045em] leading-[1.04] text-neutral-900 dark:text-neutral-50 mb-6 mx-auto max-w-4xl">
            Stop doing work<br className="hidden sm:block" />
            {' '}your team shouldn&apos;t be doing
          </motion.h1>

          {/* Subheadline — ICP-specific */}
          <motion.p {...fade(0.16)}
            className="text-xl md:text-2xl text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-[580px] mx-auto mb-4">
            ET Data Solutions handles your staffing, data processing, QA testing, and data engineering — so your team can focus on what actually grows the business.
          </motion.p>
          <motion.p {...fade(0.2)} className="text-base text-neutral-400 dark:text-neutral-500 mb-10">
            India-based. Global delivery. 99% accuracy. Starting from $499/month.
          </motion.p>

          {/* CTAs */}
          <motion.div {...fade(0.26)} className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12 md:mb-16">
            <Link href="/contact#form"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-base font-[700] text-white bg-brand-500 hover:bg-brand-600 px-9 py-4 rounded-2xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(232,68,10,0.4)]">
              Book a Free Consultation <ArrowRight size={17} />
            </Link>
            <Link href="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-base font-[500] text-neutral-700 dark:text-neutral-300 bg-white dark:bg-neutral-800/60 border border-neutral-300 dark:border-neutral-700 hover:border-brand-400 dark:hover:border-brand-500 px-9 py-4 rounded-2xl transition-all duration-200 hover:-translate-y-0.5">
              View Services
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div {...fade(0.32)}
            className="grid grid-cols-2 md:grid-cols-4 border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden max-w-[700px] mx-auto gap-px bg-neutral-200 dark:bg-neutral-800">
            {stats.map(s => (
              <div key={s.l} className="bg-white dark:bg-[#0e0c0b] px-6 py-5 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors text-left">
                <div className="text-3xl font-[800] tracking-[-0.05em] text-brand-500 leading-none mb-1">
                  <CountUp value={s.n} />
                </div>
                <div className="text-sm font-[600] text-neutral-700 dark:text-neutral-300">{s.l}</div>
                <div className="text-xs text-neutral-400 dark:text-neutral-500 mt-0.5">{s.sub}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          2. TECH / SOCIAL PROOF MARQUEE
      ══════════════════════════════════════════════════════════ */}
      <div className="border-y border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#0a0908] py-5 overflow-hidden">
        <p className="text-center text-xs font-[600] tracking-[0.1em] uppercase text-neutral-400 dark:text-neutral-600 mb-4">Technologies & platforms we work with</p>
        <div className="relative overflow-hidden">
          <div className="flex w-max animate-marquee">
            {[...techLogos, ...techLogos, ...techLogos].map((logo, i) => (
              <span key={i} className="inline-flex items-center gap-2 text-sm font-[700] text-neutral-400 dark:text-neutral-500 px-6 cursor-default flex-shrink-0">
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: logo.color }} />
                {logo.name}
              </span>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-neutral-50 dark:from-[#0a0908] to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-neutral-50 dark:from-[#0a0908] to-transparent z-10" />
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════
          3. SERVICES — PRODUCTIZED
      ══════════════════════════════════════════════════════════ */}
      <section className="py-28 bg-white dark:bg-[#0e0c0b]">
        <div className="max-w-container mx-auto px-6">
          <AnimateIn><span className="text-xs font-[700] tracking-[0.12em] uppercase text-brand-500 mb-4 block">What we do</span></AnimateIn>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 mb-16">
            <AnimateIn delay={0.07}>
              <h2 className="text-4xl md:text-5xl font-[800] tracking-[-0.04em] text-neutral-900 dark:text-neutral-50 leading-[1.08] max-w-[480px]">
                Four services.<br />Each one built to<br />save you time and money.
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.14}>
              <p className="text-base text-neutral-500 dark:text-neutral-400 max-w-[360px] leading-relaxed">
                No fluff. No retainers for work you didn&apos;t need. Every service is scoped, delivered, and measured — so you know exactly what you&apos;re getting.
              </p>
            </AnimateIn>
          </div>

          <div className="flex flex-col gap-5">
            {services.map((svc, i) => (
              <AnimateIn key={svc.id} delay={i * 0.07}>
                <div className="group grid grid-cols-1 lg:grid-cols-[1fr_300px] border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden hover:border-brand-300 dark:hover:border-brand-500/40 hover:shadow-[0_8px_32px_rgba(0,0,0,0.07)] dark:hover:shadow-[0_8px_32px_rgba(0,0,0,0.35)] transition-all duration-250">
                  {/* Left — content */}
                  <div className="p-8 md:p-10 bg-white dark:bg-[#111]">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-brand-50 dark:bg-brand-500/10 border border-brand-100 dark:border-brand-500/20 flex items-center justify-center text-brand-500 flex-shrink-0">
                        {svcIcons[svc.id]}
                      </div>
                      <span className="text-xs font-[700] tracking-[0.1em] uppercase text-neutral-400 dark:text-neutral-600">{svc.num} · {svc.subtitle}</span>
                    </div>
                    <h3 className="text-2xl font-[800] tracking-[-0.03em] text-neutral-900 dark:text-neutral-100 mb-2">{svc.title}</h3>
                    <p className="text-base font-[600] text-brand-500 mb-4">{svc.benefitHeadline}</p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-6 max-w-[520px]">{svc.description}</p>

                    {/* Outcomes */}
                    <div className="flex flex-col gap-2.5 mb-6">
                      {svc.outcomes.map((o, j) => (
                        <div key={j} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-brand-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check size={11} className="text-white" strokeWidth={3} />
                          </div>
                          <span className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">{o}</span>
                        </div>
                      ))}
                    </div>

                    <Link href={`/services#${svc.id}`}
                      className="inline-flex items-center gap-2 text-sm font-[700] text-white bg-brand-500 hover:bg-brand-600 px-6 py-3 rounded-xl transition-all duration-150 hover:-translate-y-px hover:shadow-[0_6px_20px_rgba(232,68,10,0.35)]">
                      Learn more <ArrowRight size={14} />
                    </Link>
                  </div>

                  {/* Right — image + best for */}
                  <div className="flex flex-col lg:border-l border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/60">
                    <div className="relative h-48 lg:h-52 overflow-hidden">
                      <Image
                        src={svcImages[svc.id]}
                        alt={svc.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="300px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>
                    <div className="p-6 flex-1">
                      <p className="text-xs font-[700] tracking-[0.08em] uppercase text-neutral-400 dark:text-neutral-500 mb-2">Best for</p>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{svc.bestFor}</p>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <div className="h-px bg-neutral-200 dark:bg-neutral-800" />

      {/* ══════════════════════════════════════════════════════════
          4. CASE STUDIES
      ══════════════════════════════════════════════════════════ */}
      <section className="py-28 bg-neutral-50 dark:bg-[#0a0908]">
        <div className="max-w-container mx-auto px-6">
          <AnimateIn><span className="text-xs font-[700] tracking-[0.12em] uppercase text-brand-500 mb-4 block">Results we&apos;ve delivered</span></AnimateIn>
          <AnimateIn delay={0.07}>
            <h2 className="text-4xl md:text-5xl font-[800] tracking-[-0.04em] text-neutral-900 dark:text-neutral-50 leading-[1.08] mb-14">
              Real clients. Real outcomes.<br />Measurable results.
            </h2>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {caseStudies.map((cs, i) => (
              <AnimateIn key={i} delay={i * 0.1}>
                <div className="flex flex-col h-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden hover:shadow-[0_12px_40px_rgba(0,0,0,0.09)] dark:hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] transition-all duration-300">
                  {/* Result banner */}
                  <div className="bg-brand-500 px-6 py-4 flex items-center gap-3">
                    <cs.icon size={18} className="text-white/80 flex-shrink-0" />
                    <span className="text-sm font-[700] text-white">{cs.result}</span>
                  </div>
                  <div className="p-7 flex flex-col flex-1">
                    <p className="text-xs font-[700] tracking-[0.08em] uppercase text-brand-500 mb-4">{cs.industry}</p>
                    <div className="space-y-4 flex-1">
                      <div>
                        <p className="text-xs font-[700] uppercase tracking-[0.06em] text-neutral-400 mb-1">Problem</p>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{cs.problem}</p>
                      </div>
                      <div>
                        <p className="text-xs font-[700] uppercase tracking-[0.06em] text-neutral-400 mb-1">Solution</p>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{cs.solution}</p>
                      </div>
                    </div>
                    <div className="mt-6 pt-5 border-t border-neutral-100 dark:border-neutral-800">
                      <Link href="/contact#form" className="text-sm font-[600] text-brand-500 hover:text-brand-600 inline-flex items-center gap-1.5 transition-colors">
                        Get similar results <ChevronRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <div className="h-px bg-neutral-200 dark:bg-neutral-800" />

      {/* ══════════════════════════════════════════════════════════
          5. PROCESS
      ══════════════════════════════════════════════════════════ */}
      <section className="py-28 bg-white dark:bg-[#0e0c0b]">
        <div className="max-w-container mx-auto px-6">
          <AnimateIn><span className="text-xs font-[700] tracking-[0.12em] uppercase text-brand-500 mb-4 block">How it works</span></AnimateIn>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 mb-16">
            <AnimateIn delay={0.07}>
              <h2 className="text-4xl md:text-5xl font-[800] tracking-[-0.04em] text-neutral-900 dark:text-neutral-50 leading-[1.08]">
                From first call to<br />full delivery in days.
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.14}>
              <p className="text-base text-neutral-500 dark:text-neutral-400 max-w-[340px] leading-relaxed">
                No bloated discovery phases or 8-week onboarding. We move fast and keep you in the loop at every step.
              </p>
            </AnimateIn>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {process.map((p, i) => (
              <AnimateIn key={p.step} delay={i * 0.08}>
                <div className="relative bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 h-full hover:border-brand-300 dark:hover:border-brand-500/40 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.07)] transition-all duration-250">
                  {/* Connector line (desktop) */}
                  {i < process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 -right-2.5 w-5 h-px bg-neutral-300 dark:bg-neutral-700 z-10" />
                  )}
                  <div className="text-2xl font-[800] text-brand-500 mb-3 tracking-[-0.04em]">{p.step}</div>
                  <h4 className="text-base font-[700] text-neutral-900 dark:text-neutral-100 mb-2 tracking-[-0.01em]">{p.title}</h4>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">{p.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn delay={0.3} className="mt-10 text-center">
            <Link href="/contact#form"
              className="inline-flex items-center gap-2 text-sm font-[600] text-white bg-brand-500 hover:bg-brand-600 px-7 py-3.5 rounded-xl transition-all duration-150 hover:-translate-y-px hover:shadow-[0_6px_20px_rgba(232,68,10,0.35)]">
              Start your project <ArrowRight size={15} />
            </Link>
          </AnimateIn>
        </div>
      </section>

      <div className="h-px bg-neutral-200 dark:bg-neutral-800" />

      {/* ══════════════════════════════════════════════════════════
          6. PRICING
      ══════════════════════════════════════════════════════════ */}
      <section className="py-28 bg-neutral-50 dark:bg-[#0a0908]">
        <div className="max-w-container mx-auto px-6">
          <AnimateIn><span className="text-xs font-[700] tracking-[0.12em] uppercase text-brand-500 mb-4 block">Transparent pricing</span></AnimateIn>
          <AnimateIn delay={0.07}>
            <h2 className="text-4xl md:text-5xl font-[800] tracking-[-0.04em] text-neutral-900 dark:text-neutral-50 leading-[1.08] mb-4">
              Simple pricing.<br />No surprises.
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.14}>
            <p className="text-base text-neutral-500 dark:text-neutral-400 mb-14 max-w-[440px] leading-relaxed">
              Every plan includes a dedicated team, quality reporting, and a satisfaction guarantee. Scale up or down any month with 30 days notice.
            </p>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
            {pricing.map((plan, i) => (
              <AnimateIn key={plan.tier} delay={i * 0.1}>
                <div className={`relative flex flex-col rounded-2xl border overflow-hidden transition-all duration-250
                  ${plan.popular
                    ? 'border-brand-500 shadow-[0_0_0_1px_#e8440a,0_16px_48px_rgba(232,68,10,0.18)]'
                    : 'border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-[0_8px_32px_rgba(0,0,0,0.07)] dark:hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)]'
                  }`}
                >
                  {plan.popular && (
                    <div className="bg-brand-500 px-6 py-2 text-center">
                      <span className="text-xs font-[700] text-white tracking-[0.08em] uppercase">Most Popular</span>
                    </div>
                  )}
                  <div className={`p-8 flex flex-col flex-1 ${plan.popular ? 'bg-white dark:bg-[#111]' : ''}`}>
                    <p className="text-xs font-[600] text-neutral-400 dark:text-neutral-500 mb-1">{plan.note}</p>
                    <div className="flex items-baseline gap-1 mb-1">
                      <span className="text-4xl font-[800] tracking-[-0.05em] text-neutral-900 dark:text-neutral-50">{plan.price}</span>
                      {plan.period && <span className="text-base text-neutral-400">{plan.period}</span>}
                    </div>
                    <p className="text-xs font-[700] tracking-[0.06em] uppercase text-brand-500 mb-3">{plan.tier}</p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-7 pb-7 border-b border-neutral-100 dark:border-neutral-800">{plan.desc}</p>
                    <div className="flex flex-col gap-3 mb-8 flex-1">
                      {plan.features.map((f, j) => (
                        <div key={j} className="flex items-start gap-3">
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${plan.popular ? 'bg-brand-500' : 'bg-neutral-200 dark:bg-neutral-700'}`}>
                            <Check size={10} className={plan.popular ? 'text-white' : 'text-neutral-600 dark:text-neutral-300'} strokeWidth={3} />
                          </div>
                          <span className="text-sm text-neutral-700 dark:text-neutral-300">{f}</span>
                        </div>
                      ))}
                    </div>
                    <Link href="/contact#form"
                      className={`w-full inline-flex items-center justify-center gap-2 text-sm font-[700] px-6 py-3.5 rounded-xl transition-all duration-150
                        ${plan.popular
                          ? 'text-white bg-brand-500 hover:bg-brand-600 hover:shadow-[0_6px_20px_rgba(232,68,10,0.4)] hover:-translate-y-px'
                          : 'text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700 hover:border-brand-400 dark:hover:border-brand-500 hover:-translate-y-px'
                        }`}>
                      {plan.cta} <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
          <AnimateIn delay={0.35} className="mt-8 text-center">
            <p className="text-sm text-neutral-400 dark:text-neutral-500">
              All plans include 30-day satisfaction guarantee · No lock-in contracts · Scale anytime
            </p>
          </AnimateIn>
        </div>
      </section>

      <div className="h-px bg-neutral-200 dark:bg-neutral-800" />

      {/* ══════════════════════════════════════════════════════════
          7. TESTIMONIALS
      ══════════════════════════════════════════════════════════ */}
      <section className="py-28 bg-white dark:bg-[#0e0c0b]">
        <div className="max-w-container mx-auto px-6">
          <AnimateIn><span className="text-xs font-[700] tracking-[0.12em] uppercase text-brand-500 mb-4 block">Client testimonials</span></AnimateIn>
          <AnimateIn delay={0.07}>
            <h2 className="text-4xl md:text-5xl font-[800] tracking-[-0.04em] text-neutral-900 dark:text-neutral-50 leading-[1.08] mb-14">
              Don&apos;t take our word for it.
            </h2>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {testimonials.map((t, i) => (
              <AnimateIn key={i} delay={i * 0.08}>
                <div className="flex flex-col h-full bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-7 hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-[0_10px_32px_rgba(0,0,0,0.07)] dark:hover:shadow-[0_10px_32px_rgba(0,0,0,0.3)] transition-all duration-250">
                  {/* Result pill */}
                  <div className="inline-flex items-center gap-2 bg-brand-50 dark:bg-brand-500/10 border border-brand-200 dark:border-brand-500/25 rounded-full px-3 py-1 mb-5 w-fit">
                    <TrendingUp size={11} className="text-brand-500" />
                    <span className="text-xs font-[700] text-brand-500">{t.result}</span>
                  </div>
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} size={14} className="text-brand-500 fill-brand-500" />
                    ))}
                  </div>
                  <p className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed flex-1 mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
                  <div className="flex items-center gap-3.5 pt-5 border-t border-neutral-200 dark:border-neutral-800">
                    <div className="w-10 h-10 rounded-full bg-brand-100 dark:bg-brand-500/20 flex items-center justify-center text-brand-600 dark:text-brand-400 text-sm font-[800] flex-shrink-0">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-sm font-[700] text-neutral-900 dark:text-neutral-100">{t.name}</div>
                      <div className="text-xs text-neutral-400 mt-0.5">{t.role}, {t.company}</div>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <div className="h-px bg-neutral-200 dark:bg-neutral-800" />

      {/* ══════════════════════════════════════════════════════════
          8. LEAD CAPTURE
      ══════════════════════════════════════════════════════════ */}
      <section className="py-28 bg-neutral-50 dark:bg-[#0a0908]">
        <div className="max-w-container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <AnimateIn>
              <span className="text-xs font-[700] tracking-[0.12em] uppercase text-brand-500 mb-4 block">Free operations audit</span>
              <h2 className="text-4xl md:text-5xl font-[800] tracking-[-0.04em] text-neutral-900 dark:text-neutral-50 leading-[1.08] mb-5">
                Find out exactly where you&apos;re losing time and money.
              </h2>
              <p className="text-base text-neutral-500 dark:text-neutral-400 leading-relaxed mb-8 max-w-[420px]">
                Book a free 30-minute operations audit. We&apos;ll analyze your current workflow, identify your 3 biggest inefficiencies, and show you how much you could save by outsourcing the right work.
              </p>
              <div className="flex flex-col gap-3">
                {['No commitment required', 'Specific, actionable recommendations', 'Cost-savings estimate included', 'Response within 24 hours'].map(b => (
                  <div key={b} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand-500 flex items-center justify-center flex-shrink-0">
                      <Check size={11} className="text-white" strokeWidth={3} />
                    </div>
                    <span className="text-sm font-[500] text-neutral-700 dark:text-neutral-300">{b}</span>
                  </div>
                ))}
              </div>
            </AnimateIn>

            {/* Simple lead form */}
            <AnimateIn delay={0.15}>
              <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.07)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.35)]">
                <h3 className="text-xl font-[800] tracking-[-0.03em] text-neutral-900 dark:text-neutral-50 mb-1.5">Get your free audit</h3>
                <p className="text-sm text-neutral-400 dark:text-neutral-500 mb-7">Takes 30 seconds. We&apos;ll reach out within 24 hours.</p>
                <div className="flex flex-col gap-4">
                  <div>
                    <label className="text-xs font-[700] tracking-[0.06em] uppercase text-neutral-400 dark:text-neutral-500 mb-1.5 block">Full Name</label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl px-4 py-3 text-sm text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15 transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-[700] tracking-[0.06em] uppercase text-neutral-400 dark:text-neutral-500 mb-1.5 block">Work Email</label>
                    <input
                      type="email"
                      placeholder="you@company.com"
                      className="w-full bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl px-4 py-3 text-sm text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15 transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-[700] tracking-[0.06em] uppercase text-neutral-400 dark:text-neutral-500 mb-1.5 block">Company</label>
                    <input
                      type="text"
                      placeholder="Company name"
                      className="w-full bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl px-4 py-3 text-sm text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15 transition-all"
                    />
                  </div>
                  <Link
                    href="/contact#form"
                    className="w-full inline-flex items-center justify-center gap-2 text-base font-[700] text-white bg-brand-500 hover:bg-brand-600 py-4 rounded-xl transition-all duration-150 hover:shadow-[0_8px_24px_rgba(232,68,10,0.4)] hover:-translate-y-px mt-1"
                  >
                    Get My Free Audit <ArrowRight size={16} />
                  </Link>
                  <p className="text-xs text-neutral-400 text-center">No spam. No sales pitch. Just a straight answer on where you stand.</p>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      <div className="h-px bg-neutral-200 dark:bg-neutral-800" />

      {/* ══════════════════════════════════════════════════════════
          9. FINAL CTA
      ══════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-white dark:bg-[#0e0c0b]">
        <div className="max-w-container mx-auto px-6">
          <AnimateIn>
            <div className="relative rounded-3xl bg-brand-500 overflow-hidden px-10 py-24 md:px-24 text-center">
              <div className="absolute inset-0 opacity-[0.07]"
                style={{ backgroundImage:'linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)', backgroundSize:'48px 48px' }} />
              <div className="absolute -top-28 -right-28 w-96 h-96 rounded-full bg-white/10 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-28 -left-28 w-96 h-96 rounded-full bg-white/10 blur-3xl pointer-events-none" />
              <div className="relative z-10 max-w-[600px] mx-auto">
                <span className="text-xs font-[700] tracking-[0.12em] uppercase text-white/55 mb-5 block">Stop losing time</span>
                <h2 className="text-4xl md:text-5xl font-[800] tracking-[-0.04em] text-white leading-[1.08] mb-5">
                  Your team has better things<br />to do than data entry.
                </h2>
                <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-[440px] mx-auto">
                  Join 100+ businesses that outsourced the work that was slowing them down — and got their team&apos;s time back.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact#form"
                    className="inline-flex items-center justify-center gap-2 text-base font-[700] text-brand-600 bg-white hover:bg-neutral-50 px-8 py-4 rounded-2xl transition-all duration-150 hover:-translate-y-px hover:shadow-xl">
                    Book a Free Consultation <ArrowRight size={16} />
                  </Link>
                  <a href="tel:+13023579776"
                    className="inline-flex items-center justify-center gap-2 text-base font-[500] text-white/85 border border-white/25 hover:border-white/55 hover:bg-white/10 px-8 py-4 rounded-2xl transition-all duration-150">
                    <Phone size={16} /> Call us now
                  </a>
                </div>
                <p className="text-white/45 text-sm mt-6">No contract required · Response within 24 hours · 30-day guarantee</p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  )
}
