'use client';
import { useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
} from 'framer-motion';
import styles from './ParallaxHero.module.css';

interface Props {
  children: React.ReactNode;
}

/**
 * Wraps the Hero section only.
 * Creates a true multi-plane parallax: background rings move fastest,
 * headline copy moves at medium speed, the dashboard card barely moves.
 * On scroll-out the whole hero fades + scales down slightly — the "curtain rising"
 * effect that tells users the page is alive.
 */
export default function ParallaxHero({ children }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  // Hero fades and shrinks as user scrolls away — "peeling off" effect
  const opacity  = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const scale    = useTransform(scrollYProgress, [0, 0.75], [1, 0.96]);
  const yContent = useTransform(scrollYProgress, [0, 1], [0, -60]);

  // Background geometry layers at different speeds
  const yRingFar  = useTransform(scrollYProgress, [0, 1], [0, 120]);  // rings move down (slowest)
  const yRingMid  = useTransform(scrollYProgress, [0, 1], [0,  80]);
  const yRingNear = useTransform(scrollYProgress, [0, 1], [0,  50]);

  // Subtle vignette appears as user scrolls
  const vigOpacity = useTransform(scrollYProgress, [0, 0.4], [0, 0.4]);

  const spring = { stiffness: 50, damping: 20 };
  const sYFar  = useSpring(yRingFar,  spring);
  const sYMid  = useSpring(yRingMid,  spring);
  const sYNear = useSpring(yRingNear, spring);
  const sYC    = useSpring(yContent,  spring);

  if (reduced) {
    return <div ref={ref}>{children}</div>;
  }

  return (
    <div ref={ref} className={styles.heroWrap}>
      {/* ── Parallax ring geometry (behind everything) ── */}
      <div className={styles.ringLayer} aria-hidden>
        <motion.div className={`${styles.ring} ${styles.ringA}`} style={{ y: sYFar }}  />
        <motion.div className={`${styles.ring} ${styles.ringB}`} style={{ y: sYMid }}  />
        <motion.div className={`${styles.ring} ${styles.ringC}`} style={{ y: sYNear }} />
        <motion.div className={`${styles.ring} ${styles.ringD}`} style={{ y: sYFar }}  />
        {/* Floating particle dots */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className={styles.particle}
            style={{
              left: `${10 + i * 11}%`,
              top:  `${15 + (i % 3) * 28}%`,
              y: useTransform(scrollYProgress, [0, 1], [0, 30 + i * 12]),
            }}
          />
        ))}
      </div>

      {/* ── Scroll-fade vignette ── */}
      <motion.div className={styles.vignette} style={{ opacity: vigOpacity }} aria-hidden />

      {/* ── Content fades + scales away on scroll ── */}
      <motion.div
        className={styles.contentWrap}
        style={{ opacity, scale, y: sYC }}
      >
        {children}
      </motion.div>
    </div>
  );
}
