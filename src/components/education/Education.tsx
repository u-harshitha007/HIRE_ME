import { theme } from '../../styles/theme'
import Reveal from '../ui/Reveal'

export default function Education() {
  return (
    <section id="education" className={theme.sectionBase}>
      <div className={theme.container}>
        <Reveal>
          <h2 className={`${theme.headingSection} mb-12 md:mb-16`}>Education</h2>
        </Reveal>

        <Reveal delay={80}>
          <div className="border-t border-border pt-10">
            <h3 className="font-display text-3xl md:text-5xl uppercase leading-none">
              YOUR UNIVERSITY NAME
            </h3>
            <p className={`${theme.bodyText} text-lg mt-4`}>
              YOUR DEGREE · START YEAR – END YEAR · GPA: X.X/4.0
            </p>
            <p className={`${theme.bodyText} mt-3`}>
              Coursework: YOUR RELEVANT COURSES · YOUR SKILLS · YOUR SPECIALIZATIONS
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
