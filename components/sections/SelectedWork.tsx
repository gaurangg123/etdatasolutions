'use client';
import Reveal from '@/components/ui/Reveal';
import styles from './SelectedWork.module.css';

const cases = [
  {
    num: '01',
    client: 'Logistics Co.',
    region: 'United States',
    service: 'Data Entry',
    problem: 'Invoice processing took 14 days end-to-end, blocking cash flow.',
    outcome: 'Reduced to 3 days. Zero errors in a 6-month audit across 4,800 invoices.',
    quote: 'They fixed a workflow we’d been losing money on for years — quietly, without making it a big deal.',
    attribution: 'COO, Logistics Co.',
    metric: { val: '$40K', sub: 'saved annually' },
  },
  {
    num: '02',
    client: 'A SaaS Platform',
    region: 'United Kingdom',
    service: 'Manual QA',
    problem: 'Weekly shipping with no structured QA. P1 bugs reaching production.',
    outcome: 'Zero critical bugs across 4 consecutive releases. 23 medium bugs caught pre-release.',
    quote: 'Our release confidence went from anxious to boring — in the best possible way.',
    attribution: 'Head of Engineering',
    metric: { val: '0', sub: 'P1 bugs on launch' },
  },
  {
    num: '03',
    client: 'Healthtech Co.',
    region: 'Australia',
    service: 'Data Engineering',
    problem: 'Billing data spread across 3 disconnected systems with no reconciliation.',
    outcome: 'ETL pipeline surfaced $2.3M in unbilled services within the first 30 days.',
    quote: 'They built in 5 weeks what our internal team had been scoping for 18 months.',
    attribution: 'CFO, Healthtech Co.',
    metric: { val: '$2.3M', sub: 'in unbilled services surfaced' },
  },
];

export default function SelectedWork() {
  return (
    <section id="work" className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <Reveal>
            <span className={styles.eyebrowDark}>Selected work</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className={styles.heading}>
              Real clients. Real outcomes.
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className={styles.lede}>
              Named clients changed for confidentiality. Numbers are exact.
            </p>
          </Reveal>
        </div>

        <div className={styles.list}>
          {cases.map((c, i) => (
            <Reveal key={c.num} delay={i * 80}>
              <article className={styles.case}>
                <div className={styles.caseHead}>
                  <span className={styles.caseNum}>{c.num}</span>
                  <div className={styles.caseMeta}>
                    <span className={styles.caseClient}>{c.client}</span>
                    <span className={styles.caseDot}>&middot;</span>
                    <span>{c.region}</span>
                    <span className={styles.caseDot}>&middot;</span>
                    <span>{c.service}</span>
                  </div>
                </div>

                <div className={styles.caseBody}>
                  <div className={styles.caseContent}>
                    <div className={styles.row}>
                      <span className={styles.rowLabel}>Problem</span>
                      <p className={styles.rowText}>{c.problem}</p>
                    </div>
                    <div className={styles.row}>
                      <span className={styles.rowLabel}>Outcome</span>
                      <p className={styles.rowText}>{c.outcome}</p>
                    </div>
                    <blockquote className={styles.quote}>
                      <p>&ldquo;{c.quote}&rdquo;</p>
                      <cite>&mdash; {c.attribution}</cite>
                    </blockquote>
                  </div>

                  <aside className={styles.metric}>
                    <span className={styles.metricVal}>{c.metric.val}</span>
                    <span className={styles.metricSub}>{c.metric.sub}</span>
                  </aside>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300}>
          <div className={styles.sectionFooter}>
            <a href="/work" className="btn-link">
              View all case studies <span>&rarr;</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
