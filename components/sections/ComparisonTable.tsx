import Reveal from '@/components/ui/Reveal';
import styles from './ComparisonTable.module.css';

const rows = [
  { label: 'Time to start',       et: '7 days',     inhouse: '3–6 months',   offshore: '4–8 weeks' },
  { label: 'Cost (vs in-house)',   et: '60–70% less', inhouse: 'Baseline',    offshore: '40–50% less' },
  { label: 'Quality control',      et: 'Multi-level QC', inhouse: 'Varies',   offshore: 'Inconsistent' },
  { label: 'Time zone coverage',   et: 'Any timezone', inhouse: 'Office hours', offshore: 'Offset delays' },
  { label: 'Dedicated contact',    et: '✓ Always',   inhouse: 'Internal only', offshore: 'Account manager' },
  { label: 'Weekly reporting',     et: '✓ Auditable', inhouse: 'Ad hoc',      offshore: 'On request' },
  { label: 'Money-back guarantee', et: '✓ 30 days',  inhouse: '✗',            offshore: '✗' },
  { label: 'Scale up/down',        et: 'Flexible',   inhouse: 'Hiring lag',   offshore: 'Contract-bound' },
];

export default function ComparisonTable() {
  return (
    <section className="section" id="comparison">
      <div className="container">
        <div className={styles.header}>
          <Reveal><div className="eyebrow">Comparison</div></Reveal>
          <Reveal delay={0.07}><h2>How we stack up <em>against the alternatives.</em></h2></Reveal>
          <Reveal delay={0.14}><p>A straight comparison. No marketing language.</p></Reveal>
        </div>
        <Reveal delay={0.1}>
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.thLabel}></th>
                  <th className={`${styles.th} ${styles.thHighlight}`}>
                    <div className={styles.thBadge}>Recommended</div>
                    ET Data Solutions
                  </th>
                  <th className={styles.th}>In-house hiring</th>
                  <th className={styles.th}>Typical offshore</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={row.label} className={i % 2 === 0 ? styles.rowEven : ''}>
                    <td className={styles.tdLabel}>{row.label}</td>
                    <td className={`${styles.td} ${styles.tdHighlight}`}>{row.et}</td>
                    <td className={styles.td}>{row.inhouse}</td>
                    <td className={styles.td}>{row.offshore}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
