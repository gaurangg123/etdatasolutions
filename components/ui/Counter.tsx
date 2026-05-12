'use client';
import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

interface CounterProps {
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  className?: string;
}

export default function Counter({ to, duration = 1600, suffix = '', prefix = '', decimals = 0, className }: CounterProps) {
  // Start at final value — no flash on load (#4 fix)
  const [value, setValue] = useState(to);
  const [started, setStarted] = useState(false);
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting && !animated) { setStarted(true); obs.unobserve(el); } },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [animated]);

  useEffect(() => {
    if (!started || prefersReduced) { setValue(to); setAnimated(true); return; }
    setValue(0); // reset before animating
    const start = performance.now();
    const factor = Math.pow(10, decimals);
    const raf = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(2, -10 * p); // easeOutExpo
      setValue(Math.round(ease * to * factor) / factor);
      if (p < 1) requestAnimationFrame(raf);
      else { setValue(to); setAnimated(true); }
    };
    requestAnimationFrame(raf);
  }, [started, to, duration, prefersReduced, decimals]);

  const display = decimals > 0 ? value.toFixed(decimals) : Math.round(value);

  return (
    <span ref={ref} className={className}>
      {prefix}{display}{suffix}
    </span>
  );
}
