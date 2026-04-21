'use client'
import { useState } from 'react'
import { Check, ArrowRight, ChevronRight, Timer, BadgeCheck, TrendingUp } from 'lucide-react'
import Section from '@/components/ui/Section'
import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimateIn from '@/components/ui/AnimateIn'

function scrollToContact() {
  const el = document.getElementById('contact')
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 68, behavior: 'smooth' })
}

const benefits = [
  { icon: Timer,      text: 'Free 30-min operations audit' },
  { icon: TrendingUp, text: 'Cost-savings estimate for your specific volume' },
  { icon: BadgeCheck, text: 'Actionable recommendations you can use immediately' },
  { icon: Check,      text: 'Response within 24 hours — no spam, no pitch' },
]

export default function LeadCapture() {
  const [vals, setVals]     = useState({ name:'', email:'', company:'' })
  const [loading, setLoading] = useState(false)
  const [sent, setSent]     = useState(false)
  const [error, setError]   = useState('')

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!vals.name || !vals.email) { setError('Name and email are required.'); return }
    setError('')
    setLoading(true)
    await new Promise(r => setTimeout(r, 800))
    setLoading(false)
    setSent(true)
  }

  return (
    <Section bg="gray" id="audit" label="Free audit">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left */}
          <AnimateIn>
            <SectionHeader
              eyebrow="Free operations audit"
              title={<>Find out where you&apos;re losing time and money.</>}
              subtitle="Book a free 30-minute audit. We'll map your current workflow, identify your 3 biggest bottlenecks, and give you a realistic cost-savings estimate — no sales pitch."
            />
            <div className="flex flex-col gap-4 mt-8">
              {benefits.map(b => (
                <div key={b.text} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-brand-50 dark:bg-brand-500/10 border border-brand-100 dark:border-brand-500/20 flex items-center justify-center text-brand-500 flex-shrink-0">
                    <b.icon size={14} />
                  </div>
                  <span className="text-sm text-ink-700 dark:text-ink-300 font-[500]">{b.text}</span>
                </div>
              ))}
            </div>
          </AnimateIn>

          {/* Form card */}
          <AnimateIn delay={0.15}>
            <div className="bg-white dark:bg-ink-900 border border-ink-200 dark:border-ink-800 rounded-3xl shadow-card-hover overflow-hidden">
              {sent ? (
                <div className="p-9 flex flex-col items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/25 flex items-center justify-center text-emerald-500">
                    <Check size={26} strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-xl font-[800] tracking-[-0.025em] text-ink-900 dark:text-ink-50 mb-1.5">You&apos;re booked in.</h3>
                    <p className="text-sm text-ink-500 dark:text-ink-400 leading-relaxed">
                      We&apos;ll reach out to <strong className="text-ink-800 dark:text-ink-200">{vals.email}</strong> within 24 hours to confirm your audit slot.
                    </p>
                  </div>
                  <button
                    onClick={scrollToContact}
                    className="text-sm font-[650] text-brand-500 hover:text-brand-600 inline-flex items-center gap-1.5 transition-colors"
                  >
                    Send a detailed message instead <ChevronRight size={13} />
                  </button>
                </div>
              ) : (
                <>
                  <div className="px-7 py-5 border-b border-ink-100 dark:border-ink-800 bg-ink-50/50 dark:bg-ink-950/30">
                    <h3 className="text-base font-[750] text-ink-900 dark:text-ink-100">Get your free audit</h3>
                    <p className="text-sm text-ink-400 mt-0.5">30 seconds to fill. We respond within 24 hours.</p>
                  </div>
                  <form onSubmit={submit} className="p-7 flex flex-col gap-4" noValidate>
                    {[
                      { key:'name',    label:'Full Name',  type:'text',  ph:'Your full name',    required:true  },
                      { key:'email',   label:'Work Email', type:'email', ph:'you@company.com',   required:true  },
                      { key:'company', label:'Company',    type:'text',  ph:'Company name',      required:false },
                    ].map(f => (
                      <div key={f.key}>
                        <label className="block text-[0.72rem] font-[700] tracking-[0.07em] uppercase text-ink-500 dark:text-ink-400 mb-1.5">
                          {f.label}{f.required && <span className="text-brand-500 ml-0.5">*</span>}
                        </label>
                        <input
                          type={f.type} required={f.required} placeholder={f.ph}
                          value={(vals as Record<string,string>)[f.key]}
                          onChange={e => setVals(v => ({...v, [f.key]: e.target.value}))}
                          style={{ height:'48px' }}
                          className="w-full bg-ink-50 dark:bg-ink-800 border border-ink-200 dark:border-ink-700 rounded-xl px-4 text-sm text-ink-900 dark:text-ink-100 placeholder:text-ink-400 dark:placeholder:text-ink-600 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all duration-200"
                        />
                      </div>
                    ))}
                    {error && <p className="text-xs text-red-500 font-[500]">{error}</p>}
                    <button
                      type="submit" disabled={loading}
                      className="group w-full inline-flex items-center justify-center gap-2 text-[0.925rem] font-[700] text-white bg-brand-500 hover:bg-brand-600 disabled:opacity-60 rounded-xl transition-all duration-200 hover:shadow-brand hover:-translate-y-px active:scale-[0.97] shine mt-1"
                      style={{ height:'48px' }}
                    >
                      {loading
                        ? <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Submitting…</>
                        : <><span>Get My Free Audit</span><ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" /></>
                      }
                    </button>
                    <p className="text-[0.72rem] text-ink-400 text-center leading-relaxed">
                      No spam, no pitch. Just a straight answer on where you stand.
                    </p>
                  </form>
                </>
              )}
            </div>
          </AnimateIn>
        </div>
      </Container>
    </Section>
  )
}
