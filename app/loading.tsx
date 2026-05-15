export default function Loading() {
  return (
    <div style={{
      minHeight: '60vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '12px',
    }}>
      <span style={{
        width: '8px',
        height: '8px',
        borderRadius: '50%',
        background: 'var(--orange)',
        display: 'inline-block',
        animation: 'loadingPulse 1.2s ease-in-out infinite',
      }} />
      <span style={{
        width: '8px',
        height: '8px',
        borderRadius: '50%',
        background: 'var(--orange)',
        display: 'inline-block',
        animation: 'loadingPulse 1.2s ease-in-out 0.2s infinite',
        opacity: 0.7,
      }} />
      <span style={{
        width: '8px',
        height: '8px',
        borderRadius: '50%',
        background: 'var(--orange)',
        display: 'inline-block',
        animation: 'loadingPulse 1.2s ease-in-out 0.4s infinite',
        opacity: 0.4,
      }} />
      <style>{`
        @keyframes loadingPulse {
          0%, 80%, 100% { transform: scale(0.7); opacity: 0.4; }
          40% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
