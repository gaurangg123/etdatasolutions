'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Navbar.module.css';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close menu on route change
  useEffect(() => { setOpen(false); }, [pathname]);
  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <header className={styles.wrapper}>
        <nav className={styles.pill}>
          <Link href="/" className={styles.logo}>
            <Image src="/logo.png" alt="ET Data Solutions" height={36} width={140}
              style={{ objectFit:'contain', objectPosition:'left' }} priority />
          </Link>

          {/* Desktop links */}
          <div className={styles.links}>
            {links.map((l) => (
              <Link key={l.href} href={l.href}
                className={`${styles.link} ${pathname === l.href ? styles.active : ''}`}>
                {l.label}
              </Link>
            ))}
          </div>

          <div className={styles.right}>
            <Link href="/contact" className={styles.cta}>Free Consultation</Link>
            {/* Hamburger — mobile only */}
            <button className={styles.hamburger} onClick={() => setOpen(!open)}
              aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>
              <span className={`${styles.bar} ${open ? styles.bar1Open : ''}`} />
              <span className={`${styles.bar} ${open ? styles.bar2Open : ''}`} />
              <span className={`${styles.bar} ${open ? styles.bar3Open : ''}`} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div className={styles.mobileMenu}
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: [0.22,1,0.36,1] }}>
            <nav className={styles.mobileLinks}>
              {links.map((l, i) => (
                <motion.div key={l.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 + 0.1 }}>
                  <Link href={l.href}
                    className={`${styles.mobileLink} ${pathname === l.href ? styles.mobileLinkActive : ''}`}
                    onClick={() => setOpen(false)}>
                    <span className={styles.mobileLinkNum}>0{i+1}</span>
                    {l.label}
                    <svg className={styles.mobileLinkArrow} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </Link>
                </motion.div>
              ))}
            </nav>
            <motion.div className={styles.mobileFooter}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
              <Link href="/contact" className="btn-primary" onClick={() => setOpen(false)}
                style={{ width:'100%', justifyContent:'center' }}>
                Book a free consultation
              </Link>
              <p className={styles.mobileTagline}>India-based outsourcing · Est. 2014</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
