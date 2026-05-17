import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  withWordmark?: boolean;
  size?: number;
  href?: string | null;
  /** 'light' (default) for white/light backgrounds, 'dark' for dark backgrounds */
  variant?: 'light' | 'dark';
}

/**
 * ET Data Solutions logo.
 * Symbol comes from /public/logo-mark.png (the user's brand mark).
 * Wordmark is rendered as text so it stays crisp at any size and themeable.
 */
export default function Logo({
  className = '',
  withWordmark = true,
  size = 44,
  href = '/',
  variant = 'light',
}: LogoProps) {
  const etColor = variant === 'dark' ? '#FFFFFF' : '#0F131C';
  const dataColor = '#1FA1FF';
  const solColor = variant === 'dark' ? 'rgba(255,255,255,0.75)' : '#1F6FBF';

  const mark = (
    <Image
      src="/logo-mark.png"
      alt="ET Data Solutions"
      width={size}
      height={size}
      priority
      className="shrink-0"
    />
  );

  const wordmark = withWordmark && (
    <span className="font-display font-bold tracking-tight leading-none flex flex-col">
      <span className="text-[1.1rem] sm:text-xl leading-none">
        <span style={{ color: etColor }}>ET </span>
        <span style={{ color: dataColor }}>DATA</span>
      </span>
      <span
        className="text-[9px] sm:text-[10px] tracking-[0.32em] mt-1 font-semibold"
        style={{ color: solColor }}
      >
        SOLUTIONS
      </span>
    </span>
  );

  const content = (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      {mark}
      {wordmark}
    </span>
  );

  return href ? (
    <Link
      href={href}
      className="inline-flex items-center group hover:opacity-90 transition-opacity"
    >
      {content}
    </Link>
  ) : (
    content
  );
}
