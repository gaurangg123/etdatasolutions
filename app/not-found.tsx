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
      background: 'var(--bg)',
    }}>
      <div style={{ textAlign: 'center', maxWidth: '520px' }}>
        {/* Orange 404 badge */}
        <span style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          fontSize: '12px',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          color: 'var(--orange)',
          background: 'var(--orange-light)',
          border: '1px solid var(--orange-border)',
          padding: '5px 12px',
          borderRadius: '999px',
          marginBottom: '28px',
        }}>
          Error 404
        </span>

        <h1 style={{
          fontSize: 'clamp(36px, 6vw, 64px)',
          fontWeight: 800,
          letterSpacing: '-0.04em',
          lineHeight: 1.08,
          marginBottom: '20px',
          color: 'var(--ink)',
        }}>
          Page not found.
        </h1>

        <p style={{
          fontSize: '17px',
          color: 'var(--ink-2)',
          lineHeight: 1.65,
          marginBottom: '40px',
        }}>
          The page you&rsquo;re looking for has moved, been renamed, or never existed.
        </p>

        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/" className="btn btn-primary btn-lg">
            Back to home <span>&rarr;</span>
          </Link>
          <Link href="/#contact" className="btn btn-secondary btn-lg">
            Get in touch
          </Link>
        </div>
      </div>
    </main>
  );
}
