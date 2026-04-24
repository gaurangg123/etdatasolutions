'use client'
import { motion } from 'framer-motion'
import { ArrowLeft, Home } from 'lucide-react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-68px)] flex items-center justify-center bg-white dark:bg-ink-950 relative overflow-hidden px-5">
      <div aria-hidden className="absolute inset-0 opacity-30 dark:opacity-15 pointer-events-none"
        style={{ backgroundImage:'radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)', backgroundSize:'28px 28px', maskImage:'radial-gradient(ellipse 80% 80% at 50% 50%,black 20%,transparent 100%)' }} />
      <motion.div
        initial={{ opacity:0, y:20 }}
        animate={{ opacity:1, y:0 }}
        transition={{ duration:0.55, ease:[0.22,1,0.36,1] }}
        className="relative z-10 text-center max-w-lg mx-auto"
      >
        <div className="text-[7rem] md:text-[9rem] font-[800] tracking-[-0.06em] leading-none text-ink-100 dark:text-ink-800 select-none mb-3">404</div>
        <div className="inline-flex items-center gap-2 bg-brand-50 dark:bg-brand-500/10 border border-brand-200 dark:border-brand-500/25 rounded-full px-3 py-1 mb-5">
          <span aria-hidden className="w-1.5 h-1.5 rounded-full bg-brand-500" />
          <span className="text-xs font-[700] tracking-[0.1em] uppercase text-brand-500">Page not found</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-[800] tracking-[-0.035em] text-ink-900 dark:text-ink-50 mb-3">
          This page doesn&apos;t exist
        </h1>
        <p className="text-ink-500 dark:text-ink-400 leading-relaxed mb-8 text-sm max-w-sm mx-auto">
          The page you&apos;re looking for may have been moved or deleted. Let&apos;s get you back on track.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link href="/"
            className="inline-flex items-center gap-2 text-sm font-[650] text-white bg-brand-500 hover:bg-brand-600 px-5 py-2.5 rounded-xl transition-all hover:-translate-y-px hover:shadow-brand">
            <Home size={14} /> Go home
          </Link>
          <button
            onClick={() => history.back()}
            className="inline-flex items-center gap-2 text-sm font-[500] text-ink-600 dark:text-ink-400 border border-ink-200 dark:border-ink-700 hover:border-brand-400 hover:text-brand-500 px-5 py-2.5 rounded-xl transition-all"
          >
            <ArrowLeft size={14} /> Go back
          </button>
          <Link href="/contact"
            className="inline-flex items-center gap-2 text-sm font-[500] text-ink-600 dark:text-ink-400 border border-ink-200 dark:border-ink-700 hover:border-brand-400 hover:text-brand-500 px-5 py-2.5 rounded-xl transition-all">
            Contact us
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
