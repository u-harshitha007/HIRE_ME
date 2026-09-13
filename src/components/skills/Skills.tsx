import { theme, ANIMATION_TIMING } from '../../styles/theme'
import Reveal from '../ui/Reveal'
import { technologyStack } from '../../data/technologies'

function TechnologyGrid({ category, index }: { category: typeof technologyStack[0]; index: number }) {
  const baseDelay = ANIMATION_TIMING.revealDelay + index * ANIMATION_TIMING.revealStagger * 3
  
  return (
    <div className="border-t border-border pt-10 md:pt-12">
      <Reveal delay={baseDelay}>
        <h3 className="text-xl md:text-2xl font-display uppercase tracking-wider text-muted mb-10 md:mb-12">
          {category.label}
        </h3>
      </Reveal>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-10">
        {category.technologies.map((tech, i) => (
          <Reveal
            key={tech.name}
            className="flex flex-col items-center gap-4 group"
            delay={baseDelay + ANIMATION_TIMING.revealStagger + i * 40}
          >
            <div className="relative size-16 md:size-20 flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110">
              <tech.Icon
                size={48}
                color={tech.color}
                className="shrink-0"
              />
            </div>
            <span className="text-sm md:text-base text-center text-muted group-hover:text-fg transition-colors duration-300">
              {tech.name}
            </span>
          </Reveal>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="stack" className={theme.sectionBase}>
      <div className={theme.container}>
        <Reveal delay={ANIMATION_TIMING.revealDelay}>
          <h2 className="text-xl md:text-2xl font-display uppercase tracking-wider text-muted mb-16 md:mb-20">
            Tech Stack
          </h2>
        </Reveal>

        <div className="space-y-16 md:space-y-20">
          {technologyStack.map((category, index) => (
            <TechnologyGrid key={category.label} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
