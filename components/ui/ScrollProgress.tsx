'use client';
import { motion, useScroll, useSpring } from 'framer-motion';
import styles from './ScrollProgress.module.css';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  return (
    <div className={styles.track} aria-hidden>
      <motion.div className={styles.bar} style={{ scaleX }} />
    </div>
  );
}
