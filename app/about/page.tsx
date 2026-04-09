'use client'
import Link from 'next/link'
import Image from 'next/image'
import Section from '@/components/ui/Section'
import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import Button from '@/components/ui/Button'
import AnimateIn from '@/components/ui/AnimateIn'
import CountUp from '@/components/ui/CountUp'

const values = [
  { num:'01', title:'Accuracy First',   desc:'Every project reviewed at multiple levels. We never ship without meeting our 99% accuracy benchmark.' },
  { num:'02', title:'Client-Centric',   desc:'We plan solutions around your goals, timeline, and budget — not generic service packages.' },
  { num:'03', title:'Secure & Trusted', desc:'All data handled with the highest integrity. NDAs and confidentiality agreements available.' },
  { num:'04', title:'Always Available', desc:'24/7 operations mean your assignments progress even when your team is offline.' },
]
const info = [
  { k:'Headquarters', v:'India'                     },
  { k:'Founded',      v:'2014'                      },
  { k:'Email',        v:'bobby@etdatasolutions.com' },
  { k:'Phone',        v:'+1-302-357-9776'           },
  { k:'Domain',       v:'etdatasolutions.com'       },
]
const chips = [
  'RPO & Recruitment','Virtual Assistant','Data Entry','Excel Automation',
  'OCR / ICR','Manual QA','Web & App Testing','Accessibility Testing',
  'Snowflake','Databricks','Microsoft Fabric','Power BI','Tableau','ETL Pipelines',
]

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden py-20 md:py-28 bg-white dark:bg-[#0e0c0b]">
        <div aria-hidden className="absolute inset-0 opacity-[0.35] dark:opacity-[0.12]"
          style={{ backgroundImage:'linear-gradient(rgba(0,0,0,0.07) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,0.07) 1px,transparent 1px)', backgroundSize:'52px 52px', maskImage:'linear-gradient(to bottom,transparent,black 15%,black 85%,transparent)'}}/>
        <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_50%_0%,rgba(232,68,10,0.05),transparent_70%)]"/>
        <Container className="relative">
          <AnimateIn><span className="text-xs font-[700] tracking-[0.12em] uppercase text-brand-500 mb-3 block">About Us</span></AnimateIn>
          <AnimateIn delay={0.07}>
            <h1 className="text-4xl md:text-5xl lg:text-[3.6rem] font-[800] tracking-[-0.04em] leading-[1.07] text-neutral-900 dark:text-neutral-50 mb-5 max-w-[680px]">
              Built on accuracy.<br /><span className="text-brand-500">Driven by results.</span>
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.14}>
            <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-[500px]">
              ET Data Solutions is a professional back-office services provider based in India, serving clients globally since 2014.
            </p>
          </AnimateIn>
        </Container>
      </section>

      <div className="h-px bg-neutral-200 dark:bg-neutral-800"/>

      {/* Story */}
      <Section bg="white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <AnimateIn><span className="text-xs font-[700] tracking-[0.12em] uppercase text-brand-500 mb-3 block">Our Story</span></AnimateIn>
              <AnimateIn delay={0.07}><h2 className="text-3xl md:text-4xl font-[800] tracking-[-0.04em] text-neutral-900 dark:text-neutral-50 leading-[1.1] mb-6">Who we are</h2></AnimateIn>
              <AnimateIn delay={0.14} className="space-y-4 text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-8">
                <p>ET Data Solutions is the most cost-effective outsourcing alternative for any business needing help managing their data workflow. We handle any type or size of project — short or long term.</p>
                <p>Leveraging our India base, we provide world-class technical and business skills, global coverage, and affordable solutions. Our service bureau for time-critical data alleviates the need for onsite personnel, software, and hardware.</p>
                <p>Clients reduce costs, eliminate backlogs, and significantly improve data quality — freeing themselves to focus on core business growth.</p>
              </AnimateIn>
              <AnimateIn delay={0.2} className="flex flex-wrap gap-3">
                <Button href="/contact#form" variant="primary" size="md" arrow>Work with us</Button>
                <Button href="/services" variant="secondary" size="md">View services</Button>
              </AnimateIn>
            </div>

            {/* Stats card */}
            <AnimateIn delay={0.1}>
              <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300">
                <div className="flex items-center gap-2 px-4 py-3 bg-neutral-100 dark:bg-neutral-800 border-b border-neutral-200 dark:border-neutral-700">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]"/><div className="w-3 h-3 rounded-full bg-[#febc2e]"/><div className="w-3 h-3 rounded-full bg-[#28c840]"/>
                  <span className="ml-2 text-xs font-[700] tracking-[0.1em] uppercase text-neutral-400 dark:text-neutral-500">Company Overview</span>
                </div>
                <div className="grid grid-cols-2 gap-px bg-neutral-200 dark:bg-neutral-800 border-b border-neutral-200 dark:border-neutral-800">
                  {[{n:'10+',l:'Years active'},{n:'99%',l:'Accuracy rate'},{n:'4',l:'Service verticals'},{n:'24/7',l:'Availability'}].map(s => (
                    <div key={s.l} className="bg-neutral-50 dark:bg-neutral-900/80 px-5 py-4 hover:bg-white dark:hover:bg-neutral-900 transition-colors">
                      <div className="text-2xl font-[800] tracking-[-0.05em] text-brand-500 leading-none mb-1"><CountUp value={s.n}/></div>
                      <div className="text-xs font-[650] tracking-[0.07em] uppercase text-neutral-400">{s.l}</div>
                    </div>
                  ))}
                </div>
                {info.map((row,i) => (
                  <div key={row.k} className={`flex justify-between items-center px-5 py-3 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors ${i < info.length-1 ? 'border-b border-neutral-100 dark:border-neutral-800' : ''}`}>
                    <span className="text-xs text-neutral-400">{row.k}</span>
                    <span className="text-xs font-[650] text-neutral-800 dark:text-neutral-200">{row.v}</span>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </Container>
      </Section>

      <div className="h-px bg-neutral-200 dark:bg-neutral-800"/>

      {/* Office image */}
      <Section bg="gray" size="md">
        <Container>
          <AnimateIn>
            <div className="relative rounded-3xl overflow-hidden h-[300px] md:h-[380px]">
              <Image src="/office.jpg" alt="ET Data Solutions office" fill className="object-cover" sizes="(max-width:1200px) 100vw,1200px"/>
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"/>
              <div className="absolute inset-0 flex flex-col justify-center px-10 md:px-16 max-w-[480px]">
                <h3 className="text-2xl md:text-3xl font-[800] tracking-[-0.04em] text-white leading-[1.1] mb-3">India-based.<br />Globally trusted.</h3>
                <p className="text-white/65 text-sm leading-relaxed">Operating since 2014 with a dedicated team delivering precision outcomes for clients across the US, UK, Europe, and beyond.</p>
              </div>
            </div>
          </AnimateIn>
        </Container>
      </Section>

      <div className="h-px bg-neutral-200 dark:bg-neutral-800"/>

      {/* Values */}
      <Section bg="white">
        <Container>
          <SectionHeader eyebrow="Our Values" title="How we work" className="mb-12"/>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((v,i) => (
              <AnimateIn key={v.num} delay={i*0.08}>
                <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 hover:border-brand-300 dark:hover:border-brand-500/40 hover:-translate-y-1 hover:shadow-card-hover transition-all duration-250">
                  <span className="text-xs font-[700] tracking-[0.12em] uppercase text-brand-500 block mb-3">{v.num}</span>
                  <h3 className="text-sm font-[700] text-neutral-900 dark:text-neutral-100 mb-2">{v.title}</h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">{v.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </Container>
      </Section>

      <div className="h-px bg-neutral-200 dark:bg-neutral-800"/>

      {/* Chips */}
      <Section bg="gray" size="md">
        <Container>
          <SectionHeader eyebrow="Services" title="What we handle" className="mb-10"/>
          <AnimateIn delay={0.14} className="flex flex-wrap gap-2.5">
            {chips.map(c => (
              <span key={c} className="text-sm font-[500] text-neutral-600 dark:text-neutral-400 bg-white dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700 hover:border-brand-400 dark:hover:border-brand-500/50 hover:text-brand-500 hover:-translate-y-0.5 px-4 py-2 rounded-full transition-all duration-150 cursor-default">
                {c}
              </span>
            ))}
          </AnimateIn>
        </Container>
      </Section>

      <div className="h-px bg-neutral-200 dark:bg-neutral-800"/>

      {/* CTA */}
      <Section bg="white" size="md">
        <Container>
          <AnimateIn>
            <div className="relative rounded-3xl bg-brand-500 overflow-hidden px-8 py-16 md:px-16 text-center">
              <div aria-hidden className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage:'linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)', backgroundSize:'44px 44px'}}/>
              <div className="relative z-10 max-w-[480px] mx-auto">
                <h2 className="text-2xl md:text-3xl font-[800] tracking-[-0.04em] text-white leading-[1.1] mb-4">Ready to work together?</h2>
                <p className="text-white/70 mb-7 text-sm leading-relaxed">Free 30-min consultation. No commitment, no pressure. Just a straight answer on how we can help.</p>
                <Button href="/contact#form" variant="white" size="lg" arrow>Book a free consultation</Button>
              </div>
            </div>
          </AnimateIn>
        </Container>
      </Section>
    </>
  )
}
