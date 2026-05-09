'use client';
import styles from './Spinner.module.css';

interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  label?: string;
}

export default function Spinner({ size = 'md', label = 'Loading…' }: SpinnerProps) {
  return (
    <div className={`${styles.wrap} ${styles[size]}`} role="status" aria-label={label}>
      <div className={styles.ring}>
        <svg className={styles.svg} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="sg1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%"   stopColor="#E84A0C" />
              <stop offset="100%" stopColor="#FF6B35" />
            </linearGradient>
            <linearGradient id="sg2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%"   stopColor="#FF6B35" stopOpacity="0" />
              <stop offset="100%" stopColor="#E84A0C" />
            </linearGradient>
          </defs>

          {/* Outer track */}
          <circle cx="50" cy="50" r="42" stroke="#FFE4D6" strokeWidth="5" />

          {/* Spinning arc */}
          <circle cx="50" cy="50" r="42" stroke="url(#sg1)"
            strokeWidth="5" strokeLinecap="round"
            className={styles.arc}
          />

          {/* Inner track */}
          <circle cx="50" cy="50" r="29" stroke="#FFE4D6" strokeWidth="3" />

          {/* Inner spinning arc (opposite direction) */}
          <circle cx="50" cy="50" r="29" stroke="url(#sg2)"
            strokeWidth="3" strokeLinecap="round"
            className={styles.arcInner}
          />

          {/* Centre filled circle */}
          <circle cx="50" cy="50" r="9" fill="url(#sg1)" className={styles.dot} />

          {/* Orbiting node on outer ring */}
          <g className={styles.orbit1}>
            <circle cx="50" cy="8" r="5" fill="#E84A0C" />
            <circle cx="50" cy="8" r="9" stroke="#E84A0C" strokeWidth="1.5" fill="none" opacity="0.25" className={styles.orbitGlow} />
          </g>

          {/* Orbiting node on inner ring */}
          <g className={styles.orbit2}>
            <circle cx="50" cy="21" r="3.5" fill="#FF6B35" opacity="0.85" />
          </g>

          {/* Data-network connector lines */}
          <line x1="50" y1="41" x2="50" y2="8" stroke="#E84A0C" strokeWidth="1" strokeDasharray="2 3" opacity="0.25" className={styles.connector} />
        </svg>
      </div>
      {label && <p className={styles.label}>{label}</p>}
    </div>
  );
}

export function PageLoader({ label = 'Loading…' }: { label?: string }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.loaderCard}>
        <Spinner size="lg" label="" />
        <div className={styles.loaderText}>
          <span className={styles.loaderBrand}>ET Data Solutions</span>
          <span className={styles.loaderSub}>{label}</span>
        </div>
      </div>
    </div>
  );
}
