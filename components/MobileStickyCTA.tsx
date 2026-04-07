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
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
        >
          <div className="bg-white/97 dark:bg-[#0e0c0b]/97 border-t border-neutral-200 dark:border-neutral-800 backdrop-blur-2xl px-4 py-3 pb-safe flex gap-3">
            <a
              href="tel:+13023579776"
              className="flex items-center justify-center gap-2 h-14 px-5 text-sm font-[600] text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700 rounded-xl flex-shrink-0 transition-all duration-150 active:scale-95"
            >
              <Phone size={16} />
              Call
            </a>
            <Link
              href="/contact#form"
              className="flex-1 inline-flex items-center justify-center gap-2 h-14 text-base font-[600] text-white bg-brand-500 hover:bg-brand-600 rounded-xl transition-all duration-150 active:scale-95"
            >
              Get Started <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
