import { Metadata } from 'next'
import Link from 'next/link'
import { ShieldCheck, CheckCircle, Users, ArrowRight } from 'lucide-react'
import PageHero from '@/components/shared/PageHero'
import Container from '@/components/ui/Container'
import AnimateIn from '@/components/ui/AnimateIn'
import CtaBanner from '@/components/shared/CtaBanner'

export const metadata: Metadata = {
  title: 'Client Testimonials — ET Data Solutions',
  description: 'Rated 4.9/5 by 100+ clients. Real results from real engagements — no rounding, no estimates.',
}

const Divider = () => (
  <div aria-hidden style={{ height: '1px', background: 'linear-gradient(90deg,transparent,rgba(232,68,10,0.13) 25%,rgba(232,68,10,0.18) 50%,rgba(232,68,10,0.13) 75%,transparent)' }} />
)

const testimonials = [
  {
    result: 'Error rate: 4% → 0.4%',
    quote: "We were drowning in invoice data. ET Data Solutions took over in week one and we never looked back. Errors dropped from 4% to under 0.5% — that's tens of thousands saved every year.",
    name: 'Michael Reeves', role: 'CFO · Apex Freight Group', initial: 'M',
    bg: 'from-brand-400 to-brand-600',
  },
  {
    result: 'Zero P1 bugs on launch',
    quote: "Our last QA vendor gave us a checklist. ET Data Solutions gave us a battle-hardened product. Every edge case, every browser. The smoothest launch we've ever shipped.",
    name: 'Lena Fischer', role: 'CTO · Flowdesk', initial: 'L',
    bg: 'from-sky-400 to-sky-600',
  },
  {
    result: '4 VAs placed in 5 days',
    quote: "I needed 3 VAs placed fast. They delivered 4 qualified candidates in 5 days. I hired 2, and both are still with us 14 months later. Genuinely impressive.",
    name: 'James Okafor', role: 'Founder · ScaleOps Ltd.', initial: 'J',
    bg: 'from-violet-400 to-violet-600',
  },
  {
    result: 'Reporting: 18 hrs → 25 mins',
    quote: "The Power BI dashboards changed how we run this business entirely. We used to wait 3 weeks for monthly reports. Now we have live data on every screen in every clinic.",
    name: 'Priya Nair', role: 'VP Operations · MediGroup Canada', initial: 'P',
    bg: 'from-emerald-400 to-emerald-600',
  },
]

function StarRow() {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4 fill-amber-400 text-amber-400" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function TestimonialCard({ t, delay }: { t: typeof testimonials[0]; delay: number }) {
  return (
    <AnimateIn delay={delay}>
      <div className="relative rounded-2xl p-7 flex flex-col gap-4 border transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover bg-white dark:bg-ink-900/60 border-ink-100 dark:border-ink-800 shadow-card group">
        {/* Decorative quote mark */}
        <div className="absolute top-5 right-6 text-7xl font-serif text-ink-100 dark:text-ink-800 leading-none select-none pointer-events-none group-hover:text-brand-100/30 dark:group-hover:text-brand-500/10 transition-colors duration-300 opacity-60">
          &ldquo;
        </div>
        <StarRow />
        <span className="text-xs font-[600] text-brand-500 bg-brand-50 dark:bg-brand-500/10 border border-brand-100 dark:border-brand-500/20 px-2.5 py-1 rounded-full w-fit">
          {t.result}
        </span>
        <p className="text-ink-600 dark:text-ink-300 text-[0.95rem] leading-relaxed flex-1 relative z-10">
          {t.quote}
        </p>
        <div className="flex items-center gap-3 pt-3 border-t border-ink-100 dark:border-ink-800">
          <div className={`w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center text-sm font-[700] ring-2 ring-offset-2 ring-brand-200 dark:ring-brand-500/30 dark:ring-offset-ink-900 bg-gradient-to-br ${t.bg} text-white`}>
            {t.initial}
          </div>
          <div>
            <p className="text-sm font-[700] text-ink-900 dark:text-ink-100">{t.name}</p>
            <p className="text-xs text-ink-400 dark:text-ink-500">{t.role}</p>
          </div>
        </div>
      </div>
    </AnimateIn>
  )
}

const trustItems = [
  { icon: ShieldCheck, text: '30-day guarantee on all placements' },
  { icon: CheckCircle, text: 'NDA signed on every engagement' },
  { icon: Users,       text: 'Direct access — no account managers' },
]

export default function TestimonialsPage() {
  const col1 = [testimonials[0], testimonials[2]]
  const col2 = [testimonials[1], testimonials[3]]

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Testimonials' }]}
        title="Don't take our word for it."
        badge="★★★★★ Rated 4.9/5 · 100+ clients"
        subtitle="Based on post-project surveys across all active clients."
      />

      <Divider />

      {/* Stats Row */}
      <section className="bg-ink-900 dark:bg-ink-950 py-10">
        <Container>
          <AnimateIn>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden">
              {[
                { val: '4.9 / 5',  label: 'Average Rating' },
                { val: '100+',     label: 'Clients Served' },
                { val: '98%',      label: 'Would Recommend' },
              ].map((s, i) => (
                <div key={i} className="bg-ink-900 dark:bg-ink-950 px-8 py-8 text-center hover:bg-ink-800 transition-colors">
                  <div className="text-[2.2rem] font-[850] tracking-[-0.05em] text-brand-500 leading-none mb-2">{s.val}</div>
                  <div className="text-xs font-[700] tracking-[0.1em] uppercase text-ink-400">{s.label}</div>
                </div>
              ))}
            </div>
          </AnimateIn>
        </Container>
      </section>

      <Divider />

      {/* Testimonial Cards — masonry 2-col */}
      <section className="py-16 md:py-20 bg-ink-50 dark:bg-[#0a0908]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="flex flex-col gap-6">
              {col1.map((t, i) => <TestimonialCard key={t.name} t={t} delay={i * 0.12} />)}
            </div>
            <div className="md:mt-10 flex flex-col gap-6">
              {col2.map((t, i) => <TestimonialCard key={t.name} t={t} delay={0.1 + i * 0.12} />)}
            </div>
          </div>
        </Container>
      </section>

      <Divider />

      {/* Trust Reinforcement Strip */}
      <section className="py-12 md:py-16 bg-white dark:bg-ink-950">
        <Container>
          <AnimateIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {trustItems.map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-5 bg-ink-50 dark:bg-ink-900 border border-ink-200 dark:border-ink-800 rounded-2xl">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 dark:bg-brand-500/10 border border-brand-100 dark:border-brand-500/20 flex items-center justify-center text-brand-500 flex-shrink-0">
                    <item.icon size={18} />
                  </div>
                  <p className="text-sm font-[600] text-ink-800 dark:text-ink-200 leading-snug mt-1">{item.text}</p>
                </div>
              ))}
            </div>
          </AnimateIn>
        </Container>
      </section>

      <Divider />

      <CtaBanner
        headline="Ready to become our next success story?"
        primaryBtn={{ label: 'Book a free consultation', href: '/contact' }}
      />
    </>
  )
}
