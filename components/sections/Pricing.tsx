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
    cta:'Get Started', ctaVariant: 'secondary' as const,
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
    cta:'Book a Call', ctaVariant: 'primary' as const,
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
    cta:'Contact Sales', ctaVariant: 'secondary' as const,
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

        {/* Item 7: stack vertically on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
          {plans.map((p, i) => (
            <AnimateIn key={p.tier} delay={i * 0.1}>
              {/* Item 14: Growth card stands out more — larger, different bg, colored top border, badge pill */}
              <div className={`relative flex flex-col rounded-3xl overflow-hidden transition-all duration-300 ${
                p.popular
                  ? 'bg-ink-900 dark:bg-ink-950 border border-brand-500/40 shadow-[0_0_0_1px_rgba(232,68,10,0.35),0_24px_64px_rgba(0,0,0,0.28)] md:scale-[1.04] md:-my-2 z-10'
                  : 'bg-white dark:bg-ink-900 border border-ink-200 dark:border-ink-800 hover:border-ink-300 dark:hover:border-ink-700 hover:shadow-card-hover'
              }`}>

                {/* Item 14: colored top border for popular */}
                {p.popular && (
                  <div className="h-1 w-full bg-gradient-to-r from-brand-600 via-brand-400 to-brand-600" />
                )}

                {/* Item 14: "Most Popular" as a proper pill badge at top */}
                {p.popular && (
                  <div className="flex items-center justify-center gap-2 px-5 py-2.5 bg-brand-500/10 border-b border-brand-500/20">
                    <span className="flex h-1.5 w-1.5 rounded-full bg-brand-400 animate-pulse" />
                    <Zap size={11} className="text-brand-400" />
                    <span className="text-xs font-[750] text-brand-300 tracking-[0.1em] uppercase">{p.badge}</span>
                  </div>
                )}

                {/* Item 14: more padding for popular card */}
                <div className={`flex flex-col flex-1 ${p.popular ? 'p-8' : 'p-7'}`}>
                  {/* Price block */}
                  <div className="mb-6">
                    <p className={`text-xs font-[600] mb-1 ${p.popular ? 'text-ink-400' : 'text-ink-400'}`}>{p.note}</p>
                    <div className="flex items-baseline gap-1 mb-2">
                      <span className={`font-[800] tracking-[-0.05em] leading-none ${
                        p.popular
                          ? 'text-[2.6rem] text-white'
                          : 'text-[2.4rem] text-ink-900 dark:text-ink-50'
                      }`}>
                        {p.price}
                      </span>
                      {p.period && <span className={`text-base ${p.popular ? 'text-ink-400' : 'text-ink-400'}`}>{p.period}</span>}
                    </div>
                    <p className={`text-[0.7rem] font-[750] tracking-[0.09em] uppercase mb-3 ${p.popular ? 'text-brand-400' : 'text-brand-500'}`}>{p.tier}</p>
                    <p className={`text-sm leading-relaxed pb-5 border-b ${p.popular ? 'text-ink-400 border-ink-800' : 'text-ink-500 dark:text-ink-400 border-ink-100 dark:border-ink-800'}`}>
                      {p.desc}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="flex flex-col gap-3 flex-1 mb-8">
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

                  {/* Item 3: primary only for the popular plan */}
                  <Button
                    href="/contact#form"
                    variant={p.ctaVariant}
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
