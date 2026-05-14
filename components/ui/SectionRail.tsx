'use client';
import { useEffect, useRef, useState, useCallback } from 'react';
import styles from './SectionRail.module.css';

interface Section {
  id: string;
  label: string;
}

interface Props {
  sections: Section[];
}

/**
 * A minimal, refined section navigator.
 * - Single vertical line on the right edge
 * - Active section gets a thin filled marker + label
 * - Other sections show as tiny ticks (hoverable)
 * - Hidden on mobile and tablet
 */
export default function SectionRail({ sections }: Props) {
  const [active, setActive] = useState(0);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const ratiosRef = useRef<Map<string, number>>(new Map());

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          ratiosRef.current.set(e.target.id, e.intersectionRatio);
        });
        // Pick the section with the highest visibility
        let bestId = sections[0].id;
        let bestRatio = 0;
        ratiosRef.current.forEach((ratio, id) => {
          if (ratio > bestRatio) { bestRatio = ratio; bestId = id; }
        });
        const idx = sections.findIndex(s => s.id === bestId);
        if (idx !== -1) setActive(idx);
      },
      {
        // Multiple thresholds so we update smoothly as sections enter/leave
        threshold: [0, 0.15, 0.35, 0.55, 0.75, 1],
        // Trigger when the section is closer to centre, not just the edges
        rootMargin: '-25% 0px -25% 0px',
      }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observerRef.current!.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, [sections]);

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const navOffset = 80;
    const y = el.getBoundingClientRect().top + window.scrollY - navOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }, []);

  return (
    <nav className={styles.rail} aria-label="Page sections">
      {/* Background line */}
      <div className={styles.line} aria-hidden />

      {/* Ticks for each section */}
      <ul className={styles.list}>
        {sections.map((s, i) => {
          const isActive = i === active;
          return (
            <li key={s.id}>
              <button
                onClick={() => scrollTo(s.id)}
                className={`${styles.tick} ${isActive ? styles.tickActive : ''}`}
                aria-label={`Jump to ${s.label}`}
                aria-current={isActive ? 'true' : undefined}
              >
                <span className={styles.tickBar} aria-hidden />
                <span className={styles.tickLabel}>{s.label}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
