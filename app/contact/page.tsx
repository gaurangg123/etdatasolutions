'use client'
import { useState } from 'react'
import { Mail, Phone, Globe, MapPin, Clock, CheckCircle2, AlertTriangle, Loader2, MessageSquare } from 'lucide-react'
import Section from '@/components/ui/Section'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import AnimateIn from '@/components/ui/AnimateIn'
import { cn } from '@/lib/utils'

const serviceOptions = [
  'Staffing, VA & Recruitment',
  'Data & Excel Automation',
  'QA Testing — App & Web',
  'Data Engineering & Visualizations',
  'Multiple Services',
  'Not sure yet',
]

type FormState = { name:string; email:string; company:string; phone:string; service:string; message:string; _hp:string }
const EMPTY: FormState = { name:'', email:'', company:'', phone:'', service:'', message:'', _hp:'' }

const inputBase = 'w-full bg-ink-50 dark:bg-ink-800 border rounded-xl px-4 py-3 text-sm text-ink-900 dark:text-ink-100 placeholder:text-ink-400 dark:placeholder:text-ink-600 outline-none transition-all duration-150'
const inputOk   = 'border-ink-200 dark:border-ink-700 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15'
const inputErr  = 'border-red-400 dark:border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/15'

const contactItems = [
  { icon:Mail,   label:'Email',        val:'bobby@etdatasolutions.com', href:'mailto:bobby@etdatasolutions.com' },
  { icon:Phone,  label:'Phone (US)',   val:'+1-302-357-9776',           href:'tel:+13023579776'                },
  { icon:Phone,  label:'Phone (IN)',   val:'+91 62653 48189',           href:'tel:+916265348189'               },
  { icon:Globe,  label:'Website',      val:'etdatasolutions.com',       href:'https://etdatasolutions.com'     },
  { icon:MapPin, label:'Based in',     val:'India — Serving Globally',  href:null                              },
  { icon:Clock,  label:'Availability', val:'24/7 — Any timezone',       href:null                              },
]

