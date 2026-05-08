'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Reveal from '@/components/ui/Reveal';
import styles from './Services.module.css';

const services = [
  {
    id: 'staffing',
    icon: '👥',
    title: 'Staffing & Virtual Assistants',
    body: 'Hand-picked, English-fluent VAs and back-office staff working in your timezone.',
    tags: ['Executive support', 'Research', 'Inbox triage'],
  },
  {
    id: 'data',
    icon: '📊',
    title: 'Data Entry & Processing',
    body: 'High-volume, high-accuracy work with multi-level QC. Spreadsheets, CRM cleaning, form processing at scale.',
    tags: ['CRM cleanup', 'Form processing', 'Data migration'],
  },
  {
    id: 'qa',
    icon: '✅',
    title: 'Manual QA Testing',
    body: "Detailed test plans, exploratory sessions, and regression sweeps. We catch the bugs your CI doesn't.",
    tags: ['Web & mobile', 'Regression', 'Bug triage'],
  },
  {
    id: 'engineering',
    icon: '🗄️',
    title: 'Data Engineering',
    body: 'ETL pipelines, dashboards, warehouse setup. Snowflake, BigQuery, dbt, Airflow.',
    tags: ['ETL pipelines', 'Warehouse', 'Dashboards'],
  },
];

function ServiceCard({ svc, delay }: { svc: typeof services[0]; delay: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    el.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };

  return (
    <Reveal delay={delay}>
      <div
        ref={cardRef}
        id={svc.id}
        className={styles.card}
        onPointerMove={handlePointerMove}
      >
        <div className={styles.icon}>{svc.icon}</div>
        <h3>{svc.title}</h3>
        <p>{svc.body}</p>
        <div className={styles.tags}>
          {svc.tags.map((t) => <span key={t} className={styles.tag}>{t}</span>)}
        </div>
      </div>
    </Reveal>
  );
}

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className={styles.header}>
          <Reveal><div className="eyebrow">Services</div></Reveal>
          <Reveal delay={0.07}><h2>Four practices, <em>one standard.</em></h2></Reveal>
          <Reveal delay={0.14}>
            <p>
              Each service runs on documented SOPs, multi-pass quality checks, and weekly metrics
              you can audit. Pick one, or let us run all four end-to-end.
            </p>
          </Reveal>
        </div>

        <div className={styles.grid}>
          {services.map((s, i) => (
            <ServiceCard key={s.id} svc={s} delay={i * 0.07} />
          ))}
        </div>

        <Reveal delay={0.28}>
          <div className={styles.cta}>
            <Link href="/contact" className="btn-primary">Get a free consultation</Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
