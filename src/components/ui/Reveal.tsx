import type { ReactNode, RefObject } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
}

// Easing function for smooth progression
function easeOutCubic(x: number): number {
  return 1 - Math.pow(1 - x, 3)
}

export default function Reveal({
  children,
  className = '',
  delay = 0,
}: RevealProps) {
  const { ref, progress } = useScrollReveal()

  // Apply delay factor to slow down initial reveal
  const delayFactor = delay > 0 ? Math.max(0, progress - delay / 1000) : progress
  const delayedProgress = Math.min(1, delayFactor * (1 + delay / 500))
  const finalProgress = Math.max(0, Math.min(1, delayedProgress))
  const finalEasedProgress = easeOutCubic(finalProgress)

  const finalOpacity = finalEasedProgress
  const finalTranslateY = (1 - finalEasedProgress) * 25

  return (
    <div
      ref={ref as RefObject<HTMLDivElement>}
      className={className}
      style={{
        opacity: finalOpacity,
        transform: `translateY(${finalTranslateY}px)`,
        transition: 'opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1), transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
        willChange: finalOpacity < 0.99 ? 'opacity, transform' : 'auto',
      }}
    >
      {children}
    </div>
  )
}
