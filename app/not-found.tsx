import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: '404 — Page Not Found' };

export default function NotFound() {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '120px 24px',
    }}>
      <div style={{ textAlign: 'center', maxWidth: '520px' }}>
        <span style={{
          fontSize: '11px',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.14em',
          color: 'var(--ink-3)',
          marginBottom: '24px',
          display: 'inline-block',
        }}>
          Error 404
        </span>
        <h1 style={{
          fontSize: 'clamp(40px, 6vw, 72px)',
          fontWeight: 600,
          letterSpacing: '-0.035em',
          lineHeight: 1.05,
          marginBottom: '20px',
          color: 'var(--ink)',
        }}>
          This page <em style={{ fontFamily: 'Georgia, serif', fontWeight: 400 }}>doesn&rsquo;t exist.</em>
        </h1>
        <p style={{
          fontSize: '17px',
          color: 'var(--ink-2)',
          lineHeight: 1.55,
          marginBottom: '40px',
        }}>
          The page you&rsquo;re looking for has moved, been renamed, or never existed.
        </p>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/" className="btn btn-primary">
            Back to home <span className="arrow">&rarr;</span>
          </Link>
          <Link href="/#contact" className="btn-link">
            Get in touch
          </Link>
        </div>
      </div>
    </main>
  );
}
