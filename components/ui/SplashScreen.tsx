'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './SplashScreen.module.css';

const LETTERS = 'ET DATA SOLUTIONS'.split('');
const STATS = [
  { num: '99%', label: 'Accuracy' },
  { num: '10+', label: 'Years' },
  { num: '100+', label: 'Clients' },
  { num: '24/7', label: 'Uptime' },
];

// Data network nodes (x,y positions in 0-100 space)
const NODES = [
  { id:'c', x:50, y:50, r:14, primary:true },
  { id:'a', x:22, y:24, r:7,  primary:false },
  { id:'b', x:78, y:20, r:9,  primary:false },
  { id:'d', x:16, y:65, r:6,  primary:false },
  { id:'e', x:84, y:70, r:8,  primary:false },
  { id:'f', x:50, y:15, r:5,  primary:false },
  { id:'g', x:60, y:80, r:6,  primary:false },
];
const EDGES = [
  ['c','a'],['c','b'],['c','d'],['c','e'],['c','f'],['c','g'],['a','f'],['b','e'],
];

function DataNetwork({ progress }: { progress: number }) {
  const drawRatio = Math.min(progress / 60, 1);
  const nodeRatio = Math.min(Math.max((progress - 10) / 70, 0), 1);
  return (
    <svg viewBox="0 0 100 100" className={styles.network} aria-hidden>
      {/* Animated grid */}
      <defs>
        <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
          <path d="M 8 0 L 0 0 0 8" fill="none" stroke="rgba(232,74,12,0.07)" strokeWidth="0.5"/>
        </pattern>
        <linearGradient id="nodeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E84A0C"/>
          <stop offset="100%" stopColor="#FF6B35"/>
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="1.5" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      <rect width="100" height="100" fill="url(#grid)"/>

      {/* Edges */}
      {EDGES.map(([from, to], i) => {
        const a = NODES.find(n => n.id === from)!;
        const b = NODES.find(n => n.id === to)!;
        const len = Math.hypot(b.x - a.x, b.y - a.y);
        const delay = i * 0.08;
        const edgeProgress = Math.max(0, drawRatio - delay * 0.4);
        return (
          <line key={`${from}-${to}`}
            x1={a.x} y1={a.y} x2={b.x} y2={b.y}
            stroke={a.primary || b.primary ? '#E84A0C' : '#9098A8'}
            strokeWidth={a.primary || b.primary ? '0.8' : '0.5'}
            strokeDasharray={len}
            strokeDashoffset={len * (1 - edgeProgress)}
            opacity={edgeProgress > 0 ? 0.6 : 0}
          />
        );
      })}

      {/* Nodes */}
      {NODES.map((node, i) => {
        const delay = i * 0.06;
        const np = Math.max(0, Math.min((nodeRatio - delay * 0.3) / 0.3, 1));
        return (
          <g key={node.id} filter={node.primary ? 'url(#glow)' : undefined}>
            <circle cx={node.x} cy={node.y} r={node.r * np}
              fill={node.primary ? 'url(#nodeGrad)' : 'none'}
              stroke={node.primary ? 'none' : '#E84A0C'}
              strokeWidth="1"
              opacity={np}
            />
            {/* Outer ring for non-primary */}
            {!node.primary && np > 0.5 && (
              <circle cx={node.x} cy={node.y} r={node.r * 1.8 * np}
                fill="none" stroke="rgba(232,74,12,0.2)" strokeWidth="0.5"
              />
            )}
            {/* Center dot */}
            {!node.primary && np > 0 && (
              <circle cx={node.x} cy={node.y} r={2 * np}
                fill="#E84A0C" opacity={np * 0.8}
              />
            )}
          </g>
        );
      })}
    </svg>
  );
}

export default function SplashScreen() {
  const [visible, setVisible] = useState(false);
  const [exiting, setExiting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState(0); // 0=network, 1=text, 2=stats, 3=done

  useEffect(() => {
    // Only show once per session
    if (typeof window === 'undefined') return;
    try { if (sessionStorage.getItem('et_splash_done')) return; } catch { return; }
    setVisible(true);

    const DURATION = 2600; // total ms
    const start = performance.now();
    let rafId: number;

    const tick = (now: number) => {
      const elapsed = now - start;
      const p = Math.min((elapsed / DURATION) * 100, 100);

      // easeOutQuart for smooth deceleration
      const eased = 1 - Math.pow(1 - p / 100, 3);
      setProgress(Math.round(eased * 100));

      if (elapsed > 500)  setPhase(p => Math.max(p, 1));
      if (elapsed > 1100) setPhase(p => Math.max(p, 2));
      if (elapsed > 2000) setPhase(p => Math.max(p, 3));

      if (p < 100) {
        rafId = requestAnimationFrame(tick);
      } else {
        // Begin exit
        setTimeout(() => {
          setExiting(true);
          setTimeout(() => {
            setVisible(false);
            try { sessionStorage.setItem('et_splash_done', '1'); } catch {}
          }, 600);
        }, 200);
      }
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  if (!visible) return null;

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div className={styles.overlay}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.55, ease: [0.22,1,0.36,1] }}>

          {/* Ambient blobs */}
          <div className={styles.blob1} aria-hidden />
          <div className={styles.blob2} aria-hidden />

          {/* Main content */}
          <div className={styles.center}>

            {/* Data network */}
            <div className={styles.networkWrap}>
              <DataNetwork progress={progress} />
            </div>

            {/* Brand name - letter by letter */}
            <div className={styles.brandRow} aria-label="ET Data Solutions">
              {phase >= 1 && LETTERS.map((ch, i) => (
                <motion.span key={i} className={ch === ' ' ? styles.brandSpace : styles.brandLetter}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.035 + 0.05, duration: 0.35, ease: [0.22,1,0.36,1] }}>
                  {ch === ' ' ? '\u00A0' : ch}
                </motion.span>
              ))}
            </div>

            {/* Tagline */}
            {phase >= 1 && (
              <motion.p className={styles.tagline}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}>
                India-based outsourcing · Globally delivered
              </motion.p>
            )}

            {/* Stat tiles */}
            {phase >= 2 && (
              <motion.div className={styles.stats}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}>
                {STATS.map((s, i) => (
                  <motion.div key={s.num} className={styles.statTile}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.08, duration: 0.35, ease: [0.22,1,0.36,1] }}>
                    <span className={styles.statNum}>{s.num}</span>
                    <span className={styles.statLabel}>{s.label}</span>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* Progress bar */}
            <div className={styles.progressWrap}>
              <div className={styles.progressTrack}>
                <motion.div className={styles.progressBar}
                  style={{ width: `${progress}%` }} />
              </div>
              <div className={styles.progressRow}>
                <span className={styles.progressLabel}>
                  {phase >= 3 ? '✓ Ready' : progress < 40 ? 'Initializing systems…' : progress < 75 ? 'Loading modules…' : 'Preparing workspace…'}
                </span>
                <span className={styles.progressPct}>{progress}%</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
