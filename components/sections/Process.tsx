'use client'
import { Phone, FileCheck, Users, Zap, Target } from 'lucide-react'
import Section from '@/components/ui/Section'
import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import Button from '@/components/ui/Button'
import AnimateIn from '@/components/ui/AnimateIn'

const steps = [
  { n:'01', icon:Phone,     title:'30-min discovery call',  desc:'We ask the right questions about your volume, timeline, and success criteria. You get a real conversation, not a contact form.', time:'Same day' },
  { n:'02', icon:FileCheck, title:'Scoped proposal in 24h', desc:'Team size, deliverables, quality benchmarks, timeline, and pricing — all spelled out. Zero ambiguity, no hidden costs.', time:'24 hours' },
  { n:'03', icon:Users,     title:'Team live in 72h',       desc:'Dedicated team assigned, NDA signed, communication channels open, and your first delivery scheduled within the week.', time:'72 hours' },
  { n:'04', icon:Zap,       title:'Delivery with QC reports',desc:'Regular output with quality scorecards. Direct access to your project lead — no account managers in between.', time:'Ongoing' },
  { n:'05', icon:Target,    title:'Monthly review & scale', desc:'We review against benchmarks and adjust. Scale up or down on 30 days notice. No lock-in, no penalty.', time:'Monthly' },
]

export default function Process() {
  return (
    <Section bg="white" label="Our process">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <SectionHeader
            eyebrow="How we work"
            title={<>First call to first delivery<br />in under a week.</>}
          />
          <AnimateIn delay={0.1}>
            <p className="text-[0.925rem] text-ink-500 dark:text-ink-400 max-w-[300px] leading-relaxed">
              No bloated onboarding. No 8-week discovery. We move fast and stay in your loop at every step.
            </p>
          </AnimateIn>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
          {steps.map((s, i) => (
            <div key={s.n} className="relative flex flex-col items-stretch">
              <AnimateIn delay={i * 0.1}>
                <div className="group relative flex flex-col bg-white dark:bg-ink-900 border border-ink-200 dark:border-ink-800 rounded-2xl p-5 h-full hover:border-brand-300 dark:hover:border-brand-500/50 hover:-translate-y-1.5 hover:shadow-card-hover transition-all duration-300">

                  {/* Step icon + number */}
                  <div className="flex items-center gap-3 mb-4 relative z-10">
                    <div className="relative w-9 h-9 rounded-xl bg-brand-50 dark:bg-brand-500/10 border border-brand-100 dark:border-brand-500/20 flex items-center justify-center text-brand-500 flex-shrink-0 group-hover:bg-brand-500 group-hover:text-white group-hover:border-brand-500 transition-all duration-250">
                      <s.icon size={15} />
                    </div>
                    <div>
                      <span className="text-[0.65rem] font-[700] tracking-[0.1em] uppercase text-ink-400 block">{s.n}</span>
                      <span className="text-[0.65rem] font-[600] text-brand-500">{s.time}</span>
                    </div>
                  </div>

                  <h4 className="text-sm font-[700] text-ink-900 dark:text-ink-100 mb-2 leading-snug">{s.title}</h4>
                  <p className="text-xs text-ink-500 dark:text-ink-400 leading-relaxed flex-1">{s.desc}</p>

                  {/* Step number watermark */}
                  <span aria-hidden className="absolute bottom-3 right-4 text-[3.5rem] font-[900] text-ink-900/[0.03] dark:text-white/[0.03] leading-none select-none pointer-events-none">
                    {s.n}
                  </span>
                </div>
              </AnimateIn>

              {/* Connector — desktop horizontal dashed line between steps */}
              {i < steps.length - 1 && (
                <>
                  <div
                    aria-hidden
                    className="hidden lg:block absolute top-[22px] h-px border-t-2 border-dashed border-ink-200 dark:border-ink-700 z-20"
                    style={{ left: 'calc(50% + 28px)', right: 'calc(-50% + 28px)' }}
                  />
                  {/* Mobile vertical connector */}
                  <div
                    aria-hidden
                    className="lg:hidden w-px h-4 bg-gradient-to-b from-brand-300 to-ink-200 dark:from-brand-500/30 dark:to-ink-800 mx-auto mt-1"
                  />
                </>
              )}
            </div>
          ))}
        </div>

        <AnimateIn delay={0.35} className="mt-10 text-center">
          <Button href="#contact" variant="primary" size="lg" arrow className="shine">
            Start your project today
          </Button>
          <p className="text-xs text-ink-400 mt-3">No commitment. We'll send a scoped proposal within 24 hours.</p>
        </AnimateIn>
      </Container>
    </Section>
  )
}
