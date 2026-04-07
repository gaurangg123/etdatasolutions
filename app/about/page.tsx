'use client'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import PageHeader from '@/components/ui/PageHeader'
import AnimateIn from '@/components/ui/AnimateIn'
import CountUp from '@/components/ui/CountUp'

const values = [
  { num: '01', title: 'Accuracy First',   desc: 'Every project reviewed at multiple levels. We never ship without meeting our 99% accuracy benchmark.' },
  { num: '02', title: 'Client-Centric',   desc: 'We plan solutions around your goals, timeline, and budget — not generic service packages.'            },
  { num: '03', title: 'Secure & Trusted', desc: 'All data handled with the highest integrity. NDAs and confidentiality agreements available.'          },
  { num: '04', title: 'Always Available', desc: '24/7 operations mean your assignments progress even when your team is offline.'                       },
]

const companyInfo = [
  { k: 'Headquarters', v: 'India'                     },
  { k: 'Founded',      v: '2014'                      },
  { k: 'Email',        v: 'bobby@etdatasolutions.com' },
  { k: 'Phone',        v: '+1-302-357-9776'           },
  { k: 'Domain',       v: 'etdatasolutions.com'       },
]

const chips = [
  'RPO & Recruitment','Virtual Assistant','Talent Sourcing','Data Entry','Excel Automation',
  'OCR / ICR','Data Conversion','Manual QA','Web & App Testing','Accessibility Testing',
  'Snowflake','Databricks','Microsoft Fabric','Power BI','Tableau','ETL Pipelines',
]

