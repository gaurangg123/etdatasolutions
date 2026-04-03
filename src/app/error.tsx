'use client'

import { useEffect } from 'react'
import styles from './error.module.css'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log to error monitoring (e.g. Sentry) in production
    console.error('[page error]', error)
  }, [error])

  return (
    <div className={styles.wrap}>
      <div className={styles.inner}>
        <span className={styles.code} aria-hidden>!</span>
        <h1 className={styles.title}>Something went wrong</h1>
        <p className={styles.sub}>
          An unexpected error occurred. Please try again.
        </p>
        <div className={styles.actions}>
          <button className="btn-primary" onClick={reset}>
            Try again
          </button>
          <a href="/" className="btn-secondary">
            Go home
          </a>
        </div>
      </div>
    </div>
  )
}
