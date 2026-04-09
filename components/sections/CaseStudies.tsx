'use client'
import { TrendingUp, FileCheck, BarChart } from 'lucide-react'
import Section from '@/components/ui/Section'
import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import Button from '@/components/ui/Button'
import AnimateIn from '@/components/ui/AnimateIn'

const cases = [
  {
    tag:     'Data Operations · US Logistics',
    result:  '$40K saved annually. Processing time: 14 days → 3 days.',
    icon:    TrendingUp,
    problem: 'Processing 5,000+ shipping invoices manually every month. 4% error rate causing delayed carrier payments and ongoing disputes.',
    solution:'Dedicated 4-person data entry team with 3-level QC. Excel automation layer auto-flags anomalies before they reach AP.',
    metrics: ['99.2% accuracy', '78% faster processing', '$40K annual savings'],
  },
  {
    tag:     'QA Testing · UK SaaS Startup',
    result:  'Zero P1 bugs on launch day. Dev team shipped 3 weeks early.',
    icon:    FileCheck,
    problem: 'Launching v2.0 in 6 weeks with no in-house QA. Previous launch: 22 critical bugs reported by users on day one.',
    solution:'Full manual QA across 8 browsers, iOS and Android. Regression suite + exploratory testing. Daily bug reports with video reproduction.',
    metrics: ['0 P1 bugs at launch', '94% test coverage', '3 weeks faster'],
  },
  {
    tag:     'Data Engineering · Canadian Healthcare',
    result:  'Reporting: 18 hrs/week → 25 min. Found $2.3M in unbilled services.',
    icon:    BarChart,
    problem: 'Patient data across 6 disconnected systems. No real-time visibility. Weekly reports took 18 hours to compile.',
    solution:'Unified Snowflake data lakehouse. Power BI executive dashboard with 14 live KPIs. Automated pipeline from all 6 source systems.',
    metrics: ['18 hrs → 25 min', '$2.3M unbilled found', '14 live KPIs'],
  },
]

export default function CaseStudies() {
  return (
    <Section bg="gray">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <SectionHeader
            eyebrow="Results we've delivered"
            title={<>Real work. Real clients.<br />Numbers that don&apos;t lie.</>}
          />
          <AnimateIn delay={0.1}>
            <p className="text-base text-neutral-500 dark:text-neutral-400 max-w-[320px] leading-relaxed">
              Every result below is from an actual engagement. No estimates, no projections.
            </p>
          </AnimateIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cases.map((cs, i) => (
            <AnimateIn key={i} delay={i * 0.1}>
              <div className="flex flex-col h-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300 group">
                {/* Result header */}
                <div className="bg-brand-500 px-5 py-4 flex items-start gap-3">
                  <cs.icon size={17} className="text-white/80 flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-[700] text-white leading-snug">{cs.result}</span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-xs font-[700] tracking-[0.08em] uppercase text-brand-500 mb-5">{cs.tag}</p>
                  <div className="space-y-4 flex-1">
                    <div>
                      <p className="text-xs font-[700] uppercase tracking-[0.07em] text-neutral-400 mb-1.5">The problem</p>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{cs.problem}</p>
                    </div>
                    <div>
                      <p className="text-xs font-[700] uppercase tracking-[0.07em] text-neutral-400 mb-1.5">What we did</p>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{cs.solution}</p>
                    </div>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {cs.metrics.map(m => (
                        <span key={m} className="text-xs font-[650] text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-500/10 border border-brand-200 dark:border-brand-500/25 px-2.5 py-1 rounded-full">
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-5 pt-5 border-t border-neutral-100 dark:border-neutral-800">
                    <Button href="/contact#form" variant="ghost" size="sm" arrow className="text-brand-500 px-0">
                      Get similar results
                    </Button>
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