const statsGrid = [
  { n: '10+', l: 'Years active'      },
  { n: '99%', l: 'Accuracy rate'     },
  { n: '4',   l: 'Service verticals' },
  { n: '24/7',l: 'Availability'      },
]

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title={<>Built on accuracy.<br /><span className="text-brand-500">Driven by results.</span></>}
        subtitle="ET Data Solutions is a professional back-office data processing services provider based in India, serving clients globally since 2014."
      />

      <div className="h-px bg-neutral-200 dark:bg-neutral-800" />

      {/* Story + Stats */}
      <section className="py-24 bg-white dark:bg-[#0e0c0b]">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <AnimateIn><span className="text-[0.67rem] font-[700] tracking-[0.12em] uppercase text-brand-500 mb-3 block">Our Story</span></AnimateIn>
              <AnimateIn delay={0.07}><h2 className="text-3xl md:text-4xl font-[800] tracking-[-0.04em] text-neutral-900 dark:text-neutral-50 leading-[1.1] mb-6">Who we are</h2></AnimateIn>
              <AnimateIn delay={0.14} className="space-y-4 text-[0.93rem] text-neutral-500 dark:text-neutral-400 leading-relaxed mb-8">
                <p>ET Data Solutions is the most cost-effective and efficient outsourcing alternative for any business needing assistance managing their data workflow. We have the capabilities and resources to handle any type or size of project — short or long term.</p>
                <p>Leveraging our location in India, we provide world-class technical and business skills, global coverage, and affordable solutions. Our service bureau for time-critical and information-sensitive data alleviates the need for onsite data entry personnel, software, and hardware.</p>
                <p>Clients reduce costs, eliminate backlogs, and significantly improve data quality — freeing themselves to focus on core business growth.</p>
              </AnimateIn>
              <AnimateIn delay={0.2} className="flex flex-wrap gap-3">
                <Link href="/contact#form" className="inline-flex items-center gap-2 text-sm font-[600] text-white bg-brand-500 hover:bg-brand-600 px-5 py-2.5 rounded-xl transition-all duration-150 hover:-translate-y-px hover:shadow-[0_6px_20px_rgba(232,68,10,0.3)]">
                  Work with us <ArrowRight size={14} />
                </Link>
                <Link href="/services" className="inline-flex items-center gap-2 text-sm font-[500] text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700 hover:border-brand-400 dark:hover:border-brand-500 px-5 py-2.5 rounded-xl transition-all duration-150 hover:-translate-y-px">
                  View our services
                </Link>
              </AnimateIn>
            </div>

            {/* Stats card with CountUp */}
            <AnimateIn delay={0.1}>
              <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_16px_48px_rgba(0,0,0,0.55)] transition-shadow duration-300">
                {/* macOS window chrome */}
                <div className="flex items-center gap-2 px-4 py-3 bg-neutral-100 dark:bg-neutral-800 border-b border-neutral-200 dark:border-neutral-700">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                  <span className="ml-2 text-[0.62rem] font-[700] tracking-[0.1em] uppercase text-neutral-400 dark:text-neutral-500">Company Overview</span>
                </div>
                {/* Animated stats */}
                <div className="grid grid-cols-2 gap-px bg-neutral-200 dark:bg-neutral-800 border-b border-neutral-200 dark:border-neutral-800">
                  {statsGrid.map(s => (
                    <div key={s.l} className="bg-neutral-50 dark:bg-neutral-900/80 px-5 py-4 hover:bg-white dark:hover:bg-neutral-900 transition-colors">
                      <div className="text-[1.7rem] font-[800] tracking-[-0.05em] text-brand-500 leading-none mb-1">
                        <CountUp value={s.n} />
                      </div>
                      <div className="text-[0.61rem] font-[600] tracking-[0.08em] uppercase text-neutral-400 dark:text-neutral-500">{s.l}</div>
                    </div>
                  ))}
                </div>
                {/* Info rows */}
                {companyInfo.map((row, i) => (
                  <div key={row.k} className={`flex justify-between items-center px-5 py-3 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors ${i < companyInfo.length - 1 ? 'border-b border-neutral-100 dark:border-neutral-800' : ''}`}>
                    <span className="text-xs text-neutral-400 dark:text-neutral-500">{row.k}</span>
                    <span className="text-xs font-[600] text-neutral-800 dark:text-neutral-200">{row.v}</span>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      <div className="h-px bg-neutral-200 dark:bg-neutral-800" />

      {/* Office image banner */}
      <section className="py-24 bg-neutral-50 dark:bg-[#0a0908]">
        <div className="max-w-[1180px] mx-auto px-6">
          <AnimateIn>
            <div className="relative rounded-3xl overflow-hidden h-[300px] md:h-[380px]">
              <Image
                src="/office.jpg"
                alt="ET Data Solutions office"
                fill
                className="object-cover"
                sizes="(max-width: 1180px) 100vw, 1180px"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-center px-10 md:px-16 max-w-[500px]">
                <h3 className="text-2xl md:text-3xl font-[800] tracking-[-0.04em] text-white leading-[1.1] mb-3">
                  India-based.<br />Globally trusted.
                </h3>
                <p className="text-white/65 text-sm leading-relaxed">
                  Operating since 2014 with a dedicated team of specialists delivering precision outcomes for clients across the US, UK, Europe, and beyond.
                </p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      <div className="h-px bg-neutral-200 dark:bg-neutral-800" />

      {/* Values */}
      <section className="py-24 bg-white dark:bg-[#0e0c0b]">
        <div className="max-w-[1180px] mx-auto px-6">
          <AnimateIn><span className="text-[0.67rem] font-[700] tracking-[0.12em] uppercase text-brand-500 mb-3 block">Our Values</span></AnimateIn>
          <AnimateIn delay={0.07}><h2 className="text-3xl md:text-4xl font-[800] tracking-[-0.04em] text-neutral-900 dark:text-neutral-50 leading-[1.1] mb-12">How we work</h2></AnimateIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((v, i) => (
              <AnimateIn key={v.num} delay={i * 0.08}>
                <div className="group bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 hover:border-brand-300 dark:hover:border-brand-500/40 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-all duration-250">
                  <span className="text-[0.62rem] font-[700] tracking-[0.12em] uppercase text-brand-500 block mb-3">{v.num}</span>
                  <h3 className="text-sm font-[700] text-neutral-900 dark:text-neutral-100 mb-2 tracking-[-0.01em]">{v.title}</h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">{v.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <div className="h-px bg-neutral-200 dark:bg-neutral-800" />

      {/* Service chips */}
      <section className="py-24 bg-neutral-50 dark:bg-[#0a0908]">
        <div className="max-w-[1180px] mx-auto px-6">
          <AnimateIn><span className="text-[0.67rem] font-[700] tracking-[0.12em] uppercase text-brand-500 mb-3 block">Services</span></AnimateIn>
          <AnimateIn delay={0.07}><h2 className="text-3xl md:text-4xl font-[800] tracking-[-0.04em] text-neutral-900 dark:text-neutral-50 leading-[1.1] mb-10">What we handle</h2></AnimateIn>
          <AnimateIn delay={0.14} className="flex flex-wrap gap-2.5">
            {chips.map(chip => (
              <span key={chip} className="text-sm font-[500] text-neutral-600 dark:text-neutral-400 bg-white dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700 hover:border-brand-400 dark:hover:border-brand-500/50 hover:text-brand-500 hover:-translate-y-0.5 px-4 py-2 rounded-full transition-all duration-150 cursor-default">
                {chip}
              </span>
            ))}
          </AnimateIn>
        </div>
      </section>

      <div className="h-px bg-neutral-200 dark:bg-neutral-800" />

      {/* Bottom CTA */}
      <section className="py-24 bg-white dark:bg-[#0e0c0b]">
        <div className="max-w-[1180px] mx-auto px-6">
          <AnimateIn>
            <div className="relative rounded-3xl bg-brand-500 overflow-hidden px-10 py-16 md:px-16 text-center">
              <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage:'linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)', backgroundSize:'44px 44px' }} />
              <div className="relative z-10 max-w-[480px] mx-auto">
                <h2 className="text-2xl md:text-3xl font-[800] tracking-[-0.04em] text-white leading-[1.1] mb-4">Ready to work together?</h2>
                <p className="text-white/70 leading-relaxed mb-7 text-sm">Get a free consultation — no commitment, no pressure. Just a conversation about how we can help.</p>
                <Link href="/contact#form" className="inline-flex items-center gap-2 text-sm font-[600] text-brand-600 bg-white hover:bg-neutral-50 px-6 py-3 rounded-xl transition-all duration-150 hover:-translate-y-px hover:shadow-lg">
                  Book a free consultation <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  )
}
