import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

const EASE_EXPO = 'cubic-bezier(0.76, 0, 0.24, 1)'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Stack', href: '#stack' },
  { label: 'Hackathons', href: '#hackathons' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com/u-harshitha007' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/u-harshitha007' },
]

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
      {/* Sticky Navigation Bar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          scrolled ? 'bg-bg/95 backdrop-blur-md border-b border-border/50' : 'bg-transparent'
        }`}
      >
        <div className="container flex items-center justify-end h-16 md:h-20">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 mr-4">
            {NAV_LINKS.slice(1).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm uppercase tracking-wider text-muted hover:text-fg transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="group size-10 lg:size-12 flex items-center justify-center"
            onClick={() => setDrawerOpen((v) => !v)}
            aria-label={drawerOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={drawerOpen}
          >
            <span
              className={`inline-block w-6 h-0.5 rounded-full absolute transition-all duration-300 ${
                drawerOpen ? 'bg-bg rotate-45' : 'bg-fg -translate-y-1.5'
              }`}
            />
            <span
              className={`inline-block w-6 h-0.5 rounded-full absolute transition-all duration-300 ${
                drawerOpen ? 'bg-bg -rotate-45' : 'bg-fg translate-y-1.5'
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[99] bg-black/70 transition-all duration-300 ${
          drawerOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        onClick={closeDrawer}
        aria-hidden="true"
      />

      {/* Drawer Menu */}
      <div
        className={`fixed top-0 right-0 h-[100dvh] w-[min(450px,calc(100vw-2rem))] transition-transform duration-700 z-[100] overflow-hidden ${
          drawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ transitionTimingFunction: EASE_EXPO }}
        role="dialog"
        aria-modal="true"
        aria-hidden={!drawerOpen}
      >
        <div className="absolute inset-0 bg-fg" />

        <div className="relative h-full flex flex-col p-8 md:p-10">
          {/* Close Button */}
          <button
            onClick={closeDrawer}
            className="self-end size-10 flex items-center justify-center text-bg hover:text-bg/70 transition-colors"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>

          {/* Menu Content */}
          <div className="flex-1 flex flex-col justify-center">
            <nav className="space-y-6 mb-12">
              <p className="text-xs uppercase tracking-wider text-bg/60 mb-4">Menu</p>
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeDrawer}
                  className="block text-3xl md:text-4xl text-bg hover:text-bg/70 transition-colors font-light"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="border-t border-bg/20 pt-8">
              <p className="text-xs uppercase tracking-wider text-bg/60 mb-4">Connect</p>
              <div className="space-y-3">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    onClick={closeDrawer}
                    className="block text-lg text-bg hover:text-bg/70 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
