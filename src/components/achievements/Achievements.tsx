import { useState } from 'react'
import { theme } from '../../styles/theme'
import { useScrollReveal } from '../../hooks/useScrollReveal'

// Placeholder achievements - Replace with your actual achievements
const ACHIEVEMENTS_DATA = [
  {
    title: 'YOUR ACHIEVEMENT 1',
    desc: 'Brief description of your achievement',
    date: 'MONTH YEAR'
  },
  {
    title: 'YOUR ACHIEVEMENT 2',
    desc: 'Brief description of your achievement',
    date: 'MONTH YEAR'
  },
  {
    title: 'YOUR ACHIEVEMENT 3',
    desc: 'Brief description of your achievement',
    date: 'MONTH YEAR'
  },
  {
    title: 'YOUR ACHIEVEMENT 4',
    desc: 'Brief description of your achievement',
    date: 'MONTH YEAR'
  },
  {
    title: 'YOUR ACHIEVEMENT 5',
    desc: 'Brief description of your achievement',
    date: ''
  },
  {
    title: 'YOUR ACHIEVEMENT 6',
    desc: 'Brief description of your achievement',
    date: 'MONTH YEAR'
  }
]

function AchievementRow({ item, index, highlighted }: { item: typeof ACHIEVEMENTS_DATA[0], index: number, highlighted: boolean }) {
  const { ref, isVisible } = useScrollReveal(0.1, '0px 0px -10% 0px')

  return (
    <div 
      id={`achievement-${index}`}
      ref={ref as any}
      className={`group flex flex-col ${isVisible ? theme.fadeUpAnim : 'opacity-0'} transition-opacity`}
      style={{ animationDelay: `${index * 100}ms`, '--accent': theme.accent } as any}
    >
      <div className={theme.creamDivider} />
      
      <div className="flex flex-col sm:flex-row justify-between items-start gap-3 sm:gap-6 py-8 sm:py-12">
        {/* Left/Top: Title + Description */}
        <div className="w-full sm:w-[70%] flex flex-col gap-2 sm:gap-3 items-start">
          <h3 className="relative text-xl sm:text-2xl font-hn text-cream tracking-wide">
            {item.title}
            {/* Animated Accent Underline */}
            <span 
              className="absolute left-0 -bottom-2 h-[2px] transition-all duration-400 ease-out origin-left"
              style={{ 
                backgroundColor: theme.accent,
                transform: highlighted ? 'scaleX(1)' : 'scaleX(0)',
                opacity: highlighted ? 1 : 0,
                width: '100%'
              }}
            />
          </h3>
          <p className={`${theme.bodyText} text-cream/70 text-base sm:text-lg pr-0 sm:pr-8`}>
            {item.desc}
          </p>
        </div>
        
        {/* Right/Bottom: Date Context */}
        {item.date && (
          <div className="w-full sm:w-[30%] flex sm:justify-end mt-2 sm:mt-1">
            <span className="text-cream/50 group-hover:text-[var(--accent)] group-hover:opacity-100 text-sm font-hn tracking-wider uppercase transition-colors duration-300">
              {item.date}
            </span>
          </div>
        )}
      </div>
    </div>
  )
}

function AchievementsMarquee({ onScrollTo }: { onScrollTo: (i: number) => void }) {
  const { ref, isVisible } = useScrollReveal()
  
  const content = (
    <div className="flex gap-[4vw] items-center text-[6vh] sm:text-[8vh] leading-none text-black font-hn pr-[4vw] group">
      {ACHIEVEMENTS_DATA.map((item, i) => (
        <button
          key={i}
          onClick={() => onScrollTo(i)}
          className="whitespace-nowrap transition-all duration-300 opacity-100 group-hover:opacity-40 hover:!opacity-100 hover:text-white focus:!opacity-100 focus:outline-none cursor-pointer drop-shadow-sm"
        >
          {item.title}
        </button>
      ))}
    </div>
  )

  return (
    <div 
      ref={ref as any}
      className={`w-full overflow-hidden mb-16 sm:mb-24 -mx-6 sm:-mx-10 px-6 sm:px-10 py-4 sm:py-6 w-[100vw] max-w-[100vw] bg-[#B5A245] ${isVisible ? theme.fadeUpAnim : 'opacity-0'}`}
    >
      <div className="marquee-slow hover:[animation-play-state:paused] flex w-max motion-reduce:w-full motion-reduce:flex-wrap motion-reduce:gap-x-4 motion-reduce:gap-y-2 motion-reduce:[animation:none]">
        {content}
        <div className="motion-reduce:hidden" aria-hidden="true">
          {content}
        </div>
      </div>
    </div>
  )
}

export default function Achievements() {
  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null)
  const { ref: closingRef, isVisible: closingVisible } = useScrollReveal(0.1, '0px 0px -10% 0px')

  const handleScrollTo = (index: number) => {
    const element = document.getElementById(`achievement-${index}`)
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 100
      window.scrollTo({ top: y, behavior: 'smooth' })
      
      setHighlightedIndex(index)
      setTimeout(() => {
        setHighlightedIndex(null)
      }, 1200)
    }
  }

  return (
    <section id="achievements" className={`${theme.sectionBase} !pt-12 sm:!pt-20 overflow-x-hidden`}>
      <AchievementsMarquee onScrollTo={handleScrollTo} />

      <div className="w-full max-w-7xl mx-auto flex flex-col">
        <h2 className={`${theme.headingLg} mb-12 sm:mb-16`}>
          Achievements
        </h2>
        
        <div className="flex flex-col">
          {ACHIEVEMENTS_DATA.map((item, i) => (
            <AchievementRow 
              key={i} 
              item={item} 
              index={i} 
              highlighted={highlightedIndex === i} 
            />
          ))}
          
          <div 
            ref={closingRef as any} 
            className={`w-full ${theme.creamDivider} ${closingVisible ? 'opacity-100' : 'opacity-0'}`} 
            style={{ transition: 'opacity 0.9s cubic-bezier(0.22,1,0.36,1)', transitionDelay: '300ms' }}
          />
        </div>
      </div>
    </section>
  )
}
