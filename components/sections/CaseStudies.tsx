import Reveal from '@/components/ui/Reveal';
import styles from './CaseStudies.module.css';

const cases = [
  {
    metric: '$40K',
    metricSub: 'saved annually',
    industry: 'Logistics · US',
    service: 'Data Entry',
    problem: 'Invoice processing took 14 days end-to-end, blocking cash flow.',
    outcome: 'Reduced to 3 days. Zero errors in 6-month audit.',
    color: 'orange',
    img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=220&fit=crop&q=80',
  },
  {
    metric: '0',
    metricSub: 'P1 bugs on launch',
    industry: 'SaaS · UK',
    service: 'Manual QA',
    problem: 'Dev team shipping weekly with no structured QA — P1 bugs reaching production.',
    outcome: 'Zero critical bugs across 4 consecutive releases after engagement.',
    color: 'teal',
    img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=220&fit=crop&q=80',
  },
  {
    metric: '$2.3M',
    metricSub: 'in unbilled services',
    industry: 'Healthtech · AU',
    service: 'Data Engineering',
    problem: 'Billing data spread across 3 systems with no reconciliation pipeline.',
    outcome: '$2.3M in unbilled services surfaced within 30 days of pipeline launch.',
    color: 'blue',
    img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=220&fit=crop&q=80',
  },
];

export default function CaseStudies() {
  return (
    <section className="section" id="case-studies">
      <div className="container">
        <div className={styles.header}>
          <Reveal><div className="eyebrow">Case Studies</div></Reveal>
          <Reveal delay={0.07}><h2>Real results, <em>real numbers.</em></h2></Reveal>
          <Reveal delay={0.14}><p>Three engagements. Three measurable outcomes. All verifiable.</p></Reveal>
        </div>
        <div className={styles.grid}>
          {cases.map((c, i) => (
            <Reveal key={c.metric} delay={i * 0.1} scale>
              <div className={`${styles.card} ${styles[`color-${c.color}`]}`}>
                <div className={styles.cardImg}>
                  <img src={c.img} alt={c.industry} loading="lazy" />
                  <div className={styles.imgOverlay} />
                  <div className={styles.badge}>
                    <span className={styles.badgeService}>{c.service}</span>
                    <span className={styles.badgeIndustry}>{c.industry}</span>
                  </div>
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.metricRow}>
                    <span className={styles.metric}>{c.metric}</span>
                    <span className={styles.metricSub}>{c.metricSub}</span>
                  </div>
                  <p className={styles.problem}><strong>Challenge:</strong> {c.problem}</p>
                  <p className={styles.outcome}><strong>Outcome:</strong> {c.outcome}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
