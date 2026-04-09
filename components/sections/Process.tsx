'use client'
import { Phone, FileCheck, Users, Zap, Target } from 'lucide-react'
import Section from '@/components/ui/Section'
import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import Button from '@/components/ui/Button'
import AnimateIn from '@/components/ui/AnimateIn'

const steps = [
  { n:'01', icon:Phone,     title:'30-Min Discovery',    desc:'We ask the right questions — your volume, timeline, bottlenecks, and success criteria. No generic intake forms.' },
  { n:'02', icon:FileCheck, title:'Proposal in 24h',     desc:'A scoped proposal: team size, deliverables, timeline, quality benchmarks, and clear pricing. Zero ambiguity.' },
  { n:'03', icon:Users,     title:'Team Onboarded 72h',  desc:'Dedicated team assigned, NDA signed, communication channels live. First delivery within the week.' },
  { n:'04', icon:Zap,       title:'Continuous Delivery', desc:'Regular delivery with QC reports. Direct access to your project lead. No middlemen, no delays.' },
  { n:'05', icon:Target,    title:'Review & Scale',       desc:'Monthly quality reviews. Scale up or down on 30 days notice — no penalty, no lock-in.' },
]

export default function Process() {
  return (
    <Section bg="white">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <SectionHeader
            eyebrow="How it works"
            title={<>First call to first delivery.<br />Under a week.</>}
          />
          <AnimateIn delay={0.1}>
            <p className="text-base text-neutral-500 dark:text-neutral-400 max-w-[320px] leading-relaxed">
              No bloated discovery phases. No 8-week onboarding. We move fast and keep you informed.
            </p>
          </AnimateIn>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
          {steps.map((s, i) => (
            <AnimateIn key={s.n} delay={i * 0.08}>
              <div className="relative bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 h-full hover:border-brand-300 dark:hover:border-brand-500/40 hover:-translate-y-1 hover:shadow-card-hover transition-all duration-250">
                {i < steps.length - 1 && (
                  <div aria-hidden className="hidden lg:block absolute top-8 -right-2.5 w-5 h-px bg-neutral-300 dark:bg-neutral-700" />
                )}
                <div className="w-9 h-9 rounded-xl bg-brand-50 dark:bg-brand-500/10 border border-brand-100 dark:border-brand-500/20 flex items-center justify-center text-brand-500 mb-4">
                  <s.icon size={16} />
                </div>
                <div className="text-xs font-[700] tracking-[0.1em] uppercase text-neutral-400 mb-2">{s.n}</div>
                <h4 className="text-sm font-[700] text-neutral-900 dark:text-neutral-100 mb-2 leading-snug">{s.title}</h4>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">{s.desc}</p>
              </div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={0.3} className="flex justify-center">
          <Button href="/contact#form" variant="primary" size="lg" arrow>Start your project</Button>
        </AnimateIn>
      </Container>
    </Section>
  )
}
