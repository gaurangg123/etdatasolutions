'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import styles from './Hero.module.css';

const stats = [
  { num: '99%',  label: 'Accuracy rate',    sub: 'Multi-level QC on every project', accent: true },
  { num: '10+',  label: 'Years experience', sub: 'Operating globally since 2014',    accent: false },
  { num: '100+', label: 'Clients served',   sub: 'Across US, UK, Canada & AU',       accent: false },
  { num: '24/7', label: 'Always on',        sub: 'No gaps · any timezone',           accent: true },
];

const trust = ['30-day guarantee', 'First delivery in 7 days', 'Rated 4.9/5 by clients'];

const heroPhotos = [
  { src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=260&h=180&fit=crop&q=80', alt: 'Team collaborating' },
  { src: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=260&h=160&fit=crop&q=80', alt: 'Data work' },
  { src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=260&h=160&fit=crop&q=80', alt: 'Analytics dashboard' },
];

export default function Hero() {
  const reduced = useReducedMotion();
  const fadeUp = (delay: number) => ({
    initial: reduced ? {} : { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.22,1,0.36,1] as [number,number,number,number], delay },
  });

  return (
    <section className={styles.hero}>
      {/* Background decoration */}
      <div className={styles.bgRing1} aria-hidden />
      <div className={styles.bgRing2} aria-hidden />

      <div className="container">
        <div className={styles.grid}>
          {/* ── Left ── */}
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
              quietly, accurately, and on schedule.
            </motion.p>

            <motion.div className={styles.ctas} {...fadeUp(0.21)}>
              <Link href="/contact" className="btn-primary">Book a free consultation</Link>
              <Link href="/services" className="btn-glass">See what we handle</Link>
            </motion.div>

            <motion.div className={styles.trust} {...fadeUp(0.28)}>
              {trust.map((t) => (
                <div key={t} className={styles.trustItem}>
                  <span className={styles.checkIcon}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="7" fill="var(--or)" opacity="0.12"/><path d="M4 7l2 2 4-4" stroke="var(--or)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                  {t}
                </div>
              ))}
            </motion.div>

            {/* Photo strip */}
            <motion.div className={styles.photoStrip} {...fadeUp(0.35)}>
              {heroPhotos.map((p) => (
                <div key={p.src} className={styles.photoChip}>
                  <img src={p.src} alt={p.alt} loading="lazy" />
                </div>
              ))}
              <div className={styles.photoLabel}>
                <span className={styles.photoAvatarStack}>
                  {['SM','DR','EN'].map((i) => <span key={i} className={styles.photoAvatar}>{i}</span>)}
                </span>
                <span>100+ clients worldwide</span>
              </div>
            </motion.div>
          </div>

          {/* ── Right dashboard card ── */}
          <motion.div className={styles.cardWrap} {...fadeUp(0.14)}
            style={reduced ? {} : { animation: 'float 8s ease-in-out infinite' }}>
            <div className={styles.card}>
              <div className={styles.blobBlue} />
              <div className={styles.blobOrange} />
              <div className={styles.titleBar}>
                <div className={styles.macDots}>
                  <span className={styles.dotRed} /><span className={styles.dotYellow} /><span className={styles.dotGreen} />
                </div>
                <span className={styles.cardLabel}>operations · live</span>
              </div>
              <div className={styles.statGrid}>
                {stats.map((s) => (
                  <div key={s.num} className={styles.statCell}>
                    <div className={`${styles.statNum} ${s.accent ? 'grad-text' : styles.statNumMuted}`}>{s.num}</div>
                    <div className={styles.statLabel}>{s.label}</div>
                    <div className={styles.statSub}>{s.sub}</div>
                  </div>
                ))}
              </div>
              {/* Mini chart bar */}
              <div className={styles.miniChart}>
                <div className={styles.chartLabel}>Accuracy trend — last 6 months</div>
                <div className={styles.bars}>
                  {[82,88,91,94,97,99].map((v,i) => (
                    <div key={i} className={styles.barWrap}>
                      <div className={styles.bar} style={{ height: `${v}%` }} />
                      <span className={styles.barVal}>{v}%</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.cardFooter}>
                <span className={styles.cardFooterHint}>Ready to scale?</span>
                <Link href="/contact" className={styles.cardFooterLink}>Get a free audit →</Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
