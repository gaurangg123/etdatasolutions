import styles from './ResultsBanner.module.css';

const metrics = [
  { num: '99%', label: 'Data accuracy rate', icon: '📌' },
  { num: '10+', label: 'Years in operation', icon: '🗓️' },
  { num: '100+', label: 'Global clients', icon: '🌐' },
  { num: '7 days', label: 'To first delivery', icon: '⚡' },
  { num: '4.9/5', label: 'Client satisfaction', icon: '⭐' },
];

export default function ResultsBanner() {
  return (
    <section className={styles.banner}>
      <div className={styles.inner}>
        <div className={styles.bgGlow} aria-hidden />
        <div className="container">
          <div className={styles.grid}>
            {metrics.map((m) => (
              <div key={m.num} className={styles.metric}>
                <div className={styles.num}>{m.num}</div>
                <div className={styles.label}>{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
