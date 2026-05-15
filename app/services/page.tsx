import type { Metadata } from 'next';
import Link from 'next/link';
import Reveal from '@/components/ui/Reveal';
import { services } from '@/lib/content';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Four practices, one operating standard. Staffing, data entry, QA testing, and data engineering — delivered from Indore, India.',
};

export default function ServicesIndex() {
  return (
    <main>
      <section className={`section ${styles.intro}`}>
        <div className="container">
          <Reveal>
            <span className="eyebrow">Services</span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className={styles.h1}>
              Four practices.<br />
              <em>One operating standard.</em>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className={styles.lede}>
              Each practice is staffed by specialists, governed by the same quality controls,
              and reported in the same format. Pick one or run all four.
            </p>
          </Reveal>
        </div>
      </section>

      <section className={`section ${styles.list}`}>
        <div className="container">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 80}>
              <Link href={`/services/${s.slug}`} className={styles.row}>
                <span className={styles.rowNum}>{s.num}</span>
                <div className={styles.rowBody}>
                  <h2 className={styles.rowTitle}>{s.title}</h2>
                  <p className={styles.rowTag}>{s.tagline}</p>
                </div>
                <span className={styles.rowArrow}>&rarr;</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
