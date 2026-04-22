'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Users, Database, CheckSquare, BarChart2, Check, ArrowRight } from 'lucide-react'
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
const images: Record<string, string> = {
  staffing: '/staffing.jpg',
  data:     '/data-analytics.jpg',
  qa:       '/qa-testing.jpg',
  dataeng:  '/data-engineering.jpg',
}

// Item 11: colored left border accent per service, different brand colors
const accents: Record<string, { bg: string; text: string; border: string; leftBorder: string; tagBg: string; tagText: string; tagBorder: string }> = {
  staffing: { bg:'bg-violet-50 dark:bg-violet-500/10', text:'text-violet-600 dark:text-violet-400', border:'border-violet-200 dark:border-violet-500/25', leftBorder:'border-l-violet-500', tagBg:'bg-violet-50 dark:bg-violet-500/10', tagText:'text-violet-600 dark:text-violet-500', tagBorder:'border-violet-200 dark:border-violet-500/20' },
  data:     { bg:'bg-sky-50 dark:bg-sky-500/10',      text:'text-sky-600 dark:text-sky-400',      border:'border-sky-200 dark:border-sky-500/25',      leftBorder:'border-l-sky-500',     tagBg:'bg-sky-50 dark:bg-sky-500/10',      tagText:'text-sky-600 dark:text-sky-500',      tagBorder:'border-sky-200 dark:border-sky-500/20'      },
  qa:       { bg:'bg-emerald-50 dark:bg-emerald-500/10', text:'text-emerald-600 dark:text-emerald-400', border:'border-emerald-200 dark:border-emerald-500/25', leftBorder:'border-l-emerald-500', tagBg:'bg-emerald-50 dark:bg-emerald-500/10', tagText:'text-emerald-600 dark:text-emerald-500', tagBorder:'border-emerald-200 dark:border-emerald-500/20' },
  dataeng:  { bg:'bg-amber-50 dark:bg-amber-500/10',  text:'text-amber-600 dark:text-amber-400',  border:'border-amber-200 dark:border-amber-500/25',  leftBorder:'border-l-amber-500',   tagBg:'bg-amber-50 dark:bg-amber-500/10',  tagText:'text-amber-600 dark:text-amber-500',  tagBorder:'border-amber-200 dark:border-amber-500/20'  },
}

const accentColors: Record<string, string> = {
  staffing: '#8b5cf6',
  data:     '#0ea5e9',
  qa:       '#10b981',
  dataeng:  '#f59e0b',
}

