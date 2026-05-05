import Link from 'next/link'
import Container from '@/components/ui/Container'
import AnimateIn from '@/components/ui/AnimateIn'
import { ShieldCheck, CheckCircle, Users } from 'lucide-react'

const cards = [
  { initial:'M', name:'Michael Reeves', role:'CFO · Apex Freight Group',       result:'Error rate: 4% → 0.4%',             quote:"We were drowning in invoice data. ET Data Solutions took over in week one and we never looked back. Errors dropped from 4% to under 0.5% — that's tens of thousands saved every year.", gradient:'from-sky-400 to-sky-600' },
  { initial:'J', name:'James Okafor',   role:'Founder · ScaleOps Ltd.',         result:'4 VAs placed in 5 days',             quote:"I needed 3 VAs placed fast. They delivered 4 qualified candidates in 5 days. I hired 2, and both are still with us 14 months later. Genuinely impressive.", gradient:'from-violet-400 to-violet-600' },
  { initial:'L', name:'Lena Fischer',   role:'CTO · Flowdesk',                  result:'Zero P1 bugs on launch',             quote:"Our last QA vendor gave us a checklist. ET Data Solutions gave us a battle-hardened product. Every edge case, every browser. The smoothest launch we've ever shipped.", gradient:'from-emerald-400 to-emerald-600' },
  { initial:'P', name:'Priya Nair',     role:'VP Operations · MediGroup Canada', result:'Reporting: 18 hrs → 25 mins',       quote:"The Power BI dashboards changed how we run this business entirely. We used to wait 3 weeks for monthly reports. Now we have live data on every screen in every clinic.", gradient:'from-amber-400 to-amber-600' },
  { initial:'R', name:'Rachel Kim',     role:'Finance Director · NovaBridge Logistics', result:'Processing time cut by 65%', quote:"We handed over our entire invoice reconciliation process to ET Data Solutions and never looked back. What used to take our team 3 days now gets done overnight with better accuracy than we ever managed in-house.", gradient:'from-rose-400 to-rose-600' },
  { initial:'T', name:'Tom Hargreaves', role:'COO · Vertex Digital Agency',     result:'Team of 6 VAs onboarded in 2 weeks', quote:"I was skeptical about outsourcing our recruitment process. Six months later, we have a team of 6 exceptional VAs who feel completely embedded in our company. The screening quality is genuinely impressive.", gradient:'from-indigo-400 to-indigo-600' },
  { initial:'S', name:'Sana Mirza',     role:'VP Engineering · Layered Health', result:'Zero regression failures in 8 sprints', quote:"Our release cadence went from monthly to bi-weekly once we stopped worrying about QA. ET Data Solutions runs a full regression suite every sprint. Eight sprints in, zero regression failures.", gradient:'from-teal-400 to-teal-600' },
  { initial:'D', name:'Daniel Osei',    role:'CEO · ClearPath Analytics',       result:'Live dashboards in under 3 weeks',  quote:"They built our entire Snowflake data lakehouse and Power BI dashboard suite in under three weeks. Our leadership team went from waiting 2 weeks for reports to having live KPIs on their phones.", gradient:'from-cyan-400 to-cyan-600' },
]

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_,i) => (
        <svg key={i} className="w-4 h-4 fill-amber-400" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      ))}
    </div>
  )
}

function Card({ c, delay }: { c: typeof cards[0]; delay: number }) {
  return (
    <AnimateIn delay={delay}>
      <article className="relative rounded-2xl p-5 flex flex-col gap-3 border h-full bg-white dark:bg-ink-900/60 border-ink-100 dark:border-ink-800 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group">
        <span aria-hidden className="absolute top-4 right-4 text-5xl font-serif leading-none select-none text-ink-100 dark:text-ink-800 group-hover:text-brand-100/20 transition-colors">&ldquo;</span>
        <Stars />
        <span className="text-xs font-[600] text-brand-500 bg-brand-50 dark:bg-brand-500/10 border border-brand-100 dark:border-brand-500/20 px-2.5 py-1 rounded-full w-fit">{c.result}</span>
        <p className="text-sm text-ink-600 dark:text-ink-300 leading-relaxed flex-1 relative z-10">{c.quote}</p>
        <div className="flex items-center gap-3 pt-3 border-t border-ink-100 dark:border-ink-800">
          <div className={`w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center text-sm font-[700] text-white ring-2 ring-offset-2 ring-brand-200 dark:ring-brand-500/30 dark:ring-offset-ink-900 bg-gradient-to-br ${c.gradient}`}>{c.initial}</div>
          <div>
            <p className="text-sm font-[700] text-ink-900 dark:text-ink-100 leading-tight">{c.name}</p>
            <p className="text-xs text-ink-400 dark:text-ink-500">{c.role}</p>
          </div>
        </div>
      </article>
    </AnimateIn>
  )
}

const D = () => <div className="h-px bg-ink-200 dark:bg-ink-800" />
const trust = [
  { icon:ShieldCheck, text:'30-day guarantee on all placements' },
  { icon:CheckCircle, text:'NDA signed on every engagement' },
  { icon:Users,       text:'Direct access — no account managers' },
]

