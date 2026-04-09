'use client'
import Image from 'next/image'
import { Users, Database, CheckSquare, BarChart2, Check } from 'lucide-react'
import Section from '@/components/ui/Section'
import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import AnimateIn from '@/components/ui/AnimateIn'
import { services } from '@/lib/services'

const icons: Record<string, React.ReactNode> = {
  staffing: <Users size={20} />,
  data:     <Database size={20} />,
  qa:       <CheckSquare size={20} />,
  dataeng:  <BarChart2 size={20} />,
}
const images: Record<string, string> = {
  staffing: '/staffing.jpg',
  data:     '/data-analytics.jpg',
  qa:       '/qa-testing.jpg',
  dataeng:  '/data-engineering.jpg',
}

export default function Services() {
  return (
    <Section bg="white">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <SectionHeader
            eyebrow="What we do"
            title={<>Four services. Every one built<br className="hidden sm:block" /> to give your team their time back.</>}
          />
          <AnimateIn delay={0.1}>
            <p className="text-base text-neutral-500 dark:text-neutral-400 max-w-[340px] leading-relaxed">
              Scoped, staffed, and QC&apos;d — so you get measurable results, not just activity reports.
            </p>
          </AnimateIn>
        </div>

        <div className="flex flex-col gap-5">
          {services.map((svc, i) => (
            <AnimateIn key={svc.id} delay={i * 0.07}>
              <div className="group grid grid-cols-1 lg:grid-cols-[1fr_260px] border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden bg-white dark:bg-[#111] hover:border-brand-300 dark:hover:border-brand-500/40 hover:shadow-card-hover transition-all duration-300">
                {/* Content */}
                <div className="p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-brand-50 dark:bg-brand-500/10 border border-brand-100 dark:border-brand-500/20 flex items-center justify-center text-brand-500 flex-shrink-0">
                      {icons[svc.id]}
                    </div>
                    <span className="text-xs font-[700] tracking-[0.1em] uppercase text-neutral-400 dark:text-neutral-600">
                      {svc.num} · {svc.subtitle}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-[800] tracking-[-0.03em] text-neutral-900 dark:text-neutral-100 mb-2">
                    {svc.title}
                  </h3>
                  <p className="text-base font-[650] text-brand-500 mb-4">{svc.benefitHeadline}</p>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-6 max-w-[500px]">
                    {svc.description}
                  </p>

                  <div className="flex flex-col gap-2.5 mb-7">
                    {svc.outcomes.map((o, j) => (
                      <div key={j} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-brand-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check size={10} className="text-white" strokeWidth={3} />
                        </div>
                        <span className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">{o}</span>
                      </div>
                    ))}
                  </div>

                  {svc.highlight && (
                    <div className="flex items-start gap-3 bg-brand-50 dark:bg-brand-500/10 border border-brand-200 dark:border-brand-500/25 border-l-[3px] border-l-brand-500 rounded-xl p-4 mb-6">
                      <CheckSquare size={14} className="text-brand-500 flex-shrink-0 mt-0.5" />
                      <p className="text-sm font-[500] text-brand-700 dark:text-brand-400 leading-relaxed">{svc.highlight}</p>
                    </div>
                  )}

                  <Button href={`/services#${svc.id}`} variant="primary" size="md" arrow>
                    See full details
                  </Button>
                </div>

                {/* Right panel — image + best for */}
                <div className="flex flex-col lg:border-l border-t lg:border-t-0 border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50">
                  <div className="relative h-44 lg:h-52 overflow-hidden flex-shrink-0">
                    <Image
                      src={images[svc.id]}
                      alt={svc.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 260px"
                      loading={i === 0 ? 'eager' : 'lazy'}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
                  </div>
                  <div className="p-5 flex-1">
                    <p className="text-xs font-[700] tracking-[0.08em] uppercase text-neutral-400 dark:text-neutral-500 mb-2">Best for</p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{svc.bestFor}</p>
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </Container>
    </Section>
  )
}
