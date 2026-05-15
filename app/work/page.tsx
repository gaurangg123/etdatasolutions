import type { Metadata } from 'next';
import Link from 'next/link';
import Reveal from '@/components/ui/Reveal';
import { caseStudies } from '@/lib/content';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Real engagements, real outcomes. Three case studies from our staffing, data, QA, and engineering practices.',
};

export default function WorkIndex() {
  return (
    <main>
      <section className={`section ${styles.intro}`}>
        <div className="container">
          <Reveal>
            <span className="eyebrow">Selected work</span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className={styles.h1}>
              The receipts.<br />
              <em>Numbers, named.</em>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className={styles.lede}>
              Client names changed for confidentiality. Numbers, timelines, and methodology are exact.
            </p>
          </Reveal>
        </div>
      </section>

      <section className={`section section-dark ${styles.list}`}>
        <div className="container">
          {caseStudies.map((c, i) => (
            <Reveal key={c.slug} delay={i * 80}>
              <Link href={`/work/${c.slug}`} className={styles.row}>
                <div className={styles.rowTop}>
                  <span className={styles.rowNum}>{c.num}</span>
                  <span className={styles.rowMeta}>
                    {c.region} &middot; {c.service}
                  </span>
                </div>
                <div className={styles.rowBody}>
                  <h2 className={styles.rowTitle}>{c.client}</h2>
                  <p className={styles.rowProblem}>{c.problem}</p>
                </div>
                <div className={styles.rowMetric}>
                  <span className={styles.metricVal}>{c.metric.val}</span>
                  <span className={styles.metricSub}>{c.metric.sub}</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
