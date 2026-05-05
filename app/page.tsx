import Link from 'next/link'
import Hero from '@/components/sections/Hero'
import TrustBar from '@/components/sections/TrustBar'
import Container from '@/components/ui/Container'
import AnimateIn from '@/components/ui/AnimateIn'
import { Users, Database, CheckSquare, BarChart2, TrendingUp, FileCheck, BarChart, ArrowRight, Phone, FileText, Search, Repeat, Shield, Clock, Star } from 'lucide-react'

const serviceCards = [
  { icon:Users,       label:'Staffing & VA',      desc:'Pre-screened candidates placed in under 7 days.',          href:'/services#staffing',         color:'text-violet-500', bg:'bg-violet-50 dark:bg-violet-500/10', border:'border-violet-100 dark:border-violet-500/20' },
  { icon:Database,    label:'Data Entry & Excel',  desc:'99% accuracy on high-volume data processing.',             href:'/services#data-entry',       color:'text-sky-500',    bg:'bg-sky-50 dark:bg-sky-500/10',       border:'border-sky-100 dark:border-sky-500/20' },
  { icon:CheckSquare, label:'Manual QA Testing',   desc:'Human testers catching what automated scripts miss.',      href:'/services#qa-testing',       color:'text-emerald-500',bg:'bg-emerald-50 dark:bg-emerald-500/10',border:'border-emerald-100 dark:border-emerald-500/20' },
  { icon:BarChart2,   label:'Data Engineering',    desc:'Snowflake, Databricks, Power BI — your stack, built.',    href:'/services#data-engineering', color:'text-amber-500',  bg:'bg-amber-50 dark:bg-amber-500/10',   border:'border-amber-100 dark:border-amber-500/20' },
]
const results = [
  { icon:TrendingUp, val:'$40K',  label:'saved annually',             sub:'Invoice processing: 14 days → 3 days',      color:'#0ea5e9' },
  { icon:FileCheck,  val:'Zero',  label:'P1 bugs on launch',          sub:'Dev team shipped 3 weeks early',            color:'#10b981' },
  { icon:BarChart,   val:'$2.3M', label:'in unbilled services found', sub:'Weekly reporting: 18 hours → 25 minutes',  color:'#8b5cf6' },
]
const previews = [
  { initial:'M', name:'Michael Reeves', role:'CFO · Apex Freight',    result:'Error rate: 4% → 0.4%',      color:'from-sky-400 to-sky-600'    },
  { initial:'L', name:'Lena Fischer',   role:'CTO · Flowdesk',        result:'Zero P1 bugs on launch',     color:'from-emerald-400 to-emerald-600' },
  { initial:'J', name:'James Okafor',   role:'Founder · ScaleOps',    result:'4 VAs placed in 5 days',     color:'from-violet-400 to-violet-600' },
  { initial:'P', name:'Priya Nair',     role:'VP Ops · MediGroup',    result:'Reporting: 18 hrs → 25 min', color:'from-amber-400 to-amber-600' },
]
const steps = [
  { n:'01', title:'Discovery call',   icon:Phone    },
  { n:'02', title:'Scoped proposal',  icon:FileText },
  { n:'03', title:'Team live in 72h', icon:Users    },
  { n:'04', title:'Delivery + QC',    icon:Search   },
  { n:'05', title:'Monthly review',   icon:Repeat   },
]
const guarantees = [
  { icon:Shield, text:'30-day guarantee' },
  { icon:Clock,  text:'Reply in 24 hours' },
  { icon:Star,   text:'No lock-in contract' },
]

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />

      {/* Services Overview */}
      <section className="snap-section bg-white dark:bg-ink-950">
        <Container className="py-8 md:py-12 w-full">
          <AnimateIn className="text-center mb-6">
            <span className="inline-block text-[0.7rem] font-[750] tracking-[0.14em] uppercase text-brand-500 mb-2">What we handle</span>
            <h2 className="text-[1.8rem] sm:text-[2.2rem] font-[800] tracking-[-0.04em] text-ink-900 dark:text-ink-50">Four services. One reliable partner.</h2>
          </AnimateIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {serviceCards.map((s,i) => (
              <AnimateIn key={s.label} delay={i*0.08}>
                <Link href={s.href} className="group flex flex-col gap-3 p-5 bg-white dark:bg-ink-900 border border-ink-200 dark:border-ink-800 rounded-2xl hover:border-brand-300 dark:hover:border-brand-500/40 hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300 h-full">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${s.bg} ${s.color} ${s.border}`}><s.icon size={18}/></div>
                  <div className="flex-1">
                    <p className="text-sm font-[750] text-ink-900 dark:text-ink-100 mb-1">{s.label}</p>
                    <p className="text-xs text-ink-500 dark:text-ink-400 leading-relaxed">{s.desc}</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-[650] text-brand-500 group-hover:gap-2.5 transition-all">Learn more <ArrowRight size={12}/></span>
                </Link>
              </AnimateIn>
            ))}
          </div>
          <AnimateIn delay={0.3} className="mt-5 text-center">
            <Link href="/services" className="inline-flex items-center gap-2 text-sm font-[600] text-ink-500 dark:text-ink-400 hover:text-brand-500 transition-colors">View all services <ArrowRight size={14}/></Link>
          </AnimateIn>
        </Container>
      </section>

      {/* Results */}
      <section className="snap-section bg-ink-50 dark:bg-[#0a0908]">
        <Container className="py-8 md:py-12 w-full">
          <AnimateIn className="text-center mb-6">
            <span className="inline-block text-[0.7rem] font-[750] tracking-[0.14em] uppercase text-brand-500 mb-2">Proof, not promises</span>
            <h2 className="text-[1.8rem] sm:text-[2.2rem] font-[800] tracking-[-0.04em] text-ink-900 dark:text-ink-50">Real clients. Numbers that don&apos;t lie.</h2>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {results.map((r,i) => (
              <AnimateIn key={r.val} delay={i*0.1}>
                <div className="bg-white dark:bg-ink-900 border border-ink-200 dark:border-ink-800 rounded-2xl p-5 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-3"><r.icon size={18} style={{color:r.color}}/><span className="text-[1.8rem] font-[850] tracking-[-0.05em] leading-none" style={{color:r.color}}>{r.val}</span></div>
                  <p className="text-sm font-[700] text-ink-900 dark:text-ink-100 mb-1">{r.label}</p>
                  <p className="text-xs text-ink-400 dark:text-ink-500 leading-relaxed mb-4 flex-1">{r.sub}</p>
                  <Link href="/about#results" className="inline-flex items-center gap-1.5 text-xs font-[650] text-brand-500 hover:gap-2.5 transition-all">See full story <ArrowRight size={11}/></Link>
                </div>
              </AnimateIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Social Proof */}
      <section className="snap-section bg-white dark:bg-ink-950">
        <Container className="py-8 md:py-12 w-full">
          <AnimateIn className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="inline-block text-[0.7rem] font-[750] tracking-[0.14em] uppercase text-brand-500 mb-1">Client testimonials</span>
              <h2 className="text-[1.5rem] font-[800] tracking-[-0.03em] text-ink-900 dark:text-ink-50">Don&apos;t take our word for it.</h2>
            </div>
            <Link href="/testimonials" className="inline-flex items-center gap-1.5 text-sm font-[650] text-brand-500 flex-shrink-0">Read all <ArrowRight size={14}/></Link>
          </AnimateIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {previews.map((p,i) => (
              <AnimateIn key={p.name} delay={i*0.07}>
                <Link href="/testimonials" className="group flex flex-col gap-3 p-4 bg-ink-50 dark:bg-ink-900 border border-ink-200 dark:border-ink-800 rounded-2xl hover:border-brand-300 hover:-translate-y-0.5 hover:shadow-card transition-all duration-200 h-full">
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-[800] text-white flex-shrink-0 bg-gradient-to-br ${p.color} ring-2 ring-offset-2 ring-brand-200 dark:ring-brand-500/30 dark:ring-offset-ink-900`}>{p.initial}</div>
                    <div className="min-w-0">
                      <p className="text-sm font-[700] text-ink-900 dark:text-ink-100 leading-tight truncate">{p.name}</p>
                      <p className="text-[0.68rem] text-ink-400 truncate">{p.role}</p>
                    </div>
                  </div>
                  <span className="text-[0.72rem] font-[600] text-brand-500 bg-brand-50 dark:bg-brand-500/10 border border-brand-100 dark:border-brand-500/20 px-2.5 py-1 rounded-full w-fit">{p.result}</span>
                </Link>
              </AnimateIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="snap-section bg-ink-50 dark:bg-[#0a0908]">
        <Container className="py-8 md:py-12 w-full">
          <AnimateIn className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="inline-block text-[0.7rem] font-[750] tracking-[0.14em] uppercase text-brand-500 mb-1">How we work</span>
              <h2 className="text-[1.5rem] font-[800] tracking-[-0.03em] text-ink-900 dark:text-ink-50">First call to delivery in under a week.</h2>
            </div>
            <Link href="/about#process" className="inline-flex items-center gap-1.5 text-sm font-[650] text-brand-500 flex-shrink-0">How it works <ArrowRight size={14}/></Link>
          </AnimateIn>
          <div className="grid grid-cols-5 gap-2 relative">
            {steps.map((s,i) => (
              <AnimateIn key={s.n} delay={i*0.07}>
                <div className="relative flex flex-col items-center text-center gap-2">
                  <div className="w-9 h-9 rounded-xl bg-brand-50 dark:bg-brand-500/10 border border-brand-100 dark:border-brand-500/20 flex items-center justify-center text-brand-500 z-10 flex-shrink-0">
                    <s.icon size={15}/>
                  </div>
                  {i < steps.length-1 && (
                    <div aria-hidden className="hidden md:block absolute top-[18px] h-px border-t border-dashed border-ink-300 dark:border-ink-700" style={{left:'calc(50% + 20px)',right:'calc(-50% + 20px)'}} />
                  )}
                  <span className="text-[0.6rem] font-[700] tracking-[0.08em] uppercase text-brand-500">{s.n}</span>
                  <p className="text-xs font-[650] text-ink-700 dark:text-ink-300 leading-snug">{s.title}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA — single banner only (BUG 4) */}
      <section className="snap-section bg-white dark:bg-ink-950">
        <Container className="py-8 md:py-12 w-full">
          <AnimateIn>
            <div className="relative rounded-[28px] overflow-hidden">
              <div className="absolute inset-0 bg-ink-900 dark:bg-ink-950" />
              <div aria-hidden className="absolute -top-32 -right-16 w-[400px] h-[400px] rounded-full bg-brand-500/20 blur-[70px]" />
              <div aria-hidden className="absolute inset-0 opacity-[0.04]" style={{backgroundImage:'linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)',backgroundSize:'44px 44px'}} />
              <div className="relative z-10 px-8 py-14 md:px-16 text-center">
                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 mb-6">
                  <span className="relative flex h-1.5 w-1.5"><span className="absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75 animate-ping"/><span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand-400"/></span>
                  <span className="text-[0.7rem] font-[700] tracking-[0.1em] uppercase text-white/60">Accepting new clients now</span>
                </div>
                <h2 className="text-[1.8rem] sm:text-[2.4rem] font-[850] tracking-[-0.04em] text-white leading-[1.08] mb-4 text-balance max-w-[520px] mx-auto">Ready to remove your biggest operational bottleneck?</h2>
                <p className="text-white/60 text-base leading-relaxed mb-8 max-w-[380px] mx-auto">Join 100+ businesses that outsourced the right work — and got their team&apos;s focus back.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <Link href="/contact" className="group inline-flex items-center justify-center gap-2 text-base font-[700] text-brand-600 bg-white hover:bg-ink-50 px-8 py-3.5 rounded-xl transition-all hover:-translate-y-px active:scale-[0.97] shine">Book a Free Consultation <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5"/></Link>
                  <a href="tel:+13023579776" className="inline-flex items-center justify-center gap-2 text-base font-[500] text-white/80 border border-white/20 hover:border-white/40 px-8 py-3.5 rounded-xl transition-all active:scale-[0.97]"><Phone size={15}/>Call us now</a>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-5">
                  {guarantees.map(g => (
                    <div key={g.text} className="inline-flex items-center gap-2 text-xs font-[550] text-white/50"><g.icon size={13} className="text-brand-400 flex-shrink-0"/>{g.text}</div>
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
