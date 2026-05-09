'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './FloatingCTA.module.css';

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div className={`${styles.bar} ${visible ? styles.visible : ''}`} aria-hidden={!visible}>
      <div className={styles.content}>
        <div className={styles.text}>
          <span className={styles.textMain}>Ready to get started?</span>
          <span className={styles.textSub}>First delivery in 7 days</span>
        </div>
        <Link href="/contact" className={styles.btn}>Book a free call</Link>
      </div>
    </div>
  );
}
