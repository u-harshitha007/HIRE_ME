import { useState, useEffect } from 'react'
import { ArrowUpRight } from 'lucide-react'

const EASE_EXPO = 'cubic-bezier(0.76, 0, 0.24, 1)'

const NAV_LINKS = [
  { label: 'Home', href: '#home', dot: 'bg-yellow-500 text-black' },
  { label: 'About Me', href: '#about', dot: 'bg-blue-500 text-white' },
  { label: 'Experience', href: '#experience', dot: 'bg-teal-500 text-black' },
  { label: 'Projects', href: '#projects', dot: 'bg-indigo-500 text-white' },
]

const SOCIAL_LINKS = [
  { label: 'github', href: 'https://github.com/YOUR_USERNAME' },
  { label: 'linkedin', href: 'https://www.linkedin.com/in/YOUR_USERNAME/' },
]

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [drawerOpen])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setDrawerOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const closeDrawer = () => setDrawerOpen(false)

  return (
    <>
      <div className="sticky top-0 z-[4] pointer-events-none">
        <button
          type="button"
          className="group pointer-events-auto size-12 absolute top-5 right-5 md:right-10 z-[2] flex items-center justify-center"
          onClick={() => setDrawerOpen((v) => !v)}
          aria-label={drawerOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={drawerOpen}
        >
          <span
            className={`inline-block w-3/5 h-0.5 rounded-full absolute left-1/2 -translate-x-1/2 top-1/2 duration-300 md:group-hover:rotate-12 ${
              drawerOpen ? 'bg-bg' : 'bg-fg'
            }`}
            style={{
              transform: drawerOpen
                ? 'translate(-50%, 0) rotate(45deg)'
                : 'translate(-50%, -5px)',
            }}
          />
          <span
            className={`inline-block w-3/5 h-0.5 rounded-full absolute left-1/2 -translate-x-1/2 top-1/2 duration-300 md:group-hover:-rotate-12 ${
              drawerOpen ? 'bg-bg' : 'bg-fg'
            }`}
            style={{
              transform: drawerOpen
                ? 'translate(-50%, 0) rotate(-45deg)'
                : 'translate(-50%, 5px)',
            }}
          />
        </button>
      </div>

      <div
        className={`overlay fixed inset-0 z-[2] bg-black/70 transition-all duration-150 ${
          drawerOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        onClick={closeDrawer}
        aria-hidden="true"
      />

      <div
        className={`fixed top-0 right-0 h-[100dvh] w-[500px] max-w-[calc(100vw-3rem)] transition-transform duration-700 z-[3] overflow-hidden gap-y-14 flex flex-col lg:justify-center py-10 ${
          drawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ transitionTimingFunction: EASE_EXPO }}
        role="dialog"
        aria-modal="true"
        aria-hidden={!drawerOpen}
      >
        <div
          className={`fixed inset-0 scale-150 translate-x-1/2 rounded-[50%] bg-bg-light duration-700 delay-150 -z-[1] ${
            drawerOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />

        <div className="grow flex md:items-center w-full max-w-[300px] mx-8 sm:mx-auto">
          <div className="flex gap-10 lg:justify-between max-lg:flex-col w-full">
            <div className="max-lg:order-2">
              <p className="text-muted mb-5 md:mb-8">SOCIAL</p>
              <ul className="space-y-3">
                {SOCIAL_LINKS.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeDrawer}
                      className="text-lg capitalize hover:underline text-bg"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-muted mb-5 md:mb-8">MENU</p>
              <ul className="space-y-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={closeDrawer}
                      className="group text-xl flex items-center gap-3 text-bg"
                    >
                      <span
                        className={`size-3.5 rounded-full flex items-center justify-center group-hover:scale-[200%] transition-all ${link.dot}`}
                      >
                        <ArrowUpRight
                          size={8}
                          className="scale-0 group-hover:scale-100 transition-all"
                        />
                      </span>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full max-w-[300px] mx-8 sm:mx-auto">
          <p className="text-muted mb-4">GET IN TOUCH</p>
          <a
            href="#contact"
            onClick={closeDrawer}
            className="text-lg capitalize hover:underline text-bg"
          >
            your.email@example.com
          </a>
        </div>
      </div>
    </>
  )
}
