'use client'
import { Check, Zap } from 'lucide-react'
import Section from '@/components/ui/Section'
import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import Button from '@/components/ui/Button'
import AnimateIn from '@/components/ui/AnimateIn'

const plans = [
  {
    tier:'Starter', note:'Starting at', price:'$499', period:'/month', popular:false,
    desc:'One service, one team. Built for businesses testing outsourcing for the first time.',
    cta:'Get Started',
    features:[
      '1–2 dedicated specialists',
      'Single service vertical',
      'Up to 40 hours/week',
      'Weekly progress reports',
      'Email support, 48h response',
      '30-day satisfaction guarantee',
    ],
  },
  {
    tier:'Growth', note:'Starting at', price:'$1,499', period:'/month', popular:true,
    desc:'Multi-service, ongoing. For teams ready to systematically remove their biggest operational drags.',
    cta:'Book a Call',
    badge:'Most Popular',
    features:[
      '3–6 dedicated specialists',
      'Up to 3 service verticals',
      'Up to 160 hours/week',
      'Daily progress reports',
      'Dedicated account manager',
      'Slack/WhatsApp priority support',
      'Monthly strategy review call',
    ],
  },
  {
    tier:'Enterprise', note:'Tailored pricing', price:'Custom', period:'', popular:false,
    desc:'Full-scale outsourcing across all four verticals with SLAs, custom onboarding, and executive reviews.',
    cta:'Contact Sales',
    features:[
      '10+ dedicated specialists',
      'All 4 service verticals',
      'Unlimited capacity',
      'Real-time reporting dashboard',
      'SLA with delivery guarantees',
      'Custom integration & onboarding',
      'Quarterly executive reviews',
    ],
  },
]

export default function Pricing() {
  return (
    <Section bg="gray" id="pricing" label="Pricing plans">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <SectionHeader
            eyebrow="Pricing"
            title={<>Simple pricing.<br />No surprises, no lock-in.</>}
          />
          <AnimateIn delay={0.1}>
            <p className="text-[0.925rem] text-ink-500 dark:text-ink-400 max-w-[340px] leading-relaxed">
              Every plan includes a dedicated team, quality reports, and a 30-day guarantee. Scale up or down any month.
            </p>
          </AnimateIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
          {plans.map((p, i) => (
            <AnimateIn key={p.tier} delay={i * 0.1}>
              <div className={`relative flex flex-col rounded-3xl overflow-hidden transition-all duration-300 ${
                p.popular
                  ? 'bg-ink-900 dark:bg-ink-950 border border-ink-700 shadow-[0_0_0_1px_rgba(232,68,10,0.5),0_20px_60px_rgba(0,0,0,0.25)] scale-[1.02]'
                  : 'bg-white dark:bg-ink-900 border border-ink-200 dark:border-ink-800 hover:border-ink-300 dark:hover:border-ink-700 hover:shadow-card-hover'
              }`}>

                {/* Popular badge */}
                {p.popular && (
                  <div className="bg-brand-500 px-5 py-2 flex items-center justify-center gap-2">
                    <Zap size={12} className="text-white" />
                    <span className="text-xs font-[700] text-white tracking-[0.08em] uppercase">{p.badge}</span>
                  </div>
                )}

                <div className={`p-7 flex flex-col flex-1 ${p.popular ? '' : ''}`}>
                  {/* Price block */}
                  <div className="mb-6">
                    <p className={`text-xs font-[600] mb-1 ${p.popular ? 'text-ink-400' : 'text-ink-400'}`}>{p.note}</p>
                    <div className="flex items-baseline gap-1 mb-2">
                      <span className={`text-[2.4rem] font-[800] tracking-[-0.05em] leading-none ${p.popular ? 'text-white' : 'text-ink-900 dark:text-ink-50'}`}>
                        {p.price}
                      </span>
                      {p.period && <span className={`text-base ${p.popular ? 'text-ink-400' : 'text-ink-400'}`}>{p.period}</span>}
                    </div>
                    <p className={`text-[0.7rem] font-[700] tracking-[0.07em] uppercase mb-3 ${p.popular ? 'text-brand-400' : 'text-brand-500'}`}>{p.tier}</p>
                    <p className={`text-sm leading-relaxed pb-5 border-b ${p.popular ? 'text-ink-400 border-ink-800' : 'text-ink-500 dark:text-ink-400 border-ink-100 dark:border-ink-800'}`}>
                      {p.desc}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="flex flex-col gap-3 flex-1 mb-7">
                    {p.features.map((f, j) => (
                      <div key={j} className="flex items-start gap-3">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          p.popular ? 'bg-brand-500' : 'bg-ink-100 dark:bg-ink-800'
                        }`}>
                          <Check size={10} className={p.popular ? 'text-white' : 'text-ink-500 dark:text-ink-400'} strokeWidth={3} />
                        </div>
                        <span className={`text-sm ${p.popular ? 'text-ink-300' : 'text-ink-700 dark:text-ink-300'}`}>{f}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    href="/contact#form"
                    variant={p.popular ? 'primary' : 'secondary'}
                    size="md"
                    arrow
                    className={`w-full justify-center ${p.popular ? 'shine' : ''}`}
                  >
                    {p.cta}
                  </Button>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={0.35} className="mt-8 text-center">
          <p className="text-sm text-ink-400 dark:text-ink-500">
            All plans · 30-day satisfaction guarantee · No lock-in contracts · Scale any month with 30 days notice
          </p>
        </AnimateIn>
      </Container>
    </Section>
  )
}
