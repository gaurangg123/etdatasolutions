'use client';
import Link from 'next/link';
import { motion, useReducedMotion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import styles from './Hero.module.css';

// Animated operations dashboard — replaces stock photos (#1, #15, #22)
function OperationsDashboard() {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick(t => (t + 1) % 100), 2200);
    return () => clearInterval(id);
  }, []);

  const tasks = [
    { label:'Invoice processing', pct:99, color:'var(--or)' },
    { label:'QA regression suite',pct:94, color:'var(--teal)' },
    { label:'CRM data sync',      pct:87, color:'var(--blue)' },
    { label:'VA inbox triage',    pct:100,color:'var(--green)' },
  ];

  const pulseIdx = tick % tasks.length;

  return (
    <div className={styles.dashboard}>
      {/* Header bar */}
      <div className={styles.dbHeader}>
        <div className={styles.macDots}>
          <span className={styles.dot} style={{background:'#FF5F57'}}/>
          <span className={styles.dot} style={{background:'#FEBC2E'}}/>
          <span className={styles.dot} style={{background:'#28C840'}}/>
        </div>
        <span className={styles.dbTitle}>ET Data Solutions — Operations</span>
        <span className={styles.dbBadge}>
          <span className={styles.liveDot}/>Live
        </span>
      </div>

      {/* Key metric — 99% dominant (#6) */}
      <div className={styles.dbMetricRow}>
        <div className={styles.dbBigMetric}>
          <div className={styles.ringWrap}>
            <svg viewBox="0 0 80 80" className={styles.ring}>
              <circle cx="40" cy="40" r="34" fill="none" stroke="var(--or-mid)" strokeWidth="6"/>
              <circle cx="40" cy="40" r="34" fill="none" stroke="url(#rg)" strokeWidth="6"
                strokeLinecap="round" strokeDasharray="213.6" strokeDashoffset="2.1"
                transform="rotate(-90 40 40)"/>
              <defs><linearGradient id="rg" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#E84A0C"/><stop offset="100%" stopColor="#FF6B35"/>
              </linearGradient></defs>
            </svg>
            <span className={styles.ringLabel}>99%</span>
          </div>
          <div>
            <div className={styles.bigMetricVal}>Accuracy</div>
            <div className={styles.bigMetricSub}>Multi-level QC</div>
          </div>
        </div>
        <div className={styles.dbSmallMetrics}>
          {[{v:'10+',l:'Years'},{v:'100+',l:'Clients'},{v:'24/7',l:'Coverage'}].map(m=>(
            <div key={m.l} className={styles.smallMetric}>
              <span className={styles.smallVal}>{m.v}</span>
              <span className={styles.smallLbl}>{m.l}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Pipeline tasks */}
      <div className={styles.dbTasks}>
        <div className={styles.dbSectionLabel}>Active pipeline</div>
        {tasks.map((t, i) => (
          <div key={t.label} className={`${styles.taskRow} ${i === pulseIdx ? styles.taskPulse : ''}`}>
            <span className={styles.taskLabel}>{t.label}</span>
            <div className={styles.taskBar}>
              <div className={styles.taskFill} style={{ width:`${t.pct}%`, background:t.color }}/>
            </div>
            <span className={styles.taskPct} style={{ color:t.color }}>{t.pct}%</span>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className={styles.dbFooter}>
        <span className={styles.dbFooterText}>7-day pilot · No commitment</span>
        <Link href="/contact" className={styles.dbFooterCta}>Start free →</Link>
      </div>
    </div>
  );
}

export default function Hero() {
  const reduced = useReducedMotion();
  const { scrollY } = useScroll();
  const cardY  = useTransform(scrollY,[0,600],[0,40]);
  const textOp = useTransform(scrollY,[0,350],[1,0.65]);
  const textY  = useTransform(scrollY,[0,450],[0,-20]);
  const cardS  = useSpring(cardY,{stiffness:80,damping:30});

  const fadeUp = (d:number)=>({
    initial:reduced?{}:{opacity:0,y:24},
    animate:{opacity:1,y:0},
    transition:{duration:0.75,ease:[0.22,1,0.36,1] as [number,number,number,number],delay:d}
  });

  return (
    <section className={styles.hero}>
      <div className={styles.ring1} aria-hidden/><div className={styles.ring2} aria-hidden/><div className={styles.ring3} aria-hidden/>
      <div className="container">
        <div className={styles.grid}>
          {/* Text — reduced density (#4) */}
          <motion.div style={reduced?{}:{opacity:textOp,y:textY}}>
            <motion.div className={styles.statusPill} {...fadeUp(0)}>
              <span className="pulse-dot"/>
              Accepting new clients · 7-day first delivery
            </motion.div>
            <motion.h1 {...fadeUp(0.08)}>
              The work that <em>slows you down</em>{' '}doesn't have to.
            </motion.h1>
            <motion.p className={styles.sub} {...fadeUp(0.15)}>
              Staffing, data entry, QA testing, and data engineering — handled quietly and accurately so your team stays focused.
            </motion.p>
            {/* Single primary + single secondary CTA (#2, #3) */}
            <motion.div className={styles.ctas} {...fadeUp(0.22)}>
              <Link href="/contact" className="btn-primary">
                Book a Free Consultation
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
              <Link href="/services" className="btn-secondary">View Services</Link>
            </motion.div>
            {/* Trust signals — visual icons */}
            <motion.div className={styles.trust} {...fadeUp(0.28)}>
              {[{i:'🛡️',t:'30-day guarantee'},{i:'⚡',t:'First delivery in 7 days'},{i:'⭐',t:'4.9/5 client rating'}].map(x=>(
                <span key={x.t} className={styles.trustItem}><span>{x.i}</span>{x.t}</span>
              ))}
            </motion.div>
          </motion.div>

          {/* Dashboard mockup */}
          <motion.div style={reduced?{}:{y:cardS}} {...fadeUp(0.12)}>
            <div style={reduced?{}:{animation:'float 7s ease-in-out infinite'}}>
              <OperationsDashboard />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
