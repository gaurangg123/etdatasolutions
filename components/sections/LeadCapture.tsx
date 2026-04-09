'use client'
import { useState } from 'react'
import { Check, ArrowRight, ChevronRight } from 'lucide-react'
import Section from '@/components/ui/Section'
import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimateIn from '@/components/ui/AnimateIn'
import Link from 'next/link'

const benefits = [
  'No commitment, no pitch — just specific insights',
  'Actionable recommendations you can use immediately',
  'Cost-savings estimate based on your actual volume',
  'Booking confirmation within 24 hours',
]

export default function LeadCapture() {
  const [vals, setVals] = useState({ name:'', email:'', company:'' })
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!vals.name || !vals.email) return
    setLoading(true)
    await new Promise(r => setTimeout(r, 700))
    setLoading(false)
    setSent(true)
  }

  return (
    <Section bg="gray" id="audit">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <AnimateIn>
            <SectionHeader
              eyebrow="Free operations audit"
              title={<>Find out exactly where you&apos;re losing time and money.</>}
              subtitle="Book a free 30-minute operations audit. We'll map your workflow, identify your 3 biggest bottlenecks, and give you a cost-savings estimate — no sales pitch attached."
            />
            <div className="flex flex-col gap-3.5 mt-8">
              {benefits.map(b => (
                <div key={b} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-500 flex items-center justify-center flex-shrink-0">
                    <Check size={10} className="text-white" strokeWidth={3} />
                  </div>
                  <span className="text-sm font-[500] text-neutral-700 dark:text-neutral-300">{b}</span>
                </div>
              ))}
            </div>
          </AnimateIn>

          <AnimateIn delay={0.15}>
            <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-8 shadow-card">
              {sent ? (
                <div className="flex flex-col items-start gap-4 py-4">
                  <div className="w-12 h-12 rounded-2xl bg-brand-50 dark:bg-brand-500/10 border border-brand-200 dark:border-brand-500/25 flex items-center justify-center text-brand-500">
                    <Check size={22} strokeWidth={2.5} />
                  </div>
                  <h3 className="text-xl font-[800] text-neutral-900 dark:text-neutral-50 tracking-[-0.025em]">You&apos;re booked in.</h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                    We&apos;ll reach out within 24 hours to confirm your free 30-minute audit slot.
                  </p>
                  <Link href="/contact#form" className="text-sm font-[650] text-brand-500 hover:text-brand-600 inline-flex items-center gap-1.5 transition-colors">
                    Send a detailed message instead <ChevronRight size={13} />
                  </Link>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-[800] tracking-[-0.03em] text-neutral-900 dark:text-neutral-50 mb-1">Get your free audit</h3>
                  <p className="text-sm text-neutral-400 mb-7">Takes 30 seconds. We&apos;ll reach out within 24 hours.</p>
                  <form onSubmit={submit} className="flex flex-col gap-4" noValidate>
                    {[
                      { key:'name',    label:'Full Name *',   type:'text',  ph:'Your name',         required:true },
                      { key:'email',   label:'Work Email *',  type:'email', ph:'you@company.com',   required:true },
                      { key:'company', label:'Company',       type:'text',  ph:'Company name',      required:false},
                    ].map(f => (
                      <div key={f.key} className="flex flex-col gap-1.5">
                        <label className="text-xs font-[700] tracking-[0.07em] uppercase text-neutral-400 dark:text-neutral-500">{f.label}</label>
                        <input
                          type={f.type} required={f.required} placeholder={f.ph}
                          value={(vals as any)[f.key]}
                          onChange={e => setVals(v => ({...v, [f.key]: e.target.value}))}
                          className="w-full bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl px-4 py-3 text-sm text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15 transition-all"
                        />
                      </div>
                    ))}
                    <button
                      type="submit" disabled={loading}
                      className="w-full inline-flex items-center justify-center gap-2 text-base font-[700] text-white bg-brand-500 hover:bg-brand-600 disabled:opacity-70 py-3.5 rounded-xl transition-all duration-150 hover:shadow-brand hover:-translate-y-px active:scale-[0.98] mt-1"
                    >
                      {loading ? 'Submitting…' : <>{' '}Get My Free Audit <ArrowRight size={16} /></>}
                    </button>
                    <p className="text-xs text-neutral-400 text-center">No spam. No pitch. Just a straight answer on where you stand.</p>
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
