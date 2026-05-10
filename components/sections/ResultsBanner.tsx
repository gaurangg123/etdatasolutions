'use client';
import { memo } from 'react';
import Counter from '@/components/ui/Counter';
import styles from './ResultsBanner.module.css';

const metrics = [
  { to: 99,  suffix: '%', label: 'Data accuracy rate',   bg: '99' },
  { to: 10,  suffix: '+', label: 'Years in operation',   bg: '10' },
  { to: 100, suffix: '+', label: 'Global clients',       bg: '100' },
  { to: 7,   suffix: '',  label: 'Days to first delivery', prefix: '', extra: 'days', bg: '7' },
  { to: 4.9, suffix: '/5', label: 'Client satisfaction', decimals: 1, bg: '4.9' },
];

const ResultsBanner = memo(function ResultsBanner() {
  return (
    <div className={styles.wrap}>
      <div className={styles.inner}>
        {/* Dot-grid texture */}
        <div className={styles.texture} aria-hidden />
        {metrics.map((m, i) => (
          <div key={i} className={styles.cell}>
            {/* Ghost number behind */}
            <div className={styles.ghost} aria-hidden>{m.bg}</div>
            <div className={styles.numWrap}>
              <Counter
                to={m.to}
                suffix={m.suffix}
                decimals={m.decimals ?? 0}
                duration={1600}
                className={styles.num}
              />
              {m.extra && <span className={styles.numExtra}>{m.extra}</span>}
            </div>
            <div className={styles.label}>{m.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
