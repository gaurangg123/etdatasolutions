'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from './ThemeProvider'
import styles from './Footer.module.css'

const services = [
  { label: 'Staffing, VA & Recruitment',  href: '/services#staffing' },
  { label: 'Data & Excel',                href: '/services#data'     },
  { label: 'QA Testing — App & Web',      href: '/services#qa'       },
  { label: 'Data Engineering & Viz',      href: '/services#dataeng'  },
]

export default function Footer() {
  const { theme } = useTheme()

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <div className={styles.logoRow}>
            <Image
              src="/logo-square.jpg"
              alt="ET Data Solutions"
              width={130}
              height={43}
              className={`${styles.logoImg} ${theme === 'dark' ? styles.logoImgDark : ''}`}
            />
          </div>
          <p className={styles.tagline}>
            Intelligent data, staffing &amp; software solutions.<br />
            India-based. Globally delivered.
          </p>
          <div className={styles.contact}>
            <a href="mailto:bobby@etdatasolutions.com" className={styles.contactItem}>
              bobby@etdatasolutions.com
            </a>
            <a href="tel:+13023579776" className={styles.contactItem}>
              +1-302-357-9776
            </a>
            <a href="tel:+916265348189" className={styles.contactItem}>
              +91 62653 48189
            </a>
          </div>
        </div>

        <div className={styles.col}>
          <p className={styles.colHead}>Services</p>
          {services.map(s => (
            <Link key={s.href} href={s.href} className={styles.colLink}>{s.label}</Link>
          ))}
        </div>

        <div className={styles.col}>
          <p className={styles.colHead}>Company</p>
          <Link href="/about"        className={styles.colLink}>About Us</Link>
          <Link href="/contact"      className={styles.colLink}>Contact</Link>
          <Link href="/contact#form" className={styles.colLink}>Get a Quote</Link>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.bottomInner}>
          <span className={styles.copy}>© {new Date().getFullYear()} ET Data Solutions. All rights reserved.</span>
          <span className={styles.copy}>etdatasolutions.com</span>
        </div>
      </div>
    </footer>
  )
}