export default function Services() {
  return (
    <Section id="services" bg="white" label="Our services">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <SectionHeader
            eyebrow="What we handle"
            title={<>Four services.<br />Each one built to free your team.</>}
          />
          <AnimateIn delay={0.1}>
            <p className="text-[0.925rem] text-ink-500 dark:text-ink-400 max-w-[340px] leading-relaxed">
              Every service is scoped, staffed with specialists, and measured against clear quality benchmarks — not vague "activity reports."
            </p>
          </AnimateIn>
        </div>

        {/* Item 7: service cards single-column on mobile */}
        <div className="flex flex-col gap-5">
          {services.map((svc, i) => {
            const a = accents[svc.id]
            return (
              <AnimateIn key={svc.id} delay={i * 0.08}>
                {/* Item 11: colored left border accent + hover lift */}
                <div className={`group relative grid grid-cols-1 lg:grid-cols-[1fr_240px] border border-ink-200 dark:border-ink-800 border-l-4 ${a.leftBorder} rounded-3xl overflow-hidden bg-white dark:bg-ink-900 hover:border-ink-300 dark:hover:border-ink-700 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1.5`}>

                  {/* Top accent bar on hover */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] transition-all duration-500 scale-x-0 group-hover:scale-x-100 origin-left"
                    style={{ background: accentColors[svc.id] }} />

                  {/* ── Left — content ── */}
                  <div className="p-8 md:p-10">
                    <div className="flex items-start gap-4 mb-6">
                      {/* Icon with service-specific color */}
                      <div className={`w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0 ${a.bg} ${a.text} border ${a.border}`}>
                        {icons[svc.id]}
                      </div>
                      <div>
                        <span className="text-[0.7rem] font-[700] tracking-[0.1em] uppercase text-ink-400 dark:text-ink-600 block mb-1">
                          {svc.num} · {svc.subtitle}
                        </span>
                        <h3 className="text-xl md:text-2xl font-[800] tracking-[-0.03em] text-ink-900 dark:text-ink-100 leading-snug">
                          {svc.title}
                        </h3>
                      </div>
                    </div>

                    {/* Benefit headline */}
                    <p className="text-[0.925rem] font-[650] text-ink-700 dark:text-ink-300 mb-3 max-w-[500px] leading-snug">
                      {svc.benefitHeadline}
                    </p>

                    {/* Description */}
                    <p className="text-sm text-ink-500 dark:text-ink-400 leading-relaxed mb-6 max-w-[480px]">
                      {svc.description}
                    </p>

                    {/* Item 23: checkmark icons in colored circles instead of plain bullets */}
                    <div className="flex flex-col gap-2.5 mb-7">
                      {svc.outcomes.map((o, j) => (
                        <div key={j} className="flex items-start gap-3">
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${a.bg} ${a.text}`}>
                            <Check size={10} strokeWidth={3} />
                          </div>
                          <span className="text-sm text-ink-700 dark:text-ink-300 leading-relaxed">{o}</span>
                        </div>
                      ))}
                    </div>

                    {/* Highlight callout */}
                    {svc.highlight && (
                      <div className={`flex items-start gap-3 ${a.bg} border ${a.border} border-l-2 rounded-xl p-3.5 mb-6`}
                        style={{ borderLeftColor: accentColors[svc.id] }}>
                        <CheckSquare size={13} className={`${a.text} flex-shrink-0 mt-0.5`} />
                        <p className={`text-sm font-[500] ${a.text} leading-relaxed`}>{svc.highlight}</p>
                      </div>
                    )}

                    {/* Item 22: service tag pills with proper padding/color */}
                    <div className="flex flex-wrap gap-1.5 mb-7">
                      {svc.tags.slice(0,4).map(t => (
                        <span key={t} className={`text-xs font-[600] px-[14px] py-[6px] rounded-full border ${a.tagBg} ${a.tagText} ${a.tagBorder}`}>
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Item 3: secondary button here, not primary */}
                    <Button href={`#services`} variant="secondary" size="md" arrow>
                      See full details
                    </Button>
                  </div>

                  {/* ── Right — image + best for ── */}
                  <div className="flex flex-col border-t lg:border-t-0 lg:border-l border-ink-100 dark:border-ink-800 bg-ink-50/50 dark:bg-ink-950/40">
                    {/* Item 11: fixed aspect ratio with object-fit: cover */}
                    <div className="relative h-44 overflow-hidden flex-shrink-0">
                      <Image
                        src={images[svc.id]}
                        alt={svc.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                        sizes="(max-width: 1024px) 100vw, 240px"
                        loading={i === 0 ? 'eager' : 'lazy'}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                      <span className="absolute top-3 right-3 text-xs font-[700] text-white/60 tracking-[0.08em]">{svc.num}</span>
                    </div>
                    <div className="p-5 flex-1">
                      <p className="text-[0.67rem] font-[700] tracking-[0.1em] uppercase text-ink-400 dark:text-ink-500 mb-2">Best for</p>
                      <p className="text-xs text-ink-600 dark:text-ink-400 leading-relaxed">{svc.bestFor}</p>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            )
          })}
        </div>

        {/* Section CTA */}
        <AnimateIn delay={0.3} className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 bg-ink-50 dark:bg-ink-900/60 border border-ink-200 dark:border-ink-800 rounded-2xl">
          <div>
            <p className="text-sm font-[700] text-ink-900 dark:text-ink-100 mb-0.5">Not sure which service fits your situation?</p>
            <p className="text-sm text-ink-500 dark:text-ink-400">Tell us your bottleneck. We'll map it to the right solution, free.</p>
          </div>
          {/* Item 3: single primary CTA here */}
          <Button href="#contact" variant="primary" size="md" arrow className="flex-shrink-0 shine">
            Talk to us
          </Button>
        </AnimateIn>
      </Container>
    </Section>
  )
}
