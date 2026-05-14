'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion';
import styles from './SectionBand.module.css';

interface Props {
  label: string;
  index: number; // 1-based section number
}

/**
 * A large ambient section-number + label that floats in the background
 * as the section scrolls past — creates the "magazine spread" parallax feel.
 * Purely decorative; aria-hidden.
 */
export default function SectionBand({ label, index }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const x       = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.7, 1], [0, 0.07, 0.07, 0]);

  const sX = useSpring(x, { stiffness: 40, damping: 20 });

  if (reduced) return null;

  return (
    <div ref={ref} className={styles.band} aria-hidden>
      <motion.div className={styles.inner} style={{ x: sX, opacity }}>
        <span className={styles.num}>0{index}</span>
        <span className={styles.lbl}>{label}</span>
      </motion.div>
    </div>
  );
}
