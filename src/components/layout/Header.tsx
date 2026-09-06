import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

/* ── Nav links → smooth-scroll to section ids ── */
const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

/* ── Social / external links ── */
const SOCIAL_LINKS = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/YOUR_USERNAME/',
    external: true,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/YOUR_USERNAME',
    external: true,
  },
  {
    label: 'Resume',
    href: '#',
    isResume: true,
  },
]

/* ── Shared easing ── */
const EASE_EXPO = 'cubic-bezier(0.76, 0, 0.24, 1)'

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [resumeModalOpen, setResumeModalOpen] = useState(false)

  /* Lock body scroll while drawer or modal is open */
  useEffect(() => {
    if (drawerOpen || resumeModalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [drawerOpen, resumeModalOpen])

  /** Close drawer on nav click so the page can scroll to the target */
  const handleNavClick = () => {
    setDrawerOpen(false)
  }

  return (
    <>
      {/* ────────────────────────────────────────────
          Fixed Header — z-30
      ──────────────────────────────────────────── */}
      <header className="fixed inset-x-0 top-0 z-30 flex items-start justify-between px-6 pt-6 sm:px-10 sm:pt-8 pointer-events-none">
        {/* Brand */}
        <a
          href="#home"
          className="pointer-events-auto font-hn text-lg tracking-wide text-cream anim-fade-up"
          style={{ animationDelay: '800ms' }}
        >
          YOUR NAME
        </a>

        {/* Desktop nav cluster */}
        <div className="hidden sm:flex items-start gap-16 lg:gap-24 text-cream pointer-events-auto">
          {/* Year */}
          <span
            className="text-sm anim-fade-up"
            style={{ animationDelay: '900ms' }}
          >
            2026
          </span>

          {/* Navigation */}
          <nav className="flex flex-col gap-0.5 text-sm">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                className="transition-opacity duration-300 hover:opacity-60 anim-fade-up"
                style={{ animationDelay: `${1000 + i * 80}ms` }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social */}
          <div className="flex flex-col gap-0.5 text-sm">
            {SOCIAL_LINKS.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                {...(link.external
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
                onClick={(e) => {
                  if (link.isResume) {
                    e.preventDefault()
                    setResumeModalOpen(true)
                  }
                }}
                className="transition-opacity duration-300 hover:opacity-60 anim-fade-up"
                style={{ animationDelay: `${1150 + i * 80}ms` }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </header>

      {/* ────────────────────────────────────────────
          Fixed Hamburger / close — z-50 (mobile only)
      ──────────────────────────────────────────── */}
      <button
        type="button"
        className="fixed right-6 top-6 z-50 sm:hidden flex h-10 w-10 items-center justify-center anim-fade-up"
        style={{ animationDelay: '900ms' }}
        onClick={() => setDrawerOpen((v) => !v)}
        aria-label={drawerOpen ? 'Close menu' : 'Open menu'}
      >
        <div className="relative h-4 w-6">
          {/* Top bar */}
          <span
            className="absolute left-0 top-0 block h-[1.5px] w-full bg-cream"
            style={{
              transition: `transform 500ms ${EASE_EXPO}`,
              transform: drawerOpen
                ? 'translateY(7px) rotate(45deg)'
                : 'none',
            }}
          />
          {/* Middle bar */}
          <span
            className="absolute left-0 top-1/2 block h-[1.5px] w-full -translate-y-1/2 bg-cream transition-opacity duration-300"
            style={{ opacity: drawerOpen ? 0 : 1 }}
          />
          {/* Bottom bar */}
          <span
            className="absolute left-0 bottom-0 block h-[1.5px] w-full bg-cream"
            style={{
              transition: `transform 500ms ${EASE_EXPO}`,
              transform: drawerOpen
                ? 'translateY(-7px) rotate(-45deg)'
                : 'none',
            }}
          />
        </div>
      </button>

      {/* ────────────────────────────────────────────
          Mobile Drawer — z-40 (sm:hidden)
      ──────────────────────────────────────────── */}
      
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 sm:hidden transition-opacity duration-500 ${
          drawerOpen
            ? 'bg-black/40 backdrop-blur-sm opacity-100'
            : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setDrawerOpen(false)}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        className={`fixed right-0 top-0 bottom-0 z-40 sm:hidden w-[80%] max-w-sm bg-[#141414] px-8 py-10 overflow-y-auto ${
          drawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          transition: `transform 600ms ${EASE_EXPO}`,
        }}
      >
        {/* Close icon (Lucide X) */}
        <button
          type="button"
          className="absolute right-6 top-6 text-cream"
          style={{
            transition: 'opacity 300ms, transform 300ms',
            opacity: drawerOpen ? 1 : 0,
            transform: drawerOpen ? 'rotate(0deg)' : 'rotate(90deg)',
            transitionDelay: drawerOpen ? '300ms' : '0ms',
          }}
          onClick={() => setDrawerOpen(false)}
          aria-label="Close menu"
        >
          <X size={26} strokeWidth={1.5} />
        </button>

        {/* ── Site Index ── */}
        <p
          className="uppercase tracking-[0.2em] text-cream/50 text-xs mb-6"
          style={{
            transition: 'opacity 500ms, transform 500ms',
            opacity: drawerOpen ? 1 : 0,
            transform: drawerOpen ? 'translateY(0)' : 'translateY(12px)',
            transitionDelay: drawerOpen ? '250ms' : '0ms',
          }}
        >
          Site Index
        </p>

        <nav className="flex flex-col gap-3 mb-10">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              onClick={handleNavClick}
              className="text-4xl text-cream font-hn"
              style={{
                transition: 'opacity 500ms, transform 500ms',
                opacity: drawerOpen ? 1 : 0,
                transform: drawerOpen ? 'translateY(0)' : 'translateY(24px)',
                transitionDelay: drawerOpen ? `${300 + i * 80}ms` : '0ms',
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* ── Find Me ── */}
        <p
          className="uppercase tracking-[0.2em] text-cream/50 text-xs mb-4"
          style={{
            transition: 'opacity 500ms, transform 500ms',
            opacity: drawerOpen ? 1 : 0,
            transform: drawerOpen ? 'translateY(0)' : 'translateY(12px)',
            transitionDelay: drawerOpen ? '500ms' : '0ms',
          }}
        >
          Find Me
        </p>

        <div className="flex flex-wrap gap-x-4 gap-y-2">
          {SOCIAL_LINKS.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              {...(link.external
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
              onClick={(e) => {
                if (link.isResume) {
                  e.preventDefault()
                  setResumeModalOpen(true)
                }
                handleNavClick()
              }}
              className="text-sm text-cream font-hn"
              style={{
                transition: 'opacity 500ms, transform 500ms',
                opacity: drawerOpen ? 1 : 0,
                transform: drawerOpen ? 'translateY(0)' : 'translateY(16px)',
                transitionDelay: drawerOpen ? `${550 + i * 60}ms` : '0ms',
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* ────────────────────────────────────────────
          Resume Modal — z-50
      ──────────────────────────────────────────── */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${
          resumeModalOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setResumeModalOpen(false)}
          aria-hidden="true"
        />

        {/* Panel */}
        <div className="relative z-10 w-full max-w-3xl h-[85vh] bg-[#141414] border border-cream/20 rounded-xl p-4 flex flex-col">
          <button
            type="button"
            className="absolute right-4 top-4 text-cream transition-opacity duration-300 hover:opacity-60"
            onClick={() => setResumeModalOpen(false)}
            aria-label="Close modal"
          >
            <X size={26} strokeWidth={1.5} />
          </button>

          <div className="flex justify-between items-center mb-4 pr-12">
            <h3 className="text-cream font-hn text-lg tracking-wide">Resume Preview</h3>
            <a
              href="/Resume.pdf"
              download="YOUR_NAME_Resume.pdf"
              className="px-5 py-2 bg-[#1a1a1a] text-cream border border-cream/20 rounded-lg hover:bg-cream/10 transition-colors font-hn text-sm tracking-wide shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]"
            >
              Download
            </a>
          </div>

          <div className="flex-1 w-full rounded-lg overflow-hidden relative border border-cream/10 bg-white">
            {/* Desktop / Tablet Iframe */}
            <iframe
              src="/Resume.pdf"
              className="hidden sm:block w-full h-full border-none"
              title="Resume Preview"
            />
            {/* Mobile Fallback */}
            <div className="sm:hidden w-full h-full flex items-center justify-center bg-neutral-900">
              <a
                 href="/Resume.pdf"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-cream hover:opacity-60 transition-opacity underline underline-offset-4 font-hn text-sm"
              >
                 Open resume in new tab
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
