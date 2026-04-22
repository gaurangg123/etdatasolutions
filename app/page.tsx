import { Metadata } from 'next'
import Link from 'next/link'
import { Users, Database, CheckSquare, BarChart2, ArrowRight, Shield, Clock, Star } from 'lucide-react'
import Hero from '@/components/sections/Hero'
import TrustBar from '@/components/sections/TrustBar'
import Container from '@/components/ui/Container'
import AnimateIn from '@/components/ui/AnimateIn'

export const metadata: Metadata = {
  title: 'ET Data Solutions — Staffing, Data, QA & Data Engineering',
  description: 'India-based outsourcing for staffing, data entry, QA testing, and data engineering. 99% accuracy. Starting $499/mo.',
}

const Divider = () => (
  <div aria-hidden style={{ height: '1px', background: 'linear-gradient(90deg,transparent,rgba(232,68,10,0.13) 25%,rgba(232,68,10,0.18) 50%,rgba(232,68,10,0.13) 75%,transparent)' }} />
)

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] },
}

const serviceCards = [
  { id: 'staffing',        anchor: 'staffing',         icon: Users,        name: 'Staffing & VA Recruitment',          desc: 'Pre-screened candidates and VAs placed in under 7 days.' },
  { id: 'data-entry',      anchor: 'data-entry',        icon: Database,     name: 'Data Entry & Excel Automation',      desc: '99%+ accuracy on high-volume data processing and automation.' },
  { id: 'qa-testing',      anchor: 'qa-testing',        icon: CheckSquare,  name: 'Manual QA Testing',                  desc: 'Human testers finding bugs across every browser and device.' },
  { id: 'data-engineering',anchor: 'data-engineering',  icon: BarChart2,    name: 'Data Engineering & BI',              desc: 'Modern data lakehouses and live dashboards on Snowflake & Power BI.' },
]

const results = [
  { metric: '$40K saved',   label: 'Annual savings for US logistics company',    story: '/about#results' },
  { metric: 'Zero P1 bugs', label: 'QA for UK SaaS on v2.0 launch day',          story: '/about#results' },
  { metric: '$2.3M found',  label: 'Unbilled services uncovered for healthcare',  story: '/about#results' },
]

const testimonialPeek = [
  { initial: 'M', name: 'Michael Reeves', badge: 'Error rate: 4% → 0.4%',   bg: 'from-brand-400 to-brand-600' },
  { initial: 'L', name: 'Lena Fischer',   badge: 'Zero P1 bugs on launch',  bg: 'from-sky-400 to-sky-600'     },
  { initial: 'J', name: 'James Okafor',   badge: '4 VAs placed in 5 days',  bg: 'from-violet-400 to-violet-600' },
  { initial: 'P', name: 'Priya Nair',     badge: 'Reporting: 18 hrs → 25 mins', bg: 'from-emerald-400 to-emerald-600' },
]

const processSteps = [
  { n: '01', title: '30-min discovery call' },
  { n: '02', title: 'Scoped proposal in 24h' },
  { n: '03', title: 'Team live in 72h' },
  { n: '04', title: 'Delivery with QC reports' },
  { n: '05', title: 'Monthly review & scale' },
]

