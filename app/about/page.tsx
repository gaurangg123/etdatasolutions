import Image from 'next/image'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import AnimateIn from '@/components/ui/AnimateIn'
import CountUp from '@/components/ui/CountUp'
import { Target, Handshake, ShieldCheck, Zap, Check, Phone, FileText, Users, Search, Repeat } from 'lucide-react'

// Fix 8: lucide icons
const values = [
  { num:'01', title:'Accuracy First',   icon:Target,     bg:'bg-brand-50 dark:bg-brand-500/10',     text:'text-brand-500',                       border:'border-brand-100 dark:border-brand-500/20',     desc:'Multi-level QC on every project. We never ship without hitting our 99% accuracy benchmark.' },
  { num:'02', title:'Client-Centric',   icon:Handshake,  bg:'bg-violet-50 dark:bg-violet-500/10',   text:'text-violet-600 dark:text-violet-400',  border:'border-violet-100 dark:border-violet-500/20',   desc:'We plan solutions around your goals, timeline, and budget — not generic service packages.' },
  { num:'03', title:'Secure & Trusted', icon:ShieldCheck,bg:'bg-sky-50 dark:bg-sky-500/10',         text:'text-sky-600 dark:text-sky-400',        border:'border-sky-100 dark:border-sky-500/20',         desc:'All data handled with the highest integrity. NDAs and confidentiality on every engagement.' },
  { num:'04', title:'Always Available', icon:Zap,        bg:'bg-emerald-50 dark:bg-emerald-500/10', text:'text-emerald-600 dark:text-emerald-400',border:'border-emerald-100 dark:border-emerald-500/20', desc:'24/7 operations mean your work progresses even while your team is offline.' },
]

// Fix 3B
const statsRow = [
  { n:'10+', label:'Years Active',      sub:'Operating since 2014'        },
  { n:'99%', label:'Accuracy Rate',     sub:'Multi-level QC'             },
  { n:'100+',label:'Clients Served',    sub:'US, UK, CA, AU'             },
  { n:'24/7',label:'Availability',      sub:'Any timezone'               },
]

// Fix 3C
const cases = [
  {
    metric:'$40K saved annually', secondary:'Invoice processing: 14 days → 3 days',
    tags:['Data Entry','Logistics'],
    problem:'A freight company was processing 800+ invoices/month manually. Error rate was 4%. Backlogs were costing them in late fees and lost discounts.',
    did:'Deployed a 3-person data entry team with multi-level QC. Automated reconciliation checks. Reduced processing time from 14 days to 3 days.',
    metrics:[{l:'Accuracy',v:'99.2%'},{l:'Faster',v:'78%'},{l:'Saved/yr',v:'$40K'}],
    color:'#0ea5e9',
  },
  {
    metric:'Zero P1 bugs on launch', secondary:'Dev team shipped 3 weeks ahead of schedule',
    tags:['QA Testing','SaaS'],
    problem:'A SaaS company was shipping with an automated test suite only. Three production incidents in 6 months caused churn and reputational damage.',
    did:'Embedded a 2-person QA team for full manual regression, cross-browser, and UAT testing on every sprint. Documented 340+ test cases.',
    metrics:[{l:'P1 Bugs',v:'0'},{l:'Test Cases',v:'340+'},{l:'Early',v:'3 Wks'}],
    color:'#10b981',
  },
  {
    metric:'$2.3M in unbilled services found', secondary:'Weekly reporting: 18 hours → 25 minutes',
    tags:['Data Engineering','Healthcare'],
    problem:'A healthcare group had siloed data across 5 systems. Leadership had no real-time visibility. Monthly reporting took 18 hours to compile manually.',
    did:'Built a Snowflake data lakehouse, unified all 5 data sources, and delivered live Power BI dashboards — uncovering $2.3M in unbilled services in the first month.',
    metrics:[{l:'Found',v:'$2.3M'},{l:'Reporting',v:'25 min'},{l:'Sources',v:'5 Unified'}],
    color:'#8b5cf6',
  },
]

// Fix 3D
const processSteps = [
  { n:'01', icon:Phone,    title:'Discovery call',   sub:'30-min scoping call. Same day.'          },
  { n:'02', icon:FileText, title:'Scoped proposal',  sub:'Detailed proposal in 24 hours.'          },
  { n:'03', icon:Users,    title:'Team live in 72h', sub:'Specialists onboarded fast.'             },
  { n:'04', icon:Search,   title:'Delivery + QC',    sub:'Work delivered with QC reports.'         },
  { n:'05', icon:Repeat,   title:'Monthly review',   sub:'Scale up, down, or pivot.'               },
]

