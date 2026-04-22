'use client'
import { motion } from 'framer-motion'
import Section from '@/components/ui/Section'
import Container from '@/components/ui/Container'
import AnimateIn from '@/components/ui/AnimateIn'

const testimonials = [
  {
    result: 'Error rate: 4% → 0.4%',
    quote:  "We were drowning in invoice data. ET Data Solutions took over in week one and we never looked back. Errors dropped from 4% to under 0.5% — that's tens of thousands saved every year.",
    name:   'Michael Reeves', role: 'CFO · Apex Freight Group', initial: 'M',
  },
  {
    result: 'Zero P1 bugs on launch',
    quote:  "Our last QA vendor gave us a checklist. ET Data Solutions gave us a battle-hardened product. Every edge case, every browser. The smoothest launch we've ever shipped.",
    name:   'Lena Fischer', role: 'CTO · Flowdesk', initial: 'L',
  },
  {
    result: '4 VAs placed in 5 days',
    quote:  "I needed 3 VAs placed fast. They delivered 4 qualified candidates in 5 days. I hired 2, and both are still with us 14 months later. Genuinely impressive.",
    name:   'James Okafor', role: 'Founder · ScaleOps Ltd.', initial: 'J',
  },
  {
    result: 'Reporting: 18 hrs → 25 mins',
    quote:  "The Power BI dashboards changed how we run this business entirely. We used to wait 3 weeks for monthly reports. Now we have live data on every screen in every clinic.",
    name:   'Priya Nair', role: 'VP Operations · MediGroup Canada', initial: 'P',
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
        {/* Decorative large quote mark */}
        <div className="absolute top-5 right-6 text-6xl font-serif text-ink-100 dark:text-ink-800 leading-none select-none pointer-events-none group-hover:text-brand-100/30 dark:group-hover:text-brand-500/10 transition-colors duration-300">
          &ldquo;
        </div>

        {/* Stars */}
        <StarRow />

        {/* Result badge */}
        <span className="text-xs font-[600] text-brand-500 bg-brand-50 dark:bg-brand-500/10 border border-brand-100 dark:border-brand-500/20 px-2.5 py-1 rounded-full w-fit">
          {t.result}
        </span>

        {/* Quote */}
        <p className="text-ink-600 dark:text-ink-300 text-[0.95rem] leading-relaxed flex-1 relative z-10">
          {t.quote}
        </p>

        {/* Author */}
        <div className="flex items-center gap-3 pt-3 border-t border-ink-100 dark:border-ink-800">
          <div className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center text-sm font-[700] ring-2 ring-offset-2 ring-brand-200 dark:ring-brand-500/30 dark:ring-offset-ink-900 bg-gradient-to-br from-brand-400 to-brand-600 text-white">
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

export default function Testimonials() {
  const col1 = [testimonials[0], testimonials[2]]
  const col2 = [testimonials[1], testimonials[3]]

  return (
    <Section bg="white" label="Client testimonials">
      <Container>
        {/* Section header */}
        <div className="text-center mb-14 relative">
          {/* Watermark */}
          <div aria-hidden className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
            <span className="text-[8rem] font-[900] text-ink-900/[0.03] dark:text-white/[0.03] leading-none">
              ★ 4.9 / 5
            </span>
          </div>

          <AnimateIn className="relative z-10 flex flex-col items-center gap-3">
            {/* Rating pill badge */}
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-[600] bg-amber-500/10 text-amber-400 border border-amber-500/20">
              ★★★★★ Rated 4.9/5 · 100+ clients
            </span>

            <h2 className="font-[800] tracking-[-0.04em] text-ink-900 dark:text-ink-50 leading-[1.08] text-balance text-[1.8rem] sm:text-[2.2rem] md:text-[2.6rem] lg:text-[2.9rem]">
              Don&apos;t take our<br />word for it.
            </h2>
            <p className="text-sm text-ink-400 dark:text-ink-500">Based on post-project surveys</p>
          </AnimateIn>
        </div>

        {/* Masonry staggered two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Column 1 */}
          <div className="flex flex-col gap-6">
            {col1.map((t, i) => (
              <TestimonialCard key={t.name} t={t} delay={i * 0.12} />
            ))}
          </div>
          {/* Column 2 — offset downward for stagger effect */}
          <div className="md:mt-12 flex flex-col gap-6">
            {col2.map((t, i) => (
              <TestimonialCard key={t.name} t={t} delay={0.1 + i * 0.12} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