const guarantees = [
  { icon: Shield, text: '30-day guarantee' },
  { icon: Clock,  text: 'Reply in 24h' },
  { icon: Star,   text: 'No lock-in' },
]

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />

      {/* SERVICES OVERVIEW */}
      <Divider />
      <section className="py-16 md:py-20 bg-white dark:bg-ink-950">
        <Container>
          <AnimateIn>
            <div className="text-center mb-12">
              <span className="inline-block text-[0.7rem] font-[750] tracking-[0.14em] uppercase text-brand-500 mb-3">Our services</span>
              <h2 className="text-[1.8rem] md:text-[2.4rem] font-[800] tracking-[-0.04em] text-ink-900 dark:text-ink-50 leading-[1.08] text-balance">
                Four services. One reliable partner.
              </h2>
            </div>
          </AnimateIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {serviceCards.map((svc, i) => (
              <AnimateIn key={svc.id} delay={i * 0.08}>
                <div className="group bg-white dark:bg-ink-900 border border-ink-200 dark:border-ink-800 rounded-2xl p-6 hover:border-brand-300 dark:hover:border-brand-500/40 hover:-translate-y-1 hover:shadow-card-hover transition-all duration-250 flex flex-col h-full">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 dark:bg-brand-500/10 border border-brand-100 dark:border-brand-500/20 flex items-center justify-center text-brand-500 mb-4">
                    <svc.icon size={18} />
                  </div>
                  <h3 className="text-sm font-[750] text-ink-900 dark:text-ink-100 mb-2">{svc.name}</h3>
                  <p className="text-xs text-ink-500 dark:text-ink-400 leading-relaxed flex-1 mb-4">{svc.desc}</p>
                  <Link href={`/services#${svc.anchor}`}
                    className="inline-flex items-center gap-1 text-xs font-[650] text-brand-500 hover:text-brand-600 transition-colors group-hover:gap-2">
                    Learn more <ArrowRight size={11} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </AnimateIn>
            ))}
          </div>
        </Container>
      </section>

      {/* RESULTS SNAPSHOT */}
      <Divider />
      <section className="py-16 md:py-20 bg-ink-50 dark:bg-[#0a0908]">
        <Container>
          <AnimateIn>
            <div className="text-center mb-10">
              <span className="inline-block text-[0.7rem] font-[750] tracking-[0.14em] uppercase text-brand-500 mb-3">Proof</span>
              <h2 className="text-[1.8rem] md:text-[2.4rem] font-[800] tracking-[-0.04em] text-ink-900 dark:text-ink-50 leading-[1.08]">
                Real clients. Numbers that don&apos;t lie.
              </h2>
            </div>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {results.map((r, i) => (
              <AnimateIn key={r.metric} delay={i * 0.1}>
                <div className="bg-white dark:bg-ink-900 border border-ink-200 dark:border-ink-800 rounded-2xl p-7 text-center hover:shadow-card-hover hover:-translate-y-1 transition-all duration-250">
                  <div className="text-[2.4rem] font-[850] tracking-[-0.05em] text-brand-500 leading-none mb-2">{r.metric}</div>
                  <p className="text-sm text-ink-500 dark:text-ink-400 leading-snug mb-4">{r.label}</p>
                  <Link href={r.story} className="inline-flex items-center gap-1 text-xs font-[650] text-brand-500 hover:text-brand-600 transition-colors">
                    See full story <ArrowRight size={11} />
                  </Link>
                </div>
              </AnimateIn>
            ))}
          </div>
        </Container>
      </section>

      {/* SOCIAL PROOF STRIP */}
      <Divider />
      <section className="py-14 md:py-18 bg-white dark:bg-ink-950">
        <Container>
          <AnimateIn>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
              <div>
                <span className="inline-block text-[0.7rem] font-[750] tracking-[0.14em] uppercase text-brand-500 mb-2">Testimonials</span>
                <h2 className="text-[1.5rem] md:text-[1.8rem] font-[800] tracking-[-0.04em] text-ink-900 dark:text-ink-50">What clients say</h2>
              </div>
              <Link href="/testimonials" className="text-sm font-[650] text-brand-500 hover:text-brand-600 transition-colors flex items-center gap-1 whitespace-nowrap">
                Read all testimonials <ArrowRight size={13} />
              </Link>
            </div>
          </AnimateIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 overflow-x-auto">
            {testimonialPeek.map((t, i) => (
              <AnimateIn key={t.name} delay={i * 0.08}>
                <div className="bg-white dark:bg-ink-900 border border-ink-200 dark:border-ink-800 rounded-2xl p-5 flex flex-col items-center text-center gap-3 hover:shadow-card hover:-translate-y-0.5 transition-all duration-250">
                  <div className={`w-11 h-11 rounded-full flex items-center justify-center text-sm font-[700] ring-2 ring-offset-2 ring-brand-200 dark:ring-brand-500/30 dark:ring-offset-ink-900 bg-gradient-to-br ${t.bg} text-white flex-shrink-0`}>
                    {t.initial}
                  </div>
                  <p className="text-sm font-[700] text-ink-900 dark:text-ink-100">{t.name}</p>
                  <span className="text-[0.7rem] font-[600] text-brand-500 bg-brand-50 dark:bg-brand-500/10 border border-brand-100 dark:border-brand-500/20 px-2.5 py-1 rounded-full leading-tight">
                    {t.badge}
                  </span>
                </div>
              </AnimateIn>
            ))}
          </div>
        </Container>
      </section>

      {/* PROCESS SNAPSHOT */}
      <Divider />
      <section className="py-14 md:py-18 bg-ink-50 dark:bg-[#0a0908]">
        <Container>
          <AnimateIn>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
              <div>
                <span className="inline-block text-[0.7rem] font-[750] tracking-[0.14em] uppercase text-brand-500 mb-2">How we work</span>
                <h2 className="text-[1.5rem] md:text-[1.8rem] font-[800] tracking-[-0.04em] text-ink-900 dark:text-ink-50">From call to delivery in days</h2>
              </div>
              <Link href="/about#process" className="text-sm font-[650] text-brand-500 hover:text-brand-600 transition-colors flex items-center gap-1 whitespace-nowrap">
                See how it works <ArrowRight size={13} />
              </Link>
            </div>
          </AnimateIn>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {processSteps.map((step, i) => (
              <AnimateIn key={step.n} delay={i * 0.07}>
                <div className="flex items-center gap-3 bg-white dark:bg-ink-900 border border-ink-200 dark:border-ink-800 rounded-xl px-4 py-3 hover:border-brand-300 dark:hover:border-brand-500/40 transition-all">
                  <span className="text-[0.7rem] font-[750] tracking-[0.1em] text-brand-500 flex-shrink-0">{step.n}</span>
                  <span className="text-xs font-[650] text-ink-800 dark:text-ink-200 leading-snug">{step.title}</span>
                </div>
              </AnimateIn>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA BANNER */}
      <Divider />
      <section className="py-16 md:py-20 bg-white dark:bg-ink-950">
        <Container>
          <AnimateIn>
            <div className="relative rounded-[28px] overflow-hidden">
              <div className="absolute inset-0 bg-ink-900 dark:bg-ink-950" />
              <div aria-hidden className="absolute -top-40 -right-20 w-[500px] h-[500px] rounded-full bg-brand-500/20 blur-[80px]" />
              <div aria-hidden className="absolute -bottom-40 -left-20 w-[400px] h-[400px] rounded-full bg-brand-500/15 blur-[80px]" />
              <div aria-hidden className="absolute inset-0 opacity-[0.04]"
                style={{ backgroundImage:'linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)', backgroundSize:'44px 44px' }} />
              <div className="relative z-10 px-8 py-20 md:px-20 text-center">
                <h2 className="text-[2rem] sm:text-[2.6rem] font-[850] tracking-[-0.04em] text-white leading-[1.08] mb-5 text-balance max-w-[560px] mx-auto">
                  Ready to remove your biggest operational bottleneck?
                </h2>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                  <Link href="/contact"
                    className="group inline-flex items-center justify-center gap-2 text-base font-[700] text-brand-600 bg-white hover:bg-ink-50 px-8 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-px hover:shadow-[0_8px_30px_rgba(255,255,255,0.2)] shine">
                    Book a Free Consultation <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                  </Link>
                  <a href="tel:+13023579776"
                    className="inline-flex items-center justify-center gap-2 text-base font-[500] text-white/80 border border-white/20 hover:border-white/40 px-8 py-3.5 rounded-xl transition-all duration-200">
                    Call us now
                  </a>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-5">
                  {guarantees.map(g => (
                    <div key={g.text} className="inline-flex items-center gap-2 text-xs font-[550] text-white/50">
                      <g.icon size={13} className="text-brand-400 flex-shrink-0" />
                      {g.text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimateIn>
        </Container>
      </section>
    </>
  )
}
