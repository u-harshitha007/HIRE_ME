import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiFastapi,
  SiPytorch,
  SiTensorflow,
  SiDocker,
  SiGit,
  SiPostgresql,
  SiMongodb,
} from 'react-icons/si'
import type { IconType } from 'react-icons'

export interface Technology {
  name: string
  Icon: IconType
  color: string
}

export interface TechnologyCategory {
  label: string
  technologies: Technology[]
}

export const technologyStack: TechnologyCategory[] = [
  {
    label: 'AI / ML',
    technologies: [
      { name: 'Python', Icon: SiPython, color: '#3776AB' },
      { name: 'PyTorch', Icon: SiPytorch, color: '#EE4C2C' },
      { name: 'TensorFlow', Icon: SiTensorflow, color: '#FF6F00' },
    ],
  },
  {
    label: 'Development',
    technologies: [
      { name: 'React', Icon: SiReact, color: '#61DAFB' },
      { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
      { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
      { name: 'Next.js', Icon: SiNextdotjs, color: '#ffffff' },
      { name: 'Node.js', Icon: SiNodedotjs, color: '#339933' },
      { name: 'FastAPI', Icon: SiFastapi, color: '#009688' },
    ],
  },
  {
    label: 'Tools',
    technologies: [
      { name: 'Git', Icon: SiGit, color: '#F05032' },
      { name: 'Docker', Icon: SiDocker, color: '#2496ED' },
      { name: 'PostgreSQL', Icon: SiPostgresql, color: '#4169E1' },
      { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
    ],
  },
]
