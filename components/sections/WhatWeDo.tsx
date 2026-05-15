'use client';
import Reveal from '@/components/ui/Reveal';
import styles from './WhatWeDo.module.css';

const services = [
  {
    num: '01',
    icon: '👥',
    title: 'Staffing & Virtual Assistants',
    blurb: 'Vetted specialists in your timezone — embedded in your workflows, not waiting for tickets.',
    points: ['Account management', 'Operations support', 'Executive assistance'],
    slug: 'staffing',
  },
  {
    num: '02',
    icon: '📊',
    title: 'Data Entry & Processing',
    blurb: 'Two-pass quality control. 99% accuracy guaranteed. Invoice volumes from 50 to 50,000 per month.',
    points: ['Invoice processing', 'Catalog management', 'Records digitization'],
    slug: 'data-entry',
  },
  {
    num: '03',
    icon: '🧪',
    title: 'Manual QA Testing',
    blurb: 'Structured test plans, full regression coverage, zero P1s in production. Every sprint.',
    points: ['Cross-browser regression', 'Mobile + responsive', 'Release sign-off'],
    slug: 'qa-testing',
  },
  {
    num: '04',
    icon: '⚙️',
    title: 'Data Engineering',
    blurb: 'ETL pipelines, dashboards, and reconciliation systems. Surface revenue that\'s already yours.',
    points: ['ETL & pipelines', 'BI dashboards', 'Data warehousing'],
    slug: 'data-engineering',
  },
];

export default function WhatWeDo() {
  return (
    <section id="services" className={`section section-alt ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <Reveal>
            <span className="eyebrow">What we do</span>
          </Reveal>
          <Reveal delay={60}>
            <h2 className={styles.heading}>
              Four services.<br />One operating standard.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className={styles.subheading}>
              From staffing to data pipelines — every engagement runs with the
              same commitment to accuracy, speed, and reliability.
            </p>
          </Reveal>
        </div>

        <div className={styles.grid}>
          {services.map((s, i) => (
            <Reveal key={s.num} delay={i * 80}>
              <a href={`/services/${s.slug}`} className={styles.card}>
                <div className={styles.cardIconWrap}>{s.icon}</div>
                <span className={styles.cardNum}>{s.num}</span>
                <h3 className={styles.cardTitle}>{s.title}</h3>
                <p className={styles.cardBlurb}>{s.blurb}</p>
                <ul className={styles.cardPoints}>
                  {s.points.map(p => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <span className={styles.cardLink}>
                  Learn more <span>&rarr;</span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
