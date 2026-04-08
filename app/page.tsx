'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import {
  ArrowRight, Users, Database, CheckSquare, BarChart2,
  Check, Clock, Shield, Globe, ChevronRight, Quote, Star,
  TrendingUp, Phone, Zap, FileCheck, Target, BarChart
} from 'lucide-react'
import { services } from '@/lib/services'
import AnimateIn from '@/components/ui/AnimateIn'
import CountUp from '@/components/ui/CountUp'

/* ─── Motion helpers ────────────────────────────────────────── */
const fade = (delay = 0) => ({
  initial:    { opacity: 0, y: 22 },
  animate:    { opacity: 1, y: 0  },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
})

/* ─── Data ──────────────────────────────────────────────────── */
const svcIcons: Record<string, React.ReactNode> = {
  staffing: <Users     size={20} />,
  data:     <Database  size={20} />,
  qa:       <CheckSquare size={20} />,
  dataeng:  <BarChart2 size={20} />,
}
const svcImages: Record<string, string> = {
  staffing: '/staffing.jpg',
  data:     '/data-analytics.jpg',
  qa:       '/qa-testing.jpg',
  dataeng:  '/data-engineering.jpg',
}

const stats = [
  { n: '99%',  l: 'Accuracy Rate',    sub: 'Guaranteed across all work'   },
  { n: '10+',  l: 'Years Delivering', sub: 'In business since 2014'       },
  { n: '100+', l: 'Clients Served',   sub: 'Across US, UK, CA & AU'       },
  { n: '24/7', l: 'Always Operating', sub: 'Zero gaps in delivery'        },
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
    tag:      'Data Operations · US Logistics',
    result:   '$40K saved annually. Processing time: 14 days → 3 days.',
    icon:     TrendingUp,
    problem:  'Processing 5,000+ shipping invoices manually every month. 4% error rate causing delayed carrier payments and ongoing disputes.',
    solution: 'Dedicated 4-person data entry team with 3-level QC. Excel automation layer auto-flags anomalies before they reach AP.',
    metrics:  ['99.2% accuracy', '78% faster processing', '$40K annual savings'],
  },
  {
    tag:      'QA Testing · UK SaaS Startup',
    result:   'Zero P1 bugs on launch. Dev team shipped 3 weeks early.',
    icon:     FileCheck,
    problem:  'Launching v2.0 in 6 weeks. Previous launch: 22 critical bugs on day one. No in-house QA capacity.',
    solution: 'Full manual QA across 8 browsers, iOS and Android. Regression suite + exploratory testing. Daily bug reports with video reproduction.',
    metrics:  ['0 P1 bugs at launch', '94% test coverage', '3 weeks faster delivery'],
  },
  {
    tag:      'Data Engineering · Canadian Healthcare',
    result:   'Reporting: 18 hrs/week → 25 min. Found $2.3M in unbilled services.',
    icon:     BarChart,
    problem:  'Patient data across 6 disconnected systems. Leadership had zero real-time visibility. Weekly reports took 18 hours to compile.',
    solution: 'Unified Snowflake data lakehouse. Power BI executive dashboard with 14 live KPIs. Automated data pipeline from all 6 source systems.',
    metrics:  ['18 hrs → 25 min reporting', '$2.3M unbilled identified', '14 live KPIs'],
  },
]

const process = [
  { n: '01', title: '30-Min Discovery Call',  icon: Phone,     desc: 'We ask the right questions — your volume, timeline, current bottlenecks, success criteria. No generic intake forms.' },
  { n: '02', title: 'Scoped Proposal in 24h', icon: FileCheck, desc: 'A specific proposal: team size, deliverables, timeline, quality benchmarks, and pricing. No ambiguity.' },
  { n: '03', title: 'Team Onboarded in 72h',  icon: Users,     desc: 'Dedicated team assigned, NDA signed, communication channels set up, first delivery within the week.' },
  { n: '04', title: 'Continuous Delivery',    icon: Zap,       desc: 'Regular delivery with QC reports. Direct access to your project lead. No middlemen, no delays.' },
  { n: '05', title: 'Monthly Review & Scale', icon: Target,    desc: 'We review quality metrics, address gaps, and scale your team up or down — on 30 days notice, no penalty.' },
]

