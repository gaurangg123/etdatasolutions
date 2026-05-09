'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
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
  return (
    <header className={styles.wrapper}>
      <nav className={styles.pill}>
        <Link href="/" className={styles.logo}>
          <Image src="/logo.png" alt="ET Data Solutions" height={36} width={140} style={{ objectFit: 'contain', objectPosition: 'left' }} priority />
        </Link>
        <div className={styles.links}>
          {links.map((l) => (
            <Link key={l.href} href={l.href}
              className={`${styles.link} ${pathname === l.href ? styles.active : ''}`}>
              {l.label}
            </Link>
          ))}
        </div>
        <Link href="/contact" className={styles.cta}>Free Consultation</Link>
      </nav>
    </header>
  );
}
