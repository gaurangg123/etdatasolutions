'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import PageHero from '@/components/shared/PageHero'
import Container from '@/components/ui/Container'
import AnimateIn from '@/components/ui/AnimateIn'
import { Mail, Phone, Globe, MapPin, Clock, CheckCircle, AlertTriangle, MessageSquare, ChevronDown, ArrowRight, Timer } from 'lucide-react'
import { cn } from '@/lib/utils'

const serviceOptions = ['Staffing, VA & Recruitment','Data & Excel Automation','QA Testing — App & Web','Data Engineering & Visualizations','Multiple Services','Not sure yet']
type FormState = { name:string; email:string; company:string; phone:string; service:string; message:string; _hp:string }
const EMPTY: FormState = { name:'', email:'', company:'', phone:'', service:'', message:'', _hp:'' }

const inputBase = 'w-full bg-[#fafaf9] dark:bg-ink-800 border rounded-lg px-4 text-sm text-ink-900 dark:text-ink-100 placeholder:text-ink-400 dark:placeholder:text-ink-600 outline-none transition-all duration-200 h-12'
const inputOk   = 'border-ink-200 dark:border-ink-700 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 focus:bg-white dark:focus:bg-ink-900'
const inputErr  = 'border-red-400 dark:border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/15'

const contactDetails = [
  { icon:Mail,   label:'Email',        val:'bobby@etdatasolutions.com', href:'mailto:bobby@etdatasolutions.com', iconBg:'bg-brand-50 dark:bg-brand-500/10',   iconText:'text-brand-500', iconBorder:'border-brand-100 dark:border-brand-500/20' },
  { icon:Phone,  label:'Phone (US)',   val:'+1-302-357-9776',           href:'tel:+13023579776',                iconBg:'bg-sky-50 dark:bg-sky-500/10',       iconText:'text-sky-500',   iconBorder:'border-sky-100 dark:border-sky-500/20' },
  { icon:Phone,  label:'Phone (IN)',   val:'+91 62653 48189',           href:'tel:+916265348189',               iconBg:'bg-sky-50 dark:bg-sky-500/10',       iconText:'text-sky-500',   iconBorder:'border-sky-100 dark:border-sky-500/20' },
  { icon:Globe,  label:'Website',      val:'etdatasolutions.com',       href:'https://etdatasolutions.com',     iconBg:'bg-violet-50 dark:bg-violet-500/10', iconText:'text-violet-500',iconBorder:'border-violet-100 dark:border-violet-500/20' },
  { icon:MapPin, label:'Based in',     val:'India — Serving Globally',  href:null,                             iconBg:'bg-emerald-50 dark:bg-emerald-500/10',iconText:'text-emerald-500',iconBorder:'border-emerald-100 dark:border-emerald-500/20' },
  { icon:Clock,  label:'Availability', val:'24/7 — Any timezone',       href:null,                             iconBg:'bg-amber-50 dark:bg-amber-500/10',   iconText:'text-amber-500', iconBorder:'border-amber-100 dark:border-amber-500/20' },
]

