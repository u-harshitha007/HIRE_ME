import { theme, ANIMATION_TIMING } from '../../styles/theme'
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
  const baseDelay = ANIMATION_TIMING.revealDelay + index * ANIMATION_TIMING.revealStagger * 2
  
  return (
    <div className="grid sm:grid-cols-12 gap-8 sm:gap-10">
      <Reveal className="sm:col-span-5" delay={baseDelay}>
        <p className="font-display text-5xl md:text-6xl lg:text-7xl leading-none text-muted uppercase tracking-tight">
          {category.label}
        </p>
      </Reveal>

      <div className="sm:col-span-7 flex gap-x-10 md:gap-x-12 gap-y-8 md:gap-y-10 flex-wrap">
        {category.items.map((item, i) => (
          <Reveal
            key={`${category.label}-${item.name}`}
            className="flex gap-4 items-center leading-none group"
            delay={baseDelay + ANIMATION_TIMING.revealStagger + i * 50}
          >
            <item.Icon
              size={44}
              color={item.color}
              className="shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
            />
            <span className="text-xl md:text-2xl lg:text-3xl capitalize text-fg">{item.name}</span>
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
        <Reveal delay={ANIMATION_TIMING.revealDelay}>
          <h2 className={`${theme.headingSection} mb-16 md:mb-20 lg:mb-24`}>My Stack</h2>
        </Reveal>

        <div className="space-y-16 md:space-y-20 lg:space-y-24">
          {STACK_DATA.map((category, index) => (
            <StackRow key={category.label} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
