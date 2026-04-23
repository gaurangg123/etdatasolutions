import Link from 'next/link'
import Hero from '@/components/sections/Hero'
import TrustBar from '@/components/sections/TrustBar'
import Container from '@/components/ui/Container'
import AnimateIn from '@/components/ui/AnimateIn'
import CtaBanner from '@/components/shared/CtaBanner'
import { Users, Database, CheckSquare, BarChart2, TrendingUp, FileCheck, BarChart, ArrowRight, Phone, FileText, Search, Repeat } from 'lucide-react'


const Divider = () => (
  <div aria-hidden style={{ height:'1px', background:'linear-gradient(90deg,transparent,rgba(232,68,10,0.13) 25%,rgba(232,68,10,0.18) 50%,rgba(232,68,10,0.13) 75%,transparent)' }} />
)

// ── SERVICES OVERVIEW ─────────────────────────────────────────────────────────
const serviceCards = [
  { icon: Users,     label:'Staffing & VA Recruitment', desc:'Hire faster. Pre-screened candidates placed in under 7 days.', href:'/services#staffing',      color:'text-violet-500', bg:'bg-violet-50 dark:bg-violet-500/10', border:'border-violet-100 dark:border-violet-500/20' },
  { icon: Database,  label:'Data Entry & Automation',  desc:'99% accuracy on high-volume data entry and Excel automation.', href:'/services#data-entry',    color:'text-sky-500',    bg:'bg-sky-50 dark:bg-sky-500/10',       border:'border-sky-100 dark:border-sky-500/20' },
  { icon: CheckSquare,label:'Manual QA Testing',       desc:'Human testers catching bugs automated scripts always miss.',  href:'/services#qa-testing',    color:'text-emerald-500',bg:'bg-emerald-50 dark:bg-emerald-500/10',border:'border-emerald-100 dark:border-emerald-500/20' },
  { icon: BarChart2, label:'Data Engineering & BI',    desc:'Snowflake, Databricks, Power BI — your data stack, built.',   href:'/services#data-engineering',color:'text-amber-500', bg:'bg-amber-50 dark:bg-amber-500/10',   border:'border-amber-100 dark:border-amber-500/20' },
]

// ── RESULTS SNAPSHOT ──────────────────────────────────────────────────────────
const results = [
  { icon: TrendingUp, val:'$40K', label:'saved annually', sub:'Invoice processing: 14 days → 3 days', color:'#0ea5e9' },
  { icon: FileCheck,  val:'Zero', label:'P1 bugs on launch', sub:'Dev team shipped 3 weeks ahead of schedule', color:'#10b981' },
  { icon: BarChart,   val:'$2.3M',label:'in unbilled services found', sub:'Weekly reporting: 18 hours → 25 minutes', color:'#8b5cf6' },
]

// ── SOCIAL PROOF STRIP ────────────────────────────────────────────────────────
const previews = [
  { initial:'M', name:'Michael Reeves', role:'CFO · Apex Freight Group', result:'Error rate: 4% → 0.4%',      color:'from-sky-400 to-sky-600' },
  { initial:'L', name:'Lena Fischer',   role:'CTO · Flowdesk',           result:'Zero P1 bugs on launch',     color:'from-emerald-400 to-emerald-600' },
  { initial:'J', name:'James Okafor',   role:'Founder · ScaleOps Ltd.',  result:'4 VAs placed in 5 days',     color:'from-violet-400 to-violet-600' },
  { initial:'P', name:'Priya Nair',     role:'VP Ops · MediGroup Canada',result:'Reporting: 18 hrs → 25 mins',color:'from-amber-400 to-amber-600' },
]

