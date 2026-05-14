'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import styles from './ScrollSnapNav.module.css';

const SECTIONS = [
  { id: 'hero',        label: 'Home'        },
  { id: 'about',       label: 'About'       },
  { id: 'services',    label: 'Services'    },
  { id: 'case-studies',label: 'Work'        },
  { id: 'testimonials',label: 'Testimonials'},
  { id: 'contact',     label: 'Contact'     },
];

/**
 * Floating vertical pill nav that shows scroll progress through sections.
 * Dot + label on hover. Active dot pulses in brand orange.
 * Works alongside (not instead of) normal scroll — pure UX layer.
 */
export default function ScrollSnapNav() {
  const [active, setActive] = useState('hero');
  const [hovered, setHovered] = useState<string | null>(null);
  const reduced = useReducedMotion();
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const map = new Map<string, number>();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          map.set(e.target.id, e.intersectionRatio);
        });
        // Highest ratio wins
        let best = '';
        let bestRatio = 0;
        map.forEach((ratio, id) => {
          if (ratio > bestRatio) { bestRatio = ratio; best = id; }
        });
        if (best) setActive(best);
      },
      { threshold: [0, 0.15, 0.4, 0.6, 0.85, 1] }
    );

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observerRef.current!.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });
  };

  return (
    <nav className={styles.nav} aria-label="Section navigation">
      <div className={styles.track}>
        {SECTIONS.map((s, i) => {
          const isActive = active === s.id;
          const isHov    = hovered === s.id;
          return (
            <button
              key={s.id}
              className={`${styles.dot} ${isActive ? styles.dotActive : ''}`}
              onClick={() => scrollTo(s.id)}
              onMouseEnter={() => setHovered(s.id)}
              onMouseLeave={() => setHovered(null)}
              aria-label={`Go to ${s.label}`}
              aria-current={isActive ? 'true' : undefined}
            >
              <motion.span
                className={styles.dotInner}
                animate={isActive
                  ? { scale: 1.35, backgroundColor: 'var(--or)' }
                  : { scale: 1,    backgroundColor: 'rgba(0,0,0,0.18)' }
                }
                transition={{ type: 'spring', stiffness: 320, damping: 22 }}
              />
              {/* Pulse ring on active */}
              {isActive && (
                <motion.span
                  className={styles.pulseRing}
                  initial={{ scale: 0.8, opacity: 0.7 }}
                  animate={{ scale: 2, opacity: 0 }}
                  transition={{ duration: 1.4, repeat: Infinity, ease: 'easeOut' }}
                />
              )}
              {/* Tooltip label */}
              <motion.span
                className={styles.label}
                initial={{ opacity: 0, x: 6 }}
                animate={isHov || isActive
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: 6 }
                }
                transition={{ duration: 0.18 }}
              >
                {s.label}
              </motion.span>
            </button>
          );
        })}
        {/* Progress line */}
        <div className={styles.line} aria-hidden>
          <motion.div
            className={styles.lineFill}
            animate={{
              height: `${((SECTIONS.findIndex(s => s.id === active)) / (SECTIONS.length - 1)) * 100}%`
            }}
            transition={{ type: 'spring', stiffness: 200, damping: 30 }}
          />
        </div>
      </div>
    </nav>
  );
}
