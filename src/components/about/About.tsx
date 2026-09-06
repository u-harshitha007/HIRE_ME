import { theme } from '../../styles/theme'
import { useScrollReveal } from '../../hooks/useScrollReveal'

const BIO_LINES = [
  "YOUR BIO LINE 1 - Describe your current role or education.",
  "YOUR BIO LINE 2 - Mention your key skills or what you're passionate about.",
  "YOUR BIO LINE 3 - Highlight your experience or notable achievements.",
  "YOUR BIO LINE 4 - Add your interests, certifications, or what you're currently learning."
]

function RevealLine({ text, index }: { text: string, index: number }) {
  const { ref, isVisible } = useScrollReveal(0.1, '0px 0px -15% 0px')
  
  return (
    <p
      ref={ref as any}
      className={`text-2xl sm:text-3xl leading-snug font-hn text-cream ${
        isVisible ? theme.fadeUpAnim : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 120}ms` }}
    >
      {text}
    </p>
  )
}

function StatBlock() {
  const { ref, isVisible } = useScrollReveal(0.1, '0px 0px -15% 0px')

  return (
    <div 
      ref={ref as any}
      className={`flex flex-col gap-2 ${isVisible ? theme.fadeUpAnim : 'opacity-0'}`}
    >
      <span className="font-hn font-bold text-[25vw] sm:text-[14vw] leading-none text-[#B5A245] tracking-tighter">
        X+
      </span>
      <span className={`${theme.bodyText} text-sm sm:text-base max-w-[200px]`}>
        YOUR KEY ACHIEVEMENT &mdash; Replace with your stat
      </span>
    </div>
  )
}

function AboutHeading() {
  const { ref, isVisible } = useScrollReveal()
  return (
    <h2 
      ref={ref as any} 
      className={`${theme.headingLg} mb-12 sm:mb-24 ${isVisible ? theme.fadeUpAnim : 'opacity-0'}`}
    >
      About
    </h2>
  )
}

export default function About() {
  return (
    <section id="about" className={theme.sectionBase}>
      <div className="w-full max-w-7xl mx-auto flex flex-col">
        
        <AboutHeading />

        <div className="flex flex-col sm:flex-row items-start gap-16 sm:gap-10">
          
          {/* Left Column: Stat Anchor */}
          <div className="w-full sm:w-[40%] flex-shrink-0">
            <StatBlock />
          </div>

          {/* Right Column: Bio Lines */}
          <div className="w-full flex flex-col gap-8 sm:gap-10 pt-4 sm:pt-8">
            {BIO_LINES.map((line, i) => (
              <RevealLine key={i} text={line} index={i} />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
