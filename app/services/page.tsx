'use client'
import Image from 'next/image'
import { Users, Database, CheckSquare, BarChart2, Check } from 'lucide-react'
import Section from '@/components/ui/Section'
import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import Button from '@/components/ui/Button'
import AnimateIn from '@/components/ui/AnimateIn'
import { services } from '@/lib/services'

const icons: Record<string, React.ReactNode> = {
  staffing: <Users      size={22} />,
  data:     <Database   size={22} />,
  qa:       <CheckSquare size={22} />,
  dataeng:  <BarChart2  size={22} />,
}
const imgs: Record<string, string> = {
  staffing: '/staffing.jpg',
  data:     '/data-analytics.jpg',
  qa:       '/qa-testing.jpg',
  dataeng:  '/data-engineering.jpg',
}
// Per-service accent colors
const accents: Record<string, { iconBg: string; iconText: string; iconBorder: string; tagBg: string; tagText: string; tagBorder: string }> = {
  staffing: { iconBg:'bg-violet-50 dark:bg-violet-500/10', iconText:'text-violet-600 dark:text-violet-400', iconBorder:'border-violet-200 dark:border-violet-500/25', tagBg:'bg-violet-50 dark:bg-violet-500/10', tagText:'text-violet-600 dark:text-violet-500', tagBorder:'border-violet-200 dark:border-violet-500/20' },
  data:     { iconBg:'bg-sky-50 dark:bg-sky-500/10',      iconText:'text-sky-600 dark:text-sky-400',      iconBorder:'border-sky-200 dark:border-sky-500/25',      tagBg:'bg-sky-50 dark:bg-sky-500/10',      tagText:'text-sky-600 dark:text-sky-500',      tagBorder:'border-sky-200 dark:border-sky-500/20'      },
  qa:       { iconBg:'bg-emerald-50 dark:bg-emerald-500/10', iconText:'text-emerald-600 dark:text-emerald-400', iconBorder:'border-emerald-200 dark:border-emerald-500/25', tagBg:'bg-emerald-50 dark:bg-emerald-500/10', tagText:'text-emerald-600 dark:text-emerald-500', tagBorder:'border-emerald-200 dark:border-emerald-500/20' },
  dataeng:  { iconBg:'bg-amber-50 dark:bg-amber-500/10',  iconText:'text-amber-600 dark:text-amber-400',  iconBorder:'border-amber-200 dark:border-amber-500/25',  tagBg:'bg-amber-50 dark:bg-amber-500/10',  tagText:'text-amber-600 dark:text-amber-500',  tagBorder:'border-amber-200 dark:border-amber-500/20'  },
}

const Divider = () => <div className="h-px bg-ink-200 dark:bg-ink-800" />

