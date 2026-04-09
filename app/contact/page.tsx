'use client'
import { useState } from 'react'
import { Mail, Phone, Globe, MapPin, Clock, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import Section from '@/components/ui/Section'
import Container from '@/components/ui/Container'
import AnimateIn from '@/components/ui/AnimateIn'
import { cn } from '@/lib/utils'

const serviceOptions = ['Staffing, VA & Recruitment','Data & Excel Automation','QA Testing — App & Web','Data Engineering & Visualizations','Multiple Services','Not sure yet']
type FormState = { name:string; email:string; company:string; phone:string; service:string; message:string; _hp:string }
const EMPTY: FormState = { name:'',email:'',company:'',phone:'',service:'',message:'',_hp:'' }

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(EMPTY)
  const [status, setStatus] = useState<'idle'|'sending'|'sent'|'error'>('idle')
  const [fieldErrors, setFieldErrors] = useState<Record<string,string[]>>({})
  const [serverError, setServerError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) => {
    setForm(p => ({...p, [e.target.name]: e.target.value}))
    if (fieldErrors[e.target.name]) setFieldErrors(p => { const n={...p}; delete n[e.target.name]; return n })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); setStatus('sending'); setFieldErrors({}); setServerError('')
    try {
      const res = await fetch('/api/contact', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(form) })
      const data = await res.json()
      if (data.success) { setStatus('sent'); return }
      if (res.status===422 && data.fields) { setFieldErrors(data.fields); setStatus('idle'); return }
      throw new Error(data.error ?? 'Unexpected error')
    } catch (err) { setServerError(err instanceof Error ? err.message : 'Something went wrong.'); setStatus('error') }
  }

  const fe = (n: string) => fieldErrors[n]?.[0]
  const inputCls = (n: string) => cn(
    'w-full bg-neutral-50 dark:bg-neutral-800 border rounded-xl px-4 py-3 text-sm text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 outline-none transition-all',
    fe(n) ? 'border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/15'
          : 'border-neutral-200 dark:border-neutral-700 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15'
  )

  const contactDetails = [
    { icon:Mail,   label:'Email',        val:'bobby@etdatasolutions.com', href:'mailto:bobby@etdatasolutions.com' },
    { icon:Phone,  label:'Phone (US)',   val:'+1-302-357-9776',           href:'tel:+13023579776' },
    { icon:Phone,  label:'Phone (IN)',   val:'+91 62653 48189',           href:'tel:+916265348189' },
    { icon:Globe,  label:'Website',      val:'etdatasolutions.com',       href:'https://etdatasolutions.com' },
    { icon:MapPin, label:'Based in',     val:'India — Serving Globally',  href:null },
    { icon:Clock,  label:'Availability', val:'24/7 — Any timezone',       href:null },
  ]

  return (
    <>
      {/* Page header */}
      <section className="relative overflow-hidden py-20 md:py-28 bg-white dark:bg-[#0e0c0b]">
        <div aria-hidden className="absolute inset-0 opacity-[0.35] dark:opacity-[0.12]"
          style={{ backgroundImage:'linear-gradient(rgba(0,0,0,0.07) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,0.07) 1px,transparent 1px)', backgroundSize:'52px 52px', maskImage:'linear-gradient(to bottom,transparent,black 15%,black 85%,transparent)'}}/>
        <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_50%_0%,rgba(232,68,10,0.05),transparent_70%)]"/>
        <Container className="relative">
          <AnimateIn><span className="text-xs font-[700] tracking-[0.12em] uppercase text-brand-500 mb-3 block">Contact Us</span></AnimateIn>
          <AnimateIn delay={0.07}>
            <h1 className="text-4xl md:text-5xl lg:text-[3.6rem] font-[800] tracking-[-0.04em] leading-[1.07] text-neutral-900 dark:text-neutral-50 mb-5 max-w-[620px]">
              Let&apos;s build something<br /><span className="text-brand-500">great together</span>
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.14}>
            <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-[480px]">
              Whether you have an ongoing requirement or a single assignment — tell us what you need and we&apos;ll respond within 24 hours.
            </p>
          </AnimateIn>
        </Container>
      </section>

      <div className="h-px bg-neutral-200 dark:bg-neutral-800"/>

      <Section bg="white" id="form">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-10">
            {/* Info column */}
            <div className="flex flex-col gap-5">
              <AnimateIn>
                <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden shadow-card">
                  <div className="flex items-center gap-2 px-4 py-3 bg-neutral-100 dark:bg-neutral-800 border-b border-neutral-200 dark:border-neutral-700">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]"/><div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]"/><div className="w-2.5 h-2.5 rounded-full bg-[#28c840]"/>
                    <span className="ml-2 text-xs font-[700] tracking-[0.1em] uppercase text-neutral-400">Contact Details</span>
                  </div>
                  <div className="divide-y divide-neutral-100 dark:divide-neutral-800">
                    {contactDetails.map(item => (
                      <div key={item.label} className="flex items-center gap-3 px-4 py-3 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors">
                        <div className="w-8 h-8 rounded-lg bg-brand-50 dark:bg-brand-500/10 border border-brand-100 dark:border-brand-500/20 flex items-center justify-center text-brand-500 flex-shrink-0"><item.icon size={13}/></div>
                        <div className="min-w-0">
                          <div className="text-xs font-[650] tracking-[0.08em] uppercase text-neutral-400">{item.label}</div>
                          {item.href ? <a href={item.href} className="text-sm text-neutral-700 dark:text-neutral-300 hover:text-brand-500 transition-colors truncate block">{item.val}</a>
                                     : <span className="text-sm text-neutral-700 dark:text-neutral-300 truncate block">{item.val}</span>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateIn>
              <AnimateIn delay={0.1}>
                <div className="bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-5">
                  <p className="text-xs font-[700] tracking-[0.1em] uppercase text-neutral-400 mb-3">Services We Offer</p>
                  <div className="flex flex-wrap gap-1.5">
                    {['Staffing & VA','RPO','Data Entry','Excel Automation','Manual QA','Web Testing','Snowflake','Databricks','Microsoft Fabric','Power BI','Tableau'].map(s => (
                      <span key={s} className="text-xs font-[500] text-neutral-500 dark:text-neutral-400 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 px-2.5 py-1 rounded-full hover:border-brand-400 dark:hover:border-brand-500/50 hover:text-brand-500 transition-all cursor-default">{s}</span>
                    ))}
                  </div>
                </div>
              </AnimateIn>
            </div>

            {/* Form */}
            <AnimateIn delay={0.12}>
              {status==='sent' ? (
                <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-10 flex flex-col items-start gap-4 shadow-card">
                  <div className="w-14 h-14 rounded-2xl bg-brand-50 dark:bg-brand-500/10 border border-brand-200 dark:border-brand-500/25 flex items-center justify-center text-brand-500"><CheckCircle2 size={26}/></div>
                  <h3 className="text-2xl font-[800] tracking-[-0.03em] text-neutral-900 dark:text-neutral-50">Message sent!</h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-[400px]">
                    Thanks for reaching out. We&apos;ll get back to you within 24 hours at <strong className="text-neutral-800 dark:text-neutral-200">{form.email}</strong>.
                  </p>
                  <button onClick={()=>{setStatus('idle');setForm(EMPTY)}} className="text-sm font-[500] text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700 hover:border-brand-400 px-5 py-2.5 rounded-xl transition-all mt-2">
                    Send another message
                  </button>
                </div>
              ) : (
                <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden shadow-card">
                  <div className="px-7 py-5 border-b border-neutral-100 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-800/40">
                    <h2 className="text-lg font-[700] tracking-[-0.025em] text-neutral-900 dark:text-neutral-100">Send us a message</h2>
                    <p className="text-sm text-neutral-500 mt-0.5">We respond to all enquiries within 24 hours.</p>
                  </div>
                  <form onSubmit={handleSubmit} noValidate className="px-7 py-6 flex flex-col gap-5">
                    <div style={{display:'none'}} aria-hidden><input name="_hp" type="text" tabIndex={-1} autoComplete="off" value={form._hp} onChange={handleChange}/></div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[{id:'name',label:'Full Name *',type:'text',ph:'Your full name',ac:'name'},{id:'email',label:'Email Address *',type:'email',ph:'you@company.com',ac:'email'}].map(f => (
                        <div key={f.id} className="flex flex-col gap-1.5">
                          <label className="text-xs font-[700] tracking-[0.07em] uppercase text-neutral-400" htmlFor={f.id}>{f.label}</label>
                          <input id={f.id} name={f.id} type={f.type} required placeholder={f.ph} autoComplete={f.ac} value={(form as any)[f.id]} onChange={handleChange} className={inputCls(f.id)}/>
                          {fe(f.id) && <span className="text-xs text-red-500 font-[500]">{fe(f.id)}</span>}
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[{id:'company',label:'Company',type:'text',ph:'Your company name',ac:'organization'},{id:'phone',label:'Phone',type:'tel',ph:'+1 000 000 0000',ac:'tel'}].map(f => (
                        <div key={f.id} className="flex flex-col gap-1.5">
                          <label className="text-xs font-[700] tracking-[0.07em] uppercase text-neutral-400" htmlFor={f.id}>{f.label}</label>
                          <input id={f.id} name={f.id} type={f.type} placeholder={f.ph} autoComplete={f.ac} value={(form as any)[f.id]} onChange={handleChange} className={inputCls(f.id)}/>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-[700] tracking-[0.07em] uppercase text-neutral-400" htmlFor="service">Service of Interest</label>
                      <select id="service" name="service" value={form.service} onChange={handleChange} className={cn(inputCls('service'),'cursor-pointer dark:bg-neutral-800')}>
                        <option value="">Select a service…</option>
                        {serviceOptions.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-[700] tracking-[0.07em] uppercase text-neutral-400" htmlFor="message">Message *</label>
                      <textarea id="message" name="message" required placeholder="Describe your project, volume, timeline, or any questions…" rows={5} value={form.message} onChange={handleChange} className={cn(inputCls('message'),'resize-y min-h-[120px] leading-relaxed')}/>
                      {fe('message') && <span className="text-xs text-red-500 font-[500]">{fe('message')}</span>}
                    </div>
                    {status==='error' && (
                      <div className="flex items-start gap-2.5 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4 text-sm text-red-700 dark:text-red-400">
                        <AlertCircle size={15} className="flex-shrink-0 mt-0.5"/>
                        {serverError || 'Something went wrong. Please email us directly at bobby@etdatasolutions.com'}
                      </div>
                    )}
                    <button type="submit" disabled={status==='sending'}
                      className="w-full inline-flex items-center justify-center gap-2 text-sm font-[700] text-white bg-brand-500 hover:bg-brand-600 disabled:opacity-60 px-6 py-3.5 rounded-xl transition-all hover:shadow-brand hover:-translate-y-px active:scale-[0.98]">
                      {status==='sending' ? <><Loader2 size={14} className="animate-spin"/>Sending…</> : 'Send Message'}
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
