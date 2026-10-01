import { useEffect, useRef, useState } from 'react'

/**
 * Adds `is-visible` behaviour once an element scrolls into the viewport.
 * Returns [ref, inView] — the flag stays true after the first intersection.
 */
export function useInView({ threshold = 0.15, rootMargin = '0px 0px -60px 0px' } = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return
    }

    // Anchor jumps and restored scroll positions can land past an element before
    // the observer ever runs, so check the current rect up front too.
    const alreadyVisible = () => {
      const rect = node.getBoundingClientRect()
      return rect.top < window.innerHeight && rect.bottom > 0
    }

    if (alreadyVisible()) {
      setInView(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting || entry.boundingClientRect.bottom < 0) {
          setInView(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return [ref, inView]
}
