import { useEffect, useState } from 'react'
import Icon from '../ui/Icon'

/** Circular progress ring that fills as the page scrolls. */
export default function BackToTop() {
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      setProgress(scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0)
      setVisible(window.scrollY > 400)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const R = 22
  const C = 2 * Math.PI * R

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className={`fixed bottom-8 right-8 z-40 grid h-[52px] w-[52px] place-items-center rounded-full bg-white shadow-pop transition-all duration-300 ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-6 opacity-0'
      }`}
    >
      <svg className="absolute inset-0 -rotate-90" viewBox="0 0 52 52" aria-hidden="true">
        <circle cx="26" cy="26" r={R} fill="none" stroke="#e3e3e3" strokeWidth="3" />
        <circle
          cx="26" cy="26" r={R} fill="none" strokeWidth="3" strokeLinecap="round"
          className="stroke-brand"
          strokeDasharray={C}
          strokeDashoffset={C - (progress / 100) * C}
        />
      </svg>
      <span className="relative rotate-[-90deg] text-brand"><Icon name="arrowRight" className="h-4 w-4" /></span>
    </button>
  )
}
