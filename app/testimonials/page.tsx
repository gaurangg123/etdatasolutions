import Link from 'next/link'
import PageHero from '@/components/shared/PageHero'
import CtaBanner from '@/components/shared/CtaBanner'
import Container from '@/components/ui/Container'
import AnimateIn from '@/components/ui/AnimateIn'
import { ShieldCheck, CheckCircle, Users } from 'lucide-react'

// D2: 8 testimonial cards
const testimonials = [
  { result:'Error rate: 4% → 0.4%',         quote:"We were drowning in invoice data. ET Data Solutions took over in week one and we never looked back. Errors dropped from 4% to under 0.5% — that's tens of thousands saved every year.",                                                                                      name:'Michael Reeves', role:'CFO',           company:'Apex Freight Group',   initial:'M', gradient:'from-sky-400 to-sky-600' },
  { result:'Zero P1 bugs on launch',          quote:"Our last QA vendor gave us a checklist. ET Data Solutions gave us a battle-hardened product. Every edge case, every browser. The smoothest launch we've ever shipped.",                                                                                                     name:'Lena Fischer',   role:'CTO',           company:'Flowdesk',             initial:'L', gradient:'from-emerald-400 to-emerald-600' },
  { result:'4 VAs placed in 5 days',          quote:"I needed 3 VAs placed fast. They delivered 4 qualified candidates in 5 days. I hired 2, and both are still with us 14 months later. Genuinely impressive.",                                                                                                               name:'James Okafor',   role:'Founder',       company:'ScaleOps Ltd.',        initial:'J', gradient:'from-violet-400 to-violet-600' },
  { result:'Reporting: 18 hrs → 25 mins',     quote:"The Power BI dashboards changed how we run this business entirely. We used to wait 3 weeks for monthly reports. Now we have live data on every screen in every clinic.",                                                                                                   name:'Priya Nair',     role:'VP Operations', company:'MediGroup Canada',     initial:'P', gradient:'from-amber-400 to-amber-600' },
  { result:'Processing time cut by 65%',      quote:"We handed over our entire invoice reconciliation process to ET Data Solutions and never looked back. What used to take our team 3 days now gets done overnight with better accuracy than we ever managed in-house.",                                                        name:'Rachel Kim',     role:'Finance Director', company:'NovaBridge Logistics', initial:'R', gradient:'from-rose-400 to-rose-600' },
  { result:'Team of 6 VAs onboarded in 2 weeks', quote:"I was skeptical about outsourcing our recruitment process. Six months later, we have a team of 6 exceptional VAs who feel completely embedded in our company. The screening quality is genuinely impressive.",                                                          name:'Tom Hargreaves', role:'COO',            company:'Vertex Digital Agency', initial:'T', gradient:'from-indigo-400 to-indigo-600' },
  { result:'Zero regression failures in 8 sprints', quote:"Our release cadence went from monthly to bi-weekly once we stopped worrying about QA. ET Data Solutions runs a full regression suite every sprint. Eight sprints in, zero regression failures. That's the track record.",                                          name:'Sana Mirza',     role:'VP Engineering', company:'Layered Health',       initial:'S', gradient:'from-teal-400 to-teal-600' },
  { result:'Live dashboards in under 3 weeks', quote:"They built our entire Snowflake data lakehouse and Power BI dashboard suite in under three weeks. Our leadership team went from waiting 2 weeks for reports to having live KPIs on their phones. Transformative.",                                                         name:'Daniel Osei',    role:'CEO',            company:'ClearPath Analytics',  initial:'D', gradient:'from-cyan-400 to-cyan-600' },
]

const statsStrip = [
  { val:'4.9 / 5', label:'Average Rating' },
  { val:'100+',    label:'Clients Served' },
  { val:'98%',     label:'Would Recommend' },
]

const trustItems = [
  { icon: ShieldCheck, text:'30-day guarantee on all placements' },
  { icon: CheckCircle, text:'NDA signed on every engagement' },
  { icon: Users,       text:'Direct access — no account managers' },
]

function StarRow() {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4 fill-amber-400" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function TestimonialCard({ t, delay }: { t: typeof testimonials[0]; delay: number }) {
  return (
    <AnimateIn delay={delay}>
      <div className="relative rounded-2xl p-5 md:p-6 flex flex-col gap-3 border transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover bg-white dark:bg-ink-900/60 border-ink-100 dark:border-ink-800 shadow-card group">
        <div aria-hidden className="absolute top-4 right-5 text-5xl font-serif text-ink-100 dark:text-ink-800 leading-none select-none pointer-events-none group-hover:text-brand-100/30 dark:group-hover:text-brand-500/10 transition-colors duration-300">&ldquo;</div>
        <StarRow />
        <span className="text-xs font-[600] text-brand-500 bg-brand-50 dark:bg-brand-500/10 border border-brand-100 dark:border-brand-500/20 px-2.5 py-1 rounded-full w-fit">{t.result}</span>
        <p className="text-ink-600 dark:text-ink-300 text-[0.9rem] leading-relaxed flex-1 relative z-10">{t.quote}</p>
        <div className="flex items-center gap-3 pt-3 border-t border-ink-100 dark:border-ink-800">
          <div className={`w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center text-sm font-[700] text-white ring-2 ring-offset-2 ring-brand-200 dark:ring-brand-500/30 dark:ring-offset-ink-900 bg-gradient-to-br ${t.gradient}`}>{t.initial}</div>
          <div>
            <p className="text-sm font-[700] text-ink-900 dark:text-ink-100 leading-tight">{t.name}</p>
            <p className="text-xs text-ink-400 dark:text-ink-500">{t.role} · {t.company}</p>
          </div>
        </div>
      </div>
    </AnimateIn>
  )
}

