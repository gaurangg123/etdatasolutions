import styles from './Container.module.css'

interface Props {
  children: React.ReactNode
  className?: string
  narrow?: boolean   // max-width: 760px — for centered text pages
  wide?: boolean     // max-width: 1280px — for data-heavy pages
}

export default function Container({ children, className = '', narrow, wide }: Props) {
  const cls = [
    styles.container,
    narrow ? styles.narrow : '',
    wide   ? styles.wide   : '',
    className,
  ].filter(Boolean).join(' ')

  return <div className={cls}>{children}</div>
}
