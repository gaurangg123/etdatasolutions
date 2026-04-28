'use client'
import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const el = document.getElementById('main-content')
    if (!el) return
    const onScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = el
      const total = scrollHeight - clientHeight
      setProgress(total > 0 ? scrollTop / total : 0)
    }
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <div className="scroll-progress hidden lg:block">
      <div className="scroll-progress-fill" style={{ height: `${progress * 100}%` }} />
    </div>
  )
}
