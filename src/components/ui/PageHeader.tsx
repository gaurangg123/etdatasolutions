import styles from './PageHeader.module.css'

interface PageHeaderProps {
  eyebrow: string
  title: React.ReactNode   // allows <br/> and <span> inside
  subtitle: string
}

export default function PageHeader({ eyebrow, title, subtitle }: PageHeaderProps) {
  return (
    <section className={styles.header}>
      <div className={styles.bg} aria-hidden />
      <div className="container">
        <span className={`eyebrow reveal ${styles.eyebrow}`}>{eyebrow}</span>
        <h1 className={`${styles.h1} reveal reveal-delay-1`}>{title}</h1>
        <p className={`${styles.sub} reveal reveal-delay-2`}>{subtitle}</p>
      </div>
    </section>
  )
}
