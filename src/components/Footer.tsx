import Link from 'next/link'
import Image from 'next/image'
import styles from './Footer.module.css'

const services = [
  { label: 'Staffing, VA & Recruitment', href: '/services#staffing' },
  { label: 'Data & Excel',               href: '/services#data'     },
  { label: 'QA Testing — App & Web',     href: '/services#qa'       },
  { label: 'Data Engineering & Viz',     href: '/services#dataeng'  },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>

        {/* Brand column */}
        <div className={styles.brand}>
          <div className={styles.logoRow}>
            <Image
              src="/logo-transparent.png"
              alt="ET Data Solutions"
              width={150}
              height={48}
              className={styles.logoImg}
              quality={100}
            />
          </div>
          <p className={styles.tagline}>
            Intelligent data, staffing &amp; software solutions.<br />
            India-based. Globally delivered since 2014.
          </p>
          <div className={styles.contact}>
            <a href="mailto:bobby@etdatasolutions.com" className={styles.contactItem}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              bobby@etdatasolutions.com
            </a>
            <a href="tel:+13023579776" className={styles.contactItem}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.58 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z"/>
              </svg>
              +1-302-357-9776
            </a>
            <a href="tel:+916265348189" className={styles.contactItem}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.58 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z"/>
              </svg>
              +91 62653 48189
            </a>
          </div>
        </div>

        {/* Services */}
        <div className={styles.col}>
          <p className={styles.colHead}>Services</p>
          {services.map(s => (
            <Link key={s.href} href={s.href} className={styles.colLink}>{s.label}</Link>
          ))}
        </div>

        {/* Company */}
        <div className={styles.col}>
          <p className={styles.colHead}>Company</p>
          <Link href="/about"        className={styles.colLink}>About Us</Link>
          <Link href="/services"     className={styles.colLink}>Services</Link>
          <Link href="/contact"      className={styles.colLink}>Contact</Link>
          <Link href="/contact#form" className={styles.colLink}>Get a Quote</Link>
        </div>

      </div>

      <div className={styles.bottom}>
        <div className={styles.bottomInner}>
          <span className={styles.copy}>
            © {new Date().getFullYear()} ET Data Solutions. All rights reserved.
          </span>
          <a href="https://etdatasolutions.com" className={styles.copyLink}>
            etdatasolutions.com
          </a>
        </div>
      </div>
    </footer>
  )
}
