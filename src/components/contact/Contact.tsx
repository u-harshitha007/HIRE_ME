import { theme, ANIMATION_TIMING } from '../../styles/theme'
import Reveal from '../ui/Reveal'

const CONTACT_LINKS = [
  {
    label: 'Email',
    value: 'harshithauppar203@gmail.com',
    href: 'mailto:harshithauppar203@gmail.com',
  },
  {
    label: 'Phone',
    value: '+91 6363276298',
    href: 'tel:+916363276298',
  },
  {
    label: 'GitHub',
    value: 'github.com/u-harshitha007',
    href: 'https://github.com/u-harshitha007',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/u-harshitha007',
    href: 'https://www.linkedin.com/in/u-harshitha007',
  },
]

export default function Contact() {
  return (
    <section id="contact" className={`${theme.sectionBase}`}>
      <div className={theme.container}>
        <Reveal delay={ANIMATION_TIMING.revealDelay}>
          <h2 className={`${theme.headingSection} mb-8 md:mb-10`}>Get in Touch</h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
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
            className="space-y-6 md:space-y-8"
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
