import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? window.scrollY / max : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className="fixed top-[50svh] right-[2%] -translate-y-1/2 w-1.5 h-[100px] rounded-full bg-bg-light overflow-hidden z-30 max-md:hidden"
      aria-hidden="true"
    >
      <div
        className="w-full bg-primary rounded-full origin-top"
        style={{ height: `${Math.round(progress * 100)}%` }}
      />
    </div>
  )
}
