import Link from 'next/link';

interface LogoProps {
  className?: string;
  withWordmark?: boolean;
  size?: number;
  href?: string | null;
  /** 'brand' = orange (default, matches site theme); 'blue' = original logo blue */
  color?: 'brand' | 'blue';
}

/**
 * ET Data Solutions logo — molecule/network mark + wordmark.
 * Inline SVG so the gradient stays crisp at any size and the color can be themed.
 */
export default function Logo({
  className = '',
  withWordmark = true,
  size = 40,
  href = '/',
  color = 'brand',
}: LogoProps) {
  const gradId = `etdsg-${color}`;
  const stops =
    color === 'blue'
      ? { from: '#1FA1FF', to: '#2D6CDF' }
      : { from: '#FF7A00', to: '#FFA94D' };

  const mark = (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="ET Data Solutions logo"
      className="shrink-0"
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={stops.from} />
          <stop offset="100%" stopColor={stops.to} />
        </linearGradient>
      </defs>
      <g stroke={`url(#${gradId})`} strokeWidth="14" strokeLinecap="round">
        <line x1="70"  y1="60"  x2="120" y2="70" />
        <line x1="120" y1="70"  x2="150" y2="110" />
        <line x1="70"  y1="60"  x2="60"  y2="120" />
        <line x1="60"  y1="120" x2="100" y2="155" />
        <line x1="100" y1="155" x2="150" y2="110" />
      </g>
      <circle cx="70"  cy="60"  r="22" fill={`url(#${gradId})`} />
      <circle cx="120" cy="70"  r="14" fill={stops.from} />
      <circle cx="150" cy="110" r="18" fill={`url(#${gradId})`} />
      <circle cx="60"  cy="120" r="12" fill={stops.from} />
      <circle cx="100" cy="155" r="16" fill={`url(#${gradId})`} />
    </svg>
  );

  const wordmark = withWordmark && (
    <span className="font-display font-bold tracking-tight leading-none flex flex-col">
      <span className="text-[1.1rem] sm:text-xl leading-none">
        <span className="text-ink-900">ET </span>
        <span
          style={{
            background: `linear-gradient(135deg, ${stops.from}, ${stops.to})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          DATA
        </span>
      </span>
      <span className="text-[9px] sm:text-[10px] tracking-[0.32em] text-ink-500 mt-1 font-semibold">
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