export default function ContactPage() {
  const [form, setForm]               = useState<FormState>(EMPTY)
  const [status, setStatus]           = useState<'idle'|'sending'|'sent'|'error'>('idle')
  const [fieldErrors, setFieldErrors] = useState<Record<string, string[]>>({})
  const [serverError, setServerError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) => {
    setForm(p => ({ ...p, [e.target.name]: e.target.value }))
    if (fieldErrors[e.target.name]) setFieldErrors(p => { const n = {...p}; delete n[e.target.name]; return n })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending'); setFieldErrors({}); setServerError('')
    try {
      const res  = await fetch('/api/contact', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(form) })
      const data = await res.json()
      if (data.success) { setStatus('sent'); return }
      if (res.status === 422 && data.fields) { setFieldErrors(data.fields); setStatus('idle'); return }
      throw new Error(data.error ?? 'Unexpected error')
    } catch (err) {
      setServerError(err instanceof Error ? err.message : 'Something went wrong.')
      setStatus('error')
    }
  }

  const fe  = (n: string) => fieldErrors[n]?.[0]
  const cls = (n: string) => cn(inputBase, fe(n) ? inputErr : inputOk)

  return (
    <>
      {/* ── Page header ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-20 md:py-28 bg-white dark:bg-ink-950">
        <div aria-hidden className="absolute inset-0 opacity-[0.35] dark:opacity-[0.12]"
          style={{ backgroundImage:'radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)', backgroundSize:'28px 28px', maskImage:'linear-gradient(to bottom,transparent,black 15%,black 85%,transparent)' }} />
        <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_50%_0%,rgba(232,68,10,0.05),transparent_70%)]" />
        <Container className="relative">
          <AnimateIn>
            <span className="inline-block text-[0.7rem] font-[750] tracking-[0.14em] uppercase text-brand-500 mb-3">Contact Us</span>
          </AnimateIn>
          <AnimateIn delay={0.07}>
            <h1 className="text-4xl md:text-5xl lg:text-[3.6rem] font-[800] tracking-[-0.045em] leading-[1.06] text-ink-900 dark:text-ink-50 mb-5 max-w-[620px] text-balance">
              Let&apos;s build something<br />
              <span className="text-gradient">great together.</span>
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.14}>
            <p className="text-lg text-ink-500 dark:text-ink-400 leading-relaxed max-w-[480px]">
              Tell us your requirement — we&apos;ll respond within 24 hours with a scoped proposal and clear pricing.
            </p>
          </AnimateIn>
        </Container>
      </section>

      <div className="h-px bg-ink-200 dark:bg-ink-800" />

      {/* ── Form + details ───────────────────────────────────────── */}
      <Section bg="white" id="form" label="Contact form">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-10">

            {/* ── Left — contact details ── */}
            <div className="flex flex-col gap-4">
              <AnimateIn>
                <div className="bg-white dark:bg-ink-900 border border-ink-200 dark:border-ink-800 rounded-3xl overflow-hidden shadow-card">
                  {/* macOS chrome */}
                  <div className="flex items-center gap-2 px-4 py-3.5 bg-ink-50 dark:bg-ink-800/80 border-b border-ink-200 dark:border-ink-700">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                    </div>
                    <span className="ml-2 text-xs font-[650] text-ink-400 dark:text-ink-500">Contact Details</span>
                  </div>
                  <div className="divide-y divide-ink-100 dark:divide-ink-800">
                    {contactItems.map(item => (
                      <div key={item.label} className="flex items-center gap-3 px-4 py-3 hover:bg-ink-50 dark:hover:bg-ink-800/40 transition-colors">
                        <div className="w-8 h-8 rounded-lg bg-brand-50 dark:bg-brand-500/10 border border-brand-100 dark:border-brand-500/20 flex items-center justify-center text-brand-500 flex-shrink-0">
                          <item.icon size={13} />
                        </div>
                        <div className="min-w-0">
                          <p className="text-[0.65rem] font-[700] tracking-[0.1em] uppercase text-ink-400 dark:text-ink-500 mb-0.5">{item.label}</p>
                          {item.href
                            ? <a href={item.href} className="text-sm text-ink-700 dark:text-ink-300 hover:text-brand-500 transition-colors truncate block">{item.val}</a>
                            : <span className="text-sm text-ink-700 dark:text-ink-300 truncate block">{item.val}</span>
                          }
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateIn>

              {/* Services chip cloud */}
              <AnimateIn delay={0.1}>
                <div className="bg-ink-50 dark:bg-ink-900/60 border border-ink-200 dark:border-ink-800 rounded-2xl p-5">
                  <p className="text-[0.68rem] font-[750] tracking-[0.12em] uppercase text-ink-400 dark:text-ink-500 mb-3">Services we offer</p>
                  <div className="flex flex-wrap gap-1.5">
                    {['Staffing & VA','RPO','Data Entry','Excel Automation','Manual QA','Web Testing','Snowflake','Databricks','Power BI','Tableau'].map(s => (
                      <span key={s} className="text-xs font-[500] text-ink-500 dark:text-ink-400 bg-white dark:bg-ink-800 border border-ink-200 dark:border-ink-700 hover:border-brand-400 hover:text-brand-500 px-2.5 py-1 rounded-full transition-all cursor-default">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimateIn>

              {/* Response time */}
              <AnimateIn delay={0.15}>
                <div className="flex items-start gap-3 bg-brand-50 dark:bg-brand-500/10 border border-brand-200 dark:border-brand-500/20 rounded-2xl p-4">
                  <MessageSquare size={16} className="text-brand-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-[700] text-ink-900 dark:text-ink-100 mb-0.5">We respond in 24 hours</p>
                    <p className="text-xs text-ink-500 dark:text-ink-400">All enquiries receive a personalized response — no automated replies.</p>
                  </div>
                </div>
              </AnimateIn>
            </div>

            {/* ── Right — form ── */}
            <AnimateIn delay={0.12}>
              {status === 'sent' ? (
                <div className="bg-white dark:bg-ink-900 border border-ink-200 dark:border-ink-800 rounded-3xl p-10 flex flex-col items-start gap-5 shadow-card">
                  <div className="w-14 h-14 rounded-2xl bg-brand-50 dark:bg-brand-500/10 border border-brand-200 dark:border-brand-500/25 flex items-center justify-center text-brand-500">
                    <CheckCircle2 size={28} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-[800] tracking-[-0.03em] text-ink-900 dark:text-ink-50 mb-2">Message sent!</h3>
                    <p className="text-sm text-ink-500 dark:text-ink-400 leading-relaxed max-w-[400px]">
                      Thanks for reaching out. We&apos;ll get back to you within 24 hours at{' '}
                      <strong className="text-ink-800 dark:text-ink-200">{form.email}</strong>.
                    </p>
                  </div>
                  <button
                    onClick={() => { setStatus('idle'); setForm(EMPTY) }}
                    className="text-sm font-[500] text-ink-600 dark:text-ink-400 border border-ink-200 dark:border-ink-700 hover:border-brand-400 hover:text-brand-500 px-5 py-2.5 rounded-xl transition-all"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <div className="bg-white dark:bg-ink-900 border border-ink-200 dark:border-ink-800 rounded-3xl overflow-hidden shadow-card">
                  {/* Form header */}
                  <div className="px-7 py-5 border-b border-ink-100 dark:border-ink-800 bg-ink-50/60 dark:bg-ink-800/30">
                    <h2 className="text-base font-[750] text-ink-900 dark:text-ink-100">Send us a message</h2>
                    <p className="text-sm text-ink-400 dark:text-ink-500 mt-0.5">We respond to all enquiries within 24 hours.</p>
                  </div>

                  <form onSubmit={handleSubmit} noValidate className="px-7 py-6 flex flex-col gap-5">
                    {/* Honeypot */}
                    <div style={{ display:'none' }} aria-hidden>
                      <input name="_hp" type="text" tabIndex={-1} autoComplete="off" value={form._hp} onChange={handleChange} />
                    </div>

                    {/* Name + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        { id:'name',  label:'Full Name',      type:'text',  ph:'Your full name',    ac:'name',         required:true  },
                        { id:'email', label:'Email Address',   type:'email', ph:'you@company.com',  ac:'email',        required:true  },
                      ].map(f => (
                        <div key={f.id}>
                          <label htmlFor={f.id} className="block text-[0.72rem] font-[700] tracking-[0.07em] uppercase text-ink-400 dark:text-ink-500 mb-1.5">
                            {f.label} {f.required && <span className="text-brand-500">*</span>}
                          </label>
                          <input id={f.id} name={f.id} type={f.type} required={f.required} placeholder={f.ph} autoComplete={f.ac} value={(form as any)[f.id]} onChange={handleChange} className={cls(f.id)} />
                          {fe(f.id) && <p className="mt-1 text-xs text-red-500 font-[500]">{fe(f.id)}</p>}
                        </div>
                      ))}
                    </div>

                    {/* Company + Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        { id:'company', label:'Company',  type:'text', ph:'Your company name', ac:'organization', required:false },
                        { id:'phone',   label:'Phone',    type:'tel',  ph:'+1 000 000 0000',   ac:'tel',          required:false },
                      ].map(f => (
                        <div key={f.id}>
                          <label htmlFor={f.id} className="block text-[0.72rem] font-[700] tracking-[0.07em] uppercase text-ink-400 dark:text-ink-500 mb-1.5">{f.label}</label>
                          <input id={f.id} name={f.id} type={f.type} placeholder={f.ph} autoComplete={f.ac} value={(form as any)[f.id]} onChange={handleChange} className={cls(f.id)} />
                        </div>
                      ))}
                    </div>

                    {/* Service select */}
                    <div>
                      <label htmlFor="service" className="block text-[0.72rem] font-[700] tracking-[0.07em] uppercase text-ink-400 dark:text-ink-500 mb-1.5">Service of Interest</label>
                      <select id="service" name="service" value={form.service} onChange={handleChange}
                        className={cn(cls('service'), 'cursor-pointer dark:bg-ink-800')}>
                        <option value="">Select a service…</option>
                        {serviceOptions.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-[0.72rem] font-[700] tracking-[0.07em] uppercase text-ink-400 dark:text-ink-500 mb-1.5">
                        Message <span className="text-brand-500">*</span>
                      </label>
                      <textarea
                        id="message" name="message" required rows={5}
                        placeholder="Describe your project, volume, timeline, or any questions…"
                        value={form.message} onChange={handleChange}
                        className={cn(cls('message'), 'resize-y min-h-[120px] leading-relaxed')}
                      />
                      {fe('message') && <p className="mt-1 text-xs text-red-500 font-[500]">{fe('message')}</p>}
                    </div>

                    {/* Server error */}
                    {status === 'error' && (
                      <div className="flex items-start gap-2.5 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4">
                        <AlertTriangle size={15} className="text-red-500 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-red-700 dark:text-red-400">
                          {serverError || 'Something went wrong. Please email us directly at bobby@etdatasolutions.com'}
                        </p>
                      </div>
                    )}

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="group w-full inline-flex items-center justify-center gap-2 text-sm font-[700] text-white bg-brand-500 hover:bg-brand-600 disabled:opacity-60 px-6 py-3.5 rounded-xl transition-all duration-200 hover:shadow-brand hover:-translate-y-px active:scale-[0.97] shine"
                    >
                      {status === 'sending'
                        ? <><Loader2 size={14} className="animate-spin" />Sending…</>
                        : 'Send Message'
                      }
                    </button>
                  </form>
                </div>
              )}
            </AnimateIn>
          </div>
        </Container>
      </Section>
    </>
  )
}