export default function ServicesPage() {
  return (
    <>
      {/* ── Page header ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-20 md:py-28 bg-white dark:bg-ink-950">
        <div aria-hidden className="absolute inset-0 opacity-[0.35] dark:opacity-[0.12]"
          style={{ backgroundImage:'radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)', backgroundSize:'28px 28px', maskImage:'linear-gradient(to bottom,transparent,black 15%,black 85%,transparent)' }} />
        <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_50%_0%,rgba(232,68,10,0.05),transparent_70%)]" />
        <Container className="relative">
          <AnimateIn>
            <span className="inline-block text-[0.7rem] font-[750] tracking-[0.14em] uppercase text-brand-500 mb-3">Services</span>
          </AnimateIn>
          <AnimateIn delay={0.07}>
            <h1 className="text-4xl md:text-5xl lg:text-[3.6rem] font-[800] tracking-[-0.045em] leading-[1.06] text-ink-900 dark:text-ink-50 mb-5 max-w-[680px] text-balance">
              Four services.<br />
              <span className="text-gradient">Built to remove operational drag.</span>
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.14}>
            <p className="text-lg text-ink-500 dark:text-ink-400 leading-relaxed max-w-[500px]">
              Every service is scoped, staffed with dedicated specialists, and measured against clear quality benchmarks — not vague activity reports.
            </p>
          </AnimateIn>
          {/* Quick jump nav */}
          <AnimateIn delay={0.2} className="flex flex-wrap gap-2 mt-8">
            {services.map(svc => (
              <a key={svc.id} href={`#${svc.id}`}
                className="text-xs font-[600] text-ink-600 dark:text-ink-400 bg-white dark:bg-ink-800 border border-ink-200 dark:border-ink-700 hover:border-brand-400 hover:text-brand-500 px-3 py-1.5 rounded-full transition-all duration-150">
                {svc.title}
              </a>
            ))}
          </AnimateIn>
        </Container>
      </section>

      <Divider />

      {/* ── Service sections ─────────────────────────────────────── */}
      {services.map((svc, idx) => {
        const a = accents[svc.id]
        return (
          <div key={svc.id}>
            <Section bg={idx % 2 === 1 ? 'gray' : 'white'} id={svc.id} size="lg" label={svc.title}>
              <Container>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-14 items-start ${idx % 2 === 1 ? 'lg:[direction:rtl]' : ''}`}>

                  {/* Text column */}
                  <div className="lg:[direction:ltr]">
                    <AnimateIn>
                      <div className="flex items-center gap-3 mb-5">
                        <div className={`w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0 ${a.iconBg} ${a.iconText} border ${a.iconBorder}`}>
                          {icons[svc.id]}
                        </div>
                        <div>
                          <span className="text-[0.68rem] font-[750] tracking-[0.12em] uppercase text-ink-400 dark:text-ink-600 block">{svc.num}</span>
                          <span className="text-[0.7rem] font-[700] tracking-[0.1em] uppercase text-brand-500">{svc.subtitle}</span>
                        </div>
                      </div>
                    </AnimateIn>

                    <AnimateIn delay={0.08}>
                      <h2 className="text-3xl md:text-[2.2rem] font-[800] tracking-[-0.04em] text-ink-900 dark:text-ink-50 leading-[1.08] mb-3">
                        {svc.title}
                      </h2>
                    </AnimateIn>
                    <AnimateIn delay={0.12}>
                      <p className="text-[0.925rem] font-[650] text-ink-700 dark:text-ink-300 mb-4 leading-snug">{svc.benefitHeadline}</p>
                    </AnimateIn>
                    <AnimateIn delay={0.16}>
                      <p className="text-sm text-ink-500 dark:text-ink-400 leading-relaxed mb-6 max-w-[460px]">{svc.description}</p>
                    </AnimateIn>

                    {/* Outcomes */}
                    <AnimateIn delay={0.2}>
                      <div className="flex flex-col gap-2.5 mb-6">
                        {svc.outcomes.map((o, j) => (
                          <div key={j} className="flex items-start gap-3">
                            <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${a.iconBg} ${a.iconText}`}>
                              <Check size={10} strokeWidth={3} />
                            </div>
                            <span className="text-sm text-ink-700 dark:text-ink-300 leading-relaxed">{o}</span>
                          </div>
                        ))}
                      </div>
                    </AnimateIn>

                    {/* QA highlight callout */}
                    {svc.highlight && (
                      <AnimateIn delay={0.23}>
                        <div className={`flex items-start gap-3 ${a.iconBg} border ${a.iconBorder} border-l-2 rounded-xl p-3.5 mb-6`}>
                          <CheckSquare size={13} className={`${a.iconText} flex-shrink-0 mt-0.5`} />
                          <p className={`text-sm font-[500] ${a.iconText} leading-relaxed`}>{svc.highlight}</p>
                        </div>
                      </AnimateIn>
                    )}

                    {/* Tags */}
                    <AnimateIn delay={0.25}>
                      <div className="flex flex-wrap gap-1.5 mb-7">
                        {svc.tags.map(t => (
                          <span key={t} className={`text-xs font-[600] px-3 py-1.5 rounded-full border ${a.tagBg} ${a.tagText} ${a.tagBorder}`}>
                            {t}
                          </span>
                        ))}
                      </div>
                    </AnimateIn>

                    <AnimateIn delay={0.28}>
                      <Button href="/contact#form" variant="primary" size="md" arrow className="shine">
                        Get a quote
                      </Button>
                    </AnimateIn>
                  </div>

                  {/* Delivery card */}
                  <AnimateIn delay={0.15} className="lg:[direction:ltr]">
                    <div className="bg-white dark:bg-ink-900 border border-ink-200 dark:border-ink-800 rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300">
                      {/* Image */}
                      <div className="relative h-52 overflow-hidden">
                        <Image
                          src={imgs[svc.id]} alt={svc.title} fill
                          className="object-cover" sizes="(max-width:1024px) 100vw, 560px" loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                      </div>
                      {/* Card header */}
                      <div className="flex items-center gap-3 px-5 py-4 bg-ink-50 dark:bg-ink-800/60 border-b border-ink-200 dark:border-ink-700">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${a.iconBg} ${a.iconText} border ${a.iconBorder}`}>
                          {icons[svc.id]}
                        </div>
                        <div>
                          <p className="text-sm font-[700] text-ink-900 dark:text-ink-100">{svc.title}</p>
                          <p className="text-[0.65rem] font-[650] tracking-[0.08em] uppercase text-ink-400 dark:text-ink-500">What we deliver</p>
                        </div>
                      </div>
                      {/* Deliverables list */}
                      <ul className="divide-y divide-ink-100 dark:divide-ink-800">
                        {svc.items.map(item => (
                          <li key={item} className="flex items-center gap-3 px-5 py-3 hover:bg-ink-50 dark:hover:bg-ink-800/40 hover:pl-6 transition-all duration-200">
                            <span aria-hidden className="w-1.5 h-1.5 rounded-full bg-brand-500 opacity-50 flex-shrink-0" />
                            <span className="text-sm text-ink-600 dark:text-ink-400">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </AnimateIn>
                </div>
              </Container>
            </Section>
            {idx < services.length - 1 && <Divider />}
          </div>
        )
      })}

      <Divider />

      {/* ── Bottom CTA ───────────────────────────────────────────── */}
      <Section bg="white" size="md">
        <Container>
          <AnimateIn>
            <div className="relative rounded-[28px] overflow-hidden">
              <div className="absolute inset-0 bg-ink-900 dark:bg-ink-950" />
              <div aria-hidden className="absolute -top-32 -right-16 w-[400px] h-[400px] rounded-full bg-brand-500/20 blur-[70px]" />
              <div aria-hidden className="absolute inset-0 opacity-[0.04]"
                style={{ backgroundImage:'linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)', backgroundSize:'44px 44px' }} />
              <div className="relative z-10 px-8 py-16 md:px-16 max-w-[520px]">
                <span className="text-[0.7rem] font-[750] tracking-[0.14em] uppercase text-white/40 mb-4 block">Let&apos;s work together</span>
                <h2 className="text-3xl md:text-4xl font-[800] tracking-[-0.04em] text-white leading-[1.08] mb-4">
                  Not sure which service fits your needs?
                </h2>
                <p className="text-white/60 leading-relaxed mb-8 max-w-[380px] text-[0.925rem]">
                  Tell us your bottleneck. We&apos;ll map it to the right service and send a scoped proposal — no commitment required.
                </p>
                <Button href="/contact#form" variant="white" size="lg" arrow className="shine">
                  Talk to us
                </Button>
              </div>
            </div>
          </AnimateIn>
        </Container>
      </Section>
    </>
  )
}
