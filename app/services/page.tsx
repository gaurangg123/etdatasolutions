'use client'
import Link from 'next/link'
import { ArrowRight, Users, Database, CheckSquare, BarChart2 } from 'lucide-react'
import PageHeader from '@/components/ui/PageHeader'
import AnimateIn from '@/components/ui/AnimateIn'
import { services } from '@/lib/services'

const icons: Record<string, React.ReactNode> = {
  staffing: <Users size={24} />,
  data:     <Database size={24} />,
  qa:       <CheckSquare size={24} />,
  dataeng:  <BarChart2 size={24} />,
}

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title={<>Four verticals.<br /><span className="text-brand-500">One partner.</span></>}
        subtitle="From talent acquisition to data lakehouses, from manual user testing to Excel automation — everything your operations need, delivered with precision."
      />

      <div className="h-px bg-neutral-200 dark:bg-neutral-800" />

      {services.map((svc, idx) => (
        <div key={svc.id}>
          <section
            id={svc.id}
            className={`py-24 ${idx % 2 === 1 ? 'bg-neutral-50 dark:bg-[#0a0908]' : 'bg-white dark:bg-[#0e0c0b]'}`}
          >
            <div className="max-w-[1180px] mx-auto px-6">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-start ${idx % 2 === 1 ? 'lg:[direction:rtl]' : ''}`}>
                {/* Text */}
                <div className="lg:[direction:ltr]">
                  <AnimateIn>
                    <span className="inline-block text-[0.62rem] font-[700] tracking-[0.12em] uppercase text-neutral-400 dark:text-neutral-600 bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 px-2.5 py-1 rounded mb-4">{svc.num}</span>
                  </AnimateIn>
                  <AnimateIn delay={0.05}><span className="text-[0.67rem] font-[700] tracking-[0.12em] uppercase text-brand-500 mb-3 block">{svc.subtitle}</span></AnimateIn>
                  <AnimateIn delay={0.1}><h2 className="text-3xl md:text-4xl font-[800] tracking-[-0.04em] text-neutral-900 dark:text-neutral-50 leading-[1.1] mb-5">{svc.title}</h2></AnimateIn>
                  <AnimateIn delay={0.15}><p className="text-[0.95rem] text-neutral-500 dark:text-neutral-400 leading-relaxed mb-5 max-w-[440px]">{svc.description}</p></AnimateIn>

                  {svc.highlight && (
                    <AnimateIn delay={0.18}>
                      <div className="flex items-start gap-3 bg-brand-50 dark:bg-brand-500/10 border border-brand-200 dark:border-brand-500/25 border-l-[3px] border-l-brand-500 rounded-xl p-4 mb-5">
                        <CheckSquare size={15} className="text-brand-500 flex-shrink-0 mt-0.5" />
                        <p className="text-sm font-[500] text-brand-700 dark:text-brand-400 leading-relaxed">{svc.highlight}</p>
                      </div>
                    </AnimateIn>
                  )}

                  <AnimateIn delay={0.2} className="flex flex-wrap gap-1.5 mb-7">
                    {svc.tags.map(t => (
                      <span key={t} className="text-[0.67rem] font-[500] text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 px-3 py-1.5 rounded-full">{t}</span>
                    ))}
                  </AnimateIn>

                  <AnimateIn delay={0.25}>
                    <Link href="/contact#form" className="inline-flex items-center gap-2 text-sm font-[600] text-white bg-brand-500 hover:bg-brand-600 px-5 py-2.5 rounded-xl transition-all duration-150 hover:-translate-y-px hover:shadow-[0_6px_20px_rgba(232,68,10,0.3)]">
                      Get a quote <ArrowRight size={14} />
                    </Link>
                  </AnimateIn>
                </div>

                {/* Card */}
                <AnimateIn delay={0.15} className="lg:[direction:ltr]">
                  <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.07)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_16px_48px_rgba(0,0,0,0.55)] transition-shadow duration-300">
                    <div className="flex items-center gap-3.5 px-5 py-4 bg-neutral-50 dark:bg-neutral-800/60 border-b border-neutral-200 dark:border-neutral-700">
                      <div className="w-12 h-12 rounded-xl bg-brand-50 dark:bg-brand-500/10 border border-brand-100 dark:border-brand-500/20 flex items-center justify-center text-brand-500 flex-shrink-0">
                        {icons[svc.id]}
                      </div>
                      <div>
                        <p className="text-sm font-[700] text-neutral-900 dark:text-neutral-100 tracking-[-0.015em]">{svc.title}</p>
                        <p className="text-[0.68rem] font-[600] tracking-[0.06em] uppercase text-neutral-400 dark:text-neutral-500">What we deliver</p>
                      </div>
                    </div>
                    <ul className="divide-y divide-neutral-100 dark:divide-neutral-800">
                      {svc.items.map(item => (
                        <li key={item} className="group flex items-center gap-3 px-5 py-3 hover:bg-neutral-50 dark:hover:bg-neutral-800/40 hover:pl-6 transition-all duration-200">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-500 opacity-60 flex-shrink-0" />
                          <span className="text-sm text-neutral-600 dark:text-neutral-400">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimateIn>
              </div>
            </div>
          </section>
          {idx < services.length - 1 && <div className="h-px bg-neutral-200 dark:bg-neutral-800" />}
        </div>
      ))}

      <div className="h-px bg-neutral-200 dark:bg-neutral-800" />

      {/* Bottom CTA */}
      <section className="py-24 bg-white dark:bg-[#0e0c0b]">
        <div className="max-w-[1180px] mx-auto px-6">
          <AnimateIn>
            <div className="relative rounded-3xl bg-brand-500 overflow-hidden px-10 py-20 md:px-16">
              <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage:'linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)', backgroundSize:'44px 44px' }} />
              <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/10 blur-3xl pointer-events-none" />
              <div className="relative z-10 max-w-[480px]">
                <span className="text-[0.67rem] font-[700] tracking-[0.12em] uppercase text-white/55 mb-4 block">Let&apos;s work together</span>
                <h2 className="text-3xl md:text-[2.4rem] font-[800] tracking-[-0.04em] text-white leading-[1.1] mb-4">Not sure which service<br />fits your needs?</h2>
                <p className="text-white/70 leading-relaxed mb-8 max-w-[380px]">We&apos;ll assess your requirements and recommend the right solution — no commitment required.</p>
                <Link href="/contact#form" className="inline-flex items-center gap-2 text-sm font-[600] text-brand-600 bg-white hover:bg-neutral-50 px-6 py-3 rounded-xl transition-all duration-150 hover:-translate-y-px hover:shadow-lg">
                  Talk to us <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  )
}
