'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { services } from '@/lib/content';

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function ContactForm() {
  const sp = useSearchParams();
  const preset = sp?.get('service') || '';

  const [form, setForm] = useState({
    name: '', email: '', company: '', service: preset, message: '',
  });
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (preset && !form.service) setForm((f) => ({ ...f, service: preset }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [preset]);

  const update = (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm({ ...form, [k]: e.target.value });

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus('error');
        setErrorMsg(data.error || 'Something went wrong. Please try again.');
        return;
      }
      setStatus('success');
      setForm({ name: '', email: '', company: '', service: '', message: '' });
    } catch {
      setStatus('error');
      setErrorMsg('Network error. Please try again.');
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-10">
        <div className="mx-auto grid place-items-center w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 mb-4">
          <CheckCircle2 className="w-7 h-7" />
        </div>
        <h3 className="text-xl font-semibold">Message sent.</h3>
        <p className="mt-2 text-ink-600">We’ll be in touch within one business day.</p>
        <button onClick={() => setStatus('idle')} className="btn-secondary mt-6">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="label" htmlFor="name">Name *</label>
          <input id="name" className="input" required maxLength={100}
                 value={form.name} onChange={update('name')} />
        </div>
        <div>
          <label className="label" htmlFor="email">Email *</label>
          <input id="email" type="email" className="input" required maxLength={254}
                 value={form.email} onChange={update('email')} />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="label" htmlFor="company">Company</label>
          <input id="company" className="input" maxLength={200}
                 value={form.company} onChange={update('company')} />
        </div>
        <div>
          <label className="label" htmlFor="service">Service interested in</label>
          <select id="service" className="input" value={form.service} onChange={update('service')}>
            <option value="">Select a service…</option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>{s.title}</option>
            ))}
            <option value="Not sure yet">Not sure yet</option>
          </select>
        </div>
      </div>

      <div>
        <label className="label" htmlFor="message">Message *</label>
        <textarea id="message" className="input min-h-[140px] resize-y" required minLength={20} maxLength={5000}
                  value={form.message} onChange={update('message')}
                  placeholder="What would you like us to help with?" />
        <p className="mt-1 text-xs text-ink-400">Minimum 20 characters.</p>
      </div>

      {status === 'error' && (
        <div className="flex items-start gap-2 rounded-lg bg-red-50 text-red-700 border border-red-200 px-3 py-2 text-sm">
          <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      <button type="submit" disabled={status === 'sending'} className="btn-primary w-full justify-center disabled:opacity-60">
        {status === 'sending' ? 'Sending…' : <>Send message <Send className="w-4 h-4" /></>}
      </button>
    </form>
  );
}
