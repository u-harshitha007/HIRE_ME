import { theme, ANIMATION_TIMING } from '../../styles/theme'
import Reveal from '../ui/Reveal'
import { experiences } from '../../data/experience'

export default function Experience() {
  return (
    <section id="experience" className={theme.sectionBase}>
      <div className={theme.container}>
        <Reveal delay={ANIMATION_TIMING.revealDelay}>
          <h2 className="text-xl md:text-2xl font-display uppercase tracking-wider text-muted mb-16 md:mb-20">
            Experience
          </h2>
        </Reveal>

        <div className="space-y-16 md:space-y-20">
          {experiences.map((item, i) => (
            <Reveal key={i} delay={ANIMATION_TIMING.revealDelay + (i + 1) * ANIMATION_TIMING.revealStagger}>
              <div className="group border-t border-border pt-10 md:pt-12 transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-primary/40">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-light mb-2 transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-primary">
                      {item.role}
                    </h3>
                    <p className="text-xl md:text-2xl text-muted">{item.company}</p>
                  </div>
                  <p className="text-sm md:text-base text-muted uppercase tracking-wider md:text-right">
                    {item.period}
                  </p>
                </div>

                <p className="text-base md:text-lg text-muted leading-relaxed mb-6 max-w-3xl">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2.5">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-xs md:text-sm text-muted border border-border uppercase tracking-wide"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
