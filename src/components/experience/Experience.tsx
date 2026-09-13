import { theme, ANIMATION_TIMING } from '../../styles/theme'
import Reveal from '../ui/Reveal'

const EXPERIENCE_DATA = [
  {
    role: 'Google Gemini Student Ambassador',
    organization: 'Google',
    period: '',
    description:
      'Promoted Google Gemini and AI-focused learning initiatives among students through technical awareness, workshops, and peer engagement.',
  },
  {
    role: 'GDG Core Team Member',
    organization: 'Google Developer Groups',
    period: '',
    description:
      'Organized and supported student-focused activities and contributed to developer community initiatives.',
  },
]

export default function Experience() {
  return (
    <section id="experience" className={theme.sectionBase}>
      <div className={theme.container}>
        <Reveal delay={ANIMATION_TIMING.revealDelay}>
          <h2 className={`${theme.headingSection} mb-8 md:mb-10`}>Experience</h2>
        </Reveal>

        <div className="space-y-8 md:space-y-10">
          {EXPERIENCE_DATA.map((item, i) => (
            <Reveal key={i} delay={ANIMATION_TIMING.revealDelay + (i + 1) * ANIMATION_TIMING.revealStagger}>
              <div className="group border-t border-border pt-8 md:pt-10 transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-primary/40">
                <div>
                  <h3 className="text-3xl md:text-4xl font-light mb-2 transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-primary">
                    {item.role}
                  </h3>
                  <p className="text-xl md:text-2xl text-muted mb-4">{item.organization}</p>
                </div>

                <p className="text-base md:text-lg text-muted leading-relaxed max-w-3xl">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
