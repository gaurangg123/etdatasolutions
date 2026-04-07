'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function MobileStickyCTA() {
  const [visible, setVisible] = useState(false)
  const pathname = usePathname()

  // Don't show on contact page
  const isContact = pathname.startsWith('/contact')

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  if (isContact) return null

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
        >
          <div className="bg-white/95 dark:bg-[#0e0c0b]/95 border-t border-neutral-200 dark:border-neutral-800 backdrop-blur-xl px-4 py-3 flex gap-3 items-center">
            <a
              href="mailto:bobby@etdatasolutions.com"
              className="flex-1 text-center text-sm font-[500] text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700 py-3 rounded-xl transition-all duration-150"
            >
              Email us
            </a>
            <Link
              href="/contact#form"
              className="flex-1 inline-flex items-center justify-center gap-1.5 text-sm font-[600] text-white bg-brand-500 py-3 rounded-xl hover:bg-brand-600 transition-all duration-150"
            >
              Get Started <ArrowRight size={13} />
            </Link>
          </div>
          {/* Safe area padding for iPhone home indicator */}
          <div className="bg-white/95 dark:bg-[#0e0c0b]/95 h-safe-bottom" />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