const chipGroups = [
  { color:'bg-violet-50 dark:bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-200 dark:border-violet-500/20', chips:['RPO & Recruitment','Virtual Assistant','HR Outsourcing','Talent Sourcing'] },
  { color:'bg-sky-50 dark:bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-200 dark:border-sky-500/20',                   chips:['Data Entry','Excel Automation','OCR / ICR','Document Processing'] },
  { color:'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/20', chips:['Manual QA','Web & App Testing','Accessibility Testing','Regression Testing'] },
  { color:'bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-500/20',       chips:['Snowflake','Databricks','Microsoft Fabric','Power BI','Tableau','ETL Pipelines'] },
]

const D = () => <div className="h-px bg-ink-200 dark:bg-ink-800" />

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="snap-section relative overflow-hidden bg-white dark:bg-ink-950">
        <div aria-hidden className="absolute inset-0 pointer-events-none opacity-[0.3] dark:opacity-[0.08]"
          style={{ backgroundImage:'radial-gradient(circle,rgba(0,0,0,0.08) 1px,transparent 1px)', backgroundSize:'28px 28px' }} />
        <div aria-hidden className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_55%_45%_at_50%_0%,rgba(232,68,10,0.05),transparent_70%)]" />
        <Container className="relative py-10 md:py-14">
          <AnimateIn>
            <nav className="flex items-center gap-1.5 mb-4 text-xs text-ink-400">
              <Link href="/" className="hover:text-brand-500 transition-colors">Home</Link>
              <span>/</span><span className="text-ink-600 dark:text-ink-400 font-[500]">About</span>
            </nav>
            <h1 className="text-[2.4rem] sm:text-[3rem] md:text-[3.5rem] font-[850] tracking-[-0.045em] leading-[1.05] text-ink-900 dark:text-ink-50 mb-4 text-balance">
              Built on accuracy.<br /><span className="text-gradient">Driven by results.</span>
            </h1>
            <p className="text-lg text-ink-500 dark:text-ink-400 leading-relaxed max-w-[500px] mb-6">
              ET Data Solutions is a professional back-office services provider based in India, serving clients globally since 2014.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-[700] text-white bg-brand-500 hover:bg-brand-600 px-5 py-2.5 rounded-xl transition-all hover:-translate-y-px hover:shadow-brand shine">Work with us</Link>
              <Link href="/services" className="inline-flex items-center gap-2 text-sm font-[650] text-ink-700 dark:text-ink-300 bg-white dark:bg-ink-800 border border-ink-200 dark:border-ink-700 hover:border-brand-400 hover:text-brand-500 px-5 py-2.5 rounded-xl transition-all hover:-translate-y-px">View services</Link>
            </div>
          </AnimateIn>
        </Container>
      </section>

      <D />

      {/* Who We Are */}
      <section className="snap-section-tall bg-white dark:bg-ink-950">
        <Container className="py-10 md:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <AnimateIn>
              <span className="inline-block text-[0.7rem] font-[750] tracking-[0.14em] uppercase text-brand-500 mb-2">Our Story</span>
              <h2 className="text-[1.9rem] md:text-[2.4rem] font-[800] tracking-[-0.04em] text-ink-900 dark:text-ink-50 leading-[1.08] mb-5">Who we are</h2>
              <div className="space-y-4 text-[0.925rem] text-ink-500 dark:text-ink-400 leading-relaxed mb-6">
                <p>ET Data Solutions is the most cost-effective outsourcing alternative for any business needing help managing their operational workflow. We handle any type or size of project — short or long term.</p>
                <p>Leveraging our India base, we provide world-class technical and business skills, global coverage, and affordable solutions.</p>
                <p>Clients reduce costs, eliminate backlogs, and significantly improve output quality — freeing themselves to focus on core business growth.</p>
              </div>
              {/* Fix 3A: Company Overview card */}
              <div className="bg-white dark:bg-ink-900 border border-ink-200 dark:border-ink-800 rounded-2xl overflow-hidden shadow-card">
                <div className="flex items-center gap-2 px-4 py-3 bg-ink-50 dark:bg-ink-800/80 border-b border-ink-200 dark:border-ink-700">
                  <div className="flex gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]"/><div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]"/><div className="w-2.5 h-2.5 rounded-full bg-[#28c840]"/></div>
                  <span className="ml-2 text-xs font-[650] text-ink-400 dark:text-ink-500">Company Overview</span>
                </div>
                {[
                  { k:'Headquarters', v:'Indore, India' },
                  { k:'Founded',      v:'2014' },
                  { k:'Email',        v:'bobby@etdatasolutions.com', href:'mailto:bobby@etdatasolutions.com' },
                  { k:'Phone (US)',   v:'+1-302-357-9776', href:'tel:+13023579776' },
                  { k:'Domain',       v:'etdatasolutions.com', href:'https://etdatasolutions.com' },
                ].map((row, i, arr) => (
                  <div key={row.k} className={`flex justify-between items-center px-4 py-3 hover:bg-ink-50 dark:hover:bg-ink-800/40 transition-colors ${i < arr.length-1 ? 'border-b border-ink-100 dark:border-ink-800' : ''}`}>
                    <span className="text-[0.65rem] font-[700] tracking-[0.1em] uppercase text-ink-400 dark:text-ink-500">{row.k}</span>
                    {'href' in row && row.href ? <a href={row.href} className="text-xs font-[650] text-brand-500 hover:text-brand-600">{row.v}</a> : <span className="text-xs font-[650] text-ink-800 dark:text-ink-200">{row.v}</span>}
                  </div>
                ))}
              </div>
            </AnimateIn>
            <AnimateIn delay={0.12}>
              <div className="relative rounded-3xl overflow-hidden h-[280px] md:h-[380px] shadow-card-hover">
                <Image src="/office.jpg" alt="ET Data Solutions office" fill className="object-cover" sizes="(max-width:1024px) 100vw,560px" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-center px-8 max-w-[360px]">
                  <h3 className="text-2xl font-[800] tracking-[-0.04em] text-white leading-[1.1] mb-2">India-based.<br />Globally trusted.</h3>
                  <p className="text-white/60 text-sm leading-relaxed">Delivering precision outcomes for clients across the US, UK, Canada, Europe, and beyond since 2014.</p>
                </div>
                <div className="absolute bottom-4 left-5">
                  <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/25 rounded-full px-3 py-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                    <span className="text-xs font-[700] text-white">Est. 2014 · India-based</span>
                  </div>
                </div>
              </div>
            </AnimateIn>
          </div>
        </Container>
      </section>

      <D />

      {/* Fix 3B: Stats Strip */}
      <section className="snap-section bg-ink-900 dark:bg-ink-950">
        <Container className="py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden">
            {statsRow.map((s, i) => (
              <AnimateIn key={s.label} delay={i * 0.08}>
                <div className="bg-ink-900 dark:bg-ink-950 px-6 py-8 text-center hover:bg-ink-800 dark:hover:bg-ink-900 transition-colors">
                  <div className="text-[2.2rem] font-[800] tracking-[-0.05em] text-brand-400 leading-none mb-2"><CountUp value={s.n} /></div>
                  <div className="text-sm font-[700] text-white mb-1">{s.label}</div>
                  <div className="text-xs text-white/40">{s.sub}</div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </Container>
      </section>

      <D />

      {/* Fix 8: Values with lucide icons */}
      <section className="snap-section bg-white dark:bg-ink-950">
        <Container className="py-10 md:py-14">
          <AnimateIn className="mb-8">
            <span className="inline-block text-[0.7rem] font-[750] tracking-[0.14em] uppercase text-brand-500 mb-2">Our Values</span>
            <h2 className="text-[1.9rem] sm:text-[2.4rem] font-[800] tracking-[-0.04em] text-ink-900 dark:text-ink-50">How we work</h2>
          </AnimateIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((v, i) => (
              <AnimateIn key={v.num} delay={i * 0.08}>
                <div className="group bg-white dark:bg-ink-900 border border-ink-200 dark:border-ink-800 rounded-2xl p-5 hover:border-brand-300 dark:hover:border-brand-500/40 hover:-translate-y-1 hover:shadow-card-hover transition-all duration-250 h-full">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 border ${v.bg} ${v.text} ${v.border}`}><v.icon className="w-5 h-5" /></div>
                  <span className="text-[0.68rem] font-[750] tracking-[0.12em] uppercase text-brand-500 block mb-1">{v.num}</span>
                  <h3 className="text-sm font-[750] text-ink-900 dark:text-ink-100 mb-2">{v.title}</h3>
                  <p className="text-sm text-ink-500 dark:text-ink-400 leading-relaxed">{v.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </Container>
      </section>

      <D />

      {/* Fix 3C: Case Studies */}
      <section id="results" className="snap-section-tall bg-ink-50 dark:bg-[#0a0908]">
        <Container className="py-10 md:py-14">
          <AnimateIn className="mb-8">
            <span className="inline-block text-[0.7rem] font-[750] tracking-[0.14em] uppercase text-brand-500 mb-2">Proof, not promises</span>
            <h2 className="text-[1.9rem] sm:text-[2.4rem] font-[800] tracking-[-0.04em] text-ink-900 dark:text-ink-50">Real clients. Numbers that don&apos;t lie.</h2>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {cases.map((cs, i) => (
              <AnimateIn key={i} delay={i * 0.1}>
                <div className="flex flex-col h-full bg-white dark:bg-ink-900 border border-ink-200 dark:border-ink-800 rounded-2xl overflow-hidden hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                  <div className="h-1 w-full" style={{ background: cs.color }} />
                  <div className="p-5 flex flex-col flex-1">
                    <div className="text-[1.6rem] font-[850] tracking-[-0.05em] leading-none mb-1" style={{ color: cs.color }}>{cs.metric}</div>
                    <p className="text-sm font-[600] text-ink-600 dark:text-ink-400 mb-4">{cs.secondary}</p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {cs.tags.map(t => <span key={t} className="text-[0.68rem] font-[700] tracking-[0.08em] uppercase text-ink-400 bg-ink-100 dark:bg-ink-800 px-2 py-0.5 rounded-full">{t}</span>)}
                    </div>
                    <div className="space-y-3 flex-1">
                      <div className="bg-ink-50 dark:bg-ink-800/60 rounded-xl p-3">
                        <p className="text-[0.65rem] font-[700] uppercase tracking-[0.09em] text-ink-400 mb-1">The problem</p>
                        <p className="text-xs text-ink-600 dark:text-ink-400 leading-relaxed">{cs.problem}</p>
                      </div>
                      <div className="bg-ink-50 dark:bg-ink-800/60 rounded-xl p-3">
                        <p className="text-[0.65rem] font-[700] uppercase tracking-[0.09em] text-ink-400 mb-1">What we did</p>
                        <p className="text-xs text-ink-600 dark:text-ink-400 leading-relaxed">{cs.did}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 mt-4">
                      {cs.metrics.map(m => (
                        <div key={m.l} className="text-center bg-ink-50 dark:bg-ink-800 border border-ink-200 dark:border-ink-700 rounded-xl py-2.5 px-1">
                          <div className="text-sm font-[800] tracking-[-0.04em] leading-none mb-0.5" style={{ color: cs.color }}>{m.v}</div>
                          <div className="text-[0.6rem] text-ink-400 font-[600] tracking-[0.05em] uppercase leading-tight">{m.l}</div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 pt-3 border-t border-ink-100 dark:border-ink-800">
                      <Link href="/contact" className="inline-flex items-center gap-1 text-xs font-[650] text-brand-500 hover:gap-2 transition-all">Get similar results →</Link>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </Container>
      </section>

      <D />

      {/* Fix 3D+9: Process with dashed connectors */}
      <section id="process" className="snap-section-tall bg-white dark:bg-ink-950">
        <Container className="py-10 md:py-14">
          <AnimateIn className="mb-8">
            <span className="inline-block text-[0.7rem] font-[750] tracking-[0.14em] uppercase text-brand-500 mb-2">How we work</span>
            <h2 className="text-[1.9rem] sm:text-[2.4rem] font-[800] tracking-[-0.04em] text-ink-900 dark:text-ink-50">First call to first delivery in under a week.</h2>
          </AnimateIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
            {processSteps.map((s, i) => (
              <div key={s.n} className="relative">
                <AnimateIn delay={i * 0.1}>
                  <div className="group flex flex-col bg-white dark:bg-ink-900 border border-ink-200 dark:border-ink-800 rounded-2xl p-4 h-full hover:border-brand-300 dark:hover:border-brand-500/50 hover:-translate-y-1 hover:shadow-card-hover transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-xl bg-brand-50 dark:bg-brand-500/10 border border-brand-100 dark:border-brand-500/20 flex items-center justify-center text-brand-500 group-hover:bg-brand-500 group-hover:text-white group-hover:border-brand-500 transition-all flex-shrink-0 z-10">
                        <s.icon size={15} />
                      </div>
                      <span className="text-[0.65rem] font-[700] tracking-[0.1em] uppercase text-brand-500">{s.n}</span>
                    </div>
                    <h4 className="text-sm font-[700] text-ink-900 dark:text-ink-100 mb-1 leading-snug">{s.title}</h4>
                    <p className="text-xs text-ink-500 dark:text-ink-400 leading-relaxed">{s.sub}</p>
                  </div>
                </AnimateIn>
                {/* Fix 9: dashed connectors */}
                {i < processSteps.length - 1 && (
                  <>
                    <div aria-hidden className="hidden lg:block absolute top-[22px] h-px border-t-2 border-dashed border-ink-200 dark:border-ink-700 z-20"
                      style={{ left: 'calc(50% + 28px)', right: 'calc(-50% + 28px)' }} />
                    <div aria-hidden className="lg:hidden w-px h-4 bg-gradient-to-b from-brand-300 to-ink-200 dark:from-brand-500/30 dark:to-ink-800 mx-auto mt-1" />
                  </>
                )}
              </div>
            ))}
          </div>
          <AnimateIn delay={0.35} className="mt-8 text-center">
            <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-[700] text-white bg-brand-500 hover:bg-brand-600 px-6 py-3 rounded-xl transition-all hover:-translate-y-px hover:shadow-brand shine">
              Start your project today
            </Link>
          </AnimateIn>
        </Container>
      </section>

      <D />

      {/* Capabilities */}
      <section className="snap-section bg-ink-50 dark:bg-[#0a0908]">
        <Container className="py-10 md:py-14">
          <AnimateIn className="mb-8">
            <span className="inline-block text-[0.7rem] font-[750] tracking-[0.14em] uppercase text-brand-500 mb-2">Capabilities</span>
            <h2 className="text-[1.9rem] sm:text-[2.4rem] font-[800] tracking-[-0.04em] text-ink-900 dark:text-ink-50">Everything we handle</h2>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <div className="flex flex-col gap-3">
              {chipGroups.map((group, gi) => (
                <div key={gi} className="flex flex-wrap gap-2">
                  {group.chips.map(c => (
                    <span key={c} className={`text-sm font-[550] border px-4 py-1.5 rounded-full cursor-default hover:-translate-y-0.5 hover:shadow-sm transition-all ${group.color}`}>{c}</span>
                  ))}
                </div>
              ))}
            </div>
          </AnimateIn>
        </Container>
      </section>

      <D />

      {/* CTA */}
      <section className="snap-section bg-white dark:bg-ink-950">
        <Container className="py-10">
          <AnimateIn>
            <div className="relative rounded-[28px] overflow-hidden">
              <div className="absolute inset-0 bg-ink-900 dark:bg-ink-950" />
              <div aria-hidden className="absolute -top-32 -right-16 w-[400px] h-[400px] rounded-full bg-brand-500/20 blur-[70px]" />
              <div aria-hidden className="absolute inset-0 opacity-[0.04]"
                style={{ backgroundImage:'linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)', backgroundSize:'44px 44px' }} />
              <div className="relative z-10 px-8 py-14 md:px-16 text-center max-w-[480px] mx-auto">
                <h2 className="text-2xl md:text-3xl font-[800] tracking-[-0.04em] text-white leading-[1.1] mb-4">Ready to get started?</h2>
                <p className="text-white/60 mb-8 text-sm leading-relaxed">Free 30-min consultation. No commitment, no pressure.</p>
                <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-[700] text-brand-600 bg-white hover:bg-ink-50 px-6 py-3 rounded-xl transition-all hover:-translate-y-px hover:shadow-[0_8px_30px_rgba(255,255,255,0.2)] shine">
                  Book a free consultation
                </Link>
              </div>
            </div>
          </AnimateIn>
        </Container>
      </section>
    </>
  )
}
