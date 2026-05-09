'use client';
import { useState } from 'react';
import Reveal from '@/components/ui/Reveal';
import styles from './FAQ.module.css';

const faqs = [
  { q: 'How quickly can you start?', a: 'For most engagements, we can have a pilot team ready within 72 hours of scoping call. First deliverable is in your hands within 7 days — guaranteed.' },
  { q: 'What time zones do you cover?', a: 'Our team in Indore, India covers US (EST/PST), UK (GMT), Canadian, and Australian business hours. We work when you work — no waiting until the next morning.' },
  { q: 'How do you handle NDAs and data security?', a: 'All team members sign comprehensive NDAs before any engagement begins. We operate under ISO 27001-aligned data handling practices, with role-based access control and no data stored on personal devices.' },
  { q: 'Can I start with just one service?', a: 'Absolutely. Most clients start with a single service — often Data Entry or a QA engagement — and expand once they\'ve seen the quality. There\'s no minimum commitment across multiple services.' },
  { q: 'What\'s the 30-day guarantee?', a: 'If your first 30 days of deliverables don\'t meet the accuracy and turnaround standards we agreed on at the start, you receive a full refund. No clauses, no negotiations. We\'ve never had to invoke it.' },
  { q: 'How do you measure and report quality?', a: 'Every deliverable goes through a two-pass review before reaching you. We provide weekly reports showing accuracy rates, turnaround times, error logs, and output volume — all in a format you can audit independently.' },
  { q: 'What\'s your pricing model?', a: 'We price on a monthly retainer basis, sized to your volume. For one-off projects we offer flat-rate scoping. Pricing starts from $300/mo for Data Entry, $400/mo for VA work, and $600/mo for QA. Book a call for a custom quote.' },
  { q: 'What happens if I want to scale up or down?', a: 'You can scale the team up or down with two weeks\' notice. We maintain a bench of vetted specialists across all four practices, so scaling up doesn\'t mean a new hiring cycle.' },
];

function Item({ faq, idx }: { faq: typeof faqs[0]; idx: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`${styles.item} ${open ? styles.open : ''}`}>
      <button className={styles.question} onClick={() => setOpen(!open)} aria-expanded={open}>
        <span>{faq.q}</span>
        <svg className={styles.chevron} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <path d="M6 9l6 6 6-6"/>
        </svg>
      </button>
      <div className={styles.answerWrap} style={{ maxHeight: open ? '300px' : '0' }}>
        <p className={styles.answer}>{faq.a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="section section-alt" id="faq">
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.left}>
            <Reveal><div className="eyebrow">FAQ</div></Reveal>
            <Reveal delay={0.07}><h2>Questions we <em>always get.</em></h2></Reveal>
            <Reveal delay={0.14}><p>Everything you need to know before reaching out. Still have questions? Bobby replies within 3 hours.</p></Reveal>
            <Reveal delay={0.21}>
              <a href="/contact" className={`btn-primary ${styles.faqCta}`}>Ask us directly →</a>
            </Reveal>
          </div>
          <div className={styles.right}>
            {faqs.map((faq, i) => (
              <Reveal key={i} delay={i * 0.04}>
                <Item faq={faq} idx={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
