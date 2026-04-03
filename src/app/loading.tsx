import styles from './loading.module.css'

export default function Loading() {
  return (
    <div className={styles.wrap} aria-label="Loading page" role="status">
      <div className={styles.spinner} />
      <span className={styles.sr}>Loading…</span>
    </div>
  )
}
