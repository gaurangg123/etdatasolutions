'use client'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { RefreshCw, Home, AlertTriangle } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => { console.error(error) }, [error])
  return (
    <div className="min-h-[calc(100vh-68px)] flex items-center justify-center bg-white dark:bg-ink-950 px-5">
      <motion.div
        initial={{ opacity:0, y:20 }}
        animate={{ opacity:1, y:0 }}
        transition={{ duration:0.5, ease:[0.22,1,0.36,1] }}
        className="text-center max-w-md mx-auto"
      >
        <div className="w-16 h-16 rounded-2xl bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-800 flex items-center justify-center mx-auto mb-6 text-red-500">
          <AlertTriangle size={28} strokeWidth={1.5} />
        </div>
        <h1 className="text-2xl font-[800] tracking-[-0.03em] text-ink-900 dark:text-ink-50 mb-3">Something went wrong</h1>
        <p className="text-ink-500 dark:text-ink-400 leading-relaxed mb-8 text-sm">
          An unexpected error occurred. Please try again — if it persists, contact us directly.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 text-sm font-[700] text-white bg-brand-500 hover:bg-brand-600 px-5 py-2.5 rounded-xl transition-all hover:shadow-brand hover:-translate-y-px"
          >
            <RefreshCw size={14} /> Try again
          </button>
          <Button href="/" variant="secondary" size="md">
            <Home size={14} /> Go home
          </Button>
        </div>
      </motion.div>
    </div>
  )
}
