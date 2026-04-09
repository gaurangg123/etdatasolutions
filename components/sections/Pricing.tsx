'use client'
import { Check } from 'lucide-react'
import Section from '@/components/ui/Section'
import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import Button from '@/components/ui/Button'
import AnimateIn from '@/components/ui/AnimateIn'

const plans = [
  {
    tier:'Starter', note:'Starting at', price:'$499', period:'/month', popular:false,
    desc:'One defined project or service. Perfect for first-time outsourcers.',
    features:['1–2 dedicated specialists','Single service vertical','Up to 40 hours/week','Weekly progress reports','Email support, 48h response','30-day satisfaction guarantee'],
    cta:'Get Started',
  },
  {
    tier:'Growth', note:'Starting at', price:'$1,499', period:'/month', popular:true,
    desc:'Ongoing multi-service support for teams ready to remove operational drag.',
    features:['3–6 dedicated specialists','Up to 3 service verticals','Up to 160 hours/week','Daily progress reports','Dedicated account manager','Slack/WhatsApp priority support','Monthly strategy call'],
    cta:'Book a Call',
  },
  {
    tier:'Enterprise', note:'Tailored pricing', price:'Custom', period:'', popular:false,
    desc:'Full-scale outsourcing across all verticals with SLA guarantees.',
    features:['10+ dedicated specialists','All 4 service verticals','Unlimited capacity','Real-time reporting dashboard','SLA with delivery guarantees','Custom integration & onboarding','Quarterly executive reviews'],
    cta:'Contact Sales',
  },
]

export default function Pricing() {
  return (
    <Section bg="gray" id="pricing">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <SectionHeader
            eyebrow="Transparent pricing"
            title={<>Simple pricing.<br />No hidden fees.</>}
          />
          <AnimateIn delay={0.1}>
            <p className="text-base text-neutral-500 dark:text-neutral-400 max-w-[340px] leading-relaxed">
              Every plan includes a dedicated team, QC reporting, and a 30-day satisfaction guarantee. No lock-in contracts.
            </p>
          </AnimateIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
          {plans.map((p, i) => (
            <AnimateIn key={p.tier} delay={i * 0.1}>
              <div className={`relative flex flex-col rounded-2xl border overflow-hidden transition-all duration-250
                ${p.popular
                  ? 'border-brand-500 shadow-[0_0_0_1px_#e8440a,0_16px_48px_rgba(232,68,10,0.18)]'
                  : 'border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-card-hover'}`}>
                {p.popular && (
                  <div className="bg-brand-500 px-6 py-2.5 text-center">
                    <span className="text-xs font-[700] text-white tracking-[0.08em] uppercase">Most Popular</span>
                  </div>
                )}
                <div className={`p-7 md:p-8 flex flex-col flex-1 ${p.popular ? 'bg-white dark:bg-[#111]' : ''}`}>
                  <p className="text-xs font-[600] text-neutral-400 mb-1">{p.note}</p>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-4xl font-[800] tracking-[-0.05em] text-neutral-900 dark:text-neutral-50">{p.price}</span>
                    {p.period && <span className="text-base text-neutral-400">{p.period}</span>}
                  </div>
                  <p className="text-sm font-[700] tracking-[0.05em] uppercase text-brand-500 mb-3">{p.tier}</p>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-6 pb-6 border-b border-neutral-100 dark:border-neutral-800">{p.desc}</p>
                  <div className="flex flex-col gap-3 mb-7 flex-1">
                    {p.features.map((f, j) => (
                      <div key={j} className="flex items-start gap-3">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${p.popular ? 'bg-brand-500' : 'bg-neutral-200 dark:bg-neutral-700'}`}>
                          <Check size={10} className={p.popular ? 'text-white' : 'text-neutral-600 dark:text-neutral-300'} strokeWidth={3} />
                        </div>
                        <span className="text-sm text-neutral-700 dark:text-neutral-300">{f}</span>
                      </div>
                    ))}
                  </div>
                  <Button
                    href="/contact#form"
                    variant={p.popular ? 'primary' : 'secondary'}
                    size="md"
                    arrow
                    className="w-full justify-center"
                  >
                    {p.cta}
                  </Button>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={0.35} className="mt-8 text-center">
          <p className="text-sm text-neutral-400 dark:text-neutral-500">
            All plans · 30-day satisfaction guarantee · No lock-in · Scale any month
          </p>
        </AnimateIn>
      </Container>
    </Section>
  )
}
