'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';
import Reveal from '@/components/ui/Reveal';
import styles from './Services.module.css';

const svcs = [
  { id:'staffing', title:'Staffing & Virtual Assistants', icon:
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/></svg>,
    body:'English-fluent VAs and specialists in your timezone, integrated with your tools from day one.',
    tags:['Executive support','Inbox management','Research','Scheduling'],
    img:'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=225&fit=crop&q=80' },
  { id:'data', title:'Data Entry & Processing', icon:
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>,
    body:'High-volume data work with multi-level QC. Every batch reviewed twice before delivery.',
    tags:['Data migration','OCR/ICR','CRM cleanup','Normalisation'],
    img:'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=225&fit=crop&q=80' },
  { id:'qa', title:'Manual QA Testing', icon:
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>,
    body:'Structured test plans, regression sweeps, and cross-device coverage before every release.',
    tags:['Functional testing','Mobile QA','WCAG audits','UAT'],
    img:'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=225&fit=crop&q=80' },
  { id:'engineering', title:'Data Engineering', icon:
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>,
    body:'ETL pipelines, data warehouses, and dashboards your team can actually trust and query.',
    tags:['Snowflake','dbt','Power BI','Airflow'],
    img:'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=225&fit=crop&q=80' },
];

function ServiceCard({ s }: { s: typeof svcs[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: React.PointerEvent) => {
    const el = ref.current; if (!el) return;
    const { left, top } = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - left}px`);
    el.style.setProperty('--my', `${e.clientY - top}px`);
  };
  const onLeave = () => {
    const el = ref.current; if (!el) return;
    el.style.removeProperty('--mx'); el.style.removeProperty('--my');
  };
  return (
    <div ref={ref} className={styles.card} id={s.id} onPointerMove={onMove} onPointerLeave={onLeave}>
      <div className={styles.cardImg}>
        <Image src={s.img} alt={s.title} width={400} height={225} style={{width:'100%',height:'100%',objectFit:'cover'}} loading="lazy"/>
        <div className={styles.imgOverlay}/>
        <div className={styles.iconBadge}>{s.icon}</div>
      </div>
      <div className={styles.cardBody}>
        <h3>{s.title}</h3>
        <p>{s.body}</p>
        <div className={styles.tags}>{s.tags.map(t=><span key={t} className={styles.tag}>{t}</span>)}</div>
      </div>
      <div className={styles.cardFooter}>
        <Link href={`/services#${s.id}`} className={styles.cardLink}>Learn more →</Link>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section className="section section-alt" id="services">
      <div className="container">
        <div className={styles.header}>
          <Reveal><div className="eyebrow">Services</div></Reveal>
          <Reveal delay={0.07}><h2>Four practices, <em>one standard.</em></h2></Reveal>
          <Reveal delay={0.14}><p>Each service runs on documented SOPs and multi-pass QC. Start with one or run all four.</p></Reveal>
        </div>
        <div className={styles.grid}>
          {svcs.map((s,i)=>(
            <Reveal key={s.id} delay={i*0.08} scale><ServiceCard s={s}/></Reveal>
          ))}
        </div>
        <div className={styles.cta}>
          <Link href="/services" className="btn-primary">View full service details</Link>
          <Link href="/contact" className="btn-secondary">Book a Free Consultation</Link>
        </div>
      </div>
    </section>
  );
}
