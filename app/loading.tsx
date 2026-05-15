export default function Loading() {
  return (
    <div style={{
      minHeight: '60vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <span style={{
        fontSize: '11px',
        textTransform: 'uppercase',
        letterSpacing: '0.14em',
        color: 'var(--ink-3)',
        fontWeight: 600,
      }}>
        Loading
      </span>
    </div>
  );
}
