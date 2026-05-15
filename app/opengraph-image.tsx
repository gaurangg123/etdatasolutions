import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'ET Data Solutions — Staffing, Data, QA & Engineering';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background: '#FAFAFA',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
        }}
      >
        {/* Top: brand */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '32px',
            height: '32px',
            borderRadius: '8px',
            background: '#0A0A0A',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#E84A0C' }} />
          </div>
          <div style={{ fontSize: '18px', fontWeight: 600, color: '#0A0A0A', letterSpacing: '-0.01em' }}>
            ET Data Solutions
          </div>
        </div>

        {/* Main headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '900px' }}>
          <div style={{
            fontSize: '72px',
            fontWeight: 600,
            color: '#0A0A0A',
            letterSpacing: '-0.035em',
            lineHeight: 1.02,
          }}>
            The work that <span style={{ fontStyle: 'italic' }}>slows you down</span> doesn't have to.
          </div>
          <div style={{ fontSize: '22px', color: '#525252', fontWeight: 400, lineHeight: 1.5, maxWidth: '720px' }}>
            Staffing, data entry, QA testing, and data engineering — handled quietly and accurately.
          </div>
        </div>

        {/* Bottom: minimal stats row */}
        <div style={{
          display: 'flex',
          gap: '48px',
          paddingTop: '32px',
          borderTop: '1px solid rgba(10,10,10,0.08)',
        }}>
          {[
            ['99%', 'Accuracy'],
            ['10+', 'Years'],
            ['100+', 'Clients'],
            ['7d', 'First delivery'],
          ].map(([num, label]) => (
            <div key={num as string} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div style={{ fontSize: '32px', fontWeight: 600, letterSpacing: '-0.03em', color: '#0A0A0A' }}>
                {num}
              </div>
              <div style={{ fontSize: '12px', color: '#A3A3A3', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
