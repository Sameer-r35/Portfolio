import { useEffect, useRef, useState } from 'react'

// phase: 'hidden' -> 'visible' -> 'done'
// 'done' removes the reveal classes so normal hover effects work again.
export function useReveal() {
  const ref = useRef(null)
  const [phase, setPhase] = useState(() =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ? 'done'
      : 'hidden'
  )

  // Wait until the element scrolls into view
  useEffect(() => {
    if (phase !== 'hidden') return
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPhase('visible')
          observer.disconnect()
        }
      },
      { threshold: 0.12 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [phase])

  // After the animation finishes, clear the reveal classes
  useEffect(() => {
    if (phase !== 'visible') return
    const timer = setTimeout(() => setPhase('done'), 1000)
    return () => clearTimeout(timer)
  }, [phase])

  return [ref, phase]
}