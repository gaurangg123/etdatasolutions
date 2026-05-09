'use client';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import styles from './Hero.module.css';

const barData = [
  { v: 82, m: 'Jan' }, { v: 88, m: 'Feb' }, { v: 91, m: 'Mar' },
  { v: 94, m: 'Apr' }, { v: 97, m: 'May' }, { v: 99, m: 'Jun' },
];

const heroPhotos = [
  { src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=260&h=180&fit=crop&q=80', alt: 'Team' },
  { src: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=260&h=160&fit=crop&q=80', alt: 'Work' },
  { src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=260&h=160&fit=crop&q=80', alt: 'Data' },
];

export default function Hero() {
  const reduced = useReducedMotion();
  // Fix 2: bar chart — mount state drives height transition
  const [barsLoaded, setBarsLoaded] = useState(false);
  useEffect(() => { const t = setTimeout(() => setBarsLoaded(true), 400); return () => clearTimeout(t); }, []);

  const fadeUp = (delay: number) => ({
    initial: reduced ? {} : { opacity: 0, y: 32 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.85, ease: [0.22,1,0.36,1] as [number,number,number,number], delay },
  });

  return (
    <section className={styles.hero}>
      <div className={styles.ring1} aria-hidden /><div className={styles.ring2} aria-hidden /><div className={styles.ring3} aria-hidden />
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.text}>
            <motion.div className={styles.statusPill} {...fadeUp(0)}>
              <span className="pulse-dot" />Now accepting new clients &nbsp;·&nbsp; 7-day delivery
            </motion.div>

            {/* Fix 1: natural flowing headline — no <br /> tags */}
            <motion.h1 className={styles.headline} {...fadeUp(0.08)}>
              The work that{' '}
              <span className={styles.headlineGrad}><em>slows you down</em></span>
              {' '}doesn't have to.
            </motion.h1>

            <motion.p className={styles.sub} {...fadeUp(0.16)}>
              ET Data Solutions handles staffing, data entry, QA testing, and data engineering —
              quietly, accurately, and on schedule.
            </motion.p>
            <motion.div className={styles.ctas} {...fadeUp(0.24)}>
              <Link href="/contact" className="btn-primary">Book a free consultation</Link>
              <Link href="/services" className="btn-glass">See what we handle</Link>
            </motion.div>
            <motion.div className={styles.trust} {...fadeUp(0.32)}>
              {['30-day guarantee','First delivery in 7 days','Rated 4.9/5 by clients'].map((t) => (
                <div key={t} className={styles.trustItem}>
                  <svg className={styles.checkSvg} width="16" height="16" viewBox="0 0 16 16">
                    <circle cx="8" cy="8" r="8" fill="var(--or)" opacity="0.12"/>
                    <path d="M5 8.5l2 2 4-4" stroke="var(--or)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  </svg>{t}
                </div>
              ))}
            </motion.div>
            <motion.div className={styles.photoStrip} {...fadeUp(0.40)}>
              {heroPhotos.map((p) => (
                <div key={p.src} className={styles.photoChip}><img src={p.src} alt={p.alt} loading="lazy" /></div>
              ))}
              <div className={styles.photoMeta}>
                <span className={styles.avatarStack}>
                  {['SM','DR','EN'].map((i,idx) => <span key={i} className={styles.avatar} style={{zIndex:3-idx}}>{i}</span>)}
                </span>
                <span className={styles.photoLabel}>100+ clients worldwide</span>
              </div>
            </motion.div>
          </div>

          <div className={styles.cardCol}>
            <div className={styles.cardGlow} aria-hidden />
            <motion.div {...fadeUp(0.16)} style={reduced ? {} : { animation:'float 8s ease-in-out infinite' }}>
              <div className={styles.card}>
                <div className={styles.blobBlue} /><div className={styles.blobOrange} />
                <div className={styles.titleBar}>
                  <div className={styles.macDots}>
                    <span className={styles.dotRed}/><span className={styles.dotYellow}/><span className={styles.dotGreen}/>
                  </div>
                  <span className={styles.cardLabel}>operations · live</span>
                  <span className={styles.liveIndicator}><span className={styles.liveDot}/>Live</span>
                </div>
                <div className={styles.statGrid}>
                  {[
                    { num:'99%', label:'Accuracy rate',    sub:'Multi-level QC on every project', accent:true },
                    { num:'10+', label:'Years experience', sub:'Operating globally since 2014',    accent:false },
                    { num:'100+',label:'Clients served',   sub:'Across US, UK, Canada & AU',       accent:false },
                    { num:'24/7',label:'Always on',        sub:'No gaps · any timezone',           accent:true },
                  ].map((s) => (
                    <div key={s.num} className={styles.statCell}>
                      <div className={`${styles.statNum} ${s.accent ? 'grad-text' : styles.statMuted}`}>{s.num}</div>
                      <div className={styles.statLabel}>{s.label}</div>
                      <div className={styles.statSub}>{s.sub}</div>
                    </div>
                  ))}
                </div>
                {/* Fix 2: bars driven by barsLoaded state for proper height transition */}
                <div className={styles.miniChart}>
                  <div className={styles.chartTop}>
                    <span className={styles.chartLabel}>Accuracy trend — last 6 months</span>
                    <span className={styles.chartBadge}>↑ 17%</span>
                  </div>
                  <div className={styles.bars}>
                    {barData.map(({ v, m }, i) => (
                      <div key={m} className={styles.barWrap}>
                        <div className={styles.bar}
                          style={{ height: barsLoaded ? `${v}%` : '4px', transitionDelay: `${i * 0.08}s` }} />
                        <span className={styles.barMon}>{m}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={styles.cardFooter}>
                  <span className={styles.footerHint}>Ready to scale?</span>
                  <Link href="/contact" className={styles.footerLink}>Get a free audit →</Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
