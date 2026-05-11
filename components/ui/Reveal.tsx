'use client';
import { useRef, useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  scale?: boolean;
}

export default function Reveal({ children, delay = 0, className, scale = false }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    setIsMobile(window.innerWidth < 780);
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.unobserve(el); } },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const duration = prefersReduced ? 0 : isMobile ? 0.45 : 0.75;
  const actualDelay = isMobile ? delay * 0.5 : delay;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={prefersReduced ? false : { opacity: 0, y: isMobile ? 16 : 28, scale: scale ? 0.97 : 1 }}
      animate={inView || prefersReduced ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration, ease: [0.22, 1, 0.36, 1], delay: actualDelay }}
    >
      {children}
    </motion.div>
  );
}
