'use client';

/**
 * Smooth scroll disabled when native CSS scroll-snap is active —
 * Lenis conflicts with `scroll-snap-type: y mandatory`.
 * Kept as a no-op component so existing imports stay valid.
 */
export default function SmoothScroll() {
  return null;
}
