'use client'
import { Star, TrendingUp } from 'lucide-react'
import Section from '@/components/ui/Section'
import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimateIn from '@/components/ui/AnimateIn'

const testimonials = [
  {
    result:  'Error rate: 4% → 0.4%',
    quote:   "We were drowning in invoice data. ET Data Solutions took over in week one and never looked back. Errors dropped from 4% to under 0.5% — that's tens of thousands saved every year.",
    name:    'Michael Reeves', role: 'CFO', company: 'Apex Freight Group',
  },
  {
    result:  'Zero P1 bugs on launch',
    quote:   "Our last QA vendor gave us a checklist. ET Data Solutions gave us a battle-hardened product. Every edge case, every browser. Smoothest launch we've ever shipped.",
    name:    'Lena Fischer', role: 'CTO', company: 'Flowdesk',
  },
  {
    result:  '4 VAs placed in 5 days',
    quote:   "I needed 3 VAs placed fast. They delivered 4 qualified candidates in 5 days, I hired 2, and both are still with us 14 months later. Genuinely impressive turnaround.",
    name:    'James Okafor', role: 'Founder', company: 'ScaleOps Ltd.',
  },
  {
    result:  'Reports: 18 hrs → 25 mins',
    quote:   "The Power BI dashboards changed how we run this business. We used to wait 3 weeks for monthly reports. Now we have live data on every screen in every clinic.",
    name:    'Priya Nair', role: 'VP Operations', company: 'MediGroup Canada',
  },
]

export default function Testimonials() {
  return (
    <Section bg="white">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <SectionHeader
            eyebrow="Client testimonials"
            title="Don't take our word for it."
          />
          <AnimateIn delay={0.1}>
            <p className="text-base text-neutral-500 dark:text-neutral-400 max-w-[300px] leading-relaxed">
              Real feedback from real clients, with specific outcomes — not generic praise.
            </p>
          </AnimateIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <AnimateIn key={i} delay={i * 0.08}>
              <div className="flex flex-col h-full bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-7 hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-250">
                {/* Result pill */}
                <div className="inline-flex items-center gap-2 bg-brand-50 dark:bg-brand-500/10 border border-brand-200 dark:border-brand-500/25 rounded-full px-3 py-1 mb-5 w-fit">
                  <TrendingUp size={11} className="text-brand-500" />
                  <span className="text-xs font-[700] text-brand-500">{t.result}</span>
                </div>
                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {Array.from({length:5}).map((_,j) => (
                    <Star key={j} size={13} className="text-brand-500 fill-brand-500" />
                  ))}
                </div>
                <p className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed flex-1 mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3.5 pt-5 border-t border-neutral-200 dark:border-neutral-800">
                  <div className="w-9 h-9 rounded-full bg-brand-100 dark:bg-brand-500/20 flex items-center justify-center text-brand-600 dark:text-brand-400 text-sm font-[800] flex-shrink-0">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-[700] text-neutral-900 dark:text-neutral-100">{t.name}</div>
                    <div className="text-xs text-neutral-400 mt-0.5">{t.role}, {t.company}</div>
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </Container>
    </Section>
  )
}
