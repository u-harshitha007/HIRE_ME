import { useState } from 'react'
import { theme } from '../../styles/theme'
import Reveal from '../ui/Reveal'
import SectionMark from '../ui/SectionMark'
import { SiGithub } from 'react-icons/si'
import { ExternalLink } from 'lucide-react'

const PROJECTS_DATA = [
  {
    id: 1,
    title: 'Project 01',
    description:
      'Placeholder project summary — what it does, the problem it solves, and the technologies involved.',
    tech_stack: ['React', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/YOUR_USERNAME/project-01',
    demo: 'https://demo-link.com',
  },
  {
    id: 2,
    title: 'Project 02',
    description:
      'Placeholder project summary — what it does, the problem it solves, and the technologies involved.',
    tech_stack: ['Python', 'FastAPI', 'PostgreSQL'],
    github: 'https://github.com/YOUR_USERNAME/project-02',
    demo: '',
  },
  {
    id: 3,
    title: 'Project 03',
    description:
      'Placeholder project summary — what it does, the problem it solves, and the technologies involved.',
    tech_stack: ['Next.js', 'TypeScript', 'Node.js'],
    github: 'https://github.com/YOUR_USERNAME/project-03',
    demo: 'https://demo-link.com',
  },
  {
    id: 4,
    title: 'Project 04',
    description:
      'Placeholder project summary — what it does, the problem it solves, and the technologies involved.',
    tech_stack: ['React', 'Python', 'Docker'],
    github: 'https://github.com/YOUR_USERNAME/project-04',
    demo: '',
  },
]

export default function Projects() {
  const [activeId, setActiveId] = useState<number | null>(null)

  return (
    <section id="projects" className={`${theme.sectionBase} pb-section`}>
      <div className={theme.container}>
        <Reveal className="flex items-center gap-4 mb-10 md:mb-12">
          <SectionMark />
          <h2 className={theme.headingSection}>Selected Projects</h2>
        </Reveal>

        <div className="flex flex-col">
          {PROJECTS_DATA.map((project, i) => {
            const isActive = activeId === project.id

            return (
              <Reveal key={project.id} delay={i * 80}>
                <div
                  className={`border-t border-border py-6 md:py-8 group ${
                    i === PROJECTS_DATA.length - 1 ? 'border-b' : ''
                  }`}
                  onMouseEnter={() => setActiveId(project.id)}
                  onMouseLeave={() => setActiveId(null)}
                >
                  <button
                    type="button"
                    className="w-full text-left"
                    onClick={() => setActiveId(isActive ? null : project.id)}
                  >
                    <h4
                      className={`font-display text-3xl md:text-5xl uppercase leading-none transition-colors duration-300 ${
                        isActive ? 'text-primary' : 'text-fg group-hover:text-primary'
                      }`}
                    >
                      {project.title}
                    </h4>
                  </button>

                  <div
                    className={`grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isActive
                        ? 'grid-rows-[1fr] opacity-100 mt-5 md:mt-6'
                        : 'grid-rows-[0fr] opacity-0 mt-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className={`${theme.bodyText} max-w-2xl mb-4`}>
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech_stack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs uppercase tracking-wide text-muted border border-border"
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
                          className="flex items-center gap-2 text-muted hover:text-fg transition-colors text-sm"
                        >
                          <SiGithub size={18} />
                          <span>Code</span>
                        </a>
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-muted hover:text-primary transition-colors text-sm"
                          >
                            <ExternalLink size={18} />
                            <span>Live Demo</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
