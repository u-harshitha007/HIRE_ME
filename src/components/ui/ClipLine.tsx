import type { ReactNode } from 'react'

type ClipLineProps = {
  children: ReactNode
  delay?: string
  className?: string
}

export default function ClipLine({ children, delay = '0s', className = '' }: ClipLineProps) {
  return (
    <span className={`block overflow-hidden ${className}`}>
      <span className="block anim-clip-up will-change-transform" style={{ animationDelay: delay }}>
        {children}
      </span>
    </span>
  )
}
