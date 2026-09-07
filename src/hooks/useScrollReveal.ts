import { useEffect, useState, useRef, useCallback } from 'react'

export function useScrollReveal() {
  const [progress, setProgress] = useState(0)
  const ref = useRef<HTMLElement | null>(null)

  const calculateProgress = useCallback(() => {
    if (!ref.current) return

    const element = ref.current
    const rect = element.getBoundingClientRect()
    const windowHeight = window.innerHeight

    // Start revealing when element is 30% below viewport bottom
    // Fully revealed when element is 10% into viewport
    const startOffset = windowHeight * 0.3
    const endOffset = windowHeight * 0.9

    const elementTop = rect.top
    
    // Calculate progress: 0 when below start point, 1 when above end point
    if (elementTop > windowHeight + startOffset) {
      // Element is far below viewport
      setProgress(0)
    } else if (elementTop < endOffset) {
      // Element has crossed the reveal threshold
      setProgress(1)
    } else {
      // Element is in the progressive reveal zone
      const totalDistance = (windowHeight + startOffset) - endOffset
      const currentDistance = (windowHeight + startOffset) - elementTop
      const calculated = Math.max(0, Math.min(1, currentDistance / totalDistance))
      setProgress(calculated)
    }
  }, [])

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mediaQuery.matches) {
      setProgress(1)
      return
    }

    const currentRef = ref.current
    if (!currentRef) return

    // Initial calculation
    calculateProgress()

    // Throttled scroll handler for performance
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          calculateProgress()
          ticking = false
        })
        ticking = true
      }
    }

    // Use IntersectionObserver to only listen to scroll when element is near viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting || entry.boundingClientRect.top < window.innerHeight + 500) {
          window.addEventListener('scroll', handleScroll, { passive: true })
          calculateProgress()
        } else {
          window.removeEventListener('scroll', handleScroll)
        }
      },
      {
        rootMargin: '500px 0px 500px 0px', // Large margin to start tracking early
      }
    )

    observer.observe(currentRef)

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [calculateProgress])

  return { ref, progress }
}
