'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import type { Testimonial } from '@/data/testimonials';

function Stars({ n = 5 }: { n?: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${n} of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < n ? 'text-brand-500 fill-brand-500' : 'text-ink-200'}`}
        />
      ))}
    </div>
  );
}

/** Initials avatar in brand colors */
function Avatar({ name }: { name: string }) {
  const initials = name
    .split(/\s+/)
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase();
  return (
    <span
      aria-hidden
      className="grid place-items-center w-10 h-10 rounded-full text-white text-sm font-bold bg-brand-gradient shadow-soft"
    >
      {initials}
    </span>
  );
}

export function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <article className="relative rounded-2xl bg-white border border-ink-100 shadow-card p-6 h-full flex flex-col hover:-translate-y-1 hover:shadow-soft hover:border-brand-200 transition-all duration-300 overflow-hidden">
      {/* Decorative quote — large, soft, tucked into the bottom-right behind text */}
      <Quote
        aria-hidden
        className="absolute -bottom-3 -right-2 w-20 h-20 text-brand-50 rotate-180 pointer-events-none"
        strokeWidth={1.2}
      />

      <div className="relative z-10 flex items-center justify-between gap-3 mb-4">
        <span className="inline-flex items-center rounded-full bg-brand-50 text-brand-700 text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 border border-brand-100">
          {t.service}
        </span>
        <Stars n={t.rating ?? 5} />
      </div>

      <p className="relative z-10 text-ink-700 leading-relaxed flex-1 text-[15px]">
        <span className="text-brand-400 text-xl leading-none mr-0.5">“</span>
        {t.review}
        <span className="text-brand-400 text-xl leading-none ml-0.5">”</span>
      </p>

      <div className="mt-5 flex items-center gap-3 pt-4 border-t border-ink-100">
        <Avatar name={t.name} />
        <div className="min-w-0">
          <div className="font-semibold text-sm text-ink-900 truncate">{t.name}</div>
          {t.company && (
            <div className="text-xs text-ink-500 truncate">{t.company}</div>
          )}
        </div>
      </div>
    </article>
  );
}

/** Mobile-only swipeable carousel; auto-advances every 6s, pauses on hover */
export function TestimonialsCarousel({ list }: { list: Testimonial[] }) {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIdx((i) => (i + 1) % list.length), 6000);
    return () => clearInterval(id);
  }, [paused, list.length]);

  // Swipe support
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let startX = 0;
    let dx = 0;
    const onStart = (e: TouchEvent) => { startX = e.touches[0].clientX; dx = 0; };
    const onMove = (e: TouchEvent) => { dx = e.touches[0].clientX - startX; };
    const onEnd = () => {
      if (Math.abs(dx) > 40) {
        setIdx((i) => (dx > 0 ? (i - 1 + list.length) % list.length : (i + 1) % list.length));
      }
    };
    el.addEventListener('touchstart', onStart, { passive: true });
    el.addEventListener('touchmove', onMove, { passive: true });
    el.addEventListener('touchend', onEnd);
    return () => {
      el.removeEventListener('touchstart', onStart);
      el.removeEventListener('touchmove', onMove);
      el.removeEventListener('touchend', onEnd);
    };
  }, [list.length]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div ref={trackRef} className="overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <TestimonialCard t={list[idx]} />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <button
          onClick={() => setIdx((i) => (i - 1 + list.length) % list.length)}
          aria-label="Previous testimonial"
          className="p-2 rounded-full border border-ink-200 text-ink-700 hover:border-brand-300 hover:text-brand-600 transition"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-1.5">
          {list.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === idx ? 'w-6 bg-brand-500' : 'w-1.5 bg-ink-200'
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => setIdx((i) => (i + 1) % list.length)}
          aria-label="Next testimonial"
          className="p-2 rounded-full border border-ink-200 text-ink-700 hover:border-brand-300 hover:text-brand-600 transition"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
