import Image from 'next/image'
import Link from 'next/link'
import PageHero from '@/components/shared/PageHero'
import CtaBanner from '@/components/shared/CtaBanner'
import Container from '@/components/ui/Container'
import AnimateIn from '@/components/ui/AnimateIn'
import { services } from '@/lib/services'
import { Users, Database, CheckSquare, BarChart2, Check, Zap } from 'lucide-react'


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

const plans = [
  { tier:'Starter', note:'Starting at', price:'$499', period:'/month', popular:false, cta:'Get Started', desc:'One service, one team. Built for businesses testing outsourcing for the first time.', features:['1–2 dedicated specialists','Single service vertical','Up to 40 hours/week','Weekly progress reports','Email support, 48h response','30-day satisfaction guarantee'] },
  { tier:'Growth',  note:'Starting at', price:'$1,499', period:'/month', popular:true,  cta:'Book a Call', badge:'Most Popular', desc:'Multi-service, ongoing. For teams ready to systematically remove their biggest operational drags.', features:['3–6 dedicated specialists','Up to 3 service verticals','Up to 160 hours/week','Daily progress reports','Dedicated account manager','Slack/WhatsApp priority support','Monthly strategy review call'] },
  { tier:'Enterprise', note:'Tailored pricing', price:'Custom', period:'', popular:false, cta:'Contact Sales', desc:'Full-scale outsourcing across all four verticals with SLAs, custom onboarding, and executive reviews.', features:['10+ dedicated specialists','All 4 service verticals','Unlimited capacity','Real-time reporting dashboard','SLA with delivery guarantees','Custom integration & onboarding','Quarterly executive reviews'] },
]

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
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-14 items-start ${isReversed ? 'lg:grid-flow-dense' : ''}`}>

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

      {/* ── Pricing ── */}
      <section id="pricing" className="py-16 md:py-22 bg-ink-50 dark:bg-[#0a0908]">
        <Container>
          <AnimateIn className="mb-12 text-center">
            <span className="inline-block text-[0.7rem] font-[750] tracking-[0.14em] uppercase text-brand-500 mb-3">Pricing</span>
            <h2 className="text-[1.9rem] sm:text-[2.4rem] font-[800] tracking-[-0.04em] text-ink-900 dark:text-ink-50">Simple pricing.<br />No surprises, no lock-in.</h2>
            <p className="text-sm text-ink-500 dark:text-ink-400 mt-3 max-w-[400px] mx-auto">Every plan includes a dedicated team, quality reports, and a 30-day guarantee.</p>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start max-w-4xl mx-auto">
            {plans.map((p, i) => (
              <AnimateIn key={p.tier} delay={i * 0.1}>
                <div className={`relative flex flex-col rounded-3xl overflow-hidden transition-all duration-300 ${p.popular ? 'bg-ink-900 dark:bg-ink-950 border border-brand-500/40 shadow-[0_0_0_1px_rgba(232,68,10,0.35),0_24px_64px_rgba(0,0,0,0.28)] md:scale-[1.04] md:-my-2 z-10' : 'bg-white dark:bg-ink-900 border border-ink-200 dark:border-ink-800 hover:border-ink-300 hover:shadow-card-hover'}`}>
                  {p.popular && <div className="h-1 w-full bg-gradient-to-r from-brand-600 via-brand-400 to-brand-600" />}
                  {p.popular && (
                    <div className="flex items-center justify-center gap-2 px-5 py-2.5 bg-brand-500/10 border-b border-brand-500/20">
                      <span className="flex h-1.5 w-1.5 rounded-full bg-brand-400 animate-pulse" />
                      <Zap size={11} className="text-brand-400" />
                      <span className="text-xs font-[750] text-brand-300 tracking-[0.1em] uppercase">{p.badge}</span>
                    </div>
                  )}
                  <div className={`flex flex-col flex-1 ${p.popular ? 'p-8' : 'p-7'}`}>
                    <div className="mb-6">
                      <p className="text-xs font-[600] mb-1 text-ink-400">{p.note}</p>
                      <div className="flex items-baseline gap-1 mb-2">
                        <span className={`font-[800] tracking-[-0.05em] leading-none ${p.popular ? 'text-[2.6rem] text-white' : 'text-[2.4rem] text-ink-900 dark:text-ink-50'}`}>{p.price}</span>
                        {p.period && <span className="text-base text-ink-400">{p.period}</span>}
                      </div>
                      <p className={`text-[0.7rem] font-[750] tracking-[0.09em] uppercase mb-3 ${p.popular ? 'text-brand-400' : 'text-brand-500'}`}>{p.tier}</p>
                      <p className={`text-sm leading-relaxed pb-5 border-b ${p.popular ? 'text-ink-400 border-ink-800' : 'text-ink-500 dark:text-ink-400 border-ink-100 dark:border-ink-800'}`}>{p.desc}</p>
                    </div>
                    <div className="flex flex-col gap-3 flex-1 mb-8">
                      {p.features.map((f, j) => (
                        <div key={j} className="flex items-start gap-3">
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${p.popular ? 'bg-brand-500' : 'bg-ink-100 dark:bg-ink-800'}`}>
                            <Check size={10} className={p.popular ? 'text-white' : 'text-ink-500 dark:text-ink-400'} strokeWidth={3} />
                          </div>
                          <span className={`text-sm ${p.popular ? 'text-ink-300' : 'text-ink-700 dark:text-ink-300'}`}>{f}</span>
                        </div>
                      ))}
                    </div>
                    <Link href="/contact" className={`w-full flex items-center justify-center text-sm font-[700] px-5 py-2.5 rounded-xl transition-all hover:-translate-y-px ${p.popular ? 'text-white bg-brand-500 hover:bg-brand-600 hover:shadow-brand shine' : 'text-ink-800 dark:text-ink-100 bg-white dark:bg-ink-800 border border-ink-200 dark:border-ink-700 hover:border-brand-400'}`}>
                      {p.cta}
                    </Link>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
          <AnimateIn delay={0.35} className="mt-8 text-center">
            <p className="text-sm text-ink-400 dark:text-ink-500">All plans · 30-day satisfaction guarantee · No lock-in contracts · Scale any month with 30 days notice</p>
          </AnimateIn>
        </Container>
      </section>

      <Divider />
      <CtaBanner headline="Not sure which service fits your needs?" subtext="Tell us your bottleneck. We'll map it to the right service — no commitment required." primaryBtn={{label:'Talk to us',href:'/contact'}} showGuarantees={false} />
    </>
  )
}
