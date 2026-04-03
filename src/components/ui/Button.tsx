import Link from 'next/link'
import styles from './Button.module.css'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size    = 'sm' | 'md' | 'lg'

interface ButtonProps {
  variant?:  Variant
  size?:     Size
  href?:     string
  external?: boolean
  disabled?: boolean
  loading?:  boolean
  onClick?:  () => void
  children:  React.ReactNode
  className?: string
  type?:     'button' | 'submit' | 'reset'
}

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  external,
  disabled,
  loading,
  onClick,
  children,
  className = '',
  type = 'button',
}: ButtonProps) {
  const cls = [
    styles.btn,
    styles[variant],
    styles[size],
    loading  ? styles.loading  : '',
    disabled ? styles.disabled : '',
    className,
  ].filter(Boolean).join(' ')

  if (href) {
    const props = external
      ? { target: '_blank', rel: 'noopener noreferrer' }
      : {}
    return (
      <Link href={href} className={cls} {...props}>
        {loading && <span className={styles.spinner} aria-hidden />}
        {children}
      </Link>
    )
  }

  return (
    <button
      type={type}
      className={cls}
      disabled={disabled || loading}
      onClick={onClick}
    >
      {loading && <span className={styles.spinner} aria-hidden />}
      {children}
    </button>
  )
}