// ── PROCESS SNAPSHOT ──────────────────────────────────────────────────────────
const steps = [
  { n:'01', title:'Discovery call',    icon: Phone },
  { n:'02', title:'Scoped proposal',   icon: FileText },
  { n:'03', title:'Team live in 72h',  icon: Users },
  { n:'04', title:'Delivery + QC',     icon: Search },
  { n:'05', title:'Monthly review',    icon: Repeat },
]

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />

      {/* ── Services Overview ── */}
      <Divider />
      <section className="py-16 md:py-20 bg-white dark:bg-ink-950">
        <Container>
          <AnimateIn className="text-center mb-10">
            <span className="inline-block text-[0.7rem] font-[750] tracking-[0.14em] uppercase text-brand-500 mb-3">What we handle</span>
            <h2 className="text-[1.9rem] sm:text-[2.4rem] font-[800] tracking-[-0.04em] text-ink-900 dark:text-ink-50 leading-tight">Four services. One reliable partner.</h2>
          </AnimateIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {serviceCards.map((s, i) => (
              <AnimateIn key={s.label} delay={i * 0.08}>
                <Link href={s.href} className="group flex flex-col gap-4 p-6 bg-white dark:bg-ink-900 border border-ink-200 dark:border-ink-800 rounded-2xl hover:border-brand-300 dark:hover:border-brand-500/40 hover:-translate-y-1 hover:shadow-card-hover transition-all duration-300">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${s.bg} ${s.color} ${s.border}`}>
                    <s.icon size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-[750] text-ink-900 dark:text-ink-100 mb-1.5 leading-snug">{s.label}</p>
                    <p className="text-xs text-ink-500 dark:text-ink-400 leading-relaxed">{s.desc}</p>
                  </div>
                  <span className="mt-auto inline-flex items-center gap-1.5 text-xs font-[650] text-brand-500 group-hover:gap-2.5 transition-all">
                    Learn more <ArrowRight size={12} />
                  </span>
                </Link>
              </AnimateIn>
            ))}
          </div>
          <AnimateIn delay={0.3} className="mt-6 text-center">
            <Link href="/services" className="inline-flex items-center gap-2 text-sm font-[600] text-ink-500 dark:text-ink-400 hover:text-brand-500 transition-colors">
              View all services & pricing <ArrowRight size={14} />
            </Link>
          </AnimateIn>
        </Container>
      </section>

      {/* ── Results Snapshot ── */}
      <Divider />
      <section className="py-16 md:py-20 bg-ink-50 dark:bg-[#0a0908]">
        <Container>
          <AnimateIn className="text-center mb-10">
            <span className="inline-block text-[0.7rem] font-[750] tracking-[0.14em] uppercase text-brand-500 mb-3">Proof, not promises</span>
            <h2 className="text-[1.9rem] sm:text-[2.4rem] font-[800] tracking-[-0.04em] text-ink-900 dark:text-ink-50 leading-tight">Real clients. Numbers that don&apos;t lie.</h2>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {results.map((r, i) => (
              <AnimateIn key={r.val} delay={i * 0.1}>
                <div className="group bg-white dark:bg-ink-900 border border-ink-200 dark:border-ink-800 rounded-2xl p-6 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <r.icon size={18} style={{ color: r.color }} />
                    <span className="text-[2rem] font-[850] tracking-[-0.05em] leading-none" style={{ color: r.color }}>{r.val}</span>
                  </div>
                  <p className="text-sm font-[700] text-ink-900 dark:text-ink-100 mb-1">{r.label}</p>
                  <p className="text-xs text-ink-400 dark:text-ink-500 leading-relaxed mb-4">{r.sub}</p>
                  <Link href="/about#results" className="inline-flex items-center gap-1.5 text-xs font-[650] text-brand-500 hover:gap-2.5 transition-all">
                    See full story <ArrowRight size={11} />
                  </Link>
                </div>
              </AnimateIn>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Social Proof Strip ── */}
      <Divider />
      <section className="py-14 md:py-18 bg-white dark:bg-ink-950">
        <Container>
          <AnimateIn className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="inline-block text-[0.7rem] font-[750] tracking-[0.14em] uppercase text-brand-500 mb-1">Client testimonials</span>
              <h2 className="text-[1.5rem] font-[800] tracking-[-0.03em] text-ink-900 dark:text-ink-50">Don&apos;t take our word for it.</h2>
            </div>
            <Link href="/testimonials" className="inline-flex items-center gap-1.5 text-sm font-[650] text-brand-500 hover:gap-2.5 transition-all flex-shrink-0">
              Read all testimonials <ArrowRight size={14} />
            </Link>
          </AnimateIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {previews.map((p, i) => (
              <AnimateIn key={p.name} delay={i * 0.07}>
                <Link href="/testimonials" className="group flex flex-col gap-3 p-4 bg-ink-50 dark:bg-ink-900 border border-ink-200 dark:border-ink-800 rounded-2xl hover:border-brand-300 dark:hover:border-brand-500/40 hover:-translate-y-0.5 hover:shadow-card transition-all duration-200">
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-[800] text-white flex-shrink-0 bg-gradient-to-br ${p.color} ring-2 ring-offset-2 ring-brand-200 dark:ring-brand-500/30 dark:ring-offset-ink-900`}>
                      {p.initial}
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-[700] text-ink-900 dark:text-ink-100 leading-tight truncate">{p.name}</p>
                      <p className="text-[0.68rem] text-ink-400 dark:text-ink-500 truncate">{p.role}</p>
                    </div>
                  </div>
                  <span className="text-[0.72rem] font-[600] text-brand-500 bg-brand-50 dark:bg-brand-500/10 border border-brand-100 dark:border-brand-500/20 px-2.5 py-1 rounded-full w-fit">
                    {p.result}
                  </span>
                </Link>
              </AnimateIn>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Process Snapshot ── */}
      <Divider />
      <section className="py-14 md:py-18 bg-ink-50 dark:bg-[#0a0908]">
        <Container>
          <AnimateIn className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="inline-block text-[0.7rem] font-[750] tracking-[0.14em] uppercase text-brand-500 mb-1">How we work</span>
              <h2 className="text-[1.5rem] font-[800] tracking-[-0.03em] text-ink-900 dark:text-ink-50">First call to first delivery in under a week.</h2>
            </div>
            <Link href="/about#process" className="inline-flex items-center gap-1.5 text-sm font-[650] text-brand-500 hover:gap-2.5 transition-all flex-shrink-0">
              See how it works <ArrowRight size={14} />
            </Link>
          </AnimateIn>
          <div className="grid grid-cols-5 gap-2">
            {steps.map((s, i) => (
              <AnimateIn key={s.n} delay={i * 0.07}>
                <div className="relative flex flex-col items-center text-center gap-2">
                  <div className="w-9 h-9 rounded-xl bg-brand-50 dark:bg-brand-500/10 border border-brand-100 dark:border-brand-500/20 flex items-center justify-center text-brand-500 flex-shrink-0">
                    <s.icon size={15} />
                  </div>
                  <span className="text-[0.65rem] font-[700] tracking-[0.08em] uppercase text-ink-400 dark:text-ink-500">{s.n}</span>
                  <p className="text-xs font-[650] text-ink-700 dark:text-ink-300 leading-snug">{s.title}</p>
                  {i < steps.length - 1 && (
                    <div aria-hidden className="hidden md:block absolute top-[18px] h-px border-t border-dashed border-ink-300 dark:border-ink-700"
                      style={{ left:'calc(50% + 20px)', right:'calc(-50% + 20px)' }} />
                  )}
                </div>
              </AnimateIn>
            ))}
          </div>
        </Container>
      </section>

      {/* ── CTA Banner ── */}
      <Divider />
      <CtaBanner
        headline="Ready to remove your biggest operational bottleneck?"
        subtext="Join 100+ businesses that outsourced the right work — and got their team's focus back."
        primaryBtn={{ label: 'Book a Free Consultation', href: '/contact' }}
        secondaryBtn={{ label: 'Call us now', href: 'tel:+13023579776' }}
      />
    </>
  )
}
