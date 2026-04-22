'use client'
import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'

let hasShown = false

const Dot = ({ delay }: { delay: number }) => (
  <motion.span
    animate={{ opacity: [0.2, 1, 0.2] }}
    transition={{ duration: 1.2, delay, repeat: Infinity, ease: 'easeInOut' }}
    className="inline-block"
  >
    .
  </motion.span>
)

export default function PageLoader() {
  const [visible, setVisible] = useState(!hasShown)

  useEffect(() => {
    if (hasShown) { setVisible(false); return }

    const dismiss = () => {
      hasShown = true
      setTimeout(() => setVisible(false), 400)
    }

    if (document.readyState === 'complete') {
      setTimeout(dismiss, 400)
    } else {
      const handler = () => {
        if (document.readyState === 'complete') {
          document.removeEventListener('readystatechange', handler)
          dismiss()
        }
      }
      document.addEventListener('readystatechange', handler)
      const safety = setTimeout(() => {
        document.removeEventListener('readystatechange', handler)
        dismiss()
      }, 2500)
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
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-6"
          style={{
            background: 'linear-gradient(135deg, #0a0908 0%, #13110e 45%, #0d1118 100%)',
          }}
          aria-hidden="true"
        >
          {/* Top loading bar */}
          <div className="absolute top-0 left-0 right-0 h-[2px] overflow-hidden">
            <div className="h-full bg-gradient-to-r from-transparent via-brand-500 to-transparent animate-loading-bar" />
          </div>

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src="/logo-transparent.png"
              alt="ET Data Solutions"
              width={64}
              height={64}
              className="object-contain"
              priority
            />
          </motion.div>

          {/* Multi-ring orbital spinner */}
          <div className="relative w-16 h-16">
            {/* Outer ring — slow clockwise */}
            <svg
              className="absolute inset-0 animate-spin"
              style={{ animationDuration: '3s' }}
              viewBox="0 0 64 64"
            >
              <circle cx="32" cy="32" r="28" fill="none" stroke="rgba(232,68,10,0.15)" strokeWidth="2" />
              <circle cx="32" cy="32" r="28" fill="none" stroke="#e8440a" strokeWidth="2.5"
                strokeLinecap="round" strokeDasharray="44 132" strokeDashoffset="0" />
            </svg>
            {/* Middle ring — counter-clockwise */}
            <svg
              className="absolute inset-2 animate-spin"
              style={{ animationDuration: '2s', animationDirection: 'reverse' }}
              viewBox="0 0 48 48"
            >
              <circle cx="24" cy="24" r="20" fill="none" stroke="rgba(232,68,10,0.08)" strokeWidth="1.5" />
              <circle cx="24" cy="24" r="20" fill="none" stroke="rgba(232,68,10,0.5)" strokeWidth="2"
                strokeLinecap="round" strokeDasharray="22 106" strokeDashoffset="0" />
            </svg>
            {/* Inner pulsing dot */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-500 opacity-60" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-500" />
              </div>
            </div>
          </div>

          {/* Brand name */}
          <div className="flex flex-col items-center gap-1.5">
            <span className="text-sm font-[600] tracking-[0.08em] text-white/70">
              ET Data Solutions
            </span>
            {/* Animated dots text */}
            <span className="text-xs text-white/35 tracking-wide">
              Preparing your experience<Dot delay={0} /><Dot delay={0.2} /><Dot delay={0.4} />
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
