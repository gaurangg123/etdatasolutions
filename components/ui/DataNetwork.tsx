'use client';
import { useEffect, useRef } from 'react';
import styles from './DataNetwork.module.css';

/**
 * Editorial abstract data network art.
 * Renders a node graph with quiet animation —
 * nodes pulse subtly, connection lines draw on mount.
 * Single brand orange accent on the central "hub" node.
 */
export default function DataNetwork() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    // Trigger line-drawing animation by adding a class
    const t = setTimeout(() => svg.classList.add(styles.drawn), 200);
    return () => clearTimeout(t);
  }, []);

  // Node positions: 1 central hub + 6 satellites + 4 outer nodes
  const hub = { x: 250, y: 250 };
  const satellites = [
    { x: 250, y: 120 },   // top
    { x: 380, y: 180 },   // top-right
    { x: 380, y: 320 },   // bottom-right
    { x: 250, y: 380 },   // bottom
    { x: 120, y: 320 },   // bottom-left
    { x: 120, y: 180 },   // top-left
  ];
  const outer = [
    { x: 60,  y: 80,  to: 5 },
    { x: 440, y: 80,  to: 1 },
    { x: 440, y: 420, to: 2 },
    { x: 60,  y: 420, to: 4 },
  ];

  return (
    <div className={styles.wrap}>
      <svg
        ref={svgRef}
        className={styles.svg}
        viewBox="0 0 500 500"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Abstract data network illustration"
        role="img"
      >
        {/* Background grid (very faint) */}
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(10,10,10,0.04)" strokeWidth="0.5" />
          </pattern>
          <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(232,74,12,0.18)" />
            <stop offset="100%" stopColor="rgba(232,74,12,0)" />
          </radialGradient>
        </defs>
        <rect x="0" y="0" width="500" height="500" fill="url(#grid)" />

        {/* Hub glow */}
        <circle cx={hub.x} cy={hub.y} r="70" fill="url(#hubGlow)" className={styles.glow} />

        {/* ── Lines: outer → satellite ── */}
        {outer.map((o, i) => {
          const target = satellites[o.to];
          return (
            <line
              key={`outer-${i}`}
              x1={o.x} y1={o.y}
              x2={target.x} y2={target.y}
              className={styles.lineFaint}
              style={{ ['--line-delay' as string]: `${100 + i * 80}ms` }}
            />
          );
        })}

        {/* ── Lines: satellite → hub ── */}
        {satellites.map((s, i) => (
          <line
            key={`sat-${i}`}
            x1={s.x} y1={s.y}
            x2={hub.x} y2={hub.y}
            className={styles.line}
            style={{ ['--line-delay' as string]: `${400 + i * 60}ms` }}
          />
        ))}

        {/* ── Nodes: outer ── */}
        {outer.map((o, i) => (
          <g key={`o-${i}`} className={styles.node} style={{ ['--node-delay' as string]: `${100 + i * 80}ms` }}>
            <circle cx={o.x} cy={o.y} r="4" className={styles.nodeOuter} />
          </g>
        ))}

        {/* ── Nodes: satellites ── */}
        {satellites.map((s, i) => (
          <g key={`s-${i}`} className={styles.node} style={{ ['--node-delay' as string]: `${400 + i * 60}ms` }}>
            <circle cx={s.x} cy={s.y} r="6" className={styles.nodeSat} />
            <circle cx={s.x} cy={s.y} r="12" className={styles.nodePulse} style={{ animationDelay: `${i * 0.3}s` }} />
          </g>
        ))}

        {/* ── Hub (central, brand orange) ── */}
        <g className={styles.hubNode} style={{ ['--node-delay' as string]: '800ms' }}>
          <circle cx={hub.x} cy={hub.y} r="14" className={styles.hubRing} />
          <circle cx={hub.x} cy={hub.y} r="9" className={styles.hubCore} />
        </g>

        {/* ── Floating data labels (text annotations) ── */}
        <text x="50"  y="68"  className={styles.label} style={{ ['--node-delay' as string]: '900ms' }}>STAFFING</text>
        <text x="395" y="68"  className={styles.label} style={{ ['--node-delay' as string]: '960ms' }}>DATA ENTRY</text>
        <text x="395" y="455" className={styles.label} style={{ ['--node-delay' as string]: '1020ms' }}>QA TESTING</text>
        <text x="50"  y="455" className={styles.label} style={{ ['--node-delay' as string]: '1080ms' }}>ENGINEERING</text>
      </svg>
    </div>
  );
}
