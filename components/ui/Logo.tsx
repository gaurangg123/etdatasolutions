import Link from 'next/link';

interface LogoProps {
  className?: string;
  withWordmark?: boolean;
  size?: number;
  href?: string | null;
}

/**
 * ET Data Solutions logo — molecule/network mark + ET DATA SOLUTIONS wordmark.
 * Rendered as inline SVG so the brand-orange gradient stays crisp at any size.
 */
export default function Logo({ className = '', withWordmark = true, size = 36, href = '/' }: LogoProps) {
  const mark = (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="ET Data Solutions logo"
    >
      <defs>
        <linearGradient id="etdsg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FF7A00" />
          <stop offset="100%" stopColor="#FFA94D" />
        </linearGradient>
      </defs>
      <g stroke="url(#etdsg)" strokeWidth="14" strokeLinecap="round">
        <line x1="70"  y1="60"  x2="120" y2="70" />
        <line x1="120" y1="70"  x2="150" y2="110" />
        <line x1="70"  y1="60"  x2="60"  y2="120" />
        <line x1="60"  y1="120" x2="100" y2="155" />
        <line x1="100" y1="155" x2="150" y2="110" />
      </g>
      <circle cx="70"  cy="60"  r="22" fill="url(#etdsg)" />
      <circle cx="120" cy="70"  r="14" fill="#FF7A00" />
      <circle cx="150" cy="110" r="18" fill="url(#etdsg)" />
      <circle cx="60"  cy="120" r="12" fill="#FF7A00" />
      <circle cx="100" cy="155" r="16" fill="url(#etdsg)" />
    </svg>
  );

  const content = (
    <span className={`flex items-center gap-2.5 ${className}`}>
      {mark}
      {withWordmark && (
        <span className="font-display font-bold tracking-tight leading-none">
          <span className="text-ink-900">ET </span>
          <span className="grad-text">DATA</span>
          <span className="block text-[10px] tracking-[0.25em] text-ink-500 mt-0.5">SOLUTIONS</span>
        </span>
      )}
    </span>
  );

  return href ? (
    <Link href={href} className="inline-flex items-center group">{content}</Link>
  ) : content;
}
