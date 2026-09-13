import {
  SiPython,
  SiCplusplus,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiFastapi,
  SiNumpy,
  SiPandas,
  SiPlotly,
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
    label: 'AI Systems',
    technologies: [
      { name: 'Python', Icon: SiPython, color: '#3776AB' },
    ],
  },
  {
    label: 'Data Science',
    technologies: [
      { name: 'NumPy', Icon: SiNumpy, color: '#013243' },
      { name: 'Pandas', Icon: SiPandas, color: '#150458' },
      { name: 'Matplotlib', Icon: SiPlotly, color: '#11557c' },
      { name: 'Seaborn', Icon: SiPlotly, color: '#3776AB' },
    ],
  },
  {
    label: 'Full Stack Development',
    technologies: [
      { name: 'Python', Icon: SiPython, color: '#3776AB' },
      { name: 'React', Icon: SiReact, color: '#61DAFB' },
      { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
      { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
      { name: 'Node.js', Icon: SiNodedotjs, color: '#339933' },
      { name: 'FastAPI', Icon: SiFastapi, color: '#009688' },
      { name: 'PostgreSQL', Icon: SiPostgresql, color: '#4169E1' },
    ],
  },
  {
    label: 'Data Science & DSA',
    technologies: [
      { name: 'Python', Icon: SiPython, color: '#3776AB' },
      { name: 'C++', Icon: SiCplusplus, color: '#00599C' },
      { name: 'PostgreSQL', Icon: SiPostgresql, color: '#4169E1' },
      { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
    ],
  },
  {
    label: 'Tools',
    technologies: [
      { name: 'Git', Icon: SiGit, color: '#F05032' },
      { name: 'Docker', Icon: SiDocker, color: '#2496ED' },
    ],
  },
]
