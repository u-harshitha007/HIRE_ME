import { theme } from '../../styles/theme'
import Reveal from '../ui/Reveal'
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiPython,
  SiFastapi,
  SiDocker,
  SiGit,
  SiPostgresql,
} from 'react-icons/si'
import type { IconType } from 'react-icons'

type StackItem = { name: string; Icon: IconType; color: string }

type StackCategory = {
  label: string
  items: StackItem[]
}

const STACK_DATA: StackCategory[] = [
  {
    label: 'Frontend',
    items: [
      { name: 'React.js', Icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js', Icon: SiNextdotjs, color: '#ffffff' },
      { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
      { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
      { name: 'TailwindCSS', Icon: SiTailwindcss, color: '#06B6D4' },
    ],
  },
  {
    label: 'Backend',
    items: [
      { name: 'Python', Icon: SiPython, color: '#3776AB' },
      { name: 'FastAPI', Icon: SiFastapi, color: '#009688' },
      { name: 'PostgreSQL', Icon: SiPostgresql, color: '#4169E1' },
    ],
  },
  {
    label: 'AI & Tools',
    items: [
      { name: 'Python', Icon: SiPython, color: '#3776AB' },
      { name: 'Docker', Icon: SiDocker, color: '#2496ED' },
      { name: 'Git', Icon: SiGit, color: '#F05032' },
    ],
  },
]

function StackRow({ category, index }: { category: StackCategory; index: number }) {
  return (
    <div className="grid sm:grid-cols-12 gap-6 sm:gap-8">
      <Reveal className="sm:col-span-5" delay={index * 60}>
        <p className="font-display text-4xl md:text-5xl leading-none text-muted uppercase">
          {category.label}
        </p>
      </Reveal>

      <div className="sm:col-span-7 flex gap-x-8 md:gap-x-11 gap-y-6 md:gap-y-9 flex-wrap">
        {category.items.map((item, i) => (
          <Reveal
            key={`${category.label}-${item.name}`}
            className="flex gap-3.5 items-center leading-none group"
            delay={100 + index * 60 + i * 50}
          >
            <item.Icon
              size={40}
              color={item.color}
              className="shrink-0 transition-transform duration-300 group-hover:scale-110"
            />
            <span className="text-xl md:text-2xl capitalize text-fg">{item.name}</span>
          </Reveal>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className={theme.sectionBase}>
      <div className={theme.container}>
        <Reveal>
          <h2 className={`${theme.headingSection} mb-12 md:mb-16`}>My Stack</h2>
        </Reveal>

        <div className="space-y-16 md:space-y-20">
          {STACK_DATA.map((category, index) => (
            <StackRow key={category.label} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
