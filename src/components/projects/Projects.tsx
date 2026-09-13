import { theme, ANIMATION_TIMING } from '../../styles/theme'
import Reveal from '../ui/Reveal'
import { projects } from '../../data/projects'
import { SiGithub } from 'react-icons/si'
import { ExternalLink } from 'lucide-react'

export default function Projects() {
  return (
    <section id="projects" className={`${theme.sectionBase}`}>
      <div className={theme.container}>
        <Reveal delay={ANIMATION_TIMING.revealDelay}>
          <h2 className={`${theme.headingSection} mb-8 md:mb-10`}>Selected Projects</h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
          {projects.map((project, i) => (
            <Reveal
              key={project.id}
              delay={ANIMATION_TIMING.revealDelay + (i + 1) * ANIMATION_TIMING.revealStagger * 2}
            >
              <div className="group border border-border transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-primary/40">
                {/* Project Image Placeholder */}
                <div className="aspect-[16/10] bg-gradient-to-br from-border/20 to-border/5 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center px-6">
                      <p className="text-6xl md:text-7xl font-display text-muted/20 group-hover:text-primary/30 transition-colors duration-500">
                        _{project.id.toString().padStart(2, '0')}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 md:p-8">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h3 className="text-2xl md:text-3xl font-light leading-tight group-hover:text-primary transition-colors duration-500">
                      {project.title}
                    </h3>
                    <span className="text-xs text-muted uppercase tracking-wider shrink-0">
                      {project.category}
                    </span>
                  </div>

                  <p className="text-base md:text-lg text-muted leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech_stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs text-muted border border-border uppercase tracking-wide"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-5">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted hover:text-fg transition-colors duration-300 text-sm uppercase tracking-wider"
                    >
                      <SiGithub size={18} />
                      <span>Code</span>
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-muted hover:text-primary transition-colors duration-300 text-sm uppercase tracking-wider"
                      >
                        <ExternalLink size={18} />
                        <span>Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
