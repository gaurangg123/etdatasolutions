'use client'
import Image from 'next/image'
import Section from '@/components/ui/Section'
import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import Button from '@/components/ui/Button'
import AnimateIn from '@/components/ui/AnimateIn'
import CountUp from '@/components/ui/CountUp'

const values = [
  { num:'01', title:'Accuracy First',   icon:'🎯', desc:'Multi-level QC on every project. We never ship without hitting our 99% accuracy benchmark.' },
  { num:'02', title:'Client-Centric',   icon:'🤝', desc:'We plan solutions around your goals, timeline, and budget — not generic service packages.' },
  { num:'03', title:'Secure & Trusted', icon:'🔐', desc:'All data handled with the highest integrity. NDAs and confidentiality agreements on every engagement.' },
  { num:'04', title:'Always Available', icon:'⚡', desc:'24/7 operations mean your work progresses even while your team is offline.' },
]
const info = [
  { k:'Headquarters', v:'India'                     },
  { k:'Founded',      v:'2014'                      },
  { k:'Email',        v:'bobby@etdatasolutions.com' },
  { k:'Phone (US)',   v:'+1-302-357-9776'           },
  { k:'Domain',       v:'etdatasolutions.com'       },
]
const chips = [
  'RPO & Recruitment','Virtual Assistant','Data Entry','Excel Automation',
  'OCR / ICR','Manual QA','Web & App Testing','Accessibility Testing',
  'Snowflake','Databricks','Microsoft Fabric','Power BI','Tableau','ETL Pipelines',
]
const Divider = () => <div className="h-px bg-ink-200 dark:bg-ink-800" />

