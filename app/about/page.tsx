import Image from 'next/image'
import Link from 'next/link'

import PageHero from '@/components/shared/PageHero'
import CtaBanner from '@/components/shared/CtaBanner'
import Container from '@/components/ui/Container'
import AnimateIn from '@/components/ui/AnimateIn'
import CountUp from '@/components/ui/CountUp'
import { Target, Handshake, ShieldCheck, Zap, TrendingUp, FileCheck, BarChart, Check, Phone, FileText, Users, Search, Repeat } from 'lucide-react'


const values = [
  { num:'01', title:'Accuracy First',   icon: Target,      bg:'bg-brand-50 dark:bg-brand-500/10',     text:'text-brand-500',                        border:'border-brand-100 dark:border-brand-500/20',     desc:'Multi-level QC on every project. We never ship without hitting our 99% accuracy benchmark.' },
  { num:'02', title:'Client-Centric',   icon: Handshake,   bg:'bg-violet-50 dark:bg-violet-500/10',   text:'text-violet-600 dark:text-violet-400',   border:'border-violet-100 dark:border-violet-500/20',   desc:'We plan solutions around your goals, timeline, and budget — not generic service packages.' },
  { num:'03', title:'Secure & Trusted', icon: ShieldCheck, bg:'bg-sky-50 dark:bg-sky-500/10',         text:'text-sky-600 dark:text-sky-400',         border:'border-sky-100 dark:border-sky-500/20',         desc:'All data handled with the highest integrity. NDAs and confidentiality on every engagement.' },
  { num:'04', title:'Always Available', icon: Zap,         bg:'bg-emerald-50 dark:bg-emerald-500/10', text:'text-emerald-600 dark:text-emerald-400', border:'border-emerald-100 dark:border-emerald-500/20', desc:'24/7 operations mean your work progresses even while your team is offline.' },
]

const companyInfo = [
  { k:'Headquarters', v:'India' },
  { k:'Founded',      v:'2014' },
  { k:'Email',        v:'bobby@etdatasolutions.com', href:'mailto:bobby@etdatasolutions.com' },
  { k:'Phone (US)',   v:'+1-302-357-9776', href:'tel:+13023579776' },
  { k:'Domain',       v:'etdatasolutions.com', href:'https://etdatasolutions.com' },
]

const statsRow = [
  { n:'10+',  label:'Years Active',       sub:'Operating since 2014'        },
  { n:'99%',  label:'Accuracy Rate',      sub:'Multi-level QC standard'     },
  { n:'4',    label:'Service Verticals',  sub:'Staffing, Data, QA, DataEng' },
  { n:'24/7', label:'Availability',       sub:'Any timezone, any region'    },
]

const cases = [
  { tag:'Data Operations', client:'US Logistics Company', icon:TrendingUp, accentColor:'#0ea5e9', result:'$40K saved annually.', sub:'Invoice processing: 14 days → 3 days.', problem:'Processing 5,000+ shipping invoices manually every month. A 4% error rate was causing delayed carrier payments and ongoing disputes costing thousands per quarter.', solution:'Deployed a 4-person dedicated data entry team with 3-level QC verification. Built an Excel automation layer that auto-flags anomalies before they reach accounts payable.', metrics:[{label:'Accuracy',val:'99.2%'},{label:'Faster',val:'78%'},{label:'Saved/yr',val:'$40K'}] },
  { tag:'QA Testing', client:'UK SaaS Startup', icon:FileCheck, accentColor:'#10b981', result:'Zero P1 bugs on launch day.', sub:'Dev team shipped 3 weeks ahead of schedule.', problem:"Launching v2.0 in 6 weeks with zero in-house QA. Their previous launch ended with 22 critical bugs reported by users on day one — a PR disaster they couldn't repeat.", solution:'Full manual QA across 8 browsers, iOS and Android. Complete regression suite plus exploratory testing. Daily bug reports with video reproduction steps.', metrics:[{label:'P1 bugs',val:'Zero'},{label:'Coverage',val:'94%'},{label:'Faster',val:'3 wks'}] },
  { tag:'Data Engineering', client:'Canadian Healthcare Group', icon:BarChart, accentColor:'#8b5cf6', result:'$2.3M in unbilled services found.', sub:'Weekly reporting: 18 hours → 25 minutes.', problem:'Patient data scattered across 6 disconnected systems. Leadership had no real-time visibility. Compiling weekly reports took 18+ hours and still contained errors.', solution:'Built a unified Snowflake data lakehouse with automated pipelines from all 6 source systems. Power BI executive dashboard with 14 live KPIs, updated every 15 minutes.', metrics:[{label:'Reporting',val:'25 min'},{label:'Unbilled',val:'$2.3M'},{label:'KPIs live',val:'14'}] },
]

