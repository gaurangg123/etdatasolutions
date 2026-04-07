'use client'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { RefreshCw, Home } from 'lucide-react'
import Link from 'next/link'

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => { console.error(error) }, [error])

  return (
    <div className="min-h-[calc(100vh-68px)] flex items-center justify-center bg-white dark:bg-[#0e0c0b] px-6">
      <div className="text-center max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="w-16 h-16 rounded-2xl bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-800 flex items-center justify-center mx-auto mb-6">
            <span className="text-2xl">⚠️</span>
          </div>
          <h1 className="text-2xl font-[800] tracking-[-0.03em] text-neutral-900 dark:text-neutral-50 mb-3">
            Something went wrong
          </h1>
          <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed mb-8 text-sm">
            An unexpected error occurred. Our team has been notified. Please try again or return to the homepage.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={reset}
              className="inline-flex items-center gap-2 text-sm font-[600] text-white bg-brand-500 hover:bg-brand-600 px-5 py-2.5 rounded-xl transition-all duration-150 hover:-translate-y-px hover:shadow-[0_6px_20px_rgba(232,68,10,0.3)]"
            >
              <RefreshCw size={14} /> Try again
            </button>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-[500] text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700 hover:border-brand-400 px-5 py-2.5 rounded-xl transition-all duration-150"
            >
              <Home size={14} /> Go home
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
