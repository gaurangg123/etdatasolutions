'use client'
import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'

// Fix 1: module-level flag — never re-shows on client-side navigation
let shown = false

export default function PageLoader() {
  const [visible, setVisible] = useState(!shown)

  useEffect(() => {
    // Already shown once — don't show again on navigation
    if (shown) {
      setVisible(false)
      return
    }

    const dismiss = () => {
      shown = true
      // Small extra delay so the spinner is visible for at least a beat
      setTimeout(() => setVisible(false), 400)
    }

    if (document.readyState === 'complete') {
      // Page already fully loaded (e.g. fast cache hit)
      setTimeout(dismiss, 400)
    } else {
      // Wait for full load, max out at 600ms regardless
      const handler = () => {
        if (document.readyState === 'complete') {
          document.removeEventListener('readystatechange', handler)
          dismiss()
        }
      }
      document.addEventListener('readystatechange', handler)

      // Safety timeout: dismiss at 2s even if readyState never fires
      const safety = setTimeout(() => {
        document.removeEventListener('readystatechange', handler)
        dismiss()
      }, 2000)

      return () => {
        document.removeEventListener('readystatechange', handler)
        clearTimeout(safety)
      }
    }
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="page-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, pointerEvents: 'none' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] bg-white dark:bg-ink-950 flex flex-col items-center justify-center gap-5"
          aria-hidden="true"
        >
          {/* Logo */}
          <Image
            src="/logo-transparent.png"
            alt="ET Data Solutions"
            width={56}
            height={56}
            className="object-contain"
            priority
          />

          {/* Brand-color spinner ring */}
          <div className="relative w-10 h-10">
            {/* Track ring */}
            <div className="absolute inset-0 rounded-full border-[3px] border-ink-100 dark:border-ink-800" />
            {/* Spinning ring — brand color #e8440a */}
            <div
              className="absolute inset-0 rounded-full border-[3px] border-t-transparent animate-spin"
              style={{ borderColor: 'transparent', borderTopColor: 'transparent', borderRightColor: '#e8440a', borderBottomColor: '#e8440a', borderLeftColor: '#e8440a' }}
            />
          </div>

          {/* Label */}
          <p className="text-sm font-[500] text-ink-400 dark:text-ink-500 tracking-wide">
            Loading…
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
