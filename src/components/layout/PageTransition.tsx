import { useEffect, useState } from 'react'

const LETTERS = 'HARSHITHA'.split('')

export default function PageTransition() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setIsVisible(false)
      return
    }

    document.body.style.overflow = 'hidden'
    
    // Hide the intro after animation completes
    const timer = setTimeout(() => {
      setIsVisible(false)
      document.body.style.overflow = ''
    }, 2400)

    return () => {
      clearTimeout(timer)
      document.body.style.overflow = ''
    }
  }, [])

  if (!isVisible) return null

  return (
    <div 
      className="fixed inset-0 z-[100] bg-bg flex items-center justify-center pointer-events-none"
      style={{
        animation: 'intro-fade-out 0.8s cubic-bezier(0.22, 1, 0.36, 1) 1.6s forwards',
      }}
      aria-hidden="true"
    >
      <h1 className="flex text-[14vw] sm:text-[120px] md:text-[140px] font-display uppercase leading-none tracking-tight">
        {LETTERS.map((letter, i) => (
          <span
            key={`${letter}-${i}`}
            className="inline-block"
            style={{
              animation: 'letter-entrance 0.9s cubic-bezier(0.22, 1, 0.36, 1) both',
              animationDelay: `${i * 0.05}s`,
            }}
          >
            {letter}
          </span>
        ))}
      </h1>
    </div>
  )
}
