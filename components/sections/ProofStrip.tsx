'use client';
import Reveal from '@/components/ui/Reveal';
import styles from './ProofStrip.module.css';

const stats = [
  { num: '99%',  lbl: 'Data accuracy rate' },
  { num: '10+',  lbl: 'Years in operation' },
  { num: '100+', lbl: 'Clients served globally' },
  { num: '7d',   lbl: 'Average first delivery' },
];

const industries = [
  'Logistics & Freight',
  'Healthtech',
  'SaaS',
  'Fintech',
  'E-commerce',
  'Real Estate',
  'Analytics & BI',
  'Professional Services',
];

export default function ProofStrip() {
  return (
    <section className={styles.section}>
      <div className="container">
        <Reveal>
          <div className={styles.statsRow}>
            {stats.map((s) => (
              <div key={s.lbl} className={styles.stat}>
                <span className={styles.num}>{s.num}</span>
                <span className={styles.lbl}>{s.lbl}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <div className={styles.divider} />

        <Reveal delay={100}>
          <div className={styles.indRow}>
            <span className={styles.indLabel}>Trusted across</span>
            <div className={styles.indList}>
              {industries.map((ind, idx) => (
                <span key={ind} className={styles.indItem}>
                  {ind}
                  {idx < industries.length - 1 && <span className={styles.dot}>·</span>}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
