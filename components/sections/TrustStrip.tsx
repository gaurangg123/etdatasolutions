import styles from './TrustStrip.module.css';

const regions = ['United States', 'United Kingdom', 'Canada', 'Australia', 'Singapore'];

export default function TrustStrip() {
  return (
    <div className={styles.strip}>
      <div className="container">
        <div className={styles.inner}>
          <span className={styles.label}>Trusted across</span>
          <div className={styles.regions}>
            {regions.map((r, i) => (
              <span key={r} className={styles.region}>
                {r}{i < regions.length - 1 && <span className={styles.sep}>·</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
