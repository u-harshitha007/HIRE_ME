export interface Experience {
  company: string
  role: string
  period: string
  description: string
  technologies: string[]
}

export const experiences: Experience[] = [
  {
    company: 'Tech Company Name',
    role: 'AI Engineer / ML Developer',
    period: 'Jan 2024 — Present',
    description:
      'Building intelligent systems and machine learning solutions. Working on LLM integration, model deployment, and scalable AI infrastructure.',
    technologies: ['Python', 'PyTorch', 'FastAPI', 'Docker', 'AWS'],
  },
  {
    company: 'Previous Company',
    role: 'Software Developer',
    period: 'Jun 2023 — Dec 2023',
    description:
      'Developed full-stack applications with focus on performance and user experience. Collaborated with cross-functional teams on product development.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'TypeScript'],
  },
]
