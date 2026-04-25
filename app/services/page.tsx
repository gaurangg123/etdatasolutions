import Image from 'next/image'
import Link from 'next/link'
import PageHero from '@/components/shared/PageHero'
import CtaBanner from '@/components/shared/CtaBanner'
import Container from '@/components/ui/Container'
import AnimateIn from '@/components/ui/AnimateIn'
import { services } from '@/lib/services'
import { Users, Database, CheckSquare, BarChart2, Check } from 'lucide-react'


const icons: Record<string, React.ReactNode> = {
  staffing: <Users size={22} />,
  data:     <Database size={22} />,
  qa:       <CheckSquare size={22} />,
  dataeng:  <BarChart2 size={22} />,
}
const imgs: Record<string, string> = {
  staffing: '/staffing.jpg',
  data:     '/data-analytics.jpg',
  qa:       '/qa-testing.jpg',
  dataeng:  '/data-engineering.jpg',
}
// Anchor IDs per spec
const anchors: Record<string, string> = {
  staffing: 'staffing',
  data:     'data-entry',
  qa:       'qa-testing',
  dataeng:  'data-engineering',
}
const accents: Record<string, { bg:string; text:string; border:string; tagBg:string; tagText:string; tagBorder:string; accentColor:string }> = {
  staffing: { bg:'bg-violet-50 dark:bg-violet-500/10', text:'text-violet-600 dark:text-violet-400', border:'border-violet-200 dark:border-violet-500/25', tagBg:'bg-violet-50 dark:bg-violet-500/10', tagText:'text-violet-600 dark:text-violet-500', tagBorder:'border-violet-200 dark:border-violet-500/20', accentColor:'#8b5cf6' },
  data:     { bg:'bg-sky-50 dark:bg-sky-500/10',      text:'text-sky-600 dark:text-sky-400',      border:'border-sky-200 dark:border-sky-500/25',      tagBg:'bg-sky-50 dark:bg-sky-500/10',      tagText:'text-sky-600 dark:text-sky-500',      tagBorder:'border-sky-200 dark:border-sky-500/20',      accentColor:'#0ea5e9' },
  qa:       { bg:'bg-emerald-50 dark:bg-emerald-500/10', text:'text-emerald-600 dark:text-emerald-400', border:'border-emerald-200 dark:border-emerald-500/25', tagBg:'bg-emerald-50 dark:bg-emerald-500/10', tagText:'text-emerald-600 dark:text-emerald-500', tagBorder:'border-emerald-200 dark:border-emerald-500/20', accentColor:'#10b981' },
  dataeng:  { bg:'bg-amber-50 dark:bg-amber-500/10',  text:'text-amber-600 dark:text-amber-400',  border:'border-amber-200 dark:border-amber-500/25',  tagBg:'bg-amber-50 dark:bg-amber-500/10',  tagText:'text-amber-600 dark:text-amber-500',  tagBorder:'border-amber-200 dark:border-amber-500/20',  accentColor:'#f59e0b' },
}


const Divider = () => <div className="h-px bg-ink-200 dark:bg-ink-800" />

