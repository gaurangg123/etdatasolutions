'use client'

import { useState } from 'react'
import { useReveal } from '@/lib/useReveal'
import type { ApiResponse } from '@/lib/validation'
import styles from './contact.module.css'

const serviceOptions = [
  'Staffing, VA & Recruitment',
  'Data & Excel Automation',
  'QA Testing — App & Web',
  'Data Engineering & Visualizations',
  'Multiple Services',
  'Not sure yet',
] as const

type FormState = {
  name: string; email: string; company: string
  phone: string; service: string; message: string
  _hp: string   // honeypot — must stay hidden
}

const EMPTY: FormState = {
  name: '', email: '', company: '', phone: '', service: '', message: '', _hp: '',
}

export default function ContactPage() {
  useReveal()

  const [form, setForm]           = useState<FormState>(EMPTY)
  const [status, setStatus]       = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [fieldErrors, setFieldErrors] = useState<Record<string, string[]>>({})
  const [serverError, setServerError] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    // Clear field error on change
    if (fieldErrors[e.target.name]) {
      setFieldErrors(prev => { const n = { ...prev }; delete n[e.target.name]; return n })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    setFieldErrors({})
    setServerError('')

    try {
      const res  = await fetch('/api/contact', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(form),
      })
      const data: ApiResponse = await res.json()

      if (data.success) {
        setStatus('sent')
        return
      }

      // Structured validation errors
      if (res.status === 422 && 'fields' in data && data.fields) {
        setFieldErrors(data.fields)
        setStatus('idle')
        return
      }

      throw new Error(data.error ?? 'Unexpected error')
    } catch (err) {
      setServerError(err instanceof Error ? err.message : 'Something went wrong.')
      setStatus('error')
    }
  }

  const fe = (name: string) => fieldErrors[name]?.[0]

  return (
    <>
      <section className={styles.pageHeader}>
        <div className={styles.headerBg} aria-hidden />
        <div className="container">
          <span className="eyebrow reveal">Contact Us</span>
          <h1 className={`${styles.headerH1} reveal reveal-delay-1`}>
            Let&apos;s build something<br />
            <span className={styles.hlAccent}>great together</span>
          </h1>
          <p className={`${styles.headerSub} reveal reveal-delay-2`}>
            Whether you have an ongoing requirement or a single assignment —
            tell us what you need and we&apos;ll respond within 24 hours.
          </p>
        </div>
      </section>

      <div className="divider" />

      <section className="section" id="form">
        <div className="container">
          <div className={styles.layout}>

            {/* ── Info column ── */}
            <div className={styles.infoCol}>
              <div className={`${styles.infoCard} reveal`}>
                <div className={styles.infoCardHead}>
                  <div className={styles.scDot} style={{ background: '#ff5f57' }} />
                  <div className={styles.scDot} style={{ background: '#febc2e' }} />
                  <div className={styles.scDot} style={{ background: '#28c840' }} />
                  <span className={styles.scHeadText}>Contact Details</span>
                </div>
                <div className={styles.infoRows}>
                  {[
                    { icon: 'mail',  label: 'Email',        value: 'bobby@etdatasolutions.com', href: 'mailto:bobby@etdatasolutions.com' },
                    { icon: 'phone', label: 'Phone (US)',    value: '+1-302-357-9776',           href: 'tel:+13023579776'                },
                    { icon: 'phone', label: 'Phone (IN)',    value: '+91 62653 48189',            href: 'tel:+916265348189'               },
                    { icon: 'globe', label: 'Website',       value: 'etdatasolutions.com',        href: 'https://etdatasolutions.com'     },
                    { icon: 'map',   label: 'Based in',      value: 'India — Serving Globally',   href: null                             },
                    { icon: 'clock', label: 'Availability',  value: '24 / 7 — Any timezone',      href: null                             },
                  ].map(item => (
                    <div key={item.label} className={styles.infoRow}>
                      <div className={styles.infoIco}>
                        {item.icon === 'mail'  && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>}
                        {item.icon === 'phone' && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.58 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z"/></svg>}
                        {item.icon === 'globe' && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>}
                        {item.icon === 'map'   && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>}
                        {item.icon === 'clock' && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>}
                      </div>
                      <div className={styles.infoRowBody}>
                        <span className={styles.infoRowLabel}>{item.label}</span>
                        {item.href
                          ? <a href={item.href} className={styles.infoRowVal}>{item.value}</a>
                          : <span className={styles.infoRowValPlain}>{item.value}</span>
                        }
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`${styles.servicesQuick} reveal reveal-delay-1`}>
                <p className={styles.sqHead}>Services We Offer</p>
                <div className={styles.sqList}>
                  {['Staffing & VA', 'RPO', 'Data Entry', 'Excel Automation',
                    'Manual QA Testing', 'Web & App Testing', 'Snowflake Lakehouse',
                    'Databricks', 'Microsoft Fabric', 'Power BI', 'Tableau'].map(s => (
                    <span key={s} className={styles.sqTag}>{s}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Form column ── */}
            <div className={`${styles.formCol} reveal reveal-delay-1`}>

              {status === 'sent' ? (
                <div className={styles.successBox}>
                  <div className={styles.successIcon}>
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <h3 className={styles.successTitle}>Message sent!</h3>
                  <p className={styles.successSub}>
                    Thanks for reaching out. We&apos;ll get back to you within 24 hours at{' '}
                    <strong>{form.email}</strong>.
                  </p>
                  <button className="btn-secondary"
                    onClick={() => { setStatus('idle'); setForm(EMPTY) }}>
                    Send another message
                  </button>
                </div>
              ) : (
                <form className={styles.form} onSubmit={handleSubmit} noValidate>
                  <div className={styles.formHead}>
                    <h2 className={styles.formTitle}>Send us a message</h2>
                    <p className={styles.formSub}>We respond to all enquiries within 24 hours.</p>
                  </div>

                  <div className={styles.formBody}>
                    {/* Honeypot — hidden from real users, filled by bots */}
                    <div style={{ display: 'none' }} aria-hidden="true">
                      <label htmlFor="_hp">Leave this empty</label>
                      <input
                        id="_hp"
                        name="_hp"
                        type="text"
                        tabIndex={-1}
                        autoComplete="off"
                        value={form._hp}
                        onChange={handleChange}
                      />
                    </div>

                    <div className={styles.row2}>
                      <div className={styles.field}>
                        <label className={styles.label} htmlFor="name">Full Name *</label>
                        <input id="name" name="name" type="text" required
                          placeholder="Your full name" autoComplete="name"
                          value={form.name} onChange={handleChange}
                          className={`${styles.input} ${fe('name') ? styles.inputError : ''}`}
                          aria-describedby={fe('name') ? 'name-err' : undefined}
                        />
                        {fe('name') && <span id="name-err" className={styles.fieldError}>{fe('name')}</span>}
                      </div>
                      <div className={styles.field}>
                        <label className={styles.label} htmlFor="email">Email Address *</label>
                        <input id="email" name="email" type="email" required
                          placeholder="you@company.com" autoComplete="email"
                          value={form.email} onChange={handleChange}
                          className={`${styles.input} ${fe('email') ? styles.inputError : ''}`}
                          aria-describedby={fe('email') ? 'email-err' : undefined}
                        />
                        {fe('email') && <span id="email-err" className={styles.fieldError}>{fe('email')}</span>}
                      </div>
                    </div>

                    <div className={styles.row2}>
                      <div className={styles.field}>
                        <label className={styles.label} htmlFor="company">Company</label>
                        <input id="company" name="company" type="text"
                          placeholder="Your company name" autoComplete="organization"
                          value={form.company} onChange={handleChange} className={styles.input}
                        />
                      </div>
                      <div className={styles.field}>
                        <label className={styles.label} htmlFor="phone">Phone</label>
                        <input id="phone" name="phone" type="tel"
                          placeholder="+1 000 000 0000" autoComplete="tel"
                          value={form.phone} onChange={handleChange} className={styles.input}
                        />
                      </div>
                    </div>

                    <div className={styles.fieldFull}>
                      <label className={styles.label} htmlFor="service">Service of Interest</label>
                      <select id="service" name="service"
                        value={form.service} onChange={handleChange} className={styles.select}>
                        <option value="">Select a service…</option>
                        {serviceOptions.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>

                    <div className={styles.fieldFull}>
                      <label className={styles.label} htmlFor="message">Message *</label>
                      <textarea id="message" name="message" required
                        placeholder="Describe your project, volume, timeline, or any questions…"
                        rows={5} value={form.message} onChange={handleChange}
                        className={`${styles.textarea} ${fe('message') ? styles.inputError : ''}`}
                        aria-describedby={fe('message') ? 'msg-err' : undefined}
                      />
                      {fe('message') && <span id="msg-err" className={styles.fieldError}>{fe('message')}</span>}
                    </div>

                    {/* Server-level error (network, rate-limit, etc) */}
                    {status === 'error' && (
                      <div className={styles.formAlert} role="alert">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10"/>
                          <line x1="12" y1="8" x2="12" y2="12"/>
                          <line x1="12" y1="16" x2="12.01" y2="16"/>
                        </svg>
                        {serverError || 'Something went wrong. Please email us directly at bobby@etdatasolutions.com'}
                      </div>
                    )}

                    <button
                      type="submit"
                      className={`btn-primary ${styles.submitBtn}`}
                      disabled={status === 'sending'}
                      aria-disabled={status === 'sending'}
                    >
                      {status === 'sending' ? (
                        <><span className={styles.spinner} aria-hidden />Sending…</>
                      ) : (
                        <>Send Message
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2.5">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                          </svg>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
