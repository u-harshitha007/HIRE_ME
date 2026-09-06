import { GitHubCalendar } from 'react-github-calendar'
import { theme } from '../../styles/theme'
import {
  SiReact, SiTypescript, SiJavascript, SiHtml5, SiCss,
  SiBootstrap, SiPython, SiGit,
  SiDocker, SiPostman
} from 'react-icons/si'
import { LayoutGrid, Network } from 'lucide-react'
import { useScrollReveal } from '../../hooks/useScrollReveal'

// Placeholder skills - Replace with your actual skills
const SKILLS_DATA = [
  // Tier 1 (Largest, core stack)
  { name: 'React.js', Icon: SiReact, color: '#61DAFB', tier: 1 },
  { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6', tier: 1 },      
  { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E', tier: 1 },      
  { name: 'Python', Icon: SiPython, color: '#3776AB', tier: 1 },

  // Tier 2 (Medium, frequent)
  { name: 'Git', Icon: SiGit, color: '#F05032', tier: 2 },
  { name: 'RESTful APIs', Icon: Network, color: '#efeee9', tier: 2 },
  { name: 'Docker', Icon: SiDocker, color: '#2496ED', tier: 2 },
  { name: 'HTML5', Icon: SiHtml5, color: '#E34F26', tier: 2 },
  { name: 'CSS3', Icon: SiCss, color: '#1572B6', tier: 2 },

  // Tier 3 (Smaller, supporting)
  { name: 'Bootstrap', Icon: SiBootstrap, color: '#7952B3', tier: 3 },
  { name: 'Responsive Design', Icon: LayoutGrid, color: '#efeee9', tier: 3 },   
  { name: 'Postman', Icon: SiPostman, color: '#FF6C37', tier: 3 },
  // Add more skills as needed
]

function SkillCard({ skill, index }: { skill: typeof SKILLS_DATA[0], index: number }) {
  const { ref, isVisible } = useScrollReveal(0.1, '0px 0px -10% 0px')

  let spanClasses = ''
  let layoutClasses = ''
  let iconSize = 24
  let textSize = ''

  if (skill.tier === 1) {
    spanClasses = 'col-span-2 row-span-2'
    layoutClasses = 'flex-col justify-center items-center gap-4 sm:gap-6 !p-6 sm:!p-8'
    iconSize = 56
    textSize = 'text-xl sm:text-2xl font-bold tracking-wide'
  } else if (skill.tier === 2) {
    spanClasses = 'col-span-2 sm:col-span-2 lg:col-span-2 row-span-1'
    layoutClasses = 'flex-row justify-start items-center gap-4 sm:gap-5 !p-4 sm:!px-6'
    iconSize = 36
    textSize = 'text-base sm:text-lg font-medium tracking-wide'
  } else {
    spanClasses = 'col-span-1 row-span-1'
    layoutClasses = 'flex-col justify-center items-center gap-2 sm:gap-3 !p-3 sm:!p-4'
    iconSize = 28
    textSize = 'text-xs sm:text-sm font-normal tracking-wide text-center leading-tight'
  }

  return (
    <div
      ref={ref as any}
      className={`${theme.neomorphicButton} !flex ${spanClasses} ${layoutClasses} transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}
      style={{ transitionDelay: `${(index % 12) * 40}ms` }}
    >
      <skill.Icon
        size={iconSize}
        color={skill.color}
        className="shrink-0 drop-shadow-lg transition-transform duration-300 hover:scale-110"
      />
      <span className={`text-cream font-hn ${textSize}`}>
        {skill.name}
      </span>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className={theme.sectionBase}>

      {/* Weighted Bento Grid */}
      <div className="w-full max-w-7xl mb-32">
        <h2 className={`${theme.headingLg} mb-12 sm:mb-20`}>Skills</h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 auto-rows-[120px] sm:auto-rows-[140px] grid-flow-dense">
          {SKILLS_DATA.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>

      {/* GitHub Activity Window */}
      <div className="w-full max-w-5xl">
        <h2 className={`${theme.headingLg} mb-16 !text-[6vh] sm:!text-[8vh]`}>GitHub Activity</h2>
        <div className="w-full bg-[#141414] border border-cream/20 rounded-xl p-6 sm:p-8 overflow-hidden shadow-2xl">
          {/* Header Row */}
          <div className="flex justify-between items-center mb-8">
            <span className="text-cream font-hn text-lg tracking-wide">GitHub Contributions</span>
            <span className="text-cream/50 text-sm font-hn tracking-wider">2026</span>
          </div>

          {/* Calendar constraints */}
          <div className="w-full overflow-x-auto pb-4 custom-scrollbar">
            <div className="min-w-[750px]">
              <GitHubCalendar
                username="YOUR_GITHUB_USERNAME"
                colorScheme="dark"
                theme={{
                  dark: [
                    '#1e1e1e',
                    '#0e4429',
                    '#006d32',
                    '#26a641',
                    '#39d353'
                  ]
                }}
              />
            </div>
          </div>

          {/* Footer Link */}
          <div className="mt-8 text-left">
            <a
              href="https://github.com/YOUR_USERNAME" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream opacity-60 hover:opacity-100 transition-opacity font-hn text-sm tracking-wide"
            >
              View full profile on GitHub &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
