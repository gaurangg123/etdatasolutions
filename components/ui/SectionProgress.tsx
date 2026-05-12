'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import styles from './SectionProgress.module.css';

const SECTIONS = [
  { id: 'hero',          label: 'Home'         },
  { id: 'about',         label: 'About'        },
  { id: 'how-diff',      label: 'Why Us'       },
  { id: 'services',      label: 'Services'     },
  { id: 'case-studies',  label: 'Results'      },
  { id: 'testimonials',  label: 'Testimonials' },
  { id: 'faq',           label: 'FAQ'          },
  { id: 'contact',       label: 'Contact'      },
];

export default function SectionProgress() {
  const pathname = usePathname();
  const [active, setActive] = useState('hero');
  const isHome = pathname === '/';

  useEffect(() => {
    if (!isHome) return; // only track on homepage
    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight / 3;
      for (const sec of [...SECTIONS].reverse()) {
        const el = document.getElementById(sec.id);
        if (el && el.offsetTop <= scrollY) { setActive(sec.id); return; }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  // Don't render dots on any page except homepage
  if (!isHome) return null;

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className={styles.nav} aria-label="Page sections">
      {SECTIONS.map((sec) => (
        <button key={sec.id}
          className={`${styles.dot} ${active === sec.id ? styles.active : ''}`}
          onClick={() => scrollTo(sec.id)}
          title={sec.label}
          aria-label={`Go to ${sec.label}`}>
          <span className={styles.tooltip}>{sec.label}</span>
        </button>
      ))}
    </nav>
  );
}