const pricing = [
  {
    tier:    'Starter',
    note:    'Starting at',
    price:   '$499',
    period:  '/month',
    desc:    'One defined project or service. Ideal for first-time outsourcers who want to test before scaling.',
    popular: false,
    features: [
      '1–2 dedicated specialists',
      'Single service vertical',
      'Up to 40 hours/week',
      'Weekly progress reports',
      'Email support (48h response)',
      '30-day satisfaction guarantee',
    ],
    cta: 'Get Started',
  },
  {
    tier:    'Growth',
    note:    'Starting at',
    price:   '$1,499',
    period:  '/month',
    desc:    'Ongoing, multi-service support. For teams ready to systematically remove operational drag.',
    popular: true,
    features: [
      '3–6 dedicated specialists',
      'Up to 3 service verticals',
      'Up to 160 hours/week',
      'Daily progress reports',
      'Dedicated account manager',
      'Slack/WhatsApp priority support',
      'Monthly strategy call',
    ],
    cta: 'Book a Call',
  },
  {
    tier:    'Enterprise',
    note:    'Tailored pricing',
    price:   'Custom',
    period:  '',
    desc:    'Full-scale outsourcing across all verticals. SLA-backed, custom onboarding, quarterly reviews.',
    popular: false,
    features: [
      '10+ dedicated specialists',
      'All 4 service verticals',
      'Unlimited capacity',
      'Real-time reporting dashboard',
      'SLA with delivery guarantees',
      'Custom integration & onboarding',
      'Quarterly executive reviews',
    ],
    cta: 'Contact Sales',
  },
]

const testimonials = [
  {
    result:  'Error rate: 4% → 0.4%',
    quote:   'We were drowning in invoice data. ET Data Solutions took over in week one and never looked back. Errors dropped from 4% to under 0.5% — that\'s tens of thousands saved every year.',
    name:    'Michael Reeves',
    role:    'CFO',
    company: 'Apex Freight Group',
  },
  {
    result:  'Zero P1 bugs on launch',
    quote:   'Our last QA vendor gave us a checklist. ET Data Solutions gave us a battle-hardened product. Every edge case, every browser. Smoothest launch we\'ve ever shipped.',
    name:    'Lena Fischer',
    role:    'CTO',
    company: 'Flowdesk',
  },
  {
    result:  'Placed 4 VAs in 5 days',
    quote:   'I needed 3 VAs placed fast. They delivered 4 qualified candidates in 5 days, I hired 2, and both are still with us 14 months later. Genuinely impressive turnaround.',
    name:    'James Okafor',
    role:    'Founder',
    company: 'ScaleOps Ltd.',
  },
  {
    result:  'Reports: 18 hrs → 25 mins',
    quote:   'The Power BI dashboards changed how we run this business. We used to wait 3 weeks for monthly reports. Now we have live data on every screen in every clinic.',
    name:    'Priya Nair',
    role:    'VP Operations',
    company: 'MediGroup Canada',
  },
]

