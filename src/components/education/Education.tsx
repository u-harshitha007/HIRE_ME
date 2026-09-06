import { theme } from '../../styles/theme'
import { useScrollReveal } from '../../hooks/useScrollReveal'

export default function Education() {
  const { ref, isVisible } = useScrollReveal(0.1, '0px 0px -15% 0px')

  return (
    <section id="education" className={theme.sectionBase}>
      <div 
        ref={ref as any}
        className={`w-full max-w-7xl mx-auto flex flex-col gap-12 sm:gap-16 ${
          isVisible ? theme.fadeUpAnim : 'opacity-0'
        }`}
      >
        <h2 className={theme.headingLg}>Education</h2>
        
        <div className="flex flex-col gap-6">
          <h3 className="font-hn text-2xl sm:text-4xl text-cream tracking-wide">
            YOUR UNIVERSITY NAME
          </h3>
          
          <div className="flex flex-col gap-3">
            <p className={`${theme.bodyText} text-cream/70 text-lg sm:text-xl`}>
              YOUR DEGREE &middot; START YEAR &ndash; END YEAR &middot; GPA: X.X/4.0
            </p>
            
            <p className={`${theme.bodyText} text-cream/50 text-base sm:text-lg`}>
              Coursework: YOUR RELEVANT COURSES &middot; YOUR SKILLS &middot; YOUR SPECIALIZATIONS
            </p>
          </div>
        </div>

        {/* Divider tying into Achievements */}
        <div className={`mt-4 w-full ${theme.creamDivider}`} style={{ animationDelay: '300ms' }} />
      </div>
    </section>
  )
}
