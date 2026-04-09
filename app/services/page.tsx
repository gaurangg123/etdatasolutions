'use client'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Users, Database, CheckSquare, BarChart2, Check } from 'lucide-react'
import Section from '@/components/ui/Section'
import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import Button from '@/components/ui/Button'
import AnimateIn from '@/components/ui/AnimateIn'
import { services } from '@/lib/services'

const icons: Record<string,React.ReactNode> = {
  staffing: <Users size={22}/>, data: <Database size={22}/>,
  qa: <CheckSquare size={22}/>, dataeng: <BarChart2 size={22}/>,
}
const imgs: Record<string,string> = {
  staffing:'/staffing.jpg', data:'/data-analytics.jpg',
  qa:'/qa-testing.jpg', dataeng:'/data-engineering.jpg',
}

export default function ServicesPage() {
  return (
    <>
      {/* Page header */}
      <section className="relative overflow-hidden py-20 md:py-28 bg-white dark:bg-[#0e0c0b]">
        <div aria-hidden className="absolute inset-0 opacity-[0.35] dark:opacity-[0.12]"
          style={{ backgroundImage:'linear-gradient(rgba(0,0,0,0.07) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,0.07) 1px,transparent 1px)', backgroundSize:'52px 52px', maskImage:'linear-gradient(to bottom,transparent,black 15%,black 85%,transparent)' }} />
        <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_50%_0%,rgba(232,68,10,0.05),transparent_70%)]" />
        <Container className="relative">
          <AnimateIn>
            <span className="text-xs font-[700] tracking-[0.12em] uppercase text-brand-500 mb-3 block">Services</span>
          </AnimateIn>
          <AnimateIn delay={0.07}>
            <h1 className="text-4xl md:text-5xl lg:text-[3.6rem] font-[800] tracking-[-0.04em] leading-[1.07] text-neutral-900 dark:text-neutral-50 mb-5 max-w-[680px]">
              Four services.<br /><span className="text-brand-500">Built to remove operational drag.</span>
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.14}>
            <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-[500px]">
              Every service is scoped, staffed with dedicated specialists, and measured against clear quality benchmarks.
            </p>
          </AnimateIn>
        </Container>
      </section>

      <div className="h-px bg-neutral-200 dark:bg-neutral-800" />

      {services.map((svc, idx) => (
        <div key={svc.id}>
          <Section bg={idx%2===1 ? 'gray' : 'white'} id={svc.id} size="lg">
            <Container>
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-14 items-start ${idx%2===1 ? 'lg:[direction:rtl]' : ''}`}>
                {/* Text */}
                <div className="lg:[direction:ltr]">
                  <AnimateIn>
                    <span className="inline-block text-xs font-[700] tracking-[0.12em] uppercase text-neutral-400 dark:text-neutral-600 bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 px-3 py-1 rounded-lg mb-4">{svc.num}</span>
                  </AnimateIn>
                  <AnimateIn delay={0.05}>
                    <span className="text-xs font-[700] tracking-[0.12em] uppercase text-brand-500 mb-3 block">{svc.subtitle}</span>
                  </AnimateIn>
                  <AnimateIn delay={0.1}>
                    <h2 className="text-3xl md:text-4xl font-[800] tracking-[-0.04em] text-neutral-900 dark:text-neutral-50 leading-[1.1] mb-3">{svc.title}</h2>
                  </AnimateIn>
                  <AnimateIn delay={0.14}>
                    <p className="text-base font-[650] text-brand-500 mb-4">{svc.benefitHeadline}</p>
                  </AnimateIn>
                  <AnimateIn delay={0.17}>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-6 max-w-[460px]">{svc.description}</p>
                  </AnimateIn>
                  <AnimateIn delay={0.2}>
                    <div className="flex flex-col gap-2.5 mb-6">
                      {svc.outcomes.map((o,j) => (
                        <div key={j} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-brand-500 flex items-center justify-center flex-shrink-0 mt-0.5"><Check size={10} className="text-white" strokeWidth={3}/></div>
                          <span className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">{o}</span>
                        </div>
                      ))}
                    </div>
                  </AnimateIn>
                  {svc.highlight && (
                    <AnimateIn delay={0.23}>
                      <div className="flex items-start gap-3 bg-brand-50 dark:bg-brand-500/10 border border-brand-200 dark:border-brand-500/25 border-l-[3px] border-l-brand-500 rounded-xl p-4 mb-6">
                        <CheckSquare size={14} className="text-brand-500 flex-shrink-0 mt-0.5"/>
                        <p className="text-sm font-[500] text-brand-700 dark:text-brand-400 leading-relaxed">{svc.highlight}</p>
                      </div>
                    </AnimateIn>
                  )}
                  <AnimateIn delay={0.25}>
                    <div className="flex flex-wrap gap-1.5 mb-7">
                      {svc.tags.map(t => (
                        <span key={t} className="text-xs font-[500] text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 px-3 py-1.5 rounded-full">{t}</span>
                      ))}
                    </div>
                  </AnimateIn>
                  <AnimateIn delay={0.27}>
                    <Button href="/contact#form" variant="primary" size="md" arrow>Get a quote</Button>
                  </AnimateIn>
                </div>

                {/* Card */}
                <AnimateIn delay={0.15} className="lg:[direction:ltr]">
                  <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300">
                    <div className="relative h-52 overflow-hidden">
                      <Image src={imgs[svc.id]} alt={svc.title} fill className="object-cover" sizes="(max-width:1024px) 100vw, 560px" loading="lazy"/>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"/>
                    </div>
                    <div className="flex items-center gap-3 px-5 py-4 bg-neutral-50 dark:bg-neutral-800/60 border-b border-neutral-200 dark:border-neutral-700">
                      <div className="w-11 h-11 rounded-xl bg-brand-50 dark:bg-brand-500/10 border border-brand-100 dark:border-brand-500/20 flex items-center justify-center text-brand-500 flex-shrink-0">{icons[svc.id]}</div>
                      <div>
                        <p className="text-sm font-[700] text-neutral-900 dark:text-neutral-100 tracking-[-0.015em]">{svc.title}</p>
                        <p className="text-xs font-[650] tracking-[0.06em] uppercase text-neutral-400">What we deliver</p>
                      </div>
                    </div>
                    <ul className="divide-y divide-neutral-100 dark:divide-neutral-800">
                      {svc.items.map(item => (
                        <li key={item} className="flex items-center gap-3 px-5 py-3 hover:bg-neutral-50 dark:hover:bg-neutral-800/40 hover:pl-6 transition-all duration-200">
                          <span aria-hidden className="w-1.5 h-1.5 rounded-full bg-brand-500 opacity-60 flex-shrink-0"/>
                          <span className="text-sm text-neutral-600 dark:text-neutral-400">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimateIn>
              </div>
            </Container>
          </Section>
          {idx < services.length-1 && <div className="h-px bg-neutral-200 dark:bg-neutral-800"/>}
        </div>
      ))}

      <div className="h-px bg-neutral-200 dark:bg-neutral-800"/>

      {/* Bottom CTA */}
      <Section bg="white" size="md">
        <Container>
          <AnimateIn>
            <div className="relative rounded-3xl bg-brand-500 overflow-hidden px-8 py-20 md:px-16">
              <div aria-hidden className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage:'linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)', backgroundSize:'44px 44px'}}/>
              <div aria-hidden className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/10 blur-3xl pointer-events-none"/>
              <div className="relative z-10 max-w-[480px]">
                <span className="text-xs font-[700] tracking-[0.12em] uppercase text-white/55 mb-4 block">Let&apos;s work together</span>
                <h2 className="text-3xl md:text-4xl font-[800] tracking-[-0.04em] text-white leading-[1.1] mb-4">Not sure which service fits your needs?</h2>
                <p className="text-white/70 leading-relaxed mb-8 max-w-[380px]">Tell us your bottleneck. We&apos;ll map it to the right solution and give you a concrete proposal — no commitment required.</p>
                <Button href="/contact#form" variant="white" size="lg" arrow>Talk to us</Button>
              </div>
            </div>
          </AnimateIn>
        </Container>
      </Section>
    </>
  )
}
