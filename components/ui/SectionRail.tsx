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
 * Right-edge minimal section navigator.
 * Single line of restrained dots, labels reveal on active/hover.
 * Hidden under 1280px to never crowd the layout.
 */
export default function SectionRail({ sections }: Props) {
  const [active, setActive] = useState(0);
  const ratiosRef = useRef<Map<string, number>>(new Map());

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          ratiosRef.current.set(e.target.id, e.intersectionRatio);
        });
        let bestId = sections[0]?.id ?? '';
        let bestRatio = 0;
        ratiosRef.current.forEach((ratio, id) => {
          if (ratio > bestRatio) { bestRatio = ratio; bestId = id; }
        });
        const idx = sections.findIndex(s => s.id === bestId);
        if (idx !== -1) setActive(idx);
      },
      {
        threshold: [0, 0.2, 0.4, 0.6, 0.8],
        rootMargin: '-30% 0px -30% 0px',
      }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });

    return () => obs.disconnect();
  }, [sections]);

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }, []);

  if (sections.length < 2) return null;

  return (
    <nav className={styles.rail} aria-label="Section navigation">
      <ul className={styles.list}>
        {sections.map((s, i) => {
          const isActive = i === active;
          return (
            <li key={s.id}>
              <button
                onClick={() => scrollTo(s.id)}
                className={`${styles.item} ${isActive ? styles.itemActive : ''}`}
                aria-label={`Jump to ${s.label}`}
                aria-current={isActive ? 'true' : undefined}
              >
                <span className={styles.label}>{s.label}</span>
                <span className={styles.bar} aria-hidden />
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
