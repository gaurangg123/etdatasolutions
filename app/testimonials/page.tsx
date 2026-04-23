import Link from 'next/link'
import PageHero from '@/components/shared/PageHero'
import CtaBanner from '@/components/shared/CtaBanner'
import Container from '@/components/ui/Container'
import AnimateIn from '@/components/ui/AnimateIn'
import { ShieldCheck, CheckCircle, Users } from 'lucide-react'


const testimonials = [
  { result:'Error rate: 4% → 0.4%',       quote:"We were drowning in invoice data. ET Data Solutions took over in week one and we never looked back. Errors dropped from 4% to under 0.5% — that's tens of thousands saved every year.", name:'Michael Reeves', role:'CFO', company:'Apex Freight Group', initial:'M', gradient:'from-sky-400 to-sky-600' },
  { result:'Zero P1 bugs on launch',        quote:"Our last QA vendor gave us a checklist. ET Data Solutions gave us a battle-hardened product. Every edge case, every browser. The smoothest launch we've ever shipped.",         name:'Lena Fischer',   role:'CTO', company:'Flowdesk',              initial:'L', gradient:'from-emerald-400 to-emerald-600' },
  { result:'4 VAs placed in 5 days',        quote:"I needed 3 VAs placed fast. They delivered 4 qualified candidates in 5 days. I hired 2, and both are still with us 14 months later. Genuinely impressive.",                   name:'James Okafor',   role:'Founder', company:'ScaleOps Ltd.',     initial:'J', gradient:'from-violet-400 to-violet-600' },
  { result:'Reporting: 18 hrs → 25 mins',   quote:"The Power BI dashboards changed how we run this business entirely. We used to wait 3 weeks for monthly reports. Now we have live data on every screen in every clinic.",           name:'Priya Nair',     role:'VP Operations', company:'MediGroup Canada', initial:'P', gradient:'from-amber-400 to-amber-600' },
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

const Divider = () => <div className="h-px bg-ink-200 dark:bg-ink-800" />

export default function TestimonialsPage() {
  const col1 = [testimonials[0], testimonials[2]]
  const col2 = [testimonials[1], testimonials[3]]

  return (
    <>
      <PageHero
        breadcrumb={[{label:'Home',href:'/'},{label:'Testimonials'}]}
        eyebrow="Client testimonials"
        title={<>Don&apos;t take our<br /><span className="text-gradient">word for it.</span></>}
        subtitle="Based on post-project surveys across all active clients."
      />

      {/* Rating badge */}
      <div className="bg-white dark:bg-ink-950 border-b border-ink-200 dark:border-ink-800 py-4">
        <Container>
          <AnimateIn className="flex flex-wrap items-center gap-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-[600] bg-amber-500/10 text-amber-500 border border-amber-500/20">
              ★★★★★ Rated 4.9/5 · 100+ clients
            </span>
            <p className="text-xs text-ink-400 dark:text-ink-500">Based on post-project surveys</p>
          </AnimateIn>
        </Container>
      </div>

      <Divider />

      {/* Stats strip */}
      <section className="py-12 bg-ink-900 dark:bg-ink-950">
        <Container>
          <div className="grid grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden">
            {statsStrip.map((s, i) => (
              <AnimateIn key={s.label} delay={i * 0.1}>
                <div className="bg-ink-900 dark:bg-ink-950 px-6 py-8 text-center hover:bg-ink-800 dark:hover:bg-ink-900 transition-colors">
                  <div className="text-[2rem] font-[850] tracking-[-0.05em] text-brand-400 leading-none mb-2">{s.val}</div>
                  <div className="text-sm font-[600] text-white/70">{s.label}</div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </Container>
      </section>

      <Divider />

      {/* Testimonial cards — masonry 2-col */}
      <section className="py-16 md:py-22 bg-white dark:bg-ink-950">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Column 1 */}
            <div className="flex flex-col gap-6">
              {col1.map((t, i) => (
                <AnimateIn key={t.name} delay={i * 0.12}>
                  <div className="relative rounded-2xl p-7 flex flex-col gap-4 border transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover bg-white dark:bg-ink-900/60 border-ink-100 dark:border-ink-800 shadow-card group">
                    <div aria-hidden className="absolute top-5 right-6 text-6xl font-serif text-ink-100 dark:text-ink-800 leading-none select-none pointer-events-none group-hover:text-brand-100/30 transition-colors">&ldquo;</div>
                    <StarRow />
                    <span className="text-xs font-[600] text-brand-500 bg-brand-50 dark:bg-brand-500/10 border border-brand-100 dark:border-brand-500/20 px-2.5 py-1 rounded-full w-fit">{t.result}</span>
                    <p className="text-ink-600 dark:text-ink-300 text-[0.95rem] leading-relaxed flex-1 relative z-10">{t.quote}</p>
                    <div className="flex items-center gap-3 pt-3 border-t border-ink-100 dark:border-ink-800">
                      <div className={`w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center text-sm font-[700] text-white ring-2 ring-offset-2 ring-brand-200 dark:ring-brand-500/30 dark:ring-offset-ink-900 bg-gradient-to-br ${t.gradient}`}>{t.initial}</div>
                      <div><p className="text-sm font-[700] text-ink-900 dark:text-ink-100">{t.name}</p><p className="text-xs text-ink-400 dark:text-ink-500">{t.role} · {t.company}</p></div>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
            {/* Column 2 — offset */}
            <div className="md:mt-12 flex flex-col gap-6">
              {col2.map((t, i) => (
                <AnimateIn key={t.name} delay={0.1 + i * 0.12}>
                  <div className="relative rounded-2xl p-7 flex flex-col gap-4 border transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover bg-white dark:bg-ink-900/60 border-ink-100 dark:border-ink-800 shadow-card group">
                    <div aria-hidden className="absolute top-5 right-6 text-6xl font-serif text-ink-100 dark:text-ink-800 leading-none select-none pointer-events-none group-hover:text-brand-100/30 transition-colors">&ldquo;</div>
                    <StarRow />
                    <span className="text-xs font-[600] text-brand-500 bg-brand-50 dark:bg-brand-500/10 border border-brand-100 dark:border-brand-500/20 px-2.5 py-1 rounded-full w-fit">{t.result}</span>
                    <p className="text-ink-600 dark:text-ink-300 text-[0.95rem] leading-relaxed flex-1 relative z-10">{t.quote}</p>
                    <div className="flex items-center gap-3 pt-3 border-t border-ink-100 dark:border-ink-800">
                      <div className={`w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center text-sm font-[700] text-white ring-2 ring-offset-2 ring-brand-200 dark:ring-brand-500/30 dark:ring-offset-ink-900 bg-gradient-to-br ${t.gradient}`}>{t.initial}</div>
                      <div><p className="text-sm font-[700] text-ink-900 dark:text-ink-100">{t.name}</p><p className="text-xs text-ink-400 dark:text-ink-500">{t.role} · {t.company}</p></div>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <Divider />

      {/* Trust reinforcement strip */}
      <section className="py-14 bg-ink-50 dark:bg-[#0a0908]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {trustItems.map((item, i) => (
              <AnimateIn key={item.text} delay={i * 0.1}>
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-brand-50 dark:bg-brand-500/10 border border-brand-100 dark:border-brand-500/20 flex items-center justify-center text-brand-500">
                    <item.icon size={20} />
                  </div>
                  <p className="text-sm font-[600] text-ink-700 dark:text-ink-300">{item.text}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </Container>
      </section>

      <Divider />
      <CtaBanner headline="Ready to become our next success story?" subtext="Free 30-min consultation. No commitment, no pressure." primaryBtn={{label:'Book a free consultation',href:'/contact'}} showGuarantees={false} />
    </>
  )
}
