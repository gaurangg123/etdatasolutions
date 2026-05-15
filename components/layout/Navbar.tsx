'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const links = [
  { href: '/',         label: 'Home'     },
  { href: '/services', label: 'Services' },
  { href: '/work',     label: 'Work'     },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}>
      <div className={styles.bar}>
        <Link href="/" className={styles.logo} aria-label="ET Data Solutions home">
          <span className={styles.logoMark}>
            <span className={styles.logoDot} />
          </span>
          <span className={styles.logoText}>
            ET Data <em>Solutions</em>
          </span>
        </Link>

        <nav className={styles.nav}>
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className={`${styles.link} ${pathname === l.href ? styles.linkActive : ''}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className={styles.right}>
          <Link href="/#contact" className={`btn btn-primary ${styles.cta}`}>
            Get in touch
          </Link>
          <button
            className={styles.menuBtn}
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <span className={`${styles.menuIcon} ${open ? styles.menuIconOpen : ''}`}>
              <span /><span />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className={styles.mobileMenu}>
          <nav className={styles.mobileNav}>
            {links.map(l => (
              <Link
                key={l.href}
                href={l.href}
                className={`${styles.mobileLink} ${pathname === l.href ? styles.mobileLinkActive : ''}`}
              >
                {l.label}
                <span className={styles.mobileArrow}>&rarr;</span>
              </Link>
            ))}
            <Link href="/#contact" className={`btn btn-primary ${styles.mobileCta}`}>
              Get in touch
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
