import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'ET Data Solutions — Operational excellence, delivered.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 80,
          background: 'linear-gradient(135deg, #FFF7EE 0%, #FFFFFF 60%)',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{
            width: 56, height: 56, borderRadius: 16,
            background: 'linear-gradient(135deg,#FF7A00,#FFA94D)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#fff', fontSize: 28, fontWeight: 800,
          }}>ET</div>
          <div style={{ fontSize: 28, fontWeight: 700, color: '#0F131C' }}>
            ET Data Solutions
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 64, fontWeight: 800, color: '#0F131C', lineHeight: 1.05 }}>
            The operational backbone
          </div>
          <div style={{
            fontSize: 64, fontWeight: 800, lineHeight: 1.05,
            background: 'linear-gradient(135deg,#FF7A00,#FFA94D)',
            backgroundClip: 'text', color: 'transparent',
          }}>
            for growing businesses.
          </div>
          <div style={{ fontSize: 26, color: '#454C5A', marginTop: 24, maxWidth: 900 }}>
            Staffing · Virtual assistants · Data entry · Custom workflows
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
