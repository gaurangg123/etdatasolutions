import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Check } from 'lucide-react'
import PageHero from '@/components/shared/PageHero'
import SectionHeading from '@/components/shared/SectionHeading'
import CtaBanner from '@/components/shared/CtaBanner'
import Pricing from '@/components/sections/Pricing'
import Container from '@/components/ui/Container'
import AnimateIn from '@/components/ui/AnimateIn'
import { services } from '@/lib/services'

export const metadata: Metadata = {
  title: 'Services — ET Data Solutions',
  description: 'Staffing & VA recruitment, data entry, manual QA testing, and data engineering. Scoped, staffed, and measured.',
}

const Divider = () => (
  <div aria-hidden style={{ height: '1px', background: 'linear-gradient(90deg,transparent,rgba(232,68,10,0.13) 25%,rgba(232,68,10,0.18) 50%,rgba(232,68,10,0.13) 75%,transparent)' }} />
)

const serviceImages: Record<string, string> = {
  staffing: '/staffing.jpg',
  data:     '/data-analytics.jpg',
  qa:       '/qa-testing.jpg',
  dataeng:  '/data-engineering.jpg',
}

const serviceAnchors: Record<string, string> = {
  staffing: 'staffing',
  data:     'data-entry',
  qa:       'qa-testing',
  dataeng:  'data-engineering',
}

const accents: Record<string, { bg: string; text: string; border: string; checkBg: string; tagBg: string; tagText: string; tagBorder: string; bestForBg: string }> = {
  staffing: {
    bg:'bg-violet-50 dark:bg-violet-500/10', text:'text-violet-600 dark:text-violet-400', border:'border-violet-200 dark:border-violet-500/25',
    checkBg:'bg-violet-50 dark:bg-violet-500/10 text-violet-600 dark:text-violet-400',
    tagBg:'bg-violet-50 dark:bg-violet-500/10', tagText:'text-violet-600 dark:text-violet-500', tagBorder:'border-violet-200 dark:border-violet-500/20',
    bestForBg:'bg-violet-50 dark:bg-violet-500/10 border-violet-200 dark:border-violet-500/20',
  },
  data: {
    bg:'bg-sky-50 dark:bg-sky-500/10', text:'text-sky-600 dark:text-sky-400', border:'border-sky-200 dark:border-sky-500/25',
    checkBg:'bg-sky-50 dark:bg-sky-500/10 text-sky-600 dark:text-sky-400',
    tagBg:'bg-sky-50 dark:bg-sky-500/10', tagText:'text-sky-600 dark:text-sky-500', tagBorder:'border-sky-200 dark:border-sky-500/20',
    bestForBg:'bg-sky-50 dark:bg-sky-500/10 border-sky-200 dark:border-sky-500/20',
  },
  qa: {
    bg:'bg-emerald-50 dark:bg-emerald-500/10', text:'text-emerald-600 dark:text-emerald-400', border:'border-emerald-200 dark:border-emerald-500/25',
    checkBg:'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
    tagBg:'bg-emerald-50 dark:bg-emerald-500/10', tagText:'text-emerald-600 dark:text-emerald-500', tagBorder:'border-emerald-200 dark:border-emerald-500/20',
    bestForBg:'bg-emerald-50 dark:bg-emerald-500/10 border-emerald-200 dark:border-emerald-500/20',
  },
  dataeng: {
    bg:'bg-amber-50 dark:bg-amber-500/10', text:'text-amber-600 dark:text-amber-400', border:'border-amber-200 dark:border-amber-500/25',
    checkBg:'bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400',
    tagBg:'bg-amber-50 dark:bg-amber-500/10', tagText:'text-amber-600 dark:text-amber-500', tagBorder:'border-amber-200 dark:border-amber-500/20',
    bestForBg:'bg-amber-50 dark:bg-amber-500/10 border-amber-200 dark:border-amber-500/20',
  },
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }]}
        title="Four services. Each one built to"
        titleHighlight="free your team."
        subtitle="Every service is scoped, staffed with specialists, and measured against clear quality benchmarks — not vague 'activity reports.'"
      />

      <Divider />

      {/* SERVICE DETAIL SECTIONS */}
      {services.map((svc, i) => {
        const a = accents[svc.id]
        const isEven = i % 2 === 1
        const anchor = serviceAnchors[svc.id]

        return (
          <section key={svc.id} id={anchor} className={`py-16 md:py-24 ${isEven ? 'bg-ink-50 dark:bg-[#0a0908]' : 'bg-white dark:bg-ink-950'}`}>
            <Container>
              <AnimateIn>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Content */}
                  <div className={isEven ? 'lg:order-2' : ''}>
                    <span className="text-[0.7rem] font-[700] tracking-[0.1em] uppercase text-ink-400 dark:text-ink-600 block mb-2">
                      {svc.num} · {svc.subtitle}
                    </span>
                    <h2 className="text-[1.8rem] md:text-[2.2rem] font-[800] tracking-[-0.04em] text-ink-900 dark:text-ink-50 leading-[1.08] mb-4">{svc.title}</h2>
                    <p className={`text-[0.925rem] font-[650] mb-3 leading-snug ${a.text}`}>{svc.benefitHeadline}</p>
                    <p className="text-sm text-ink-500 dark:text-ink-400 leading-relaxed mb-6">{svc.description}</p>

                    <div className="flex flex-col gap-3 mb-6">
                      {svc.outcomes.map((o, j) => (
                        <div key={j} className="flex items-start gap-3">
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${a.checkBg}`}>
                            <Check size={10} strokeWidth={3} />
                          </div>
                          <span className="text-sm text-ink-700 dark:text-ink-300 leading-relaxed">{o}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {svc.tags.slice(0, 4).map(t => (
                        <span key={t} className={`text-xs font-[600] px-[14px] py-[6px] rounded-full border ${a.tagBg} ${a.tagText} ${a.tagBorder}`}>{t}</span>
                      ))}
                    </div>

                    <div className={`flex items-start gap-3 border rounded-xl p-4 mb-6 ${a.bestForBg}`}>
                      <div>
                        <p className={`text-[0.7rem] font-[750] tracking-[0.1em] uppercase mb-1 ${a.text}`}>Best for</p>
                        <p className={`text-sm leading-relaxed ${a.text}`}>{svc.bestFor}</p>
                      </div>
                    </div>

                    <Link href="/contact"
                      className="inline-flex items-center gap-2 text-sm font-[700] text-white bg-brand-500 hover:bg-brand-600 px-6 py-3 rounded-xl transition-all duration-200 hover:-translate-y-px hover:shadow-brand shine">
                      Get a free quote →
                    </Link>
                  </div>

                  {/* Image */}
                  <AnimateIn delay={0.15} className={isEven ? 'lg:order-1' : ''}>
                    <div className="relative rounded-2xl overflow-hidden h-[300px] md:h-[380px] shadow-card-hover">
                      <Image src={serviceImages[svc.id]} alt={svc.title} fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    </div>
                  </AnimateIn>
                </div>
              </AnimateIn>
            </Container>
          </section>
        )
      })}

      <Divider />

      {/* PRICING */}
      <Pricing />

      <Divider />

      <CtaBanner
        headline="Not sure which service fits?"
        primaryBtn={{ label: 'Talk to us', href: '/contact' }}
      />
    </>
  )
}
