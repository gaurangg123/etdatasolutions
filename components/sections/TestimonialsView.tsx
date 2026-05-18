'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Clock } from 'lucide-react';
import type { FeaturedTestimonial, MiniTestimonial } from '@/data/testimonials';

/** Generate initials for an avatar */
function initials(name: string): string {
  return name
    .split(/\s+/)
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

/* ───────────────────────────────────────────────────────────────
   FEATURED SLIDER — auto-advancing 3-slide carousel on
   the orange gradient card.
   ─────────────────────────────────────────────────────────────── */
export function FeaturedSlider({ list }: { list: FeaturedTestimonial[] }) {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = list.length;

  useEffect(() => {
    if (paused || total < 2) return;
    const id = setInterval(() => setIdx((i) => (i + 1) % total), 8000);
    return () => clearInterval(id);
  }, [paused, total]);

  const go = (n: number) => setIdx(((n % total) + total) % total);

  const t = list[idx];

  return (
    <div
      className="relative rounded-3xl overflow-hidden text-white shadow-sunset"
      style={{
        background: 'linear-gradient(135deg, #F26A1E 0%, #FF5A48 50%, #E6296A 100%)',
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* decorative orbs */}
      <div aria-hidden className="absolute -top-24 -right-20 w-80 h-80 rounded-full bg-white/15 blur-3xl pointer-events-none" />
      <div aria-hidden className="absolute -bottom-24 -left-16 w-72 h-72 rounded-full bg-white/10 blur-3xl pointer-events-none" />

      <div className="relative p-8 sm:p-12 lg:p-16">
        {/* top row */}
        <div className="flex items-start justify-between gap-4 mb-8">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="inline-flex items-center rounded-full bg-white/20 text-white text-[11px] font-bold tracking-[0.18em] uppercase px-3 py-1 backdrop-blur border border-white/15">
              {t.service}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 text-white/90 text-xs font-semibold px-2.5 py-1 backdrop-blur border border-white/10">
              <Clock className="w-3.5 h-3.5" /> {t.duration}
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs text-white/70">
            <span className="font-mono">
              {String(idx + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </span>
          </div>
        </div>

        <Quote aria-hidden className="w-10 h-10 text-white/35 mb-3" />

        {/* sliding quote */}
        <div className="min-h-[180px] sm:min-h-[200px] lg:min-h-[220px] relative">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg sm:text-xl lg:text-2xl font-medium leading-snug max-w-3xl"
            >
              “{t.review}”
            </motion.blockquote>
          </AnimatePresence>
        </div>

        {/* footer row: author + nav */}
        <div className="mt-8 pt-6 border-t border-white/20 flex items-center justify-between gap-4 flex-wrap">
          <AnimatePresence mode="wait">
            <motion.div
              key={`author-${idx}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-3"
            >
              <span className="grid place-items-center w-12 h-12 rounded-full bg-white text-brand-700 text-base font-bold ring-2 ring-white/40 shrink-0">
                {initials(t.name)}
              </span>
              <div>
                <div className="font-semibold">{t.name}</div>
                <div className="text-sm text-white/85">{t.service}</div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center gap-2">
            <button
              onClick={() => go(idx - 1)}
              aria-label="Previous testimonial"
              className="grid place-items-center w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 text-white border border-white/20 backdrop-blur transition"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-1.5 mx-1">
              {list.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === idx ? 'w-8 bg-white' : 'w-1.5 bg-white/40 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => go(idx + 1)}
              aria-label="Next testimonial"
              className="grid place-items-center w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 text-white border border-white/20 backdrop-blur transition"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ───────────────────────────────────────────────────────────────
   MINI CARD — compact testimonial showing name / service / duration
   ─────────────────────────────────────────────────────────────── */
export function MiniCard({ t }: { t: MiniTestimonial }) {
  return (
    <article className="group relative rounded-2xl bg-white border border-ink-100 shadow-card p-5 h-full hover:-translate-y-1 hover:shadow-soft hover:border-brand-200 transition-all duration-300">
      <div className="flex items-center gap-3">
        <span
          aria-hidden
          className="grid place-items-center w-11 h-11 rounded-full text-white text-sm font-bold shrink-0"
          style={{ background: 'linear-gradient(135deg, #F26A1E 0%, #FF5A48 50%, #E6296A 100%)' }}
        >
          {initials(t.name)}
        </span>
        <div className="min-w-0">
          <div className="font-semibold text-ink-900 truncate">{t.name}</div>
          <div className="text-xs text-ink-500 flex items-center gap-1.5">
            <Clock className="w-3 h-3 text-brand-500" />
            {t.duration}
          </div>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-ink-100">
        <div className="text-[10px] font-bold tracking-[0.16em] uppercase text-brand-600 mb-1">
          Service
        </div>
        <p className="text-sm text-ink-700 leading-snug">{t.service}</p>
      </div>

      <p className="mt-4 text-sm text-ink-600 leading-relaxed italic">
        <span className="text-brand-400 font-bold not-italic mr-0.5">“</span>
        {t.review}
        <span className="text-brand-400 font-bold not-italic ml-0.5">”</span>
      </p>
    </article>
  );
}
