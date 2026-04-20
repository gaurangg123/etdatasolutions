'use client'
import { Star, Quote } from 'lucide-react'
import Section from '@/components/ui/Section'
import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimateIn from '@/components/ui/AnimateIn'

const testimonials = [
  {
    result: 'Error rate: 4% → 0.4%',
    quote:  "We were drowning in invoice data. ET Data Solutions took over in week one and we never looked back. Errors dropped from 4% to under 0.5% — that's tens of thousands saved every year.",
    name:   'Michael Reeves', role:'CFO', company:'Apex Freight Group',
    color:  'bg-sky-500',
  },
  {
    result: 'Zero P1 bugs on launch',
    quote:  "Our last QA vendor gave us a checklist. ET Data Solutions gave us a battle-hardened product. Every edge case, every browser. The smoothest launch we've ever shipped.",
    name:   'Lena Fischer', role:'CTO', company:'Flowdesk',
    color:  'bg-emerald-500',
  },
  {
    result: '4 VAs placed in 5 days',
    quote:  "I needed 3 VAs placed fast. They delivered 4 qualified candidates in 5 days. I hired 2, and both are still with us 14 months later. Genuinely impressive.",
    name:   'James Okafor', role:'Founder', company:'ScaleOps Ltd.',
    color:  'bg-violet-500',
  },
  {
    result: 'Reporting: 18 hrs → 25 mins',
    quote:  "The Power BI dashboards changed how we run this business entirely. We used to wait 3 weeks for monthly reports. Now we have live data on every screen in every clinic.",
    name:   'Priya Nair', role:'VP Operations', company:'MediGroup Canada',
    color:  'bg-amber-500',
  },
]

export default function Testimonials() {
  return (
    <Section bg="white" label="Client testimonials">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <SectionHeader
            eyebrow="Client testimonials"
            title={<>Don&apos;t take our<br />word for it.</>}
          />
          <AnimateIn delay={0.1}>
            <div className="flex flex-col gap-1.5">
              <div className="flex gap-0.5">
                {Array.from({length:5}).map((_,j) => (
                  <Star key={j} size={16} className="text-brand-500 fill-brand-500" />
                ))}
              </div>
              <p className="text-sm font-[650] text-ink-700 dark:text-ink-300">Rated 4.9/5 across all clients</p>
              <p className="text-xs text-ink-400 dark:text-ink-500">Based on post-project surveys</p>
            </div>
          </AnimateIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {testimonials.map((t, i) => (
            <AnimateIn key={i} delay={i * 0.09}>
              <div className="group relative flex flex-col h-full bg-white dark:bg-ink-900 border border-ink-200 dark:border-ink-800 rounded-3xl overflow-hidden hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300">

                {/* Colored top strip */}
                <div className={`h-1 ${t.color} w-full`} />

                <div className="p-7 flex flex-col flex-1">
                  {/* Result badge */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="inline-flex items-center gap-1.5 text-xs font-[700] text-ink-700 dark:text-ink-300 bg-ink-100 dark:bg-ink-800 border border-ink-200 dark:border-ink-700 px-3 py-1 rounded-full">
                      {t.result}
                    </span>
                    <div className="flex gap-0.5">
                      {Array.from({length:5}).map((_,j) => (
                        <Star key={j} size={11} className="text-brand-500 fill-brand-500" />
                      ))}
                    </div>
                  </div>

                  {/* Quote */}
                  <Quote size={20} className="text-ink-200 dark:text-ink-700 mb-3 flex-shrink-0" />
                  <p className="text-[0.925rem] text-ink-700 dark:text-ink-300 leading-[1.75] flex-1 mb-6">
                    {t.quote}
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-5 border-t border-ink-100 dark:border-ink-800">
                    <div className={`w-9 h-9 rounded-full ${t.color} flex items-center justify-center text-white text-sm font-[800] flex-shrink-0`}>
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-[700] text-ink-900 dark:text-ink-100 leading-none mb-1">{t.name}</p>
                      <p className="text-xs text-ink-400 dark:text-ink-500">{t.role} · {t.company}</p>
                    </div>
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
