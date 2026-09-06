import type { ReactNode, RefObject } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
}

export default function Reveal({
  children,
  className = '',
  delay = 0,
}: RevealProps) {
  const { ref, isVisible } = useScrollReveal()

  return (
    <div
      ref={ref as RefObject<HTMLDivElement>}
      className={`${isVisible ? 'reveal-visible' : 'reveal-hidden'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