export default function TestimonialsPage() {
  const col1 = [cards[0], cards[3], cards[6]]
  const col2 = [cards[1], cards[4], cards[7]]
  const col3 = [cards[2], cards[5]]

  return (
    <>
      {/* Hero — BUG 8A: no duplicate "Based on post-project surveys", BUG 8B: reduced padding */}
      <section className="snap-section relative overflow-hidden bg-white dark:bg-ink-950">
        <div aria-hidden className="absolute inset-0 pointer-events-none opacity-[0.3] dark:opacity-[0.08]" style={{backgroundImage:'radial-gradient(circle,rgba(0,0,0,0.08) 1px,transparent 1px)',backgroundSize:'28px 28px'}} />
        <Container className="relative py-10 md:py-12">
          <AnimateIn>
            <nav className="flex items-center gap-1.5 mb-4 text-xs text-ink-400">
              <Link href="/" className="hover:text-brand-500 transition-colors">Home</Link>
              <span>/</span><span className="text-ink-600 dark:text-ink-400 font-[500]">Testimonials</span>
            </nav>
            <span className="inline-block text-[0.7rem] font-[750] tracking-[0.14em] uppercase text-brand-500 mb-2">Client testimonials</span>
            <h1 className="text-[2.4rem] sm:text-[3rem] md:text-[3.5rem] font-[850] tracking-[-0.045em] leading-[1.05] text-ink-900 dark:text-ink-50 mb-4 text-balance">
              Don&apos;t take our<br /><span className="text-gradient">word for it.</span>
            </h1>
            {/* BUG 8A: single instance, badge without duplicate subtitle */}
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-[600] bg-amber-500/10 text-amber-500 border border-amber-500/20">
              ★★★★★ Rated 4.9/5 · 100+ clients
            </span>
          </AnimateIn>
        </Container>
      </section>

      {/* Stats strip */}
      <section className="snap-section bg-ink-900 dark:bg-ink-950">
        <Container className="py-10">
          <div className="grid grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden">
            {[{v:'4.9/5',l:'Average Rating'},{v:'100+',l:'Clients Served'},{v:'98%',l:'Would Recommend'}].map((s,i) => (
              <AnimateIn key={s.l} delay={i*0.1}>
                <div className="bg-ink-900 dark:bg-ink-950 px-4 py-8 text-center hover:bg-ink-800 transition-colors">
                  <div className="text-[1.8rem] font-[850] tracking-[-0.05em] text-brand-400 leading-none mb-1">{s.v}</div>
                  <div className="text-sm font-[600] text-white/70">{s.l}</div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </Container>
      </section>
      <D />

      {/* BUG 8C+D: 8 cards, 3-col masonry */}
      <section className="snap-section-tall bg-white dark:bg-ink-950">
        <Container className="py-10 md:py-14">
          {/* Desktop 3-col masonry */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-5">
            <div className="flex flex-col gap-5">{col1.map((c,i) => <Card key={c.name} c={c} delay={i*0.1}/>)}</div>
            <div className="flex flex-col gap-5 mt-8">{col2.map((c,i) => <Card key={c.name} c={c} delay={0.05+i*0.1}/>)}</div>
            <div className="flex flex-col gap-5 mt-16">{col3.map((c,i) => <Card key={c.name} c={c} delay={0.1+i*0.1}/>)}</div>
          </div>
          {/* Tablet 2-col */}
          <div className="hidden md:grid md:grid-cols-2 lg:hidden gap-5">
            <div className="flex flex-col gap-5">{[cards[0],cards[2],cards[4],cards[6]].map((c,i) => <Card key={c.name} c={c} delay={i*0.08}/>)}</div>
            <div className="flex flex-col gap-5 mt-8">{[cards[1],cards[3],cards[5],cards[7]].map((c,i) => <Card key={c.name} c={c} delay={0.05+i*0.08}/>)}</div>
          </div>
          {/* Mobile 1-col */}
          <div className="flex flex-col gap-4 md:hidden">{cards.map((c,i) => <Card key={c.name} c={c} delay={i*0.05}/>)}</div>
        </Container>
      </section>
      <D />

      {/* Trust strip */}
      <section className="snap-section bg-ink-50 dark:bg-[#0a0908]">
        <Container className="py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-3xl mx-auto">
            {trust.map((item,i) => (
              <AnimateIn key={item.text} delay={i*0.1}>
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-brand-50 dark:bg-brand-500/10 border border-brand-100 dark:border-brand-500/20 flex items-center justify-center text-brand-500">
                    <item.icon size={18}/>
                  </div>
                  <p className="text-sm font-[600] text-ink-700 dark:text-ink-300">{item.text}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </Container>
      </section>
      <D />

      {/* CTA */}
      <section className="snap-section bg-white dark:bg-ink-950">
        <Container className="py-10">
          <AnimateIn>
            <div className="relative rounded-[28px] overflow-hidden">
              <div className="absolute inset-0 bg-ink-900 dark:bg-ink-950"/>
              <div aria-hidden className="absolute -top-32 -right-16 w-[400px] h-[400px] rounded-full bg-brand-500/20 blur-[70px]"/>
              <div className="relative z-10 px-8 py-14 md:px-16 text-center max-w-[480px] mx-auto">
                <h2 className="text-2xl md:text-3xl font-[800] tracking-[-0.04em] text-white leading-[1.1] mb-4">Ready to become our next success story?</h2>
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
