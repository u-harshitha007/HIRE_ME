import { useEffect, useState, useRef } from 'react'

export function useScrollReveal(threshold = 0.1, rootMargin = '0px 0px -10% 0px') {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mediaQuery.matches) {
      setIsVisible(true)
      return
    }

    const currentRef = ref.current
    if (!currentRef) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold,
        rootMargin,
      }
    )

    observer.observe(currentRef)

    return () => {
      observer.disconnect()
    }
  }, [threshold, rootMargin])

  return { ref, isVisible }
}
