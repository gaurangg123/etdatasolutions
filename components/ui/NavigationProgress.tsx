'use client';
import { useEffect, useState, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Spinner from './Spinner';
import styles from './NavigationProgress.module.css';

export default function NavigationProgress() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showOverlay, setShowOverlay] = useState(false);
  const lastPathRef = useRef(pathname);
  const overlayTimerRef = useRef<NodeJS.Timeout | null>(null);
  const completeTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const link = target?.closest('a');
      if (!link) return;
      const href = link.getAttribute('href');
      if (!href) return;
      // Skip externals, anchors, mailto/tel
      if (href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) return;
      if (link.target === '_blank') return;
      if ((e as any).metaKey || (e as any).ctrlKey || (e as any).shiftKey) return;

      // Navigating — start progress
      setLoading(true);
      setProgress(15);
      requestAnimationFrame(() => requestAnimationFrame(() => setProgress(45)));
      // Show overlay if nav takes >220ms (slow connections)
      if (overlayTimerRef.current) clearTimeout(overlayTimerRef.current);
      overlayTimerRef.current = setTimeout(() => setShowOverlay(true), 220);
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  useEffect(() => {
    if (lastPathRef.current === pathname) return;
    lastPathRef.current = pathname;
    // Route changed — complete
    if (overlayTimerRef.current) clearTimeout(overlayTimerRef.current);
    setShowOverlay(false);
    setProgress(100);
    if (completeTimerRef.current) clearTimeout(completeTimerRef.current);
    completeTimerRef.current = setTimeout(() => {
      setLoading(false);
      setProgress(0);
    }, 350);
  }, [pathname]);

  return (
    <>
      <div className={`${styles.bar} ${loading ? styles.visible : ''}`} style={{ width: `${progress}%` }} aria-hidden />
      {showOverlay && (
        <div className={styles.overlay}>
          <div className={styles.spinnerWrap}>
            <Spinner size="md" label="Loading…" />
          </div>
        </div>
      )}
    </>
  );
}