function ContactForm() {
  const [form, setForm]     = useState<FormState>(EMPTY)
  const [status, setStatus] = useState<'idle'|'sending'|'sent'|'error'>('idle')
  const [fieldErrors, setFE]= useState<Record<string,string[]>>({})
  const [serverError, setSE]= useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) => {
    setForm(p => ({...p,[e.target.name]:e.target.value}))
    if (fieldErrors[e.target.name]) setFE(p => {const n={...p};delete n[e.target.name];return n})
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); setStatus('sending'); setFE({}); setSE('')
    try {
      const res = await fetch('/api/contact',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(form)})
      const data = await res.json()
      if (data.success) {setStatus('sent');return}
      if (res.status===422 && data.fields) {setFE(data.fields);setStatus('idle');return}
      throw new Error(data.error ?? 'Unexpected error')
    } catch(err) {setSE(err instanceof Error?err.message:'Something went wrong.');setStatus('error')}
  }
  const fe  = (n:string)=>fieldErrors[n]?.[0]
  const cls = (n:string)=>cn(inputBase, fe(n)?inputErr:inputOk)

  if (status === 'sent') return (
    <div className="bg-white dark:bg-ink-900 border border-ink-200 dark:border-ink-800 rounded-3xl shadow-card overflow-hidden">
      <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.5,ease:[0.22,1,0.36,1]}}
        className="flex flex-col items-center justify-center gap-5 py-20 text-center px-8">
        <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center border-2 border-emerald-400/40">
          <CheckCircle className="w-8 h-8 text-emerald-500" />
        </div>
        <div><h3 className="text-2xl font-[750] text-ink-900 dark:text-ink-100 mb-2">Message sent!</h3><p className="text-ink-500 dark:text-ink-400 max-w-sm leading-relaxed">We&apos;ll reply within 24 hours with a scoped proposal and clear pricing.</p></div>
        <div className="flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400 font-[500] bg-emerald-50 dark:bg-emerald-500/10 px-4 py-2 rounded-full border border-emerald-200 dark:border-emerald-500/20">
          <Clock className="w-4 h-4" /> Average response time: under 3 hours
        </div>
        <button onClick={()=>{setStatus('idle');setForm(EMPTY)}} className="text-sm font-[500] text-ink-500 underline underline-offset-2 hover:text-brand-500 transition-colors mt-1">Send another message</button>
      </motion.div>
    </div>
  )

  return (
    <div className="bg-white dark:bg-ink-900 border border-ink-200 dark:border-ink-800 rounded-3xl overflow-hidden shadow-card">
      <div className="px-7 py-5 border-b border-ink-100 dark:border-ink-800 bg-ink-50/60 dark:bg-ink-800/30">
        <h3 className="text-base font-[750] text-ink-900 dark:text-ink-100">Send us a message</h3>
        <p className="text-sm text-ink-400 dark:text-ink-500 mt-0.5">We respond to all enquiries within 24 hours.</p>
      </div>
      <form onSubmit={handleSubmit} noValidate className="px-7 py-6 flex flex-col gap-5">
        <div style={{display:'none'}} aria-hidden><input name="_hp" type="text" tabIndex={-1} autoComplete="off" value={form._hp} onChange={handleChange} /></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[{id:'name',label:'Full Name',type:'text',ph:'Your full name',ac:'name',required:true},{id:'email',label:'Email Address',type:'email',ph:'you@company.com',ac:'email',required:true}].map(f=>(
            <div key={f.id}>
              <label htmlFor={f.id} className="block text-[0.72rem] font-[700] tracking-[0.07em] uppercase text-ink-500 dark:text-ink-400 mb-1.5">{f.label} {f.required&&<span className="text-brand-500">*</span>}</label>
              <input id={f.id} name={f.id} type={f.type} required={f.required} placeholder={f.ph} autoComplete={f.ac} value={(form as Record<string,string>)[f.id]} onChange={handleChange} className={cls(f.id)} />
              {fe(f.id)&&<p className="mt-1 text-xs text-red-500 font-[500]">{fe(f.id)}</p>}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[{id:'company',label:'Company',type:'text',ph:'Your company name',ac:'organization'},{id:'phone',label:'Phone',type:'tel',ph:'+1 000 000 0000',ac:'tel'}].map(f=>(
            <div key={f.id}>
              <label htmlFor={f.id} className="block text-[0.72rem] font-[700] tracking-[0.07em] uppercase text-ink-500 dark:text-ink-400 mb-1.5">{f.label}</label>
              <input id={f.id} name={f.id} type={f.type} placeholder={f.ph} autoComplete={f.ac} value={(form as Record<string,string>)[f.id]} onChange={handleChange} className={cls(f.id)} />
            </div>
          ))}
        </div>
        <div>
          <label htmlFor="service" className="block text-[0.72rem] font-[700] tracking-[0.07em] uppercase text-ink-500 dark:text-ink-400 mb-1.5">Service of Interest</label>
          <div className="relative">
            <select id="service" name="service" value={form.service} onChange={handleChange} className={cn(cls('service'),'cursor-pointer appearance-none pr-10 dark:bg-ink-800')}>
              <option value="">Select a service…</option>
              {serviceOptions.map(s=><option key={s} value={s}>{s}</option>)}
            </select>
            <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-ink-400"><ChevronDown size={16}/></div>
          </div>
        </div>
        <div>
          <label htmlFor="message" className="block text-[0.72rem] font-[700] tracking-[0.07em] uppercase text-ink-500 dark:text-ink-400 mb-1.5">Message <span className="text-brand-500">*</span></label>
          <textarea id="message" name="message" required rows={5} placeholder="Describe your project, volume, timeline, or any questions…"
            value={form.message} onChange={handleChange}
            className={cn('w-full bg-[#fafaf9] dark:bg-ink-800 border rounded-lg px-4 py-3 text-sm text-ink-900 dark:text-ink-100 placeholder:text-ink-400 dark:placeholder:text-ink-600 outline-none transition-all duration-200 resize-y min-h-[120px] leading-relaxed',
              fe('message')?inputErr:'border-ink-200 dark:border-ink-700 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 focus:bg-white dark:focus:bg-ink-900')} />
          {fe('message')&&<p className="mt-1 text-xs text-red-500 font-[500]">{fe('message')}</p>}
        </div>
        {status==='error'&&<div className="flex items-start gap-2.5 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4"><AlertTriangle size={15} className="text-red-500 flex-shrink-0 mt-0.5"/><p className="text-sm text-red-700 dark:text-red-400">{serverError||'Something went wrong. Please email us at bobby@etdatasolutions.com'}</p></div>}
        <button type="submit" disabled={status==='sending'}
          className={`group w-full inline-flex items-center justify-center gap-2 text-sm font-[700] text-white bg-brand-500 hover:bg-brand-600 px-6 rounded-xl transition-all duration-200 hover:shadow-brand hover:-translate-y-px active:scale-[0.97] shine h-12 ${status==='sending'?'opacity-80 cursor-not-allowed':''}`}>
          {status==='sending'
            ? <><svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>Sending…</>
            : <><span>Send Message</span><ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5"/></>}
        </button>
      </form>
    </div>
  )
}

const Divider = () => <div className="h-px bg-ink-200 dark:bg-ink-800" />

export default function ContactPage() {
  return (
    <>
      <PageHero
        breadcrumb={[{label:'Home',href:'/'},{label:'Contact'}]}
        title={<>Let&apos;s build something<br /><span className="text-gradient">great together.</span></>}
        subtitle="Tell us your requirement — we'll respond within 24 hours with a scoped proposal and clear pricing."
      />

      <Divider />

      <section id="form" className="py-16 md:py-22 bg-white dark:bg-ink-950">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-10">

            {/* Left — contact details */}
            <div className="flex flex-col gap-4">
              <AnimateIn>
                <div className="bg-white dark:bg-ink-900 border border-ink-200 dark:border-ink-800 rounded-3xl overflow-hidden shadow-card">
                  <div className="flex items-center gap-2 px-4 py-3.5 bg-ink-50 dark:bg-ink-800/80 border-b border-ink-200 dark:border-ink-700">
                    <div className="flex gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]"/><div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]"/><div className="w-2.5 h-2.5 rounded-full bg-[#28c840]"/></div>
                    <span className="ml-2 text-xs font-[650] text-ink-400 dark:text-ink-500">Contact Details</span>
                  </div>
                  <div className="divide-y divide-ink-100 dark:divide-ink-800">
                    {contactDetails.map(item => (
                      <div key={item.label} className="flex items-center gap-3 px-4 py-3.5 hover:bg-ink-50 dark:hover:bg-ink-800/40 transition-colors">
                        <div className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 border ${item.iconBg} ${item.iconText} ${item.iconBorder}`}><item.icon size={14}/></div>
                        <div className="min-w-0">
                          <p className="text-[0.62rem] font-[700] tracking-[0.1em] uppercase text-ink-400 dark:text-ink-500 mb-0.5">{item.label}</p>
                          {item.href
                            ? <a href={item.href} className="text-sm font-[500] text-ink-700 dark:text-ink-300 hover:text-brand-500 transition-colors truncate block underline-offset-2 hover:underline">{item.val}</a>
                            : <span className="text-sm font-[500] text-ink-700 dark:text-ink-300 truncate block">{item.val}</span>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateIn>
              <AnimateIn delay={0.1}>
                <div className="flex items-start gap-3 bg-brand-50 dark:bg-brand-500/10 border border-brand-200 dark:border-brand-500/20 rounded-2xl p-4">
                  <MessageSquare size={16} className="text-brand-500 flex-shrink-0 mt-0.5" />
                  <div><p className="text-sm font-[700] text-ink-900 dark:text-ink-100 mb-0.5">We respond in 24 hours</p><p className="text-xs text-ink-500 dark:text-ink-400">All enquiries receive a personalized response — no automated replies.</p></div>
                </div>
              </AnimateIn>
            </div>

            {/* Right — form */}
            <AnimateIn delay={0.12}><ContactForm /></AnimateIn>
          </div>
        </Container>
      </section>

      <Divider />

      {/* Free audit CTA card */}
      <section id="audit" className="py-14 md:py-18 bg-ink-50 dark:bg-[#0a0908]">
        <Container>
          <AnimateIn>
            <div className="max-w-2xl mx-auto bg-white dark:bg-ink-900 border border-brand-200 dark:border-brand-500/25 rounded-3xl p-8 md:p-10 text-center shadow-card">
              <div className="w-12 h-12 rounded-2xl bg-brand-50 dark:bg-brand-500/10 border border-brand-100 dark:border-brand-500/20 flex items-center justify-center text-brand-500 mx-auto mb-5">
                <Timer size={22} />
              </div>
              <h3 className="text-xl font-[800] tracking-[-0.03em] text-ink-900 dark:text-ink-100 mb-3">Prefer a structured conversation first?</h3>
              <p className="text-sm text-ink-500 dark:text-ink-400 leading-relaxed mb-6 max-w-md mx-auto">
                Book a free 30-minute operations audit — we&apos;ll map your workflow, identify 3 bottlenecks, and give you a cost-savings estimate.
              </p>
              <a href="mailto:bobby@etdatasolutions.com?subject=Free%20Audit%20Request"
                className="inline-flex items-center gap-2 text-sm font-[700] text-white bg-brand-500 hover:bg-brand-600 px-6 py-3 rounded-xl transition-all hover:-translate-y-px hover:shadow-brand shine">
                Get my free audit <ArrowRight size={14} />
              </a>
            </div>
          </AnimateIn>
        </Container>
      </section>
    </>
  )
}
