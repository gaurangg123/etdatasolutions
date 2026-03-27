import Link from 'next/link'
import styles from './Footer.module.css'

const services = [
  { label: 'Data & Excel',                href: '/services#data'       },
  { label: 'Staffing, VA & Recruitment',  href: '/services#staffing'   },
  { label: 'QA & App Testing',            href: '/services#qa'         },
  { label: 'Data Engineering & Viz',      href: '/services#dataeng'    },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <div className={styles.logoRow}>
            <span className={styles.logoIcon}>
              <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                <path d="M9 1.5L16.5 5.5V12.5L9 16.5L1.5 12.5V5.5L9 1.5Z"
                  fill="white" fillOpacity="0.9"/>
                <path d="M9 1.5V16.5M1.5 5.5L16.5 12.5M16.5 5.5L1.5 12.5"
                  stroke="white" strokeWidth="0.8" strokeOpacity="0.5"/>
              </svg>
            </span>
            <span className={styles.logoText}>ET DATA SOLUTIONS</span>
          </div>
          <p className={styles.tagline}>
            Intelligent data, staffing & software solutions. India-based, globally delivered.
          </p>
          <div className={styles.contact}>
            <a href="mailto:bobby@etdatasolutions.com" className={styles.contactItem}>
              bobby@etdatasolutions.com
            </a>
            <a href="tel:+12155543713" className={styles.contactItem}>
              +1-215-554-3713
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
          <Link href="/about"   className={styles.colLink}>About Us</Link>
          <Link href="/contact" className={styles.colLink}>Contact</Link>
          <Link href="/contact" className={styles.colLink}>Get a Quote</Link>
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
