import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'ET Data Solutions — Staffing, Data, QA & Data Engineering';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%', height: '100%', display: 'flex', flexDirection: 'column',
          justifyContent: 'space-between', padding: '72px 80px',
          background: '#FFFFFF', fontFamily: 'system-ui, sans-serif', position: 'relative',
        }}
      >
        {/* Orange top border */}
        <div style={{ position:'absolute', top:0, left:0, right:0, height:'6px', background:'linear-gradient(135deg,#E84A0C,#FF6B35)' }} />

        {/* Decorative blob */}
        <div style={{ position:'absolute', top:'-80px', right:'-80px', width:'400px', height:'400px', borderRadius:'50%', background:'rgba(232,74,12,0.07)' }} />

        {/* Top: logo text */}
        <div style={{ display:'flex', alignItems:'center', gap:'16px' }}>
          <div style={{
            width:'52px', height:'52px', borderRadius:'14px',
            background:'linear-gradient(135deg,#E84A0C,#FF6B35)',
            display:'flex', alignItems:'center', justifyContent:'center',
            fontSize:'26px', fontWeight:'800', color:'#fff',
          }}>E</div>
          <div>
            <div style={{ fontSize:'22px', fontWeight:'800', color:'#0A0A0F', letterSpacing:'-0.02em' }}>ET Data Solutions</div>
            <div style={{ fontSize:'14px', color:'#9098A8', fontWeight:'500', marginTop:'2px' }}>India-based outsourcing · Est. 2014</div>
          </div>
        </div>

        {/* Main headline */}
        <div style={{ display:'flex', flexDirection:'column', gap:'16px' }}>
          <div style={{ fontSize:'62px', fontWeight:'800', color:'#0A0A0F', letterSpacing:'-0.035em', lineHeight:'1.05' }}>
            The work that{' '}
            <span style={{ color:'#E84A0C', fontStyle:'italic' }}>slows you down</span>
            {' '}doesn't have to.
          </div>
          <div style={{ fontSize:'22px', color:'#484860', fontWeight:'500', lineHeight:'1.5', maxWidth:'720px' }}>
            Staffing, data entry, QA testing, and data engineering — quietly, accurately, on schedule.
          </div>
        </div>

        {/* Bottom stats row */}
        <div style={{ display:'flex', gap:'0', borderRadius:'16px', overflow:'hidden', border:'1.5px solid #E8E8EC' }}>
          {[['99%','Accuracy rate'],['10+','Years experience'],['100+','Clients served'],['24/7','Always on']].map(([num,label],i) => (
            <div key={num} style={{
              flex:1, padding:'20px 28px', background: i % 2 === 0 ? '#fff' : '#F7F8FA',
              borderLeft: i > 0 ? '1px solid #E8E8EC' : 'none',
              display:'flex', flexDirection:'column', gap:'4px',
            }}>
              <div style={{ fontSize:'32px', fontWeight:'800', letterSpacing:'-0.04em', color: i === 0 || i === 3 ? '#E84A0C' : '#0A0A0F' }}>{num}</div>
              <div style={{ fontSize:'13px', color:'#9098A8', fontWeight:'600' }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
