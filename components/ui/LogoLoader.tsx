'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const STORAGE_KEY = 'etds-intro-shown';
const DURATION_MS = 2400;

/**
 * Animated SVG intro loader on pure-black background.
 * Logo nodes pop in, connecting lines draw, wordmark fades — then smooth fade-out.
 */
export default function LogoLoader() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!sessionStorage.getItem(STORAGE_KEY)) {
      setShow(true);
      document.documentElement.style.overflow = 'hidden';
    }
  }, []);

  useEffect(() => {
    if (!show) return;
    const t = setTimeout(finish, DURATION_MS);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show]);

  const finish = () => {
    sessionStorage.setItem(STORAGE_KEY, '1');
    document.documentElement.style.overflow = '';
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] bg-black grid place-items-center overflow-hidden"
        >
          {/* subtle blue radial glow */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(circle at 50% 50%, rgba(31,161,255,0.18), transparent 55%)',
            }}
          />

          <AnimatedLogo />

          {/* caption */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="absolute bottom-14 flex items-center gap-2 text-[11px] tracking-[0.35em] uppercase text-white/60"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#1FA1FF] animate-pulse" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#1FA1FF] animate-pulse [animation-delay:150ms]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#1FA1FF] animate-pulse [animation-delay:300ms]" />
            <span className="ml-2">Loading</span>
          </motion.div>

          {/* click to skip */}
          <button
            onClick={finish}
            aria-label="Skip intro"
            className="absolute inset-0 cursor-default"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ── Animated logo with brand-blue colors matching the uploaded mark ── */
function AnimatedLogo() {
  const nodes = [
    { cx: 70,  cy: 60,  r: 22, delay: 0.05, fill: '#1F6FBF' },
    { cx: 120, cy: 70,  r: 14, delay: 0.18, fill: '#1FA1FF' },
    { cx: 150, cy: 110, r: 18, delay: 0.32, fill: '#1F6FBF' },
    { cx: 60,  cy: 120, r: 12, delay: 0.42, fill: '#1FA1FF' },
    { cx: 100, cy: 155, r: 16, delay: 0.52, fill: '#1F6FBF' },
  ];
  const lines: [number, number][] = [[0, 1], [1, 2], [0, 3], [3, 4], [4, 2]];

  return (
    <div className="flex flex-col items-center gap-7">
      <svg viewBox="0 0 200 200" className="w-[260px] h-[260px] sm:w-[340px] sm:h-[340px]">
        {lines.map(([a, b], i) => (
          <motion.line
            key={i}
            x1={nodes[a].cx} y1={nodes[a].cy}
            x2={nodes[b].cx} y2={nodes[b].cy}
            stroke="#1F6FBF" strokeWidth="14" strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 + i * 0.07, ease: 'easeInOut' }}
          />
        ))}
        {nodes.map((n, i) => (
          <motion.circle
            key={i}
            cx={n.cx} cy={n.cy} r={n.r}
            fill={n.fill}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: n.delay, type: 'spring', stiffness: 260, damping: 18 }}
            style={{ transformOrigin: `${n.cx}px ${n.cy}px` }}
          />
        ))}
      </svg>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.95, duration: 0.6, ease: 'easeOut' }}
        className="text-center"
      >
        <div className="text-3xl sm:text-4xl font-bold tracking-tight">
          <span className="text-white">ET </span>
          <span style={{ color: '#1FA1FF' }}>DATA</span>
        </div>
        <div className="mt-1 text-[11px] sm:text-xs tracking-[0.4em] uppercase" style={{ color: '#1F6FBF' }}>
          Solutions
        </div>
      </motion.div>
    </div>
  );
}