export default function AboutPage() {
  return (
    <>
      {/* ── Page Header ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-20 md:py-28 bg-white dark:bg-ink-950">
        <div aria-hidden className="absolute inset-0 opacity-[0.35] dark:opacity-[0.12]"
          style={{ backgroundImage:'radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)', backgroundSize:'28px 28px', maskImage:'linear-gradient(to bottom,transparent,black 15%,black 85%,transparent)' }} />
        <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_50%_0%,rgba(232,68,10,0.05),transparent_70%)]" />
        <Container className="relative">
          <AnimateIn>
            <span className="inline-block text-[0.7rem] font-[750] tracking-[0.14em] uppercase text-brand-500 mb-3">About Us</span>
          </AnimateIn>
          <AnimateIn delay={0.07}>
            <h1 className="text-4xl md:text-5xl lg:text-[3.6rem] font-[800] tracking-[-0.045em] leading-[1.06] text-ink-900 dark:text-ink-50 mb-5 max-w-[680px] text-balance">
              Built on accuracy.<br />
              <span className="text-gradient">Driven by results.</span>
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.14}>
            <p className="text-lg text-ink-500 dark:text-ink-400 leading-relaxed max-w-[500px]">
              ET Data Solutions is a professional back-office services provider based in India, serving clients globally since 2014.
            </p>
          </AnimateIn>
        </Container>
      </section>

      <Divider />

      {/* ── Story + Stats card ──────────────────────────────────── */}
      <Section bg="white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <AnimateIn>
                <span className="inline-block text-[0.7rem] font-[750] tracking-[0.14em] uppercase text-brand-500 mb-3">Our Story</span>
              </AnimateIn>
              <AnimateIn delay={0.07}>
                <h2 className="text-3xl md:text-4xl font-[800] tracking-[-0.04em] text-ink-900 dark:text-ink-50 leading-[1.08] mb-6">Who we are</h2>
              </AnimateIn>
              <AnimateIn delay={0.14}>
                <div className="space-y-4 text-[0.925rem] text-ink-500 dark:text-ink-400 leading-relaxed mb-8">
                  <p>ET Data Solutions is the most cost-effective outsourcing alternative for any business needing help managing their operational workflow. We handle any type or size of project — short or long term.</p>
                  <p>Leveraging our India base, we provide world-class technical and business skills, global coverage, and affordable solutions. Our service bureau for time-critical work alleviates the need for onsite personnel, software, and hardware.</p>
                  <p>Clients reduce costs, eliminate backlogs, and significantly improve output quality — freeing themselves to focus on core business growth.</p>
                </div>
              </AnimateIn>
              <AnimateIn delay={0.2} className="flex flex-wrap gap-3">
                <Button href="/contact#form" variant="primary" size="md" arrow className="shine">Work with us</Button>
                <Button href="/services" variant="secondary" size="md">View services</Button>
              </AnimateIn>
            </div>

            {/* Stats card — macOS window style */}
            <AnimateIn delay={0.12}>
              <div className="bg-white dark:bg-ink-900 border border-ink-200 dark:border-ink-800 rounded-3xl overflow-hidden shadow-card-hover">
                {/* Window chrome */}
                <div className="flex items-center gap-2 px-5 py-3.5 bg-ink-50 dark:bg-ink-800/80 border-b border-ink-200 dark:border-ink-700">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                    <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                  </div>
                  <span className="ml-2 text-xs font-[650] text-ink-400 dark:text-ink-500">Company Overview</span>
                </div>
                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-px bg-ink-200 dark:bg-ink-800 border-b border-ink-200 dark:border-ink-800">
                  {[{n:'10+',l:'Years active'},{n:'99%',l:'Accuracy rate'},{n:'4',l:'Service verticals'},{n:'24/7',l:'Availability'}].map(s => (
                    <div key={s.l} className="bg-white dark:bg-ink-900 px-5 py-4 hover:bg-ink-50 dark:hover:bg-ink-800/80 transition-colors">
                      <div className="text-2xl font-[800] tracking-[-0.05em] text-brand-500 leading-none mb-1">
                        <CountUp value={s.n} />
                      </div>
                      <div className="text-[0.68rem] font-[700] tracking-[0.07em] uppercase text-ink-400 dark:text-ink-500">{s.l}</div>
                    </div>
                  ))}
                </div>
                {/* Info rows */}
                {info.map((row, i) => (
                  <div key={row.k} className={`flex justify-between items-center px-5 py-3 hover:bg-ink-50 dark:hover:bg-ink-800/40 transition-colors ${i < info.length-1 ? 'border-b border-ink-100 dark:border-ink-800' : ''}`}>
                    <span className="text-xs text-ink-400 dark:text-ink-500">{row.k}</span>
                    <span className="text-xs font-[650] text-ink-800 dark:text-ink-200">{row.v}</span>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </Container>
      </Section>

      <Divider />

      {/* ── Office Banner ───────────────────────────────────────── */}
      <Section bg="gray" size="md">
        <Container>
          <AnimateIn>
            <div className="relative rounded-3xl overflow-hidden h-[280px] md:h-[360px]">
              <Image src="/office.jpg" alt="ET Data Solutions office" fill className="object-cover" sizes="(max-width:1200px) 100vw,1200px" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-center px-10 md:px-16 max-w-[440px]">
                <h3 className="text-2xl md:text-3xl font-[800] tracking-[-0.04em] text-white leading-[1.1] mb-3">
                  India-based.<br />Globally trusted.
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Delivering precision outcomes for clients across the US, UK, Canada, Europe, and beyond since 2014.
                </p>
              </div>
            </div>
          </AnimateIn>
        </Container>
      </Section>

      <Divider />

      {/* ── Values ──────────────────────────────────────────────── */}
      <Section bg="white">
        <Container>
          <SectionHeader eyebrow="Our Values" title="How we work" className="mb-12" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((v, i) => (
              <AnimateIn key={v.num} delay={i * 0.08}>
                <div className="group bg-white dark:bg-ink-900 border border-ink-200 dark:border-ink-800 rounded-2xl p-6 hover:border-brand-300 dark:hover:border-brand-500/40 hover:-translate-y-1 hover:shadow-card-hover transition-all duration-250">
                  <div className="text-2xl mb-3">{v.icon}</div>
                  <span className="text-[0.68rem] font-[750] tracking-[0.12em] uppercase text-brand-500 block mb-2">{v.num}</span>
                  <h3 className="text-sm font-[750] text-ink-900 dark:text-ink-100 mb-2">{v.title}</h3>
                  <p className="text-sm text-ink-500 dark:text-ink-400 leading-relaxed">{v.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </Container>
      </Section>

      <Divider />

      {/* ── Service chips ───────────────────────────────────────── */}
      <Section bg="gray" size="md">
        <Container>
          <SectionHeader eyebrow="Capabilities" title="Everything we handle" className="mb-10" />
          <AnimateIn delay={0.14} className="flex flex-wrap gap-2">
            {chips.map(c => (
              <span
                key={c}
                className="text-sm font-[500] text-ink-600 dark:text-ink-400 bg-white dark:bg-ink-800/60 border border-ink-200 dark:border-ink-700 hover:border-brand-400 dark:hover:border-brand-500/60 hover:text-brand-500 hover:-translate-y-0.5 px-4 py-2 rounded-full transition-all duration-150 cursor-default"
              >
                {c}
              </span>
            ))}
          </AnimateIn>
        </Container>
      </Section>

      <Divider />

      {/* ── CTA ─────────────────────────────────────────────────── */}
      <Section bg="white" size="md">
        <Container>
          <AnimateIn>
            <div className="relative rounded-[28px] overflow-hidden">
              <div className="absolute inset-0 bg-ink-900 dark:bg-ink-950" />
              <div aria-hidden className="absolute -top-32 -right-16 w-[380px] h-[380px] rounded-full bg-brand-500/20 blur-[70px]" />
              <div aria-hidden className="absolute inset-0 opacity-[0.04]"
                style={{ backgroundImage:'linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)', backgroundSize:'44px 44px' }} />
              <div className="relative z-10 px-8 py-16 md:px-16 text-center max-w-[480px] mx-auto">
                <h2 className="text-2xl md:text-3xl font-[800] tracking-[-0.04em] text-white leading-[1.1] mb-4">
                  Ready to work together?
                </h2>
                <p className="text-white/60 mb-8 text-sm leading-relaxed">
                  Free 30-min consultation. No commitment, no pressure. A straight answer on how we can help.
                </p>
                <Button href="/contact#form" variant="white" size="lg" arrow className="shine">
                  Book a free consultation
                </Button>
              </div>
            </div>
          </AnimateIn>
        </Container>
      </Section>
    </>
  )
}
