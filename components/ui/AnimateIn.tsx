'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { cn } from '@/lib/utils'

interface Props {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'left' | 'none'
  once?: boolean
}

export default function AnimateIn({ children, className, delay = 0, direction = 'up', once = true }: Props) {
  const ref = useRef(null)
  const inView = useInView(ref, { once, margin: '-60px 0px' })

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 22 : 0,
      x: direction === 'left' ? -22 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  )
}
