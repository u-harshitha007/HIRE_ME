import { ANIMATION_TIMING } from '../../styles/theme'
import Reveal from '../ui/Reveal'

const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com/YOUR_USERNAME' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/YOUR_USERNAME/' },
  { label: 'Email', href: 'mailto:your.email@example.com' },
]

export default function Footer() {
  return (
    <footer id="footer" className="relative bg-bg border-t border-border px-4 md:px-10 py-16 md:py-20">
      <div className="container">
        <Reveal delay={ANIMATION_TIMING.revealDelay}>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
            <div>
              <h3 className="text-3xl md:text-4xl font-display uppercase mb-2">HARSHITHA</h3>
              <p className="text-muted text-sm md:text-base">AI Engineer / Developer</p>
            </div>

            <div className="flex gap-6">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-fg transition-colors duration-300 text-sm uppercase tracking-wider"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="border-t border-border pt-6">
            <p className="text-muted text-xs md:text-sm text-center md:text-left">
              © {new Date().getFullYear()} HARSHITHA. All rights reserved.
            </p>
          </div>
        </Reveal>
      </div>
    </footer>
  )
}
