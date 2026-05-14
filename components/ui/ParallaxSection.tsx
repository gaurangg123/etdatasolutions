'use client';
import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion';
import styles from './ParallaxSection.module.css';

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  depth?: 'shallow' | 'medium' | 'deep';
  overlay?: boolean;
  /** floating orb accents */
  orbs?: boolean;
}

/**
 * Wraps any section with subtle parallax depth layers.
 * Uses framer-motion's useScroll scoped to each element so
 * each section has its own parallax offset — no global state.
 */
export default function ParallaxSection({
  children,
  className = '',
  depth = 'medium',
  overlay = false,
  orbs = false,
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const yOffsets: Record<string, [number, number]> = {
    shallow: [-18, 18],
    medium:  [-36, 36],
    deep:    [-60, 60],
  };

  const rawY1 = useTransform(scrollYProgress, [0, 1], yOffsets[depth]);
  const rawY2 = useTransform(scrollYProgress, [0, 1], [yOffsets[depth][0] * 1.7, yOffsets[depth][1] * 1.7]);
  const rawY3 = useTransform(scrollYProgress, [0, 1], [yOffsets[depth][0] * 0.5, yOffsets[depth][1] * 0.5]);
  const rawScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.04, 1, 1.04]);

  const springCfg = { stiffness: 60, damping: 24, restDelta: 0.001 };
  const y1 = useSpring(rawY1, springCfg);
  const y2 = useSpring(rawY2, springCfg);
  const y3 = useSpring(rawY3, springCfg);
  const scale = useSpring(rawScale, springCfg);

  const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 0.6, 0.6, 0]);

  if (reduced) {
    return <div ref={ref} className={`${styles.wrap} ${className}`}>{children}</div>;
  }

  return (
    <div ref={ref} className={`${styles.wrap} ${className}`}>
      {/* Deep background layer — moves slowest */}
      {orbs && (
        <div className={styles.orbLayer} aria-hidden>
          <motion.div className={`${styles.orb} ${styles.orb1}`} style={{ y: y3 }} />
          <motion.div className={`${styles.orb} ${styles.orb2}`} style={{ y: y2 }} />
          <motion.div className={`${styles.orb} ${styles.orb3}`} style={{ y: y1 }} />
        </div>
      )}

      {/* Subtle overlay tint when section enters */}
      {overlay && (
        <motion.div className={styles.overlayTint} style={{ opacity: opacity2 }} aria-hidden />
      )}

      {/* Content rides a gentle parallax lift */}
      <motion.div className={styles.content} style={{ y: y3 }}>
        {children}
      </motion.div>
    </div>
  );
}
