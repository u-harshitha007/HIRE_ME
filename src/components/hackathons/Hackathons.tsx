import { theme, ANIMATION_TIMING } from '../../styles/theme'
import Reveal from '../ui/Reveal'

const HACKATHONS_DATA = [
  {
    id: 1,
    event: 'Buzi Buzz-26',
    title: 'Intercollegiate Hackathon',
    placement: 'FIRST PLACE WINNER',
    location: 'ISME, Bengaluru',
    date: 'March 2026',
    isWinner: true,
    description:
      'Built a B2C SaaS platform named "Farm 2 Market". Integrated Web3 functionality using the Algorand blockchain and implemented foundational security measures.',
  },
  {
    id: 2,
    event: 'PulseX Phase-3',
    title: 'AI Hackathon',
    placement: 'FIRST PLACE WINNER',
    location: 'Hosted by GDG, CIT',
    date: 'January 2026',
    team: 'Team: Farm 2 Market',
    isWinner: true,
    description:
      'Awarded 1st place for successful completion of the multi-phase AI challenge. Recognized for technical ingenuity and effective problem-solving.',
  },
  {
    id: 3,
    event: "RIFT '26",
    title: 'Hackathon',
    placement: 'SEMI-FINALIST',
    location: 'Physics Wallah Institute of Innovation',
    date: 'February 2026',
    team: 'Team: Jugaad',
    isWinner: false,
    description:
      'Built a Web3-integrated B2B SaaS platform designed to replace traditional college ERP systems for secure student data tracking. Implemented data encryption and core security protocols.',
  },
]

export default function Hackathons() {
  return (
    <section id="hackathons" className={theme.sectionBase}>
      <div className={theme.container}>
        <Reveal delay={ANIMATION_TIMING.revealDelay}>
          <h2 className={`${theme.headingSection} mb-8 md:mb-10`}>Hackathon Wins</h2>
        </Reveal>

        <div className="space-y-8 md:space-y-10">
          {HACKATHONS_DATA.map((hackathon, i) => (
            <Reveal
              key={hackathon.id}
              delay={ANIMATION_TIMING.revealDelay + (i + 1) * ANIMATION_TIMING.revealStagger}
            >
              <div className="group border-t border-border pt-8 md:pt-10 transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-primary/40">
                <div className="flex items-start gap-6 md:gap-8 mb-6">
                  {/* Achievement Number */}
                  <div className="shrink-0">
                    <span className="text-5xl md:text-6xl lg:text-7xl font-display text-muted/20 group-hover:text-primary/30 transition-colors duration-500">
                      0{hackathon.id}
                    </span>
                  </div>

                  <div className="flex-1">
                    {/* Placement Badge */}
                    <div
                      className={`inline-block px-4 py-2 mb-4 text-xs md:text-sm uppercase tracking-wider font-display border ${
                        hackathon.isWinner
                          ? 'border-primary text-primary bg-primary/10'
                          : 'border-border text-muted'
                      }`}
                    >
                      {hackathon.placement}
                    </div>

                    {/* Event Name */}
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-light mb-2 transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-primary">
                      {hackathon.event}
                    </h3>

                    <p className="text-xl md:text-2xl text-muted mb-4">{hackathon.title}</p>

                    {/* Details */}
                    <div className="flex flex-wrap gap-4 text-sm md:text-base text-muted mb-6">
                      <span>{hackathon.location}</span>
                      <span className="text-border">•</span>
                      <span>{hackathon.date}</span>
                      {hackathon.team && (
                        <>
                          <span className="text-border">•</span>
                          <span>{hackathon.team}</span>
                        </>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-base md:text-lg text-muted leading-relaxed max-w-3xl">
                      {hackathon.description}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
