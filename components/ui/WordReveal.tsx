'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';

interface WordRevealProps {
  text: string;
  className?: string;
  /** Delay between words in seconds (default 0.04) */
  stagger?: number;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
}

/** Word-by-word fade/slide-up reveal triggered when scrolled into view. */
export default function WordReveal({ text, className, stagger = 0.04, as = 'p' }: WordRevealProps) {
  const reduce = useReducedMotion();
  const words = text.split(/(\s+)/); // keep whitespace tokens
  const Tag = motion[as] as typeof motion.p;

  const container: Variants = {
    hidden:  {},
    visible: { transition: { staggerChildren: reduce ? 0 : stagger } },
  };
  const child: Variants = {
    hidden:  { opacity: 0, y: reduce ? 0 : 14 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <Tag
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={container}
      className={className}
    >
      {words.map((w, i) =>
        /^\s+$/.test(w) ? (
          <span key={i}>{w}</span>
        ) : (
          <motion.span key={i} variants={child} className="inline-block">
            {w}
          </motion.span>
        ),
      )}
    </Tag>
  );
}