const processSteps = [
  { n:'01', icon:Phone,     title:'30-min discovery call',  desc:'We ask the right questions about your volume, timeline, and success criteria.', time:'Same day' },
  { n:'02', icon:FileText,  title:'Scoped proposal in 24h', desc:'Team size, deliverables, quality benchmarks, timeline, and pricing — all spelled out.', time:'24 hours' },
  { n:'03', icon:Users,     title:'Team live in 72h',       desc:'Dedicated team assigned, NDA signed, communication channels open.', time:'72 hours' },
  { n:'04', icon:Search,    title:'Delivery with QC reports',desc:'Regular output with quality scorecards. Direct access to your project lead.', time:'Ongoing' },
  { n:'05', icon:Repeat,    title:'Monthly review & scale', desc:'Review benchmarks and adjust. Scale up or down on 30 days notice.', time:'Monthly' },
]

const chipGroups = [
  { color:'bg-violet-50 dark:bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-200 dark:border-violet-500/20', chips:['RPO & Recruitment','Virtual Assistant','HR Outsourcing','Talent Sourcing'] },
  { color:'bg-sky-50 dark:bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-200 dark:border-sky-500/20',                   chips:['Data Entry','Excel Automation','OCR / ICR','Document Processing'] },
  { color:'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/20', chips:['Manual QA','Web & App Testing','Accessibility Testing','Regression Testing'] },
  { color:'bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-500/20',       chips:['Snowflake','Databricks','Microsoft Fabric','Power BI','Tableau','ETL Pipelines'] },
]

const Divider = () => <div className="h-px bg-ink-200 dark:bg-ink-800" />

