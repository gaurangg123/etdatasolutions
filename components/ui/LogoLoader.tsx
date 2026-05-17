'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const STORAGE_KEY = 'etds-intro-shown';
const MAX_DURATION_MS = 4500;

/**
 * Full-screen MP4-based intro loader.
 * - Plays /public/logo-intro.mp4 on first session visit.
 * - Fades out smoothly when the video finishes (or after 4.5s cap).
 * - sessionStorage flag prevents replay during the same browser tab session.
 */
export default function LogoLoader() {
  const [show, setShow] = useState(false);
  const [ready, setReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const shown = sessionStorage.getItem(STORAGE_KEY);
    if (!shown) {
      setShow(true);
      // lock scroll while intro plays
      document.documentElement.style.overflow = 'hidden';
    }
  }, []);

  // Failsafe — never block the page longer than MAX_DURATION_MS.
  useEffect(() => {
    if (!show) return;
    const t = setTimeout(() => finish(), MAX_DURATION_MS);
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
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] grid place-items-center"
          style={{
            background:
              'radial-gradient(circle at 50% 40%, #FFE3C6 0%, #FFFFFF 60%, #FFF7EE 100%)',
          }}
        >
          {/* ambient orange wash */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.45 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(circle at 50% 50%, rgba(255,122,0,0.25), transparent 65%)',
            }}
          />

          <div className="relative">
            {/* glow halo */}
            <div className="absolute -inset-10 rounded-full bg-brand-gradient opacity-30 blur-3xl animate-pulse" />

            <motion.video
              ref={videoRef}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: ready ? 1 : 0, scale: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              src="/logo-intro.mp4"
              autoPlay
              muted
              playsInline
              preload="auto"
              onCanPlay={() => setReady(true)}
              onEnded={finish}
              onError={finish}
              className="relative w-[min(72vw,440px)] h-auto rounded-2xl shadow-2xl"
            />
          </div>

          {/* subtle progress dots */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-16 flex items-center gap-2 text-xs text-ink-500"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
            <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse [animation-delay:150ms]" />
            <span className="w-1.5 h-1.5 rounded-full bg-brand-300 animate-pulse [animation-delay:300ms]" />
            <span className="ml-2 tracking-widest uppercase">Loading</span>
          </motion.div>

          {/* skip on click anywhere */}
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
