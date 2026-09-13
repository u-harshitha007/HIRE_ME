import { theme, ANIMATION_TIMING } from '../../styles/theme'
import Reveal from '../ui/Reveal'

const CONTACT_LINKS = [
  {
    label: 'Email',
    value: 'your.email@example.com',
    href: 'mailto:your.email@example.com',
  },
  {
    label: 'GitHub',
    value: 'github.com/YOUR_USERNAME',
    href: 'https://github.com/YOUR_USERNAME',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/YOUR_USERNAME',
    href: 'https://www.linkedin.com/in/YOUR_USERNAME/',
  },
]

export default function Contact() {
  return (
    <section id="contact" className={`${theme.sectionBase}`}>
      <div className={theme.container}>
        <Reveal delay={ANIMATION_TIMING.revealDelay}>
          <h2 className="text-xl md:text-2xl font-display uppercase tracking-wider text-muted mb-16 md:mb-20">
            Get in Touch
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-16 md:gap-20">
          <Reveal delay={ANIMATION_TIMING.revealDelay + ANIMATION_TIMING.revealStagger}>
            <div>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.15] mb-8 md:mb-10">
                Let's build something useful.
              </h3>
              <p className="text-lg md:text-xl text-muted leading-relaxed">
                Open to new opportunities, collaborations, and interesting projects. 
                Feel free to reach out if you'd like to work together.
              </p>
            </div>
          </Reveal>

          <Reveal
            delay={ANIMATION_TIMING.revealDelay + ANIMATION_TIMING.revealStagger * 2}
            className="space-y-8 md:space-y-10"
          >
            {CONTACT_LINKS.map((link) => (
              <div key={link.label} className="border-t border-border pt-6">
                <p className="text-xs md:text-sm uppercase tracking-wider text-muted mb-3">
                  {link.label}
                </p>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl md:text-2xl text-fg hover:text-primary transition-colors duration-300 break-all"
                >
                  {link.value}
                </a>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
