import Image from 'next/image'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import AnimateIn from '@/components/ui/AnimateIn'
import { services } from '@/lib/services'
import { Check, Users, Database, CheckSquare, BarChart2 } from 'lucide-react'

const imgs: Record<string,string> = { staffing:'/staffing.jpg', data:'/data-analytics.jpg', qa:'/qa-testing.jpg', dataeng:'/data-engineering.jpg' }
const anchors: Record<string,string> = { staffing:'staffing', data:'data-entry', qa:'qa-testing', dataeng:'data-engineering' }
const icons: Record<string,React.ReactNode> = { staffing:<Users size={20}/>, data:<Database size={20}/>, qa:<CheckSquare size={20}/>, dataeng:<BarChart2 size={20}/> }
const bestFor: Record<string,string> = {
  staffing:'Startups and SMBs scaling their team, companies with ongoing recruitment needs, and businesses replacing expensive agency hires.',
  data:'Finance, legal, healthcare, and logistics companies handling large volumes of invoices, records, or forms.',
  qa:'SaaS companies, app developers, and agencies shipping new features or releases who need human eyes on every build.',
  dataeng:'Mid-market and enterprise companies drowning in disconnected data who need a clean, reliable analytics foundation.',
}
const accents: Record<string,{bg:string,text:string,border:string,leftBorder:string,tagBg:string,tagText:string,tagBorder:string,color:string}> = {
  staffing:{bg:'bg-violet-50 dark:bg-violet-500/10',text:'text-violet-600 dark:text-violet-400',border:'border-violet-200 dark:border-violet-500/25',leftBorder:'border-l-violet-500',tagBg:'bg-violet-50 dark:bg-violet-500/10',tagText:'text-violet-600 dark:text-violet-500',tagBorder:'border-violet-200 dark:border-violet-500/20',color:'#8b5cf6'},
  data:{bg:'bg-sky-50 dark:bg-sky-500/10',text:'text-sky-600 dark:text-sky-400',border:'border-sky-200 dark:border-sky-500/25',leftBorder:'border-l-sky-500',tagBg:'bg-sky-50 dark:bg-sky-500/10',tagText:'text-sky-600 dark:text-sky-500',tagBorder:'border-sky-200 dark:border-sky-500/20',color:'#0ea5e9'},
  qa:{bg:'bg-emerald-50 dark:bg-emerald-500/10',text:'text-emerald-600 dark:text-emerald-400',border:'border-emerald-200 dark:border-emerald-500/25',leftBorder:'border-l-emerald-500',tagBg:'bg-emerald-50 dark:bg-emerald-500/10',tagText:'text-emerald-600 dark:text-emerald-500',tagBorder:'border-emerald-200 dark:border-emerald-500/20',color:'#10b981'},
  dataeng:{bg:'bg-amber-50 dark:bg-amber-500/10',text:'text-amber-600 dark:text-amber-400',border:'border-amber-200 dark:border-amber-500/25',leftBorder:'border-l-amber-500',tagBg:'bg-amber-50 dark:bg-amber-500/10',tagText:'text-amber-600 dark:text-amber-500',tagBorder:'border-amber-200 dark:border-amber-500/20',color:'#f59e0b'},
}
const D = () => <div className="h-px bg-ink-200 dark:bg-ink-800" />

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="snap-section relative overflow-hidden bg-white dark:bg-ink-950">
        <div aria-hidden className="absolute inset-0 pointer-events-none opacity-[0.3] dark:opacity-[0.08]" style={{backgroundImage:'radial-gradient(circle,rgba(0,0,0,0.08) 1px,transparent 1px)',backgroundSize:'28px 28px'}} />
        <div aria-hidden className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_55%_45%_at_50%_0%,rgba(232,68,10,0.05),transparent_70%)]" />
        <Container className="relative py-10 md:py-14">
          <AnimateIn>
            <nav className="flex items-center gap-1.5 mb-4 text-xs text-ink-400">
              <Link href="/" className="hover:text-brand-500 transition-colors">Home</Link>
              <span>/</span><span className="text-ink-600 dark:text-ink-400 font-[500]">Services</span>
            </nav>
            <h1 className="text-[2.4rem] sm:text-[3rem] md:text-[3.5rem] font-[850] tracking-[-0.045em] leading-[1.05] text-ink-900 dark:text-ink-50 mb-4 text-balance">
              Four services.<br /><span className="text-gradient">Each built to free your team.</span>
            </h1>
            <p className="text-lg text-ink-500 dark:text-ink-400 leading-relaxed max-w-[500px] mb-6">
              Every service is scoped, staffed with specialists, and measured against clear quality benchmarks.
            </p>
            <div className="flex flex-wrap gap-2">
              {services.map(svc => (
                <a key={svc.id} href={`#${anchors[svc.id]}`}
                  className="text-xs font-[600] text-ink-600 dark:text-ink-400 bg-white dark:bg-ink-800 border border-ink-200 dark:border-ink-700 hover:border-brand-400 hover:text-brand-500 px-3 py-1.5 rounded-full transition-all">
                  {svc.title}
                </a>
              ))}
            </div>
          </AnimateIn>
        </Container>
      </section>

      {/* Service sections — BUG 7A: alternating layout */}
      {services.map((svc, idx) => {
        const a = accents[svc.id]
        const isReversed = idx % 2 === 1
        const bg = isReversed ? 'bg-ink-50 dark:bg-[#0a0908]' : 'bg-white dark:bg-ink-950'
        return (
          <div key={svc.id}>
            <D />
            <section id={anchors[svc.id]} className={`snap-section-tall ${bg}`}>
              <Container className="py-10 md:py-12">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-start ${isReversed ? 'lg:grid-flow-dense' : ''}`}>

                  {/* Text */}
                  <div className={isReversed ? 'lg:col-start-2' : ''}>
                    <AnimateIn>
                      <div className="flex items-center gap-3 mb-5">
                        <div className={`w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0 ${a.bg} ${a.text} border ${a.border}`}>{icons[svc.id]}</div>
                        <div>
                          <span className="text-[0.68rem] font-[750] tracking-[0.12em] uppercase text-ink-400 dark:text-ink-600 block">{svc.num}</span>
                          <span className="text-[0.7rem] font-[700] tracking-[0.1em] uppercase" style={{color:a.color}}>{svc.subtitle}</span>
                        </div>
                      </div>
                      <h2 className="text-3xl md:text-[2.2rem] font-[800] tracking-[-0.04em] text-ink-900 dark:text-ink-50 leading-[1.08] mb-3">{svc.title}</h2>
                      <p className="text-[0.925rem] font-[650] text-ink-700 dark:text-ink-300 mb-4 leading-snug">{svc.benefitHeadline}</p>
                      <p className="text-sm text-ink-500 dark:text-ink-400 leading-relaxed mb-5 max-w-[460px]">{svc.description}</p>
                    </AnimateIn>

                    {/* BUG 7B: Checkmark bullets */}
                    <AnimateIn delay={0.1}>
                      <ul className="flex flex-col gap-2.5 mb-5">
                        {svc.outcomes.map((o,j) => (
                          <li key={j} className="flex items-start gap-3">
                            <span className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${a.bg} ${a.text}`}>
                              <Check size={10} strokeWidth={3}/>
                            </span>
                            <span className="text-sm text-ink-700 dark:text-ink-300 leading-relaxed">{o}</span>
                          </li>
                        ))}
                      </ul>
                    </AnimateIn>

                    {/* BUG 7C: Best for callout */}
                    <AnimateIn delay={0.15}>
                      <div className="rounded-xl bg-ink-50 dark:bg-ink-900/50 border border-ink-200 dark:border-ink-800 p-5 mb-5">
                        <p className="text-xs font-[700] uppercase tracking-[0.08em] text-ink-400 mb-1.5">Best for</p>
                        <p className="text-sm text-ink-600 dark:text-ink-400">{bestFor[svc.id]}</p>
                      </div>
                    </AnimateIn>

                    {/* Tags */}
                    <AnimateIn delay={0.18}>
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {svc.tags.map(t => (
                          <span key={t} className={`text-[0.75rem] font-[500] px-[14px] py-[6px] rounded-full border ${a.tagBg} ${a.tagText} ${a.tagBorder}`}>{t}</span>
                        ))}
                      </div>
                      <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-[700] text-white bg-brand-500 hover:bg-brand-600 px-5 py-2.5 rounded-xl transition-all hover:-translate-y-px hover:shadow-brand shine">
                        Get a free quote →
                      </Link>
                    </AnimateIn>
                  </div>

                  {/* BUG 7A: Image column */}
                  <AnimateIn delay={0.12} className={isReversed ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    <div className="relative bg-white dark:bg-ink-900 border border-ink-200 dark:border-ink-800 rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow">
                      <span aria-hidden className="absolute -bottom-4 -right-2 text-[9rem] font-[900] leading-none select-none pointer-events-none" style={{color:a.color,opacity:0.06}}>{svc.num}</span>
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image src={imgs[svc.id]} alt={svc.title} fill className="object-cover transition-transform duration-500 hover:scale-[1.04]" sizes="(max-width:1024px) 100vw,560px" loading="lazy"/>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"/>
                        <div className="absolute top-0 left-0 right-0 h-1" style={{background:a.color}}/>
                      </div>
                      <div className="flex items-center gap-3 px-5 py-4 bg-ink-50 dark:bg-ink-800/60 border-b border-ink-200 dark:border-ink-700">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${a.bg} ${a.text} border ${a.border}`}>{icons[svc.id]}</div>
                        <div><p className="text-sm font-[700] text-ink-900 dark:text-ink-100">{svc.title}</p><p className="text-[0.65rem] font-[650] tracking-[0.08em] uppercase text-ink-400 dark:text-ink-500">What we deliver</p></div>
                      </div>
                      <ul className="divide-y divide-ink-100 dark:divide-ink-800 relative z-10">
                        {svc.items.map(item => (
                          <li key={item} className="flex items-center gap-3 px-5 py-3 hover:bg-ink-50 dark:hover:bg-ink-800/40 hover:pl-6 transition-all">
                            <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${a.bg} ${a.text}`}><Check size={8} strokeWidth={3}/></div>
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

      <D />
      {/* CTA */}
      <section className="snap-section bg-white dark:bg-ink-950">
        <Container className="py-10">
          <AnimateIn>
            <div className="relative rounded-[28px] overflow-hidden">
              <div className="absolute inset-0 bg-ink-900 dark:bg-ink-950"/>
              <div aria-hidden className="absolute -top-32 -right-16 w-[400px] h-[400px] rounded-full bg-brand-500/20 blur-[70px]"/>
              <div className="relative z-10 px-8 py-14 md:px-16 max-w-[520px]">
                <h2 className="text-3xl md:text-4xl font-[800] tracking-[-0.04em] text-white leading-[1.08] mb-4">Not sure which service fits?</h2>
                <p className="text-white/60 leading-relaxed mb-8 max-w-[380px] text-[0.925rem]">Tell us your bottleneck. We&apos;ll map it to the right service — no commitment required.</p>
                <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-[700] text-brand-600 bg-white hover:bg-ink-50 px-6 py-3 rounded-xl transition-all hover:-translate-y-px hover:shadow-[0_8px_30px_rgba(255,255,255,0.2)] shine">Talk to us →</Link>
              </div>
            </div>
          </AnimateIn>
        </Container>
      </section>
    </>
  )
}
