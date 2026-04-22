'use client'
import { TrendingUp, FileCheck, BarChart, ArrowRight } from 'lucide-react'
import Section from '@/components/ui/Section'
import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import Button from '@/components/ui/Button'
import AnimateIn from '@/components/ui/AnimateIn'

const cases = [
  {
    tag:      'Data Operations',
    client:   'US Logistics Company',
    icon:     TrendingUp,
    color:    'bg-sky-500',
    accentColor: '#0ea5e9',
    result:   '$40K saved annually.',
    sub:      'Invoice processing: 14 days → 3 days.',
    problem:  'Processing 5,000+ shipping invoices manually every month. A 4% error rate was causing delayed carrier payments and ongoing disputes costing thousands per quarter.',
    solution: 'Deployed a 4-person dedicated data entry team with 3-level QC verification. Built an Excel automation layer that auto-flags anomalies before they reach accounts payable.',
    metrics:  [
      { label:'Accuracy', val:'99.2%' },
      { label:'Faster',   val:'78%'   },
      { label:'Saved/yr', val:'$40K'  },
    ],
  },
  {
    tag:      'QA Testing',
    client:   'UK SaaS Startup',
    icon:     FileCheck,
    color:    'bg-emerald-500',
    accentColor: '#10b981',
    result:   'Zero P1 bugs on launch day.',
    sub:      'Dev team shipped 3 weeks ahead of schedule.',
    problem:  'Launching v2.0 in 6 weeks with zero in-house QA. Their previous launch ended with 22 critical bugs reported by users on day one — a PR disaster they couldn\'t repeat.',
    solution: 'Full manual QA across 8 browsers, iOS and Android. Complete regression suite plus exploratory testing. Daily bug reports with video reproduction steps.',
    metrics:  [
      { label:'P1 bugs',   val:'Zero'  },
      { label:'Coverage',  val:'94%'   },
      { label:'Faster',    val:'3 wks' },
    ],
  },
  {
    tag:      'Data Engineering',
    client:   'Canadian Healthcare Group',
    icon:     BarChart,
    color:    'bg-violet-500',
    accentColor: '#8b5cf6',
    result:   '$2.3M in unbilled services found.',
    sub:      'Weekly reporting: 18 hours → 25 minutes.',
    problem:  'Patient data scattered across 6 disconnected systems. Leadership had no real-time visibility. Compiling weekly reports took 18+ hours and still contained errors.',
    solution: 'Built a unified Snowflake data lakehouse with automated pipelines from all 6 source systems. Power BI executive dashboard with 14 live KPIs, updated every 15 minutes.',
    metrics:  [
      { label:'Reporting', val:'25 min' },
      { label:'Unbilled',  val:'$2.3M'  },
      { label:'KPIs live', val:'14'     },
    ],
  },
]

export default function CaseStudies() {
  return (
    <Section bg="gray" label="Case studies">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <SectionHeader
            eyebrow="Proof, not promises"
            title={<>Real clients.<br />Numbers that don&apos;t lie.</>}
          />
          <AnimateIn delay={0.1}>
            <p className="text-[0.925rem] text-ink-500 dark:text-ink-400 max-w-[300px] leading-relaxed">
              Every result below is from a real engagement. No rounding, no estimates.
            </p>
          </AnimateIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cases.map((cs, i) => (
            <AnimateIn key={i} delay={i * 0.1}>
              {/* Item 12: rounded card, top colored accent bar, 3-column metric grid */}
              <div className="group flex flex-col h-full bg-white dark:bg-ink-900 border border-ink-200 dark:border-ink-800 rounded-3xl overflow-hidden hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">

                {/* Item 12: top colored accent bar per card */}
                <div className="h-1.5 w-full" style={{ background: cs.accentColor }} />

                {/* Top — result area */}
                <div className="px-5 py-4 border-b border-ink-100 dark:border-ink-800" style={{ background: `${cs.accentColor}10` }}>
                  <div className="flex items-start gap-2.5">
                    <cs.icon size={16} style={{ color: cs.accentColor }} className="flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-[750] text-ink-900 dark:text-ink-100 leading-snug">{cs.result}</p>
                      <p className="text-xs text-ink-500 dark:text-ink-400 mt-0.5">{cs.sub}</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  {/* Client + service tag */}
                  <div className="flex items-center gap-2 mb-5">
                    <span className="text-[0.68rem] font-[700] tracking-[0.09em] uppercase text-ink-400 dark:text-ink-500 bg-ink-100 dark:bg-ink-800 px-2.5 py-1 rounded-full">
                      {cs.tag}
                    </span>
                    <span className="text-[0.75rem] font-[600] text-ink-500 dark:text-ink-400">{cs.client}</span>
                  </div>

                  {/* Problem / Solution */}
                  <div className="space-y-4 flex-1">
                    <div>
                      <p className="text-[0.7rem] font-[700] uppercase tracking-[0.09em] text-ink-400 dark:text-ink-500 mb-1.5">The problem</p>
                      <p className="text-sm text-ink-600 dark:text-ink-400 leading-relaxed">{cs.problem}</p>
                    </div>
                    <div>
                      <p className="text-[0.7rem] font-[700] uppercase tracking-[0.09em] text-ink-400 dark:text-ink-500 mb-1.5">What we did</p>
                      <p className="text-sm text-ink-600 dark:text-ink-400 leading-relaxed">{cs.solution}</p>
                    </div>
                  </div>

                  {/* Item 12: 3-column mini stat grid with clear labels */}
                  <div className="grid grid-cols-3 gap-2 mt-5">
                    {cs.metrics.map(m => (
                      <div key={m.label} className="text-center bg-ink-50 dark:bg-ink-800 border border-ink-200 dark:border-ink-700 rounded-xl py-3 px-2">
                        <div className="text-base font-[800] tracking-[-0.04em] text-ink-900 dark:text-ink-100 leading-none mb-1" style={{ color: cs.accentColor }}>{m.val}</div>
                        <div className="text-[0.62rem] text-ink-400 font-[600] tracking-[0.05em] uppercase leading-tight">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Link */}
                  <div className="mt-4 pt-4 border-t border-ink-100 dark:border-ink-800">
                    <Button href="/contact" variant="ghost" size="sm" arrow className="px-0 text-brand-500">
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
