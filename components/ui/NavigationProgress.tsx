'use client';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import Spinner from './Spinner';
import styles from './NavigationProgress.module.css';

export default function NavigationProgress() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showOverlay, setShowOverlay] = useState(false);
  const lastPathRef = useRef(pathname);
  const overlayTimer = useRef<NodeJS.Timeout | null>(null);
  const safetyTimer = useRef<NodeJS.Timeout | null>(null);

  const reset = () => {
    if (overlayTimer.current) clearTimeout(overlayTimer.current);
    if (safetyTimer.current) clearTimeout(safetyTimer.current);
    setShowOverlay(false);
    setLoading(false);
    setProgress(0);
  };

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement)?.closest('a');
      if (!link) return;
      const href = link.getAttribute('href');
      if (!href) return;
      // Skip externals, anchors, mailto/tel, _blank, modifier keys
      if (href.startsWith('#') || href.startsWith('http') ||
          href.startsWith('mailto:') || href.startsWith('tel:') ||
          link.target === '_blank' ||
          (e as MouseEvent).metaKey || (e as MouseEvent).ctrlKey) return;

      // ✅ KEY FIX: skip if already on that page
      const currentPath = window.location.pathname;
      const targetPath = href.split('?')[0].split('#')[0] || '/';
      if (targetPath === currentPath) return;

      setLoading(true);
      setProgress(15);
      requestAnimationFrame(() => requestAnimationFrame(() => setProgress(50)));

      // Show spinner overlay only for slow navigations (>250ms)
      overlayTimer.current = setTimeout(() => setShowOverlay(true), 250);

      // Safety: auto-dismiss after 4s no matter what
      safetyTimer.current = setTimeout(reset, 4000);
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  // Complete on pathname change
  useEffect(() => {
    if (lastPathRef.current === pathname) return;
    lastPathRef.current = pathname;
    if (overlayTimer.current) clearTimeout(overlayTimer.current);
    if (safetyTimer.current) clearTimeout(safetyTimer.current);
    setShowOverlay(false);
    setProgress(100);
    const t = setTimeout(reset, 350);
    return () => clearTimeout(t);
  }, [pathname]);

  return (
    <>
      <div className={`${styles.bar} ${loading ? styles.visible : ''}`}
        style={{ width: `${progress}%` }} aria-hidden />
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
