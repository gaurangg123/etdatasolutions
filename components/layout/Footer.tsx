import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.main}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <div className={styles.logoIcon}>E</div>
              <span className={styles.logoText}>ET Data Solutions</span>
            </div>
            <p className={styles.tagline}>India-based outsourcing. Globally delivered. Est. 2014.</p>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Services</h4>
            <nav className={styles.colLinks}>
              <Link href="/services#staffing" className={styles.colLink}>Staffing &amp; VA</Link>
              <Link href="/services#data" className={styles.colLink}>Data Entry</Link>
              <Link href="/services#qa" className={styles.colLink}>Manual QA</Link>
              <Link href="/services#engineering" className={styles.colLink}>Data Engineering</Link>
            </nav>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Company</h4>
            <nav className={styles.colLinks}>
              <Link href="/about" className={styles.colLink}>About</Link>
              <Link href="/testimonials" className={styles.colLink}>Testimonials</Link>
              <Link href="/contact" className={styles.colLink}>Contact</Link>
              <Link href="/contact" className={styles.colLink}>Free Audit</Link>
            </nav>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© 2026 ET Data Solutions. All rights reserved.</span>
          <span>Indore, India · Serving US, UK, Canada, AU</span>
        </div>
      </div>
    </footer>
  );
}
