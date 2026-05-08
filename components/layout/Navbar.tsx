'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from './Navbar.module.css';

const links = [
  { href: '/#about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className={styles.wrapper}>
      <nav className={styles.pill} role="navigation" aria-label="Main navigation">
        <Link href="/" className={styles.logo}>
          <div className={styles.logoIcon} aria-hidden>E</div>
          <span className={styles.logoText}>ET Data Solutions</span>
        </Link>

        <div className={styles.links}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`${styles.link} ${pathname === l.href.replace('/#about', '/') ? styles.active : ''}`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <Link href="/contact" className={styles.cta}>
          Free Consultation
        </Link>
      </nav>
    </header>
  );
}
