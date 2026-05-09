'use client';
import { useState } from 'react';
import styles from './ContactForm.module.css';
import Spinner from './Spinner';

interface FormState {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
}
interface Errors { [key: string]: string; }

const initialState: FormState = { name: '', email: '', company: '', service: '', message: '' };

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle');
  const [serverError, setServerError] = useState('');

  const validate = (): Errors => {
    const e: Errors = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email address';
    if (form.message.trim().length < 20) e.message = 'Message must be at least 20 characters';
    return e;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors(er => { const n = {...er}; delete n[e.target.name]; return n; });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setStatus('loading'); setServerError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Something went wrong');
      }
      setStatus('success');
    } catch (err) {
      setStatus('error');
      setServerError(err instanceof Error ? err.message : 'Failed to send. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className={styles.success}>
        <div className={styles.successIcon}>✓</div>
        <h3>Message sent!</h3>
        <p>Bobby usually replies within a few hours.</p>
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
            aria-invalid={!!errors.name} aria-describedby={errors.name ? 'err-name' : undefined} />
          {errors.name && <span id="err-name" className={styles.error}>{errors.name}</span>}
        </div>
        <div className={styles.field}>
          <label htmlFor="email">Email <span className={styles.req}>*</span></label>
          <input id="email" name="email" type="email" placeholder="you@company.com" autoComplete="email"
            value={form.email} onChange={handleChange} disabled={disabled}
            aria-invalid={!!errors.email} aria-describedby={errors.email ? 'err-email' : undefined} />
          {errors.email && <span id="err-email" className={styles.error}>{errors.email}</span>}
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="company">Company</label>
          <input id="company" name="company" type="text" placeholder="Company name (optional)" autoComplete="organization"
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
          aria-invalid={!!errors.message} aria-describedby={errors.message ? 'err-msg' : undefined} />
        {errors.message && <span id="err-msg" className={styles.error}>{errors.message}</span>}
      </div>

      {serverError && <p className={styles.serverError}>{serverError}</p>}

      <button type="submit" className={styles.submit} disabled={disabled}>
        {disabled ? <><Spinner size="sm" label="" /> Sending…</> : 'Send message →'}
      </button>
    </form>
  );
}
