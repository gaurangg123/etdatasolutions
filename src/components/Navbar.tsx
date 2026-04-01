'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { useTheme } from './ThemeProvider'
import styles from './Navbar.module.css'

const links = [
  { href: '/',         label: 'Home'     },
  { href: '/about',    label: 'About'    },
  { href: '/services', label: 'Services' },
  { href: '/contact',  label: 'Contact'  },
]

export default function Navbar() {
  const pathname = usePathname()
  const { theme, toggle } = useTheme()
  const [open, setOpen] = useState(false)

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo} onClick={() => setOpen(false)}>
          {/*
            logo-square.jpg has no white rectangle border — looks clean in both modes.
            Light mode: shown as-is (white bg blends with light nav).
            Dark mode:  invert so white bg becomes dark, logo colours remain readable.
          */}
          <Image
            src="/logo-square.jpg"
            alt="ET Data Solutions"
            width={140}
            height={46}
            className={`${styles.logoImg} ${theme === 'dark' ? styles.logoImgDark : ''}`}
            priority
          />
        </Link>

        <div className={`${styles.links} ${open ? styles.linksOpen : ''}`}>
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className={`${styles.link} ${pathname === l.href ? styles.active : ''}`}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/contact#form" className={styles.ctaLink} onClick={() => setOpen(false)}>
            Get Started
          </Link>
        </div>

        <div className={styles.right}>
          <button className={styles.themeBtn} onClick={toggle} aria-label="Toggle theme">
            {theme === 'dark' ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </button>
          <button className={styles.burger} onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
            <span className={`${styles.burgerLine} ${open ? styles.bl1Open : ''}`} />
            <span className={`${styles.burgerLine} ${open ? styles.bl2Open : ''}`} />
            <span className={`${styles.burgerLine} ${open ? styles.bl3Open : ''}`} />
          </button>
        </div>
      </div>
    </nav>
  )
}
