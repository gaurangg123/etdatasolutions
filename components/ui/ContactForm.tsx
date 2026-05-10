'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './ContactForm.module.css';
import Spinner from './Spinner';

interface FormState { name: string; email: string; company: string; service: string; message: string; }
interface Errors { [k: string]: string; }
const INIT: FormState = { name:'', email:'', company:'', service:'', message:'' };

const CONFETTI_COLORS = ['#E84A0C','#FF6B35','#0D9488','#2563EB','#FBBF24','#EC4899'];

function Confetti() {
  const pieces = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
    x: (Math.random() - 0.5) * 320,
    y: -(Math.random() * 200 + 60),
    rot: Math.random() * 720 - 360,
    scale: Math.random() * 0.6 + 0.5,
    delay: Math.random() * 0.3,
  }));
  return (
    <div className={styles.confettiWrap} aria-hidden>
      {pieces.map(p => (
        <motion.div key={p.id} className={styles.confettiPiece}
          style={{ background: p.color, left: '50%', top: '40%' }}
          initial={{ x: 0, y: 0, rotate: 0, scale: 0, opacity: 1 }}
          animate={{ x: p.x, y: p.y, rotate: p.rot, scale: p.scale, opacity: 0 }}
          transition={{ duration: 1.1, delay: p.delay, ease: [0.22, 1, 0.36, 1] }}
        />
      ))}
    </div>
  );
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(INIT);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle');
  const [serverError, setServerError] = useState('');

  const validate = (): Errors => {
    const e: Errors = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email';
    if (form.message.trim().length < 20) e.message = 'Message must be at least 20 characters';
    return e;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors(er => { const n={...er}; delete n[e.target.name]; return n; });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setStatus('loading'); setServerError('');
    try {
      const res = await fetch('/api/contact', {
        method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(form),
      });
      if (!res.ok) { const d = await res.json().catch(()=>({})); throw new Error(d.error || 'Something went wrong'); }
      setStatus('success');
    } catch(err) {
      setStatus('error');
      setServerError(err instanceof Error ? err.message : 'Failed to send. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className={styles.successState}>
        <Confetti />
        <motion.div className={styles.successIcon}
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 18 }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6L9 17l-5-5"/>
          </svg>
        </motion.div>
        <motion.div initial={{ opacity:0, y:12 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.3 }}>
          <h3 className={styles.successTitle}>Message sent!</h3>
          <p className={styles.successSub}>Bobby usually replies within a few hours.</p>
        </motion.div>
      </div>
    );
  }

  const disabled = status === 'loading';
  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="name">Name <span className={styles.req}>*</span></label>
          <input id="name" name="name" type="text" placeholder="Your name" autoComplete="name"
            value={form.name} onChange={handleChange} disabled={disabled}
            aria-invalid={!!errors.name} />
          {errors.name && <span className={styles.error}>{errors.name}</span>}
        </div>
        <div className={styles.field}>
          <label htmlFor="email">Email <span className={styles.req}>*</span></label>
          <input id="email" name="email" type="email" placeholder="you@company.com" autoComplete="email"
            value={form.email} onChange={handleChange} disabled={disabled}
            aria-invalid={!!errors.email} />
          {errors.email && <span className={styles.error}>{errors.email}</span>}
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="company">Company</label>
          <input id="company" name="company" type="text" placeholder="Company (optional)" autoComplete="organization"
            value={form.company} onChange={handleChange} disabled={disabled} />
        </div>
        <div className={styles.field}>
          <label htmlFor="service">Service of interest</label>
          <select id="service" name="service" value={form.service} onChange={handleChange} disabled={disabled}>
            <option value="">Select a service</option>
            <option>Staffing &amp; VAs</option>
            <option>Data Entry</option>
            <option>Manual QA</option>
            <option>Data Engineering</option>
            <option>Multiple</option>
            <option>Not sure</option>
          </select>
        </div>
      </div>
      <div className={styles.field}>
        <label htmlFor="message">Message <span className={styles.req}>*</span></label>
        <textarea id="message" name="message" rows={5} placeholder="Tell us what's slowing your team down"
          value={form.message} onChange={handleChange} disabled={disabled}
          aria-invalid={!!errors.message} />
        {errors.message && <span className={styles.error}>{errors.message}</span>}
      </div>
      {serverError && <p className={styles.serverError}>{serverError}</p>}
      <button type="submit" className={styles.submit} disabled={disabled}>
        {disabled ? <><Spinner size="sm" label="" /> Sending…</> : 'Send message →'}
      </button>
    </form>
  );
}
