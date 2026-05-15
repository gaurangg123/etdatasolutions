'use client';
import { useState } from 'react';
import Reveal from '@/components/ui/Reveal';
import styles from './ContactAndFAQ.module.css';

const faqs = [
  {
    q: 'How quickly can you start?',
    a: 'For most engagements, we have a pilot team ready within 72 hours of a scoping call. Your first deliverable arrives within 7 days — guaranteed.',
  },
  {
    q: 'What time zones do you cover?',
    a: 'Our team in Indore, India covers US (EST/PST), UK (GMT), Canadian, and Australian business hours. We work when you work — no overnight gaps.',
  },
  {
    q: 'How do you handle NDAs and data security?',
    a: 'All team members sign comprehensive NDAs. We operate under ISO 27001-aligned practices with role-based access control and no data stored on personal devices.',
  },
  {
    q: 'What\'s the 30-day guarantee?',
    a: 'If your first 30 days of deliverables don\'t meet the accuracy and turnaround standards agreed at the start, you get a full refund. No clauses, no negotiation.',
  },
];

const metaItems = [
  { label: 'Headquartered',  val: 'Indore, India' },
  { label: 'Serving',        val: 'US · UK · CA · AU' },
  { label: 'Reply time',     val: 'Within 4 hours' },
  { label: 'First delivery', val: 'Within 7 days' },
];

export default function ContactAndFAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="contact" className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.grid}>
          {/* ── Left: pitch + contact ── */}
          <div className={styles.left}>
            <Reveal>
              <span className="eyebrow">Get in touch</span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className={styles.heading}>
                Ready to offload the work that&rsquo;s slowing you down?
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className={styles.lede}>
                30-minute scoping call. No sales script.
                Free pilot brief at the end — yours to keep with or without us.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className={styles.actions}>
                <a
                  href="https://calendly.com/etdatasolutions/intro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-lg"
                >
                  Book a free consultation
                  <span>&rarr;</span>
                </a>
                <a href="mailto:hello@etdatasolutions.com" className="btn btn-secondary btn-lg">
                  Email us
                </a>
              </div>
            </Reveal>

            <Reveal delay={260}>
              <div className={styles.metaGrid}>
                {metaItems.map((m) => (
                  <div key={m.label} className={styles.metaCard}>
                    <span className={styles.metaLabel}>{m.label}</span>
                    <span className={styles.metaVal}>{m.val}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* ── Right: FAQ accordion ── */}
          <div className={styles.right}>
            <Reveal delay={100}>
              <span className={styles.rightLabel}>Common questions</span>
            </Reveal>
            <div className={styles.faqList}>
              {faqs.map((f, i) => (
                <Reveal key={f.q} delay={160 + i * 60}>
                  <div className={styles.faq}>
                    <button
                      className={styles.faqQ}
                      onClick={() => setOpen(open === i ? null : i)}
                      aria-expanded={open === i}
                    >
                      <span>{f.q}</span>
                      <span className={`${styles.faqIcon} ${open === i ? styles.faqIconOpen : ''}`}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M2 6h8M6 2v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      </span>
                    </button>
                    <div className={`${styles.faqA} ${open === i ? styles.faqAOpen : ''}`}>
                      <div className={styles.faqInner}>
                        <p>{f.a}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