export default function ServicesPage() {
  return (
    <>
      <PageHero
        breadcrumb={[{label:'Home',href:'/'},{label:'Services'}]}
        title={<>Four services.<br /><span className="text-gradient">Each one built to free your team.</span></>}
        subtitle="Every service is scoped, staffed with specialists, and measured against clear quality benchmarks — not vague 'activity reports.'"
      />

      {/* Quick jump links */}
      <div className="bg-white dark:bg-ink-950 border-b border-ink-200 dark:border-ink-800 py-3">
        <Container>
          <div className="flex flex-wrap gap-2">
            {services.map(svc => (
              <a key={svc.id} href={`#${anchors[svc.id]}`}
                className="text-xs font-[600] text-ink-600 dark:text-ink-400 bg-white dark:bg-ink-800 border border-ink-200 dark:border-ink-700 hover:border-brand-400 hover:text-brand-500 px-3 py-1.5 rounded-full transition-all">
                {svc.title}
              </a>
            ))}
          </div>
        </Container>
      </div>

      {/* ── Service Sections ── */}
      {services.map((svc, idx) => {
        const a = accents[svc.id]
        const isReversed = idx % 2 === 1
        return (
          <div key={svc.id}>
            <Divider />
            <section id={anchors[svc.id]} className={`py-16 md:py-22 ${isReversed ? 'bg-ink-50 dark:bg-[#0a0908]' : 'bg-white dark:bg-ink-950'}`}>
              <Container>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-start ${isReversed ? 'lg:grid-flow-dense' : ''}`}>

                  {/* Text column */}
                  <div className={isReversed ? 'lg:col-start-2' : ''}>
                    <AnimateIn>
                      <div className="flex items-center gap-3 mb-5">
                        <div className={`w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0 ${a.bg} ${a.text} border ${a.border}`}>{icons[svc.id]}</div>
                        <div>
                          <span className="text-[0.68rem] font-[750] tracking-[0.12em] uppercase text-ink-400 dark:text-ink-600 block">{svc.num}</span>
                          <span className="text-[0.7rem] font-[700] tracking-[0.1em] uppercase" style={{color:a.accentColor}}>{svc.subtitle}</span>
                        </div>
                      </div>
                    </AnimateIn>
                    <AnimateIn delay={0.08}><h2 className="text-3xl md:text-[2.2rem] font-[800] tracking-[-0.04em] text-ink-900 dark:text-ink-50 leading-[1.08] mb-3">{svc.title}</h2></AnimateIn>
                    <AnimateIn delay={0.12}><p className="text-[0.925rem] font-[650] text-ink-700 dark:text-ink-300 mb-4 leading-snug">{svc.benefitHeadline}</p></AnimateIn>
                    <AnimateIn delay={0.16}><p className="text-sm text-ink-500 dark:text-ink-400 leading-relaxed mb-6 max-w-[460px]">{svc.description}</p></AnimateIn>
                    <AnimateIn delay={0.2}>
                      <div className="flex flex-col gap-2.5 mb-6">
                        {svc.outcomes.map((o, j) => (
                          <div key={j} className="flex items-start gap-3">
                            <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${a.bg} ${a.text}`}><Check size={10} strokeWidth={3} /></div>
                            <span className="text-sm text-ink-700 dark:text-ink-300 leading-relaxed">{o}</span>
                          </div>
                        ))}
                      </div>
                    </AnimateIn>
                    {svc.highlight && (
                      <AnimateIn delay={0.23}>
                        <div className={`flex items-start gap-3 ${a.bg} border ${a.border} border-l-2 rounded-xl p-3.5 mb-6`} style={{borderLeftColor:a.accentColor}}>
                          <CheckSquare size={13} className={`${a.text} flex-shrink-0 mt-0.5`} />
                          <p className={`text-sm font-[500] ${a.text} leading-relaxed`}>{svc.highlight}</p>
                        </div>
                      </AnimateIn>
                    )}
                    {/* Best for */}
                    <AnimateIn delay={0.24}>
                      <div className={`${a.bg} border ${a.border} rounded-xl p-4 mb-6`}>
                        <p className="text-[0.68rem] font-[700] tracking-[0.1em] uppercase text-ink-400 dark:text-ink-500 mb-1.5">Best for</p>
                        <p className="text-sm text-ink-600 dark:text-ink-400 leading-relaxed">{svc.bestFor}</p>
                      </div>
                    </AnimateIn>
                    <AnimateIn delay={0.25}>
                      <div className="flex flex-wrap gap-1.5 mb-7">
                        {svc.tags.map(t => (
                          <span key={t} className={`text-[0.75rem] font-[500] px-[14px] py-[6px] rounded-full border ${a.tagBg} ${a.tagText} ${a.tagBorder}`}>{t}</span>
                        ))}
                      </div>
                    </AnimateIn>
                    <AnimateIn delay={0.28}>
                      <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-[700] text-white bg-brand-500 hover:bg-brand-600 px-5 py-2.5 rounded-xl transition-all hover:-translate-y-px hover:shadow-brand shine">
                        Get a free quote →
                      </Link>
                    </AnimateIn>
                  </div>

                  {/* Image + deliverables card */}
                  <AnimateIn delay={0.15} className={isReversed ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    <div className="relative bg-white dark:bg-ink-900 border border-ink-200 dark:border-ink-800 rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow">
                      <span aria-hidden className="absolute -bottom-4 -right-2 text-[9rem] font-[900] leading-none select-none pointer-events-none" style={{color:a.accentColor,opacity:0.06}}>{svc.num}</span>
                      <div className="relative h-52 overflow-hidden">
                        <Image src={imgs[svc.id]} alt={svc.title} fill className="object-cover" sizes="(max-width:1024px) 100vw,560px" loading="lazy" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                        <div className="absolute top-0 left-0 right-0 h-1" style={{background:a.accentColor}} />
                      </div>
                      <div className="flex items-center gap-3 px-5 py-4 bg-ink-50 dark:bg-ink-800/60 border-b border-ink-200 dark:border-ink-700">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${a.bg} ${a.text} border ${a.border}`}>{icons[svc.id]}</div>
                        <div><p className="text-sm font-[700] text-ink-900 dark:text-ink-100">{svc.title}</p><p className="text-[0.65rem] font-[650] tracking-[0.08em] uppercase text-ink-400 dark:text-ink-500">What we deliver</p></div>
                      </div>
                      <ul className="divide-y divide-ink-100 dark:divide-ink-800 relative z-10">
                        {svc.items.map(item => (
                          <li key={item} className="flex items-center gap-3 px-5 py-3 hover:bg-ink-50 dark:hover:bg-ink-800/40 hover:pl-6 transition-all">
                            <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${a.bg} ${a.text}`}><Check size={8} strokeWidth={3} /></div>
                            <span className="text-sm text-ink-600 dark:text-ink-400">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </AnimateIn>
                </div>
              </Container>
            </section>
          </div>
        )
      })}

      <Divider />
      <CtaBanner headline="Not sure which service fits your needs?" subtext="Tell us your bottleneck. We'll map it to the right service — no commitment required." primaryBtn={{label:'Talk to us',href:'/contact'}} showGuarantees={false} />
    </>
  )
}
