'use client';
import { useState } from 'react';
import Reveal from '@/components/ui/Reveal';
import styles from './ContactAndFAQ.module.css';

const faqs = [
  {
    q: 'How quickly can you start?',
    a: 'For most engagements, we have a pilot team ready within 72 hours of a scoping call. Your first deliverable arrives within 7 days \u2014 guaranteed.',
  },
  {
    q: 'What time zones do you cover?',
    a: 'Our team in Indore, India covers US (EST/PST), UK (GMT), Canadian, and Australian business hours. We work when you work \u2014 no overnight gaps.',
  },
  {
    q: 'How do you handle NDAs and data security?',
    a: 'All team members sign comprehensive NDAs. We operate under ISO 27001-aligned practices with role-based access control and no data stored on personal devices.',
  },
  {
    q: 'What\u2019s the 30-day guarantee?',
    a: 'If your first 30 days of deliverables don\u2019t meet the accuracy and turnaround standards agreed at the start, you get a full refund. No clauses, no negotiation.',
  },
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
                Let&rsquo;s talk about the work<br />
                <em>that&rsquo;s slowing you down.</em>
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className={styles.lede}>
                30-minute scoping call. No sales script.
                Free pilot brief at the end \u2014 yours to take with or without us.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className={styles.actions}>
                <a
                  href="https://calendly.com/etdatasolutions/intro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Book a consultation
                  <span className="arrow">&rarr;</span>
                </a>
                <a href="mailto:hello@etdatasolutions.com" className="btn-link">
                  hello@etdatasolutions.com
                </a>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <div className={styles.meta}>
                <div>
                  <span className={styles.metaLabel}>Headquartered</span>
                  <span className={styles.metaVal}>Indore, India</span>
                </div>
                <div>
                  <span className={styles.metaLabel}>Serving</span>
                  <span className={styles.metaVal}>US &middot; UK &middot; CA &middot; AU</span>
                </div>
                <div>
                  <span className={styles.metaLabel}>Reply time</span>
                  <span className={styles.metaVal}>Within 4 hours</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* ── Right: FAQ accordion ── */}
          <div className={styles.right}>
            <Reveal delay={120}>
              <span className={styles.rightLabel}>Common questions</span>
            </Reveal>
            <div className={styles.faqList}>
              {faqs.map((f, i) => (
                <Reveal key={f.q} delay={200 + i * 60}>
                  <div className={styles.faq}>
                    <button
                      className={styles.faqQ}
                      onClick={() => setOpen(open === i ? null : i)}
                      aria-expanded={open === i}
                    >
                      <span>{f.q}</span>
                      <span className={`${styles.faqIcon} ${open === i ? styles.faqIconOpen : ''}`}>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M3 7h8M7 3v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
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
