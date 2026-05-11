import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: '404 — Page Not Found' };

export default function NotFound() {
  return (
    <main style={{ minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center', padding:'120px 24px' }}>
      <div style={{ textAlign:'center', maxWidth:'480px' }}>
        <div style={{
          fontSize:'clamp(80px,14vw,140px)', fontWeight:'800',
          background:'linear-gradient(135deg,#E84A0C,#FF6B35)',
          WebkitBackgroundClip:'text', backgroundClip:'text',
          WebkitTextFillColor:'transparent', lineHeight:'1', marginBottom:'24px',
          fontFamily:"var(--font-jakarta,'Plus Jakarta Sans',sans-serif)",
          letterSpacing:'-0.04em',
        }}>404</div>
        <h1 style={{ fontSize:'clamp(22px,3vw,32px)', fontWeight:'700', color:'var(--txt)', marginBottom:'16px', letterSpacing:'-0.02em' }}>
          Page not found
        </h1>
        <p style={{ fontSize:'16px', color:'var(--txt2)', lineHeight:'1.7', marginBottom:'36px' }}>
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div style={{ display:'flex', gap:'12px', justifyContent:'center', flexWrap:'wrap' }}>
          <Link href="/" className="btn-primary">Go home</Link>
          <Link href="/contact" className="btn-glass">Contact us</Link>
        </div>
      </div>
    </main>
  );
}
