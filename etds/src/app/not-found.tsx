import Link from 'next/link'
import styles from './not-found.module.css'

export default function NotFound() {
  return (
    <section className={styles.wrap}>
      <div className={styles.bg} aria-hidden />
      <div className="container">
        <div className={styles.inner}>
          <span className={styles.code}>404</span>
          <h1 className={styles.title}>Page not found</h1>
          <p className={styles.sub}>
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className={styles.actions}>
            <Link href="/" className="btn-primary">
              Back to Home
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
            <Link href="/contact" className="btn-secondary">Contact Us</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
