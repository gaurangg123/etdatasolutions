'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import styles from './Hero.module.css';

const stats = [
  { num: '99%',  label: 'Accuracy rate',    sub: 'Multi-level QC on every project', accent: true },
  { num: '10+',  label: 'Years experience', sub: 'Operating globally since 2014',    accent: false },
  { num: '100+', label: 'Clients served',   sub: 'Across US, UK, Canada & AU',       accent: false },
  { num: '24/7', label: 'Always on',        sub: 'No gaps · any timezone',           accent: true },
];

const trust = [
  '30-day guarantee',
  'First delivery in 7 days',
  'Rated 4.9/5 by clients',
];

export default function Hero() {
  const reduced = useReducedMotion();

  const fadeUp = (delay: number) => ({
    initial: reduced ? {} : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number,number,number,number], delay },
  });

  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.grid}>
          {/* ── Left text ── */}
          <div className={styles.text}>
            <motion.div className={styles.statusPill} {...fadeUp(0)}>
              <span className="pulse-dot" />
              Now accepting new clients &nbsp;·&nbsp; 7-day delivery
            </motion.div>

            <motion.h1 {...fadeUp(0.07)}>
              The work that <em>slows you down</em> doesn't have to.
            </motion.h1>

            <motion.p className={styles.sub} {...fadeUp(0.14)}>
              ET Data Solutions handles staffing, data entry, QA testing, and data engineering —
              quietly, accurately, and on schedule. Your team stays focused on what only they can do.
            </motion.p>

            <motion.div className={styles.ctas} {...fadeUp(0.21)}>
              <Link href="/contact" className="btn-primary">Book a free consultation</Link>
              <Link href="/services" className="btn-glass">See what we handle</Link>
            </motion.div>

            <motion.div className={styles.trust} {...fadeUp(0.28)}>
              {trust.map((t) => (
                <div key={t} className={styles.trustItem}>
                  <span className={styles.trustDot}>✦</span>
                  {t}
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right card ── */}
          <motion.div
            className={styles.cardWrap}
            {...fadeUp(0.14)}
            style={reduced ? {} : { animation: 'float 8s ease-in-out infinite' }}
          >
            <div className={styles.card}>
              {/* Blobs inside card */}
              <div className={styles.blobBlue} />
              <div className={styles.blobOrange} />

              {/* Title bar */}
              <div className={styles.titleBar}>
                <div className={styles.macDots}>
                  <span className={styles.dotRed} />
                  <span className={styles.dotYellow} />
                  <span className={styles.dotGreen} />
                </div>
                <span className={styles.cardLabel}>operations · live</span>
              </div>

              {/* Stat grid */}
              <div className={styles.statGrid}>
                {stats.map((s) => (
                  <div key={s.num} className={styles.statCell}>
                    <div className={`${styles.statNum} ${s.accent ? 'grad-text' : styles.statNumMuted}`}>
                      {s.num}
                    </div>
                    <div className={styles.statLabel}>{s.label}</div>
                    <div className={styles.statSub}>{s.sub}</div>
                  </div>
                ))}
              </div>

              {/* Footer link */}
              <div className={styles.cardFooter}>
                <span className={styles.cardFooterHint}>Ready to scale your operations?</span>
                <Link href="/contact" className={styles.cardFooterLink}>
                  Get a free operations audit →
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