export default function AboutPage() {
  return (
    <>
      <PageHero
        breadcrumb={[{label:'Home',href:'/'},{label:'About'}]}
        title={<>Built on accuracy.<br /><span className="text-gradient">Driven by results.</span></>}
        subtitle="ET Data Solutions is a professional back-office services provider based in India, serving clients globally since 2014."
        ctaButtons={[
          {label:'Work with us', href:'/contact'},
          {label:'View services', href:'/services', variant:'secondary'},
        ]}
      />

      <Divider />

      {/* ── Who We Are ── */}
      <section className="py-16 md:py-22 bg-white dark:bg-ink-950">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <AnimateIn>
              <span className="inline-block text-[0.7rem] font-[750] tracking-[0.14em] uppercase text-brand-500 mb-3">Our Story</span>
              <h2 className="text-3xl md:text-[2.2rem] font-[800] tracking-[-0.04em] text-ink-900 dark:text-ink-50 leading-[1.08] mb-6">Who we are</h2>
              <div className="space-y-4 text-[0.925rem] text-ink-500 dark:text-ink-400 leading-relaxed mb-8">
                <p>ET Data Solutions is the most cost-effective outsourcing alternative for any business needing help managing their operational workflow. We handle any type or size of project — short or long term.</p>
                <p>Leveraging our India base, we provide world-class technical and business skills, global coverage, and affordable solutions. Our service bureau for time-critical work alleviates the need for onsite personnel, software, and hardware.</p>
                <p>Clients reduce costs, eliminate backlogs, and significantly improve output quality — freeing themselves to focus on core business growth.</p>
              </div>
              {/* Company Overview card */}
              <div className="bg-white dark:bg-ink-900 border border-ink-200 dark:border-ink-800 rounded-2xl overflow-hidden shadow-card">
                <div className="flex items-center gap-2 px-5 py-3.5 bg-ink-50 dark:bg-ink-800/80 border-b border-ink-200 dark:border-ink-700">
                  <div className="flex gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]"/><div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]"/><div className="w-2.5 h-2.5 rounded-full bg-[#28c840]"/></div>
                  <span className="ml-2 text-xs font-[650] text-ink-400 dark:text-ink-500">Company Overview</span>
                </div>
                {companyInfo.map((row, i) => (
                  <div key={row.k} className={`flex justify-between items-center px-5 py-3.5 hover:bg-ink-50 dark:hover:bg-ink-800/40 transition-colors ${i < companyInfo.length-1 ? 'border-b border-ink-100 dark:border-ink-800' : ''}`}>
                    <span className="text-[0.65rem] font-[700] tracking-[0.1em] uppercase text-ink-400 dark:text-ink-500">{row.k}</span>
                    {'href' in row && row.href ? <a href={row.href} className="text-xs font-[650] text-brand-500 hover:text-brand-600">{row.v}</a> : <span className="text-xs font-[650] text-ink-800 dark:text-ink-200">{row.v}</span>}
                  </div>
                ))}
              </div>
            </AnimateIn>

            {/* Office image */}
            <AnimateIn delay={0.12}>
              <div className="relative rounded-3xl overflow-hidden h-[300px] md:h-[420px] shadow-card-hover">
                <Image src="/office.jpg" alt="ET Data Solutions office" fill className="object-cover" sizes="(max-width:1024px) 100vw,560px" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-center px-10 max-w-[380px]">
                  <h3 className="text-2xl md:text-3xl font-[800] tracking-[-0.04em] text-white leading-[1.1] mb-3">India-based.<br />Globally trusted.</h3>
                  <p className="text-white/60 text-sm leading-relaxed">Delivering precision outcomes for clients across the US, UK, Canada, Europe, and beyond since 2014.</p>
                </div>
                <div className="absolute bottom-5 left-6">
                  <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/25 rounded-full px-4 py-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                    <span className="text-xs font-[700] text-white tracking-[0.06em]">Est. 2014 · India-based</span>
                  </div>
                </div>
              </div>
            </AnimateIn>
          </div>
        </Container>
      </section>

      <Divider />

      {/* ── Stats Row ── */}
      <section className="py-12 bg-ink-900 dark:bg-ink-950">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
            {statsRow.map((s, i) => (
              <AnimateIn key={s.label} delay={i * 0.08}>
                <div className="bg-ink-900 dark:bg-ink-950 px-8 py-8 text-center hover:bg-ink-800 dark:hover:bg-ink-900 transition-colors">
                  <div className="text-[2.2rem] font-[850] tracking-[-0.05em] text-brand-400 leading-none mb-2"><CountUp value={s.n} /></div>
                  <div className="text-sm font-[700] text-white mb-1">{s.label}</div>
                  <div className="text-xs text-white/40">{s.sub}</div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </Container>
      </section>

      <Divider />

      {/* ── Our Values ── */}
      <section className="py-16 md:py-22 bg-white dark:bg-ink-950">
        <Container>
          <AnimateIn className="mb-12">
            <span className="inline-block text-[0.7rem] font-[750] tracking-[0.14em] uppercase text-brand-500 mb-3">Our Values</span>
            <h2 className="text-[1.9rem] sm:text-[2.4rem] font-[800] tracking-[-0.04em] text-ink-900 dark:text-ink-50">How we work</h2>
          </AnimateIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((v, i) => (
              <AnimateIn key={v.num} delay={i * 0.08}>
                <div className="group bg-white dark:bg-ink-900 border border-ink-200 dark:border-ink-800 rounded-2xl p-6 hover:border-brand-300 dark:hover:border-brand-500/40 hover:-translate-y-1 hover:shadow-card-hover transition-all duration-250">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 border ${v.bg} ${v.text} ${v.border}`}><v.icon className="w-5 h-5" /></div>
                  <span className="text-[0.68rem] font-[750] tracking-[0.12em] uppercase text-brand-500 block mb-2">{v.num}</span>
                  <h3 className="text-sm font-[750] text-ink-900 dark:text-ink-100 mb-2">{v.title}</h3>
                  <p className="text-sm text-ink-500 dark:text-ink-400 leading-relaxed">{v.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </Container>
      </section>

      <Divider />

      {/* ── Results / Case Studies ── */}
      <section id="results" className="py-16 md:py-22 bg-ink-50 dark:bg-[#0a0908]">
        <Container>
          <AnimateIn className="mb-12">
            <span className="inline-block text-[0.7rem] font-[750] tracking-[0.14em] uppercase text-brand-500 mb-3">Proof, not promises</span>
            <h2 className="text-[1.9rem] sm:text-[2.4rem] font-[800] tracking-[-0.04em] text-ink-900 dark:text-ink-50">Real clients. Numbers that don&apos;t lie.</h2>
            <p className="text-sm text-ink-400 dark:text-ink-500 mt-2">Every result below is from a real engagement. No rounding, no estimates.</p>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {cases.map((cs, i) => (
              <AnimateIn key={i} delay={i * 0.1}>
                <div className="group flex flex-col h-full bg-white dark:bg-ink-900 border border-ink-200 dark:border-ink-800 rounded-3xl overflow-hidden hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                  <div className="h-1.5 w-full" style={{background:cs.accentColor}} />
                  <div className="px-5 py-4 border-b border-ink-100 dark:border-ink-800" style={{background:`${cs.accentColor}10`}}>
                    <div className="flex items-start gap-2.5">
                      <cs.icon size={16} style={{color:cs.accentColor}} className="flex-shrink-0 mt-0.5" />
                      <div><p className="text-sm font-[750] text-ink-900 dark:text-ink-100 leading-snug">{cs.result}</p><p className="text-xs text-ink-500 dark:text-ink-400 mt-0.5">{cs.sub}</p></div>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-5">
                      <span className="text-[0.68rem] font-[700] tracking-[0.09em] uppercase text-ink-400 dark:text-ink-500 bg-ink-100 dark:bg-ink-800 px-2.5 py-1 rounded-full">{cs.tag}</span>
                      <span className="text-[0.75rem] font-[600] text-ink-500 dark:text-ink-400">{cs.client}</span>
                    </div>
                    <div className="space-y-4 flex-1">
                      <div><p className="text-[0.7rem] font-[700] uppercase tracking-[0.09em] text-ink-400 dark:text-ink-500 mb-1.5">The problem</p><p className="text-sm text-ink-600 dark:text-ink-400 leading-relaxed">{cs.problem}</p></div>
                      <div><p className="text-[0.7rem] font-[700] uppercase tracking-[0.09em] text-ink-400 dark:text-ink-500 mb-1.5">What we did</p><p className="text-sm text-ink-600 dark:text-ink-400 leading-relaxed">{cs.solution}</p></div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 mt-5">
                      {cs.metrics.map(m => (
                        <div key={m.label} className="text-center bg-ink-50 dark:bg-ink-800 border border-ink-200 dark:border-ink-700 rounded-xl py-3 px-2">
                          <div className="text-base font-[800] tracking-[-0.04em] leading-none mb-1" style={{color:cs.accentColor}}>{m.val}</div>
                          <div className="text-[0.62rem] text-ink-400 font-[600] tracking-[0.05em] uppercase leading-tight">{m.label}</div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-ink-100 dark:border-ink-800">
                      <Link href="/contact" className="inline-flex items-center gap-1.5 text-xs font-[650] text-brand-500 hover:gap-2.5 transition-all">Get similar results <span>→</span></Link>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </Container>
      </section>

      <Divider />

      {/* ── How We Work / Process ── */}
      <section id="process" className="py-16 md:py-22 bg-white dark:bg-ink-950">
        <Container>
          <AnimateIn className="mb-12">
            <span className="inline-block text-[0.7rem] font-[750] tracking-[0.14em] uppercase text-brand-500 mb-3">How we work</span>
            <h2 className="text-[1.9rem] sm:text-[2.4rem] font-[800] tracking-[-0.04em] text-ink-900 dark:text-ink-50">First call to first delivery<br />in under a week.</h2>
            <p className="text-sm text-ink-500 dark:text-ink-400 mt-2 max-w-[380px]">No bloated onboarding. No 8-week discovery. We move fast and stay in your loop at every step.</p>
          </AnimateIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
            {processSteps.map((s, i) => (
              <div key={s.n} className="relative">
                <AnimateIn delay={i * 0.1}>
                  <div className="group flex flex-col bg-white dark:bg-ink-900 border border-ink-200 dark:border-ink-800 rounded-2xl p-5 h-full hover:border-brand-300 dark:hover:border-brand-500/50 hover:-translate-y-1.5 hover:shadow-card-hover transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-9 h-9 rounded-xl bg-brand-50 dark:bg-brand-500/10 border border-brand-100 dark:border-brand-500/20 flex items-center justify-center text-brand-500 group-hover:bg-brand-500 group-hover:text-white group-hover:border-brand-500 transition-all duration-250">
                        <s.icon size={15} />
                      </div>
                      <div>
                        <span className="text-[0.65rem] font-[700] tracking-[0.1em] uppercase text-ink-400 block">{s.n}</span>
                        <span className="text-[0.65rem] font-[600] text-brand-500">{s.time}</span>
                      </div>
                    </div>
                    <h4 className="text-sm font-[700] text-ink-900 dark:text-ink-100 mb-2 leading-snug">{s.title}</h4>
                    <p className="text-xs text-ink-500 dark:text-ink-400 leading-relaxed flex-1">{s.desc}</p>
                  </div>
                </AnimateIn>
                {i < processSteps.length - 1 && (
                  <div aria-hidden className="hidden lg:block absolute top-[22px] h-px border-t-2 border-dashed border-ink-200 dark:border-ink-700 z-10"
                    style={{left:'calc(50% + 28px)',right:'calc(-50% + 28px)'}} />
                )}
              </div>
            ))}
          </div>
          <AnimateIn delay={0.35} className="mt-10 text-center">
            <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-[700] text-white bg-brand-500 hover:bg-brand-600 px-6 py-3 rounded-xl transition-all hover:-translate-y-px hover:shadow-brand shine">
              Start your project today
            </Link>
            <p className="text-xs text-ink-400 mt-3">No commitment. We&apos;ll send a scoped proposal within 24 hours.</p>
          </AnimateIn>
        </Container>
      </section>

      <Divider />

      {/* ── Capabilities ── */}
      <section className="py-14 md:py-20 bg-ink-50 dark:bg-[#0a0908]">
        <Container>
          <AnimateIn className="mb-10">
            <span className="inline-block text-[0.7rem] font-[750] tracking-[0.14em] uppercase text-brand-500 mb-3">Capabilities</span>
            <h2 className="text-[1.9rem] sm:text-[2.4rem] font-[800] tracking-[-0.04em] text-ink-900 dark:text-ink-50">Everything we handle</h2>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <div className="flex flex-col gap-3">
              {chipGroups.map((group, gi) => (
                <div key={gi} className="flex flex-wrap gap-2">
                  {group.chips.map(c => (
                    <span key={c} className={`text-sm font-[550] border px-4 py-2 rounded-full transition-all cursor-default hover:-translate-y-0.5 hover:shadow-sm ${group.color}`}>{c}</span>
                  ))}
                </div>
              ))}
            </div>
          </AnimateIn>
        </Container>
      </section>

      <Divider />
      <CtaBanner headline="Ready to get started?" subtext="Free 30-min consultation. No commitment, no pressure." primaryBtn={{label:'Book a free consultation',href:'/contact'}} showGuarantees={false} />
    </>
  )
}
