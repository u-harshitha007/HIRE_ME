import { theme, ANIMATION_TIMING } from '../../styles/theme'
import Reveal from '../ui/Reveal'

const EXPERIENCE_DATA = [
  {
    company: 'Company Name One',
    role: 'Role Title One',
    period: 'Month Year — Present',
  },
  {
    company: 'Company Name Two',
    role: 'Role Title Two',
    period: 'Month Year — Month Year',
  },
]

export default function Experience() {
  return (
    <section id="experience" className={theme.sectionBase}>
      <div className={theme.container}>
        <Reveal delay={ANIMATION_TIMING.revealDelay}>
          <h2 className={`${theme.headingSection} mb-12 md:mb-16`}>My Experience</h2>
        </Reveal>

        <div className="grid gap-12 md:gap-14">
          {EXPERIENCE_DATA.map((item, i) => (
            <Reveal key={item.company} delay={ANIMATION_TIMING.revealDelay + (i + 1) * ANIMATION_TIMING.revealStagger}>
              <div className="group border-t border-border pt-8 md:pt-10 transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-primary/40">
                <p className="text-lg md:text-xl text-muted">{item.company}</p>
                <p className="font-display text-4xl md:text-5xl leading-none mt-3 mb-2 uppercase transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-primary">
                  {item.role}
                </p>
                <p className="text-base md:text-lg text-muted">{item.period}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
