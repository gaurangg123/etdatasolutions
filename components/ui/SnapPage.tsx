'use client';
import { useEffect, useRef, useState, useCallback } from 'react';
import { useReducedMotion } from 'framer-motion';
import styles from './SnapPage.module.css';

interface Section {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface Props {
  sections: Section[];
}

/**
 * Full-screen scroll-snap layout.
 * Each section = one full viewport. User scrolls one at a time.
 * A minimal line indicator sits on the right (desktop only).
 * No dot clusters — just a clean progress line + active section name.
 */
export default function SnapPage({ sections }: Props) {
  const [active, setActive] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const reduced = useReducedMotion();

  // Track which section is in view via IntersectionObserver
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionRefs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(i); },
        { threshold: 0.55, root: containerRef.current }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach(o => o.disconnect());
  }, [sections.length]);

  const scrollTo = useCallback((index: number) => {
    const el = sectionRefs.current[index];
    if (!el) return;
    el.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });
  }, [reduced]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        scrollTo(Math.min(active + 1, sections.length - 1));
      }
      if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        scrollTo(Math.max(active - 1, 0));
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [active, sections.length, scrollTo]);

  const pct = sections.length > 1 ? (active / (sections.length - 1)) * 100 : 0;

  return (
    <>
      {/* Scroll container */}
      <div
        ref={containerRef}
        className={styles.container}
        aria-label="Page sections"
      >
        {sections.map((s, i) => (
          <div
            key={s.id}
            id={s.id}
            ref={el => { sectionRefs.current[i] = el; }}
            className={styles.panel}
            aria-label={s.label}
          >
            <div className={styles.panelInner}>
              {s.content}
            </div>
          </div>
        ))}
      </div>

      {/* ── Side indicator (desktop only) ── */}
      <aside className={styles.indicator} aria-hidden>
        {/* Progress line track */}
        <div className={styles.lineTrack}>
          <div
            className={styles.lineFill}
            style={{ height: `${pct}%` }}
          />
        </div>

        {/* Section dots — minimal */}
        <div className={styles.dots}>
          {sections.map((s, i) => (
            <button
              key={s.id}
              className={`${styles.dotBtn} ${i === active ? styles.dotActive : ''}`}
              onClick={() => scrollTo(i)}
              title={s.label}
            />
          ))}
        </div>

        {/* Active label */}
        <span className={styles.activeLabel}>
          {sections[active]?.label}
        </span>
      </aside>

      {/* ── Bottom scroll hint (hero only) ── */}
      {active === 0 && (
        <button
          className={styles.scrollHint}
          onClick={() => scrollTo(1)}
          aria-label="Scroll to next section"
        >
          <span className={styles.scrollHintLine} />
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </button>
      )}
    </>
  );
}
