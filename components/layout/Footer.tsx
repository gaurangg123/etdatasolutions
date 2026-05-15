import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          {/* ── Brand ── */}
          <div className={styles.brand}>
            <Link href="/" className={styles.logo} aria-label="ET Data Solutions home">
              <span className={styles.logoMark}>
                <span className={styles.logoDot} />
              </span>
              <span className={styles.logoText}>ET Data Solutions</span>
            </Link>
            <p className={styles.tagline}>
              Staffing, data, QA &amp; engineering — delivered quietly from Indore, India.
            </p>
            <div className={styles.ctaWrap}>
              <Link href="/#contact" className="btn-link">
                Book a consultation &rarr;
              </Link>
            </div>
          </div>

          {/* ── Link columns ── */}
          <div className={styles.cols}>
            <div className={styles.col}>
              <span className={styles.colTitle}>Services</span>
              <Link href="/services/staffing">Staffing & VAs</Link>
              <Link href="/services/data-entry">Data Entry</Link>
              <Link href="/services/qa-testing">QA Testing</Link>
              <Link href="/services/data-engineering">Data Engineering</Link>
            </div>

            <div className={styles.col}>
              <span className={styles.colTitle}>Company</span>
              <Link href="/work">Case Studies</Link>
              <Link href="/#contact">Contact</Link>
              <a href="mailto:hello@etdatasolutions.com">hello@etdatasolutions.com</a>
            </div>

            <div className={styles.col}>
              <span className={styles.colTitle}>Reach</span>
              <span>Indore, India</span>
              <span>Serving US · UK · CA · AU</span>
              <span>Reply within 4 hours</span>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <span className={styles.copy}>
            &copy; {year} ET Data Solutions. All rights reserved.
          </span>
          <div className={styles.legal}>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
