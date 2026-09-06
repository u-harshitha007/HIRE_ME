import { theme } from '../../styles/theme'
import Reveal from '../ui/Reveal'

const ACHIEVEMENTS_DATA = [
  {
    title: 'Achievement One',
    desc: 'Brief description of your achievement or recognition.',
    date: 'Month Year',
  },
  {
    title: 'Achievement Two',
    desc: 'Brief description of your achievement or recognition.',
    date: 'Month Year',
  },
  {
    title: 'Achievement Three',
    desc: 'Brief description of your achievement or recognition.',
    date: 'Month Year',
  },
  {
    title: 'Achievement Four',
    desc: 'Brief description of your achievement or recognition.',
    date: 'Month Year',
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className={theme.sectionBase}>
      <div className={theme.container}>
        <Reveal>
          <h2 className={`${theme.headingSection} mb-12 md:mb-16`}>Achievements</h2>
        </Reveal>

        <div className="flex flex-col">
          {ACHIEVEMENTS_DATA.map((item, i) => (
            <Reveal key={item.title} delay={i * 70}>
              <div
                className={`border-t border-border py-8 md:py-11 group transition-colors duration-300 hover:border-primary/40 ${
                  i === ACHIEVEMENTS_DATA.length - 1 ? 'border-b' : ''
                }`}
              >
                <div className="flex flex-col sm:flex-row justify-between items-start gap-3 sm:gap-6">
                  <div className="w-full sm:w-[72%]">
                    <h3 className="font-display text-2xl md:text-[2rem] uppercase leading-none group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className={`${theme.bodyText} mt-3 md:mt-4 max-w-xl`}>{item.desc}</p>
                  </div>
                  <span className="text-muted text-sm uppercase tracking-[0.16em] group-hover:text-primary transition-colors duration-300">
                    {item.date}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
