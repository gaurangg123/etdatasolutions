import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  withWordmark?: boolean;
  size?: number;
  href?: string | null;
}

/**
 * ET Data Solutions logo — uses /public/logo.svg as the mark.
 * Wordmark renders next to it (matches the uploaded brand identity).
 */
export default function Logo({
  className = '',
  withWordmark = true,
  size = 44,
  href = '/',
}: LogoProps) {
  const mark = (
    <Image
      src="/logo.svg"
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
        <span className="text-ink-900">ET </span>
        <span style={{ color: '#1FA1FF' }}>DATA</span>
      </span>
      <span className="text-[9px] sm:text-[10px] tracking-[0.32em] mt-1 font-semibold" style={{ color: '#1F6FBF' }}>
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
    <Link href={href} className="inline-flex items-center group hover:opacity-90 transition-opacity">
      {content}
    </Link>
  ) : (
    content
  );
}
