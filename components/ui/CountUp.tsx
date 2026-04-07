'use client'
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface Props {
  value: string   // e.g. "99%", "10+", "24/7", "4"
  duration?: number
}

function parseValue(v: string): { num: number; prefix: string; suffix: string } {
  const match = v.match(/^([^0-9]*)(\d+(?:\.\d+)?)([^0-9]*)$/)
  if (!match) return { num: 0, prefix: '', suffix: v }
  return { num: parseFloat(match[2]), prefix: match[1], suffix: match[3] }
}

export default function CountUp({ value, duration = 1800 }: Props) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px 0px' })
  const [display, setDisplay] = useState('0')
  const started = useRef(false)

  useEffect(() => {
    if (!inView || started.current) return
    started.current = true

    // Special case: "24/7" — just show it directly with a short delay
    if (value === '24/7') {
      setTimeout(() => setDisplay('24/7'), 200)
      return
    }

    const { num, prefix, suffix } = parseValue(value)
    const start = Date.now()
    const tick = () => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.round(eased * num)
      setDisplay(`${prefix}${current}${suffix}`)
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, value, duration])

  return <span ref={ref}>{display === '0' && value !== '0' ? '0' : display}</span>
}
