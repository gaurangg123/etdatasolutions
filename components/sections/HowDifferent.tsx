import Reveal from '@/components/ui/Reveal';
import styles from './HowDifferent.module.css';

const points = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/>
      </svg>
    ),
    title: 'No managers in the middle',
    body: 'You talk directly to the people doing the work. No account managers, no relay chains, no game of telephone.',
    stat: 'Direct access always',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/>
      </svg>
    ),
    title: 'Full transparency, always',
    body: 'Weekly metrics dashboards you can audit yourself. Error logs, delivery times, accuracy rates — all shared proactively.',
    stat: 'Weekly reports included',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="M9 12l2 2 4-4"/>
      </svg>
    ),
    title: '30-day money-back guarantee',
    body: 'If your first month of deliverables doesn\'t meet the agreed standard, you get a full refund. No questions, no negotiation.',
    stat: 'Zero-risk start',
  },
];

export default function HowDifferent() {
  return (
    <section className="section section-alt">
      <div className="container">
        <div className={styles.header}>
          <Reveal><div className="eyebrow">Why ET Data Solutions</div></Reveal>
          <Reveal delay={0.07}><h2>Three things we do <em>differently.</em></h2></Reveal>
          <Reveal delay={0.14}><p>Most outsourcing firms look the same on paper. These are the commitments that set us apart in practice.</p></Reveal>
        </div>
        <div className={styles.grid}>
          {points.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1} scale>
              <div className={styles.card}>
                <div className={styles.iconWrap}>{p.icon}</div>
                <div className={styles.statBadge}>{p.stat}</div>
                <h3 className={styles.title}>{p.title}</h3>
                <p className={styles.body}>{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
