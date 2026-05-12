import type { Metadata } from 'next';
import Reveal from '@/components/ui/Reveal';
import styles from './page.module.css';

export const metadata: Metadata = { title: 'Testimonials' };

const testimonials = [
  {
    quote: "They became part of how our company operates. We stopped thinking of them as a vendor about three months in — they just know the work better than we do at this point.",
    name: 'Sarah Marshall',
    role: 'VP Operations',
    company: 'Logistics SaaS, UK',
    service: 'staffing',
    initials: 'SM',
    color: 'orange',
  },
  {
    quote: "99% accuracy isn't marketing — we audited a quarter's output and found three errors in 14,000 records.",
    name: 'Daniel Rao',
    role: 'CTO',
    company: 'Healthtech, US',
    service: 'data',
    initials: 'DR',
    color: 'teal',
  },
  {
    quote: "Faster than hiring locally, half the cost, and the QA team flagged issues our devs had missed for months.",
    name: 'Emma Nordstrom',
    role: 'Head of Product',
    company: 'Fintech, AU',
    service: 'qa',
    initials: 'EN',
    color: 'blue',
  },
  {
    quote: "The invoice processing work alone paid for the entire engagement within six weeks. I wish we'd done this two years ago.",
    name: 'Michael Reeves',
    role: 'CFO',
    company: 'Apex Freight, US',
    service: 'data',
    initials: 'MR',
    color: 'orange',
  },
  {
    quote: "We handed them a vague brief and they came back with a clean, tested pipeline in ten days. The pipeline has run without incident since.",
    name: 'Lena Fischer',
    role: 'CTO',
    company: 'Flowdesk, DE',
    service: 'engineering',
    initials: 'LF',
    color: 'teal',
  },
  {
    quote: "Our offshore QA team previously missed production issues weekly. Since bringing in ET Data Solutions, we've had four clean releases in a row.",
    name: 'James Okafor',
    role: 'Founder',
    company: 'ScaleOps, UK',
    service: 'qa',
    initials: 'JO',
    color: 'blue',
  },
  {
    quote: "Data quality was our biggest operational bottleneck. It's now our strongest asset. The team cleaned 3 years of records in under a month.",
    name: 'Priya Nair',
    role: 'VP Operations',
    company: 'MediGroup, AU',
    service: 'data',
    initials: 'PN',
    color: 'orange',
  },
];

export default function TestimonialsPage() {
  return (
    <main className="nav-clearance">
      <div className="container">
        <div className={styles.header}>
          <Reveal><div className="eyebrow">Testimonials</div></Reveal>
          <Reveal delay={0.07}><h1>What clients <em>actually say.</em></h1></Reveal>
          <Reveal delay={0.14}>
            <p>7 clients across 4 services and 4 countries. Unedited quotes.</p>
          </Reveal>
        </div>

        <div className={styles.grid}>
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 0.07}>
              <div className={styles.card}>
                <p className={styles.quote}>&ldquo;{t.quote}&rdquo;</p>
                <div className={styles.attr}>
                  <div className={`${styles.avatar} ${styles[`av-${t.color}`]}`}>{t.initials}</div>
                  <div>
                    <div className={styles.name}>{t.name}</div>
                    <div className={styles.role}>{t.role} · {t.company}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </main>
  );
}
