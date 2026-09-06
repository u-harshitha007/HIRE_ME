import { theme } from '../../styles/theme'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { Github, ExternalLink } from 'lucide-react'

// Placeholder projects - Replace with your actual projects
const PROJECTS_DATA = [
  {
    id: 1,
    title: 'PROJECT NAME 1',
    description: 'Brief description of your project. What it does, what technologies it uses, and what problem it solves.',
    tech_stack: ['React', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/YOUR_USERNAME/project1',
    demo: 'https://demo-link.com',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80'
  },
  {
    id: 2,
    title: 'PROJECT NAME 2',
    description: 'Brief description of your project. What it does, what technologies it uses, and what problem it solves.',
    tech_stack: ['Python', 'FastAPI', 'PostgreSQL'],
    github: 'https://github.com/YOUR_USERNAME/project2',
    demo: '',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80'
  },
  {
    id: 3,
    title: 'PROJECT NAME 3',
    description: 'Brief description of your project. What it does, what technologies it uses, and what problem it solves.',
    tech_stack: ['Next.js', 'MongoDB', 'Node.js'],
    github: 'https://github.com/YOUR_USERNAME/project3',
    demo: 'https://demo-link.com',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80'
  },
  {
    id: 4,
    title: 'PROJECT NAME 4',
    description: 'Brief description of your project. What it does, what technologies it uses, and what problem it solves.',
    tech_stack: ['React', 'Groq', 'LangChain'],
    github: 'https://github.com/YOUR_USERNAME/project4',
    demo: '',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&q=80'
  },
]

function ProjectCard({ project, index }: { project: typeof PROJECTS_DATA[0], index: number }) {
  const { ref, isVisible } = useScrollReveal(0.1, '0px 0px -10% 0px')

  return (
    <div
      ref={ref as any}
      className={`group relative bg-[#141414] border border-cream/10 rounded-xl overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-cream/30 hover:shadow-2xl ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Project Image */}
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-4">
        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-hn font-bold text-cream tracking-wide group-hover:text-[#39d353] transition-colors duration-300">
          {project.title}
        </h3>

        {/* Description */}
        <p className={`${theme.bodyText} text-sm sm:text-base line-clamp-3`}>
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech_stack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-hn tracking-wide text-cream/70 bg-cream/5 rounded-full border border-cream/10"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 mt-2">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-cream/70 hover:text-cream transition-colors duration-300 text-sm font-hn"
          >
            <Github size={18} />
            <span>Code</span>
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-cream/70 hover:text-[#39d353] transition-colors duration-300 text-sm font-hn"
            >
              <ExternalLink size={18} />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const { ref, isVisible } = useScrollReveal(0.1, '0px 0px -10% 0px')

  return (
    <section id="projects" className={theme.sectionBase}>
      <div
        ref={ref as any}
        className={`w-full max-w-7xl mx-auto ${isVisible ? theme.fadeUpAnim : 'opacity-0'}`}
      >
        <h2 className={`${theme.headingLg} mb-12 sm:mb-16`}>Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {PROJECTS_DATA.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
