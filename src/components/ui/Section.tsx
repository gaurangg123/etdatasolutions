import styles from './Section.module.css'

interface Props {
  children: React.ReactNode
  className?: string
  alt?: boolean      // alternate background
  tight?: boolean    // less vertical padding
}

export default function Section({ children, className = '', alt, tight }: Props) {
  const cls = [
    styles.section,
    alt   ? styles.alt   : '',
    tight ? styles.tight : '',
    className,
  ].filter(Boolean).join(' ')

  return <section className={cls}>{children}</section>
}
