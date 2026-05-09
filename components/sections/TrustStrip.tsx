import styles from './TrustStrip.module.css';
const regions = [
  { flag: '🇺🇸', name: 'United States' },
  { flag: '🇬🇧', name: 'United Kingdom' },
  { flag: '🇨🇦', name: 'Canada' },
  { flag: '🇦🇺', name: 'Australia' },
  { flag: '🇸🇬', name: 'Singapore' },
];
export default function TrustStrip() {
  return (
    <div className={styles.strip}>
      <div className="container">
        <div className={styles.inner}>
          <span className={styles.label}>Trusted across</span>
          <div className={styles.divider} />
          <div className={styles.regions}>
            {regions.map((r) => (
              <span key={r.name} className={styles.region}>{r.flag} {r.name}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
