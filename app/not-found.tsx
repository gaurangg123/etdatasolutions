'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-68px)] flex items-center justify-center bg-white dark:bg-[#0e0c0b] relative overflow-hidden">
      {/* Grid bg */}
      <div className="absolute inset-0 opacity-40 dark:opacity-20 pointer-events-none"
        style={{ backgroundImage:'linear-gradient(rgba(0,0,0,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,0.06) 1px,transparent 1px)', backgroundSize:'54px 54px', maskImage:'radial-gradient(ellipse 80% 80% at 50% 50%,black 20%,transparent 100%)' }} />

      <div className="relative z-10 text-center px-6 max-w-lg mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Big 404 */}
          <div className="text-[8rem] md:text-[10rem] font-[800] tracking-[-0.06em] leading-none text-neutral-100 dark:text-neutral-800 select-none mb-2">
            404
          </div>

          <motion.div initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.15, duration:0.5, ease:[0.22,1,0.36,1] }}>
            <div className="inline-flex items-center gap-2 bg-brand-50 dark:bg-brand-500/10 border border-brand-200 dark:border-brand-500/25 rounded-full px-3 py-1 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
              <span className="text-[0.67rem] font-[700] tracking-[0.1em] uppercase text-brand-500">Page not found</span>
            </div>
          </motion.div>

          <motion.h1 initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.2, duration:0.5, ease:[0.22,1,0.36,1] }}
            className="text-2xl md:text-3xl font-[800] tracking-[-0.035em] text-neutral-900 dark:text-neutral-50 mb-3">
            This page doesn&apos;t exist
          </motion.h1>

          <motion.p initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.26, duration:0.5, ease:[0.22,1,0.36,1] }}
            className="text-neutral-500 dark:text-neutral-400 leading-relaxed mb-8">
            The page you&apos;re looking for may have been moved, deleted, or never existed. Let&apos;s get you back on track.
          </motion.p>

          <motion.div initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.32, duration:0.5, ease:[0.22,1,0.36,1] }}
            className="flex flex-wrap gap-3 justify-center">
            <Link href="/" className="inline-flex items-center gap-2 text-sm font-[600] text-white bg-brand-500 hover:bg-brand-600 px-5 py-2.5 rounded-xl transition-all duration-150 hover:-translate-y-px hover:shadow-[0_6px_20px_rgba(232,68,10,0.3)]">
              <Home size={14} /> Go home
            </Link>
            <button onClick={() => history.back()} className="inline-flex items-center gap-2 text-sm font-[500] text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700 hover:border-brand-400 dark:hover:border-brand-500 px-5 py-2.5 rounded-xl transition-all duration-150 hover:-translate-y-px">
              <ArrowLeft size={14} /> Go back
            </button>
            <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-[500] text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700 hover:border-brand-400 dark:hover:border-brand-500 px-5 py-2.5 rounded-xl transition-all duration-150 hover:-translate-y-px">
              Contact us
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
