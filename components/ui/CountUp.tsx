'use client'
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

function parse(v: string) {
  const m = v.match(/^([^\d]*)(\d+(?:\.\d+)?)([^\d]*)$/)
  return m ? { num: parseFloat(m[2]), pre: m[1], suf: m[3] } : null
}

export default function CountUp({ value, duration = 1600 }: { value: string; duration?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [display, setDisplay] = useState('0')
  const started = useRef(false)

  useEffect(() => {
    if (!inView || started.current) return
    started.current = true
    if (value === '24/7') { setTimeout(() => setDisplay('24/7'), 100); return }
    const parsed = parse(value)
    if (!parsed) { setDisplay(value); return }
    const { num, pre, suf } = parsed
    const start = Date.now()
    const tick = () => {
      const p = Math.min((Date.now() - start) / duration, 1)
      const e = 1 - Math.pow(1 - p, 3)
      setDisplay(`${pre}${Math.round(e * num)}${suf}`)
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, value, duration])

  return <span ref={ref}>{display === '0' ? (value === '0' ? '0' : '0') : display}</span>
}