const Divider = () => <div className="h-px bg-ink-200 dark:bg-ink-800" />

export default function TestimonialsPage() {
  // D2: 3-column masonry — distribute cards
  const col1 = [testimonials[0], testimonials[3], testimonials[6]]
  const col2 = [testimonials[1], testimonials[4], testimonials[7]]
  const col3 = [testimonials[2], testimonials[5]]

  return (
    <>
      {/* D1: Reduced hero padding */}
      <PageHero
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Testimonials' }]}
        eyebrow="Client testimonials"
        title={<>Don&apos;t take our<br /><span className="text-gradient">word for it.</span></>}
        subtitle="Based on post-project surveys across all active clients."
        heroPadding="py-10 md:py-14"
      />

      {/* D1: Rating badge — no duplicate "Based on surveys" text */}
      <div className="bg-white dark:bg-ink-950 border-b border-ink-200 dark:border-ink-800 py-3">
        <Container>
          <AnimateIn className="flex flex-wrap items-center gap-3">
            {/* D1: badge without duplicate subtitle */}
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-[600] bg-amber-500/10 text-amber-500 border border-amber-500/20">
              ★★★★★ Rated 4.9/5 · 100+ clients
            </span>
          </AnimateIn>
        </Container>
      </div>

      <Divider />

      {/* Stats strip — D1: directly connected, mt-0 */}
      <section className="py-10 bg-ink-900 dark:bg-ink-950">
        <Container>
          <div className="grid grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden">
            {statsStrip.map((s, i) => (
              <AnimateIn key={s.label} delay={i * 0.1}>
                <div className="bg-ink-900 dark:bg-ink-950 px-4 py-6 text-center hover:bg-ink-800 dark:hover:bg-ink-900 transition-colors">
                  <div className="text-[1.8rem] font-[850] tracking-[-0.05em] text-brand-400 leading-none mb-1">{s.val}</div>
                  <div className="text-sm font-[600] text-white/70">{s.label}</div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </Container>
      </section>

      <Divider />

      {/* D2: 3-column masonry grid on desktop */}
      <section className="py-12 md:py-16 bg-white dark:bg-ink-950">
        <Container>
          {/* Desktop 3-col masonry with stagger, tablet 2-col, mobile 1-col */}
          <div className="hidden lg:grid lg:grid-cols-3 lg:gap-5">
            {/* Col 1 — normal */}
            <div className="flex flex-col gap-5">
              {col1.map((t, i) => <TestimonialCard key={t.name} t={t} delay={i * 0.1} />)}
            </div>
            {/* Col 2 — offset mt-8 */}
            <div className="flex flex-col gap-5 mt-8">
              {col2.map((t, i) => <TestimonialCard key={t.name} t={t} delay={0.05 + i * 0.1} />)}
            </div>
            {/* Col 3 — offset mt-16 */}
            <div className="flex flex-col gap-5 mt-16">
              {col3.map((t, i) => <TestimonialCard key={t.name} t={t} delay={0.1 + i * 0.1} />)}
            </div>
          </div>

          {/* Tablet 2-col */}
          <div className="hidden md:grid md:grid-cols-2 lg:hidden gap-5">
            <div className="flex flex-col gap-5">
              {[testimonials[0], testimonials[2], testimonials[4], testimonials[6]].map((t, i) => <TestimonialCard key={t.name} t={t} delay={i * 0.08} />)}
            </div>
            <div className="flex flex-col gap-5 mt-8">
              {[testimonials[1], testimonials[3], testimonials[5], testimonials[7]].map((t, i) => <TestimonialCard key={t.name} t={t} delay={0.05 + i * 0.08} />)}
            </div>
          </div>

          {/* Mobile 1-col */}
          <div className="flex flex-col gap-4 md:hidden">
            {testimonials.map((t, i) => <TestimonialCard key={t.name} t={t} delay={i * 0.06} />)}
          </div>
        </Container>
      </section>

      <Divider />

      {/* Trust reinforcement strip */}
      <section className="py-10 bg-ink-50 dark:bg-[#0a0908]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-3xl mx-auto">
            {trustItems.map((item, i) => (
              <AnimateIn key={item.text} delay={i * 0.1}>
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-brand-50 dark:bg-brand-500/10 border border-brand-100 dark:border-brand-500/20 flex items-center justify-center text-brand-500">
                    <item.icon size={18} />
                  </div>
                  <p className="text-sm font-[600] text-ink-700 dark:text-ink-300">{item.text}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </Container>
      </section>

      <Divider />
      <CtaBanner
        headline="Ready to become our next success story?"
        subtext="Free 30-min consultation. No commitment, no pressure."
        primaryBtn={{ label: 'Book a free consultation', href: '/contact' }}
        showGuarantees={false}
      />
    </>
  )
}
