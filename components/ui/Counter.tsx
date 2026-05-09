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

export default function Counter({ to, duration = 1800, suffix = '', prefix = '', decimals = 0, className }: CounterProps) {
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setStarted(true); obs.unobserve(el); } },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started || prefersReduced) { setValue(to); return; }
    const start = performance.now();
    const factor = Math.pow(10, decimals);
    const raf = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      // easeOutExpo
      const ease = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
      setValue(Math.round(ease * to * factor) / factor);
      if (p < 1) requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, [started, to, duration, prefersReduced, decimals]);

  return (
    <span ref={ref} className={className}>
      {prefix}{decimals > 0 ? value.toFixed(decimals) : value}{suffix}
    </span>
  );
}
