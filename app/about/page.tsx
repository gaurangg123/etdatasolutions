'use client'
import Image from 'next/image'
import Section from '@/components/ui/Section'
import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import Button from '@/components/ui/Button'
import AnimateIn from '@/components/ui/AnimateIn'
import CountUp from '@/components/ui/CountUp'
import { Target, Handshake, Lock, Zap } from 'lucide-react'

// Item 17: clean SVG icons replacing raw emojis
const values = [
  { num:'01', title:'Accuracy First',   icon: Target,     iconBg:'bg-brand-50 dark:bg-brand-500/10',     iconText:'text-brand-500',        iconBorder:'border-brand-100 dark:border-brand-500/20',     desc:'Multi-level QC on every project. We never ship without hitting our 99% accuracy benchmark.' },
  { num:'02', title:'Client-Centric',   icon: Handshake,  iconBg:'bg-violet-50 dark:bg-violet-500/10',   iconText:'text-violet-600 dark:text-violet-400',  iconBorder:'border-violet-100 dark:border-violet-500/20',   desc:'We plan solutions around your goals, timeline, and budget — not generic service packages.' },
  { num:'03', title:'Secure & Trusted', icon: Lock,       iconBg:'bg-sky-50 dark:bg-sky-500/10',         iconText:'text-sky-600 dark:text-sky-400',         iconBorder:'border-sky-100 dark:border-sky-500/20',         desc:'All data handled with the highest integrity. NDAs and confidentiality agreements on every engagement.' },
  { num:'04', title:'Always Available', icon: Zap,        iconBg:'bg-emerald-50 dark:bg-emerald-500/10', iconText:'text-emerald-600 dark:text-emerald-400', iconBorder:'border-emerald-100 dark:border-emerald-500/20', desc:'24/7 operations mean your work progresses even while your team is offline.' },
]

// Item 18: info block styled as card with dividers
const info = [
  { k:'Headquarters', v:'India'                     },
  { k:'Founded',      v:'2014'                      },
  { k:'Email',        v:'bobby@etdatasolutions.com', href:'mailto:bobby@etdatasolutions.com' },
  { k:'Phone (US)',   v:'+1-302-357-9776',           href:'tel:+13023579776' },
  { k:'Domain',       v:'etdatasolutions.com',       href:'https://etdatasolutions.com' },
]

// Item 20: capability chips grouped by color per service vertical
const chipGroups = [
  {
    color: 'bg-violet-50 dark:bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-200 dark:border-violet-500/20',
    chips: ['RPO & Recruitment', 'Virtual Assistant', 'HR Outsourcing', 'Talent Sourcing'],
  },
  {
    color: 'bg-sky-50 dark:bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-200 dark:border-sky-500/20',
    chips: ['Data Entry', 'Excel Automation', 'OCR / ICR', 'Document Processing'],
  },
  {
    color: 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/20',
    chips: ['Manual QA', 'Web & App Testing', 'Accessibility Testing', 'Regression Testing'],
  },
  {
    color: 'bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-500/20',
    chips: ['Snowflake', 'Databricks', 'Microsoft Fabric', 'Power BI', 'Tableau', 'ETL Pipelines'],
  },
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
          {/* Item 5: H1 at proper scale */}
          <AnimateIn delay={0.07}>
            <h1 className="text-[2.8rem] md:text-[3.6rem] lg:text-[4.2rem] font-[800] tracking-[-0.045em] leading-[1.05] text-ink-900 dark:text-ink-50 mb-5 max-w-[680px] text-balance">
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

            {/* Item 18: Company Overview card with divider rows, small-caps labels, semibold values */}
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
                {/* Info rows — item 18: label in muted small caps, value semibold */}
                {info.map((row, i) => (
                  <div key={row.k} className={`flex justify-between items-center px-5 py-3.5 hover:bg-ink-50 dark:hover:bg-ink-800/40 transition-colors ${i < info.length-1 ? 'border-b border-ink-100 dark:border-ink-800' : ''}`}>
                    <span className="text-[0.65rem] font-[700] tracking-[0.1em] uppercase text-ink-400 dark:text-ink-500">{row.k}</span>
                    {'href' in row && row.href
                      ? <a href={row.href} className="text-xs font-[650] text-brand-500 hover:text-brand-600 transition-colors">{row.v}</a>
                      : <span className="text-xs font-[650] text-ink-800 dark:text-ink-200">{row.v}</span>
                    }
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </Container>
      </Section>

      <Divider />

      {/* ── Office Banner — item 19: rounded corners, drop shadow, badge overlay ── */}
      <Section bg="gray" size="md">
        <Container>
          <AnimateIn>
            {/* Item 19: rounded corners + drop shadow */}
            <div className="relative rounded-3xl overflow-hidden h-[280px] md:h-[380px] shadow-card-hover">
              <Image src="/office.jpg" alt="ET Data Solutions office" fill className="object-cover" sizes="(max-width:1200px) 100vw,1200px" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-center px-10 md:px-16 max-w-[440px]">
                <h3 className="text-2xl md:text-3xl font-[800] tracking-[-0.04em] text-white leading-[1.1] mb-3">
                  India-based.<br />Globally trusted.
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Delivering precision outcomes for clients across the US, UK, Canada, Europe, and beyond since 2014.
                </p>
              </div>
              {/* Item 19: decorative badge overlay at bottom-left */}
              <div className="absolute bottom-4 left-4 md:bottom-6 md:left-10">
                <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/25 rounded-full px-4 py-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                  <span className="text-xs font-[700] text-white tracking-[0.06em]">Est. 2014 · India-based</span>
                </div>
              </div>
            </div>
          </AnimateIn>
        </Container>
      </Section>

      <Divider />

      {/* ── Values — item 17: clean SVG icons in styled containers ── */}
      <Section bg="white">
        <Container>
          <SectionHeader eyebrow="Our Values" title="How we work" className="mb-12" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((v, i) => (
              <AnimateIn key={v.num} delay={i * 0.08}>
                <div className="group bg-white dark:bg-ink-900 border border-ink-200 dark:border-ink-800 rounded-2xl p-6 hover:border-brand-300 dark:hover:border-brand-500/40 hover:-translate-y-1 hover:shadow-card-hover transition-all duration-250">
                  {/* Item 17: icon in rounded square with light brand-color bg */}
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 border ${v.iconBg} ${v.iconText} ${v.iconBorder}`}>
                    <v.icon size={18} />
                  </div>
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

      {/* ── Service chips — item 20: pill badges grouped by color per vertical ── */}
      <Section bg="gray" size="md">
        <Container>
          <SectionHeader eyebrow="Capabilities" title="Everything we handle" className="mb-10" />
          <AnimateIn delay={0.08}>
            <div className="flex flex-col gap-4">
              {chipGroups.map((group, gi) => (
                <div key={gi} className="flex flex-wrap gap-2">
                  {group.chips.map(c => (
                    <span
                      key={c}
                      className={`text-sm font-[550] border px-4 py-2 rounded-full transition-all duration-150 cursor-default hover:-translate-y-0.5 hover:shadow-sm ${group.color}`}
                    >
                      {c}
                    </span>
                  ))}
                </div>
              ))}
            </div>
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
