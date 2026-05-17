'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const STORAGE_KEY = 'etds-intro-shown';
const MAX_DURATION_MS = 5500;
const SVG_PHASE_MS = 1400; // SVG draws, then MP4 starts

/**
 * Two-phase intro loader on pure-black background.
 * Phase 1: animated SVG logo draws in (instant — no network wait).
 * Phase 2: full-size MP4 plays once.
 * Then: smooth fade-out into the site.
 */
export default function LogoLoader() {
  const [show, setShow] = useState(false);
  const [phase, setPhase] = useState<'svg' | 'video'>('svg');
  const [videoReady, setVideoReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!sessionStorage.getItem(STORAGE_KEY)) {
      setShow(true);
      document.documentElement.style.overflow = 'hidden';
    }
  }, []);

  // Switch from SVG to MP4 after first phase
  useEffect(() => {
    if (!show) return;
    const t = setTimeout(() => setPhase('video'), SVG_PHASE_MS);
    return () => clearTimeout(t);
  }, [show]);

  // Hard cap on total intro duration
  useEffect(() => {
    if (!show) return;
    const t = setTimeout(finish, MAX_DURATION_MS);
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
          {/* subtle radial glow behind logo */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(circle at 50% 50%, rgba(56,150,255,0.18), transparent 55%)',
            }}
          />

          {/* PHASE 1 — animated SVG logo */}
          <AnimatePresence>
            {phase === 'svg' && (
              <motion.div
                key="svg"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className="absolute inset-0 grid place-items-center"
              >
                <AnimatedLogoMark />
              </motion.div>
            )}
          </AnimatePresence>

          {/* PHASE 2 — MP4 logo */}
          <AnimatePresence>
            {phase === 'video' && (
              <motion.div
                key="video"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: videoReady ? 1 : 0, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="absolute inset-0 grid place-items-center"
              >
                <video
                  ref={videoRef}
                  src="/logo-intro.mp4"
                  autoPlay
                  muted
                  playsInline
                  preload="auto"
                  onCanPlay={() => setVideoReady(true)}
                  onEnded={finish}
                  onError={finish}
                  className="w-[min(85vw,720px)] h-auto"
                  style={{ background: 'transparent' }}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* caption */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="absolute bottom-14 flex items-center gap-2 text-[11px] tracking-[0.35em] uppercase text-white/60"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse" />
            <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse [animation-delay:150ms]" />
            <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse [animation-delay:300ms]" />
            <span className="ml-2">Loading</span>
          </motion.div>

          {/* click anywhere to skip */}
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

/* ── Animated SVG version of the ET DATA SOLUTIONS logo ── */
function AnimatedLogoMark() {
  const nodes = [
    { cx: 70,  cy: 60,  r: 22, delay: 0.05 },
    { cx: 120, cy: 70,  r: 14, delay: 0.18 },
    { cx: 150, cy: 110, r: 18, delay: 0.32 },
    { cx: 60,  cy: 120, r: 12, delay: 0.42 },
    { cx: 100, cy: 155, r: 16, delay: 0.52 },
  ];
  const lines: [number, number][] = [[0, 1], [1, 2], [0, 3], [3, 4], [4, 2]];

  return (
    <div className="flex flex-col items-center gap-7">
      <svg viewBox="0 0 200 200" className="w-[260px] h-[260px] sm:w-[340px] sm:h-[340px]">
        <defs>
          <linearGradient id="loaderGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%"  stopColor="#1FA1FF" />
            <stop offset="100%" stopColor="#2D6CDF" />
          </linearGradient>
        </defs>

        {/* lines draw in */}
        {lines.map(([a, b], i) => (
          <motion.line
            key={i}
            x1={nodes[a].cx} y1={nodes[a].cy}
            x2={nodes[b].cx} y2={nodes[b].cy}
            stroke="url(#loaderGrad)" strokeWidth="13" strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 + i * 0.07, ease: 'easeInOut' }}
          />
        ))}

        {/* nodes pop in */}
        {nodes.map((n, i) => (
          <motion.circle
            key={i}
            cx={n.cx} cy={n.cy} r={n.r}
            fill="url(#loaderGrad)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: n.delay, type: 'spring', stiffness: 260, damping: 18 }}
            style={{ transformOrigin: `${n.cx}px ${n.cy}px` }}
          />
        ))}
      </svg>

      {/* wordmark */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.95, duration: 0.6, ease: 'easeOut' }}
        className="text-center"
      >
        <div className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          ET{' '}
          <span
            style={{
              background: 'linear-gradient(135deg,#1FA1FF,#2D6CDF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            DATA
          </span>
        </div>
        <div className="mt-1 text-[11px] sm:text-xs tracking-[0.4em] text-white/70 uppercase">
          Solutions
        </div>
      </motion.div>
    </div>
  );
}
