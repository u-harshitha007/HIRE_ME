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
          <h2 className={`${theme.headingSection} mb-16 md:mb-20 lg:mb-24`}>My Experience</h2>
        </Reveal>

        <div className="grid gap-14 md:gap-16 lg:gap-20">
          {EXPERIENCE_DATA.map((item, i) => (
            <Reveal key={item.company} delay={ANIMATION_TIMING.revealDelay + (i + 1) * ANIMATION_TIMING.revealStagger}>
              <div className="group border-t border-border pt-10 md:pt-12 transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-primary/40">
                <p className="text-xl md:text-2xl text-muted mb-3 md:mb-4">{item.company}</p>
                <p className="font-display text-5xl md:text-6xl lg:text-7xl leading-none mb-3 md:mb-4 uppercase tracking-tight transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-primary">
                  {item.role}
                </p>
                <p className="text-lg md:text-xl text-muted">{item.period}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
