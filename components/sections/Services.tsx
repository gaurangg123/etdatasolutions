'use client';
import { useRef } from 'react';
import Link from 'next/link';
import Reveal from '@/components/ui/Reveal';
import styles from './Services.module.css';

const services = [
  {
    id: 'staffing', icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Staffing & Virtual Assistants',
    body: 'Hand-picked, English-fluent VAs and back-office staff working in your timezone.',
    tags: ['Executive support', 'Research', 'Inbox triage'],
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=220&fit=crop&q=80',
  },
  {
    id: 'data', icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18M9 3v18"/>
      </svg>
    ),
    title: 'Data Entry & Processing',
    body: 'High-volume, high-accuracy work with multi-level QC. Spreadsheets, CRM cleaning, form processing at scale.',
    tags: ['CRM cleanup', 'Form processing', 'Data migration'],
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=220&fit=crop&q=80',
  },
  {
    id: 'qa', icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
        <polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    ),
    title: 'Manual QA Testing',
    body: "Detailed test plans, exploratory sessions, and regression sweeps. We catch the bugs your CI doesn't.",
    tags: ['Web & mobile', 'Regression', 'Bug triage'],
    img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=220&fit=crop&q=80',
  },
  {
    id: 'engineering', icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      </svg>
    ),
    title: 'Data Engineering',
    body: 'ETL pipelines, dashboards, warehouse setup. Snowflake, BigQuery, dbt, Airflow.',
    tags: ['ETL pipelines', 'Warehouse', 'Dashboards'],
    img: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=500&h=220&fit=crop&q=80',
  },
];

function ServiceCard({ svc, delay }: { svc: typeof services[0]; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - r.left}px`);
    el.style.setProperty('--my', `${e.clientY - r.top}px`);
  };
  return (
    <Reveal delay={delay} scale>
      <div ref={ref} id={svc.id} className={styles.card} onPointerMove={onPointerMove}
          onPointerLeave={() => { const el = ref.current; if(el){el.style.removeProperty("--mx");el.style.removeProperty("--my");} }}>
        <div className={styles.cardImg}>
          <img src={svc.img} alt={svc.title} loading="lazy" />
          <div className={styles.imgOverlay} />
          <div className={styles.iconBadge}>{svc.icon}</div>
        </div>
        <div className={styles.cardBody}>
          <h3>{svc.title}</h3>
          <p>{svc.body}</p>
          <div className={styles.tags}>
            {svc.tags.map((t) => <span key={t} className={styles.tag}>{t}</span>)}
          </div>
        </div>
        <div className={styles.cardFooter}>
          <Link href={`/services#${svc.id}`} className={styles.cardLink}>
            Learn more <span className={styles.cardArrow}>→</span>
          </Link>
        </div>
      </div>
    </Reveal>
  );
}

export default function Services() {
  return (
    <section className="section section-alt" id="services">
      <div className="container">
        <div className={styles.header}>
          <Reveal><div className="eyebrow">Services</div></Reveal>
          <Reveal delay={0.07}><h2>Four practices, <em>one standard.</em></h2></Reveal>
          <Reveal delay={0.14}><p style={{marginTop:'16px'}}>Each service runs on documented SOPs, multi-pass quality checks, and weekly metrics you can audit.</p></Reveal>
        </div>
        <div className={styles.grid}>
          {services.map((s, i) => <ServiceCard key={s.id} svc={s} delay={i * 0.07} />)}
        </div>
        <Reveal delay={0.28}>
          <div className={styles.cta}>
            <Link href="/contact" className="btn-primary">Get a free consultation</Link>
            <Link href="/services" className="btn-glass">View all service details</Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
