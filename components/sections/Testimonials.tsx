'use client'
import { Quote } from 'lucide-react'
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
    ring:   'ring-sky-200 dark:ring-sky-500/30',
  },
  {
    result: 'Zero P1 bugs on launch',
    quote:  "Our last QA vendor gave us a checklist. ET Data Solutions gave us a battle-hardened product. Every edge case, every browser. The smoothest launch we've ever shipped.",
    name:   'Lena Fischer', role:'CTO', company:'Flowdesk',
    color:  'bg-emerald-500',
    ring:   'ring-emerald-200 dark:ring-emerald-500/30',
  },
  {
    result: '4 VAs placed in 5 days',
    quote:  "I needed 3 VAs placed fast. They delivered 4 qualified candidates in 5 days. I hired 2, and both are still with us 14 months later. Genuinely impressive.",
    name:   'James Okafor', role:'Founder', company:'ScaleOps Ltd.',
    color:  'bg-violet-500',
    ring:   'ring-violet-200 dark:ring-violet-500/30',
  },
  {
    result: 'Reporting: 18 hrs → 25 mins',
    quote:  "The Power BI dashboards changed how we run this business entirely. We used to wait 3 weeks for monthly reports. Now we have live data on every screen in every clinic.",
    name:   'Priya Nair', role:'VP Operations', company:'MediGroup Canada',
    color:  'bg-amber-500',
    ring:   'ring-amber-200 dark:ring-amber-500/30',
  },
]

// Fix 4: inline SVG star to avoid any icon import issues
function StarIcon() {
  return (
    <svg className="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 20 20" aria-hidden>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

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
                {[...Array(5)].map((_, j) => <StarIcon key={j} />)}
              </div>
              <p className="text-sm font-[650] text-ink-700 dark:text-ink-300">Rated 4.9/5 across all clients</p>
              <p className="text-xs text-ink-400 dark:text-ink-500">Based on post-project surveys</p>
            </div>
          </AnimateIn>
        </div>

        {/* Fix 4: CSS grid with stretch so all cards equal height */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
          {testimonials.map((t, i) => (
            <AnimateIn key={i} delay={i * 0.09}>
              {/* Fix 4: h-full flex flex-col on card wrapper */}
              <div className="group relative flex flex-col h-full bg-white dark:bg-ink-900 border border-ink-200 dark:border-ink-800 rounded-3xl overflow-hidden hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300">

                {/* Colored top strip */}
                <div className={`h-1 ${t.color} w-full flex-shrink-0`} />

                <div className="p-7 flex flex-col flex-1">
                  {/* Result badge + stars row */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="inline-flex items-center gap-1.5 text-xs font-[700] text-ink-700 dark:text-ink-300 bg-ink-100 dark:bg-ink-800 border border-ink-200 dark:border-ink-700 px-3 py-1 rounded-full">
                      {t.result}
                    </span>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, j) => <StarIcon key={j} />)}
                    </div>
                  </div>

                  {/* Fix 4: star rating row directly above quote text */}
                  <div className="flex items-center gap-0.5 mb-3">
                    {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
                  </div>

                  {/* Quote */}
                  <Quote size={20} className="text-ink-200 dark:text-ink-700 mb-3 flex-shrink-0" />
                  <p className="text-[0.925rem] text-ink-700 dark:text-ink-300 leading-[1.75] flex-1 mb-6">
                    {t.quote}
                  </p>

                  {/* Author — 48px avatar with ring/border */}
                  <div className="flex items-center gap-3 pt-5 border-t border-ink-100 dark:border-ink-800">
                    <div className={`w-12 h-12 rounded-full ${t.color} flex items-center justify-center text-white text-base font-[800] flex-shrink-0 ring-2 ring-offset-2 ring-offset-white dark:ring-offset-ink-900 ${t.ring}`}>
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
