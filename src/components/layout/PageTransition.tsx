import { useEffect, useState } from 'react'

const LETTERS = 'HARSHITHA'.split('')

export default function PageTransition() {
  const [phase, setPhase] = useState<'letters' | 'bars' | 'curtain' | 'done'>('letters')

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setPhase('done')
      return
    }

    document.body.style.overflow = 'hidden'
    const t1 = setTimeout(() => setPhase('bars'), 1100)
    const t2 = setTimeout(() => setPhase('curtain'), 1750)
    const t3 = setTimeout(() => {
      setPhase('done')
      document.body.style.overflow = ''
    }, 2900)

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
      document.body.style.overflow = ''
    }
  }, [])

  if (phase === 'done') return null

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none" aria-hidden="true">
      {(phase === 'letters' || phase === 'bars') && (
        <div className="fixed inset-0 z-[6] flex">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className={`h-full w-[10%] bg-black ${phase === 'bars' ? 'preloader-bar' : ''}`}
              style={{ animationDelay: phase === 'bars' ? `${i * 45}ms` : undefined }}
            />
          ))}
          <p className="flex text-[18vw] lg:text-[200px] font-display text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 leading-none overflow-hidden text-fg mix-blend-difference">
            {LETTERS.map((letter, i) => (
              <span key={`${letter}-${i}`} className="inline-block overflow-hidden">
                <span
                  className="inline-block anim-clip-up"
                  style={{ animationDelay: `${120 + i * 55}ms` }}
                >
                  {letter}
                </span>
              </span>
            ))}
          </p>
        </div>
      )}

      {phase === 'curtain' && (
        <>
          <div className="absolute inset-0 bg-bg-light page-curtain" />
          <div className="absolute inset-0 bg-primary page-curtain-inner" />
        </>
      )}
    </div>
  )
}