/* ─── Lead-capture mini form ────────────────────────────────── */
function AuditForm() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [vals, setVals] = useState({ name: '', email: '', company: '' })

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!vals.name || !vals.email) return
    setLoading(true)
    // Redirect to full contact form with pre-intent signal
    await new Promise(r => setTimeout(r, 600))
    setLoading(false)
    setSent(true)
  }

  if (sent) return (
    <div className="flex flex-col items-start gap-4 py-4">
      <div className="w-12 h-12 rounded-2xl bg-brand-50 dark:bg-brand-500/10 border border-brand-200 dark:border-brand-500/25 flex items-center justify-center text-brand-500">
        <Check size={22} strokeWidth={2.5} />
      </div>
      <h3 className="text-xl font-[800] tracking-[-0.03em] text-neutral-900 dark:text-neutral-50">You're on the list.</h3>
      <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
        We'll reach out within 24 hours to schedule your free 30-minute audit. Check your inbox.
      </p>
      <Link href="/contact#form" className="text-sm font-[600] text-brand-500 hover:text-brand-600 inline-flex items-center gap-1.5 transition-colors">
        Send a detailed message instead <ChevronRight size={13} />
      </Link>
    </div>
  )

  return (
    <form onSubmit={submit} className="flex flex-col gap-4" noValidate>
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-[700] tracking-[0.07em] uppercase text-neutral-400 dark:text-neutral-500">Full Name *</label>
        <input
          type="text" required value={vals.name}
          onChange={e => setVals(v => ({ ...v, name: e.target.value }))}
          placeholder="Your name"
          className="w-full bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl px-4 py-3 text-sm text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15 transition-all"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-[700] tracking-[0.07em] uppercase text-neutral-400 dark:text-neutral-500">Work Email *</label>
        <input
          type="email" required value={vals.email}
          onChange={e => setVals(v => ({ ...v, email: e.target.value }))}
          placeholder="you@company.com"
          className="w-full bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl px-4 py-3 text-sm text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15 transition-all"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-[700] tracking-[0.07em] uppercase text-neutral-400 dark:text-neutral-500">Company</label>
        <input
          type="text" value={vals.company}
          onChange={e => setVals(v => ({ ...v, company: e.target.value }))}
          placeholder="Company name"
          className="w-full bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl px-4 py-3 text-sm text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15 transition-all"
        />
      </div>
      <button
        type="submit" disabled={loading}
        className="w-full inline-flex items-center justify-center gap-2 text-base font-[700] text-white bg-brand-500 hover:bg-brand-600 disabled:opacity-70 py-4 rounded-xl transition-all duration-150 hover:shadow-[0_8px_24px_rgba(232,68,10,0.4)] hover:-translate-y-px active:scale-[0.98] mt-1"
      >
        {loading ? 'Submitting…' : <> Get My Free Audit <ArrowRight size={16} /> </>}
      </button>
      <p className="text-xs text-neutral-400 text-center">No spam. No pitch. Just a straight answer on where you stand.</p>
    </form>
  )
}

