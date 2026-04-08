'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { ArrowRight, Phone } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function MobileStickyCTA() {
  const [visible, setVisible] = useState(false)
  const pathname = usePathname()
  const isContact = pathname.startsWith('/contact')

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 350)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  if (isContact) return null

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 90, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 90, opacity: 0 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-0 left-0 right-0 z-[180] md:hidden"
        >
          <div className="bg-white dark:bg-[#0e0c0b] border-t-2 border-neutral-200 dark:border-neutral-800 px-4 py-3 flex gap-3 items-center shadow-[0_-4px_24px_rgba(0,0,0,0.1)]">
            <a
              href="tel:+13023579776"
              className="flex-shrink-0 w-14 h-14 flex flex-col items-center justify-center gap-0.5 rounded-xl border-2 border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 active:scale-95 transition-transform"
            >
              <Phone size={17} />
              <span className="text-[0.6rem] font-[600]">Call</span>
            </a>
            <Link
              href="/contact#form"
              className="flex-1 h-14 inline-flex items-center justify-center gap-2 text-[1rem] font-[700] text-white bg-brand-500 hover:bg-brand-600 rounded-xl transition-all duration-150 active:scale-[0.98] shadow-[0_4px_16px_rgba(232,68,10,0.4)]"
            >
              Get Started <ArrowRight size={17} />
            </Link>
          </div>
          {/* Safe area for iPhone home indicator */}
          <div className="bg-white dark:bg-[#0e0c0b] h-safe-bottom" />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