/* ─── Page ──────────────────────────────────────────────────── */
export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY       = useTransform(scrollYProgress, [0, 1], ['0%', '12%'])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <>
      {/* ═══════════════════════════════════════════════════════
          § 1  HERO
      ═══════════════════════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="relative flex flex-col items-center justify-center overflow-hidden bg-white dark:bg-[#0e0c0b] min-h-[calc(100vh-72px)]"
      >
        {/* Fine grid */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none opacity-[0.4] dark:opacity-[0.15]"
          style={{
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.07) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,0.07) 1px,transparent 1px)',
            backgroundSize: '60px 60px',
            maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%,black 20%,transparent 100%)',
          }}
        />
        {/* Warm glow */}
        <div aria-hidden className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_55%_45%_at_65%_15%,rgba(232,68,10,0.08),transparent_65%)]" />
        <div aria-hidden className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_38%_32%_at_5%_85%,rgba(232,68,10,0.04),transparent_65%)]" />

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 w-full max-w-container mx-auto px-5 sm:px-6 py-14 sm:py-20 md:py-28 text-center"
        >
          {/* Trust badge */}
          <motion.div {...fade(0)} className="inline-flex items-center gap-2.5 bg-brand-50 dark:bg-brand-500/10 border border-brand-200 dark:border-brand-500/25 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse-dot flex-shrink-0" aria-hidden />
            <span className="text-xs font-[700] tracking-[0.1em] uppercase text-brand-500">
              Trusted by 100+ businesses · US · UK · CA · AU · Est. 2014
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            {...fade(0.08)}
            className="text-5xl sm:text-6xl md:text-7xl font-[800] tracking-[-0.045em] leading-[1.04] text-neutral-900 dark:text-neutral-50 mb-5 mx-auto max-w-4xl"
          >
            Outsource the work<br className="hidden sm:block" />
            {' '}that&apos;s slowing your{' '}
            <span className="text-brand-500">team&nbsp;down</span>
          </motion.h1>

          {/* Subheadline — ICP + outcome */}
          <motion.p
            {...fade(0.15)}
            className="text-xl md:text-2xl text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-[580px] mx-auto mb-3"
          >
            ET Data Solutions handles your staffing, data entry, QA testing, and data engineering — so your core team can focus on the work that actually moves the needle.
          </motion.p>
          <motion.p {...fade(0.2)} className="text-base text-neutral-400 dark:text-neutral-500 mb-10">
            India-based. Globally delivered. 99% accuracy guaranteed. From $499/month.
          </motion.p>

          {/* CTAs */}
          <motion.div {...fade(0.26)} className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12 md:mb-16">
            <Link
              href="/contact#form"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-base font-[700] text-white bg-brand-500 hover:bg-brand-600 px-9 py-4 rounded-2xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(232,68,10,0.4)] active:scale-[0.98]"
            >
              Book a Free Consultation <ArrowRight size={17} />
            </Link>
            <Link
              href="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-base font-[500] text-neutral-700 dark:text-neutral-300 bg-white dark:bg-neutral-800/60 border border-neutral-300 dark:border-neutral-700 hover:border-brand-400 dark:hover:border-brand-500 px-9 py-4 rounded-2xl transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98]"
            >
              View Services
            </Link>
          </motion.div>

          {/* Stats strip — CountUp on scroll */}
          <motion.div
            {...fade(0.32)}
            className="grid grid-cols-2 md:grid-cols-4 border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden max-w-[700px] mx-auto gap-px bg-neutral-200 dark:bg-neutral-800"
          >
            {stats.map(s => (
              <div
                key={s.l}
                className="bg-white dark:bg-[#0e0c0b] px-5 py-5 md:px-6 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors text-left"
              >
                <div className="text-3xl font-[800] tracking-[-0.05em] text-brand-500 leading-none mb-1.5">
                  <CountUp value={s.n} />
                </div>
                <div className="text-sm font-[600] text-neutral-800 dark:text-neutral-200 mb-0.5">{s.l}</div>
                <div className="text-xs text-neutral-400 dark:text-neutral-500">{s.sub}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          § 2  LOGO / TECH MARQUEE
      ═══════════════════════════════════════════════════════ */}
      <div className="border-y border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#0a0908] py-5 overflow-hidden">
        <p className="text-center text-xs font-[600] tracking-[0.1em] uppercase text-neutral-400 dark:text-neutral-600 mb-4">
          Technologies &amp; platforms we work with
        </p>
        <div className="relative overflow-hidden">
          <div className="flex w-max animate-marquee">
            {[...techLogos, ...techLogos, ...techLogos].map((logo, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 text-sm font-[700] text-neutral-400 dark:text-neutral-500 px-6 cursor-default flex-shrink-0"
              >
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: logo.color }} aria-hidden />
                {logo.name}
              </span>
            ))}
          </div>
          <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-neutral-50 dark:from-[#0a0908] to-transparent z-10" />
          <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-neutral-50 dark:from-[#0a0908] to-transparent z-10" />
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════
          § 3  SERVICES — PRODUCTIZED
      ═══════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-28 bg-white dark:bg-[#0e0c0b]">
        <div className="max-w-container mx-auto px-5 sm:px-6">
          <AnimateIn>
            <span className="text-xs font-[700] tracking-[0.12em] uppercase text-brand-500 mb-4 block">
              What we do
            </span>
          </AnimateIn>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 mb-14">
            <AnimateIn delay={0.07}>
              <h2 className="text-4xl md:text-5xl font-[800] tracking-[-0.04em] text-neutral-900 dark:text-neutral-50 leading-[1.08] max-w-[500px]">
                Four services. Every one built to give your team their time back.
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.14}>
              <p className="text-base text-neutral-500 dark:text-neutral-400 max-w-[360px] leading-relaxed">
                Each service is scoped, staffed, and QC&apos;d — so you get measurable results, not just activity reports.
              </p>
            </AnimateIn>
          </div>

          <div className="flex flex-col gap-5">
            {services.map((svc, i) => (
              <AnimateIn key={svc.id} delay={i * 0.07}>
                <div className="group grid grid-cols-1 lg:grid-cols-[1fr_280px] border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden hover:border-brand-300 dark:hover:border-brand-500/40 hover:shadow-[0_8px_32px_rgba(0,0,0,0.07)] dark:hover:shadow-[0_8px_32px_rgba(0,0,0,0.35)] transition-all duration-250">
                  {/* Text */}
                  <div className="p-8 md:p-10 bg-white dark:bg-[#111]">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 rounded-xl bg-brand-50 dark:bg-brand-500/10 border border-brand-100 dark:border-brand-500/20 flex items-center justify-center text-brand-500 flex-shrink-0">
                        {svcIcons[svc.id]}
                      </div>
                      <span className="text-xs font-[700] tracking-[0.1em] uppercase text-neutral-400 dark:text-neutral-600">
                        {svc.num} · {svc.subtitle}
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-[800] tracking-[-0.035em] text-neutral-900 dark:text-neutral-100 mb-2">
                      {svc.title}
                    </h3>
                    <p className="text-base font-[600] text-brand-500 mb-4">{svc.benefitHeadline}</p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-6 max-w-[520px]">
                      {svc.description}
                    </p>

                    {/* Outcomes */}
                    <div className="flex flex-col gap-2.5 mb-7">
                      {svc.outcomes.map((o, j) => (
                        <div key={j} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-brand-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check size={10} className="text-white" strokeWidth={3} />
                          </div>
                          <span className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">{o}</span>
                        </div>
                      ))}
                    </div>

                    {svc.highlight && (
                      <div className="flex items-start gap-3 bg-brand-50 dark:bg-brand-500/10 border border-brand-200 dark:border-brand-500/25 border-l-[3px] border-l-brand-500 rounded-xl p-4 mb-6">
                        <CheckSquare size={14} className="text-brand-500 flex-shrink-0 mt-0.5" />
                        <p className="text-sm font-[500] text-brand-700 dark:text-brand-400 leading-relaxed">{svc.highlight}</p>
                      </div>
                    )}

                    <Link
                      href={`/services#${svc.id}`}
                      className="inline-flex items-center gap-2 text-sm font-[700] text-white bg-brand-500 hover:bg-brand-600 px-6 py-3 rounded-xl transition-all duration-150 hover:-translate-y-px hover:shadow-[0_6px_20px_rgba(232,68,10,0.35)] active:scale-[0.98]"
                    >
                      See full details <ArrowRight size={14} />
                    </Link>
                  </div>

                  {/* Image + Best for */}
                  <div className="flex flex-col lg:border-l border-t lg:border-t-0 border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/60">
                    <div className="relative h-48 lg:h-52 overflow-hidden flex-shrink-0">
                      <Image
                        src={svcImages[svc.id]}
                        alt={svc.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 280px"
                        loading={i === 0 ? 'eager' : 'lazy'}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>
                    <div className="p-5 flex-1">
                      <p className="text-xs font-[700] tracking-[0.08em] uppercase text-neutral-400 dark:text-neutral-500 mb-2">
                        Best for
                      </p>
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

      {/* ═══════════════════════════════════════════════════════
          § 4  CASE STUDIES
      ═══════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-28 bg-neutral-50 dark:bg-[#0a0908]">
        <div className="max-w-container mx-auto px-5 sm:px-6">
          <AnimateIn>
            <span className="text-xs font-[700] tracking-[0.12em] uppercase text-brand-500 mb-4 block">
              Results we&apos;ve delivered
            </span>
          </AnimateIn>
          <AnimateIn delay={0.07}>
            <h2 className="text-4xl md:text-5xl font-[800] tracking-[-0.04em] text-neutral-900 dark:text-neutral-50 leading-[1.08] mb-14">
              Real work. Real clients.<br />Numbers that don&apos;t lie.
            </h2>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {caseStudies.map((cs, i) => (
              <AnimateIn key={i} delay={i * 0.1}>
                <div className="flex flex-col h-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden hover:shadow-[0_12px_40px_rgba(0,0,0,0.09)] dark:hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] transition-all duration-300 group">
                  {/* Result header */}
                  <div className="bg-brand-500 px-6 py-4 flex items-start gap-3">
                    <cs.icon size={17} className="text-white/80 flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-[700] text-white leading-snug">{cs.result}</span>
                  </div>

                  <div className="p-7 flex flex-col flex-1">
                    <p className="text-xs font-[700] tracking-[0.08em] uppercase text-brand-500 mb-5">{cs.tag}</p>

                    <div className="space-y-5 flex-1">
                      <div>
                        <p className="text-xs font-[700] uppercase tracking-[0.07em] text-neutral-400 dark:text-neutral-500 mb-1.5">The problem</p>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{cs.problem}</p>
                      </div>
                      <div>
                        <p className="text-xs font-[700] uppercase tracking-[0.07em] text-neutral-400 dark:text-neutral-500 mb-1.5">What we did</p>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{cs.solution}</p>
                      </div>
                      {/* Metric pills */}
                      <div className="flex flex-wrap gap-2 pt-1">
                        {cs.metrics.map(m => (
                          <span key={m} className="text-xs font-[600] text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-500/10 border border-brand-200 dark:border-brand-500/25 px-3 py-1 rounded-full">
                            {m}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 pt-5 border-t border-neutral-100 dark:border-neutral-800">
                      <Link
                        href="/contact#form"
                        className="text-sm font-[600] text-brand-500 hover:text-brand-600 inline-flex items-center gap-1.5 transition-colors group-hover:gap-2.5"
                      >
                        Get similar results <ChevronRight size={13} />
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

      {/* ═══════════════════════════════════════════════════════
          § 5  PROCESS
      ═══════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-28 bg-white dark:bg-[#0e0c0b]">
        <div className="max-w-container mx-auto px-5 sm:px-6">
          <AnimateIn>
            <span className="text-xs font-[700] tracking-[0.12em] uppercase text-brand-500 mb-4 block">How it works</span>
          </AnimateIn>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 mb-14">
            <AnimateIn delay={0.07}>
              <h2 className="text-4xl md:text-5xl font-[800] tracking-[-0.04em] text-neutral-900 dark:text-neutral-50 leading-[1.08]">
                First call to first delivery.<br />Under a week.
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.14}>
              <p className="text-base text-neutral-500 dark:text-neutral-400 max-w-[340px] leading-relaxed">
                No 8-week onboarding. No bloated discovery phases. We set up fast and keep you informed at every step.
              </p>
            </AnimateIn>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {process.map((p, i) => (
              <AnimateIn key={p.n} delay={i * 0.08}>
                <div className="relative bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 h-full hover:border-brand-300 dark:hover:border-brand-500/40 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.07)] dark:hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)] transition-all duration-250">
                  {/* Step connector */}
                  {i < process.length - 1 && (
                    <div
                      aria-hidden
                      className="hidden lg:block absolute top-8 -right-2.5 w-5 h-px bg-neutral-300 dark:bg-neutral-700"
                    />
                  )}
                  <div className="w-9 h-9 rounded-xl bg-brand-50 dark:bg-brand-500/10 border border-brand-100 dark:border-brand-500/20 flex items-center justify-center text-brand-500 mb-4 flex-shrink-0">
                    <p.icon size={16} />
                  </div>
                  <div className="text-xs font-[700] tracking-[0.1em] uppercase text-neutral-400 mb-2">{p.n}</div>
                  <h4 className="text-base font-[700] text-neutral-900 dark:text-neutral-100 mb-2 tracking-[-0.01em] leading-snug">{p.title}</h4>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">{p.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn delay={0.3} className="mt-10 flex justify-center">
            <Link
              href="/contact#form"
              className="inline-flex items-center gap-2 text-sm font-[700] text-white bg-brand-500 hover:bg-brand-600 px-7 py-3.5 rounded-xl transition-all duration-150 hover:-translate-y-px hover:shadow-[0_6px_20px_rgba(232,68,10,0.35)] active:scale-[0.98]"
            >
              Start your project <ArrowRight size={15} />
            </Link>
          </AnimateIn>
        </div>
      </section>

      <div className="h-px bg-neutral-200 dark:bg-neutral-800" />

      {/* ═══════════════════════════════════════════════════════
          § 6  PRICING
      ═══════════════════════════════════════════════════════ */}
      <section id="pricing" className="py-24 md:py-28 bg-neutral-50 dark:bg-[#0a0908]">
        <div className="max-w-container mx-auto px-5 sm:px-6">
          <AnimateIn>
            <span className="text-xs font-[700] tracking-[0.12em] uppercase text-brand-500 mb-4 block">
              Transparent pricing
            </span>
          </AnimateIn>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 mb-14">
            <AnimateIn delay={0.07}>
              <h2 className="text-4xl md:text-5xl font-[800] tracking-[-0.04em] text-neutral-900 dark:text-neutral-50 leading-[1.08]">
                Simple pricing.<br />No hidden fees.
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.14}>
              <p className="text-base text-neutral-500 dark:text-neutral-400 max-w-[360px] leading-relaxed">
                Every plan ships with a dedicated team, QC reporting, and a 30-day satisfaction guarantee. No lock-in contracts.
              </p>
            </AnimateIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
            {pricing.map((plan, i) => (
              <AnimateIn key={plan.tier} delay={i * 0.1}>
                <div
                  className={`relative flex flex-col rounded-2xl border overflow-hidden transition-all duration-250
                    ${plan.popular
                      ? 'border-brand-500 shadow-[0_0_0_1px_#e8440a,0_16px_48px_rgba(232,68,10,0.18)]'
                      : 'border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-[0_8px_32px_rgba(0,0,0,0.07)] dark:hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)]'
                    }`}
                >
                  {plan.popular && (
                    <div className="bg-brand-500 px-6 py-2.5 text-center">
                      <span className="text-xs font-[700] text-white tracking-[0.08em] uppercase">Most Popular</span>
                    </div>
                  )}
                  <div className={`p-8 flex flex-col flex-1 ${plan.popular ? 'bg-white dark:bg-[#111]' : ''}`}>
                    <p className="text-xs font-[600] text-neutral-400 dark:text-neutral-500 mb-1">{plan.note}</p>
                    <div className="flex items-baseline gap-1 mb-1">
                      <span className="text-4xl font-[800] tracking-[-0.05em] text-neutral-900 dark:text-neutral-50">{plan.price}</span>
                      {plan.period && <span className="text-base text-neutral-400">{plan.period}</span>}
                    </div>
                    <p className="text-sm font-[700] tracking-[0.05em] uppercase text-brand-500 mb-3">{plan.tier}</p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-7 pb-7 border-b border-neutral-100 dark:border-neutral-800">
                      {plan.desc}
                    </p>
                    <div className="flex flex-col gap-3 mb-8 flex-1">
                      {plan.features.map((f, j) => (
                        <div key={j} className="flex items-start gap-3">
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5
                            ${plan.popular ? 'bg-brand-500' : 'bg-neutral-200 dark:bg-neutral-700'}`}>
                            <Check
                              size={10}
                              className={plan.popular ? 'text-white' : 'text-neutral-600 dark:text-neutral-300'}
                              strokeWidth={3}
                            />
                          </div>
                          <span className="text-sm text-neutral-700 dark:text-neutral-300">{f}</span>
                        </div>
                      ))}
                    </div>
                    <Link
                      href="/contact#form"
                      className={`w-full inline-flex items-center justify-center gap-2 text-sm font-[700] px-6 py-3.5 rounded-xl transition-all duration-150 active:scale-[0.98]
                        ${plan.popular
                          ? 'text-white bg-brand-500 hover:bg-brand-600 hover:shadow-[0_6px_20px_rgba(232,68,10,0.4)] hover:-translate-y-px'
                          : 'text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700 hover:border-brand-400 dark:hover:border-brand-500 hover:-translate-y-px'
                        }`}
                    >
                      {plan.cta} <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn delay={0.35} className="mt-8 text-center">
            <p className="text-sm text-neutral-400 dark:text-neutral-500">
              All plans · 30-day satisfaction guarantee · No lock-in · Scale up or down any month
            </p>
          </AnimateIn>
        </div>
      </section>

      <div className="h-px bg-neutral-200 dark:bg-neutral-800" />

      {/* ═══════════════════════════════════════════════════════
          § 7  TESTIMONIALS
      ═══════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-28 bg-white dark:bg-[#0e0c0b]">
        <div className="max-w-container mx-auto px-5 sm:px-6">
          <AnimateIn>
            <span className="text-xs font-[700] tracking-[0.12em] uppercase text-brand-500 mb-4 block">
              Client testimonials
            </span>
          </AnimateIn>
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
                  {/* Stars */}
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} size={14} className="text-brand-500 fill-brand-500" />
                    ))}
                  </div>
                  <p className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed flex-1 mb-6 italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
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

      {/* ═══════════════════════════════════════════════════════
          § 8  LEAD CAPTURE
      ═══════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-28 bg-neutral-50 dark:bg-[#0a0908]">
        <div className="max-w-container mx-auto px-5 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left */}
            <AnimateIn>
              <span className="text-xs font-[700] tracking-[0.12em] uppercase text-brand-500 mb-4 block">
                Free operations audit
              </span>
              <h2 className="text-4xl md:text-5xl font-[800] tracking-[-0.04em] text-neutral-900 dark:text-neutral-50 leading-[1.08] mb-5">
                Find out exactly where you&apos;re losing time and money.
              </h2>
              <p className="text-base text-neutral-500 dark:text-neutral-400 leading-relaxed mb-8 max-w-[420px]">
                Book a free 30-minute operations audit. We&apos;ll map your current workflow, identify your three biggest bottlenecks, and give you a cost-savings estimate — no sales pitch attached.
              </p>
              <div className="flex flex-col gap-3.5">
                {[
                  'No commitment, no pitch — just specific insights',
                  'Actionable recommendations you can use immediately',
                  'Cost-savings estimate based on your actual volume',
                  'Response and booking within 24 hours',
                ].map(b => (
                  <div key={b} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand-500 flex items-center justify-center flex-shrink-0">
                      <Check size={10} className="text-white" strokeWidth={3} />
                    </div>
                    <span className="text-sm font-[500] text-neutral-700 dark:text-neutral-300">{b}</span>
                  </div>
                ))}
              </div>
            </AnimateIn>

            {/* Form card */}
            <AnimateIn delay={0.15}>
              <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.07)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.35)]">
                <h3 className="text-xl font-[800] tracking-[-0.03em] text-neutral-900 dark:text-neutral-50 mb-1">
                  Get your free audit
                </h3>
                <p className="text-sm text-neutral-400 dark:text-neutral-500 mb-7">
                  30 seconds to fill in. We&apos;ll reach out within 24 hours.
                </p>
                <AuditForm />
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      <div className="h-px bg-neutral-200 dark:bg-neutral-800" />

      {/* ═══════════════════════════════════════════════════════
          § 9  FINAL CTA
      ═══════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-white dark:bg-[#0e0c0b]">
        <div className="max-w-container mx-auto px-5 sm:px-6">
          <AnimateIn>
            <div className="relative rounded-3xl bg-brand-500 overflow-hidden px-8 py-20 md:px-20 text-center">
              {/* Subtle grid */}
              <div
                aria-hidden
                className="absolute inset-0 opacity-[0.07]"
                style={{
                  backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)',
                  backgroundSize: '48px 48px',
                }}
              />
              {/* Glow blobs */}
              <div aria-hidden className="absolute -top-28 -right-28 w-96 h-96 rounded-full bg-white/10 blur-3xl pointer-events-none" />
              <div aria-hidden className="absolute -bottom-28 -left-28 w-96 h-96 rounded-full bg-white/10 blur-3xl pointer-events-none" />

              <div className="relative z-10 max-w-[580px] mx-auto">
                <span className="text-xs font-[700] tracking-[0.12em] uppercase text-white/55 mb-5 block">
                  Stop leaving efficiency on the table
                </span>
                <h2 className="text-4xl md:text-5xl font-[800] tracking-[-0.04em] text-white leading-[1.08] mb-5">
                  Your team has better things<br />to do than data entry.
                </h2>
                <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-[420px] mx-auto">
                  Join 100+ businesses that outsourced the right work — and got their team&apos;s focus back.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact#form"
                    className="inline-flex items-center justify-center gap-2 text-base font-[700] text-brand-600 bg-white hover:bg-neutral-50 px-8 py-4 rounded-2xl transition-all duration-150 hover:-translate-y-px hover:shadow-xl active:scale-[0.98]"
                  >
                    Book a Free Consultation <ArrowRight size={16} />
                  </Link>
                  <a
                    href="tel:+13023579776"
                    className="inline-flex items-center justify-center gap-2 text-base font-[500] text-white/85 border border-white/25 hover:border-white/55 hover:bg-white/10 px-8 py-4 rounded-2xl transition-all duration-150 active:scale-[0.98]"
                  >
                    <Phone size={16} /> Call us now
                  </a>
                </div>
                <p className="text-white/40 text-sm mt-7">
                  No contract required · Reply within 24 hours · 30-day guarantee
                </p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  )
}
