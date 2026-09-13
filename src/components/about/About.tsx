import Reveal from '../ui/Reveal'
import { ANIMATION_TIMING, theme } from '../../styles/theme'

export default function About() {
  return (
    <section className="py-12 md:py-16" id="about">
      <div className="container">
        <Reveal delay={ANIMATION_TIMING.revealDelay}>
          <h2 className={theme.headingSection}>
            About
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10 mt-8 md:mt-10">
          <Reveal delay={ANIMATION_TIMING.revealDelay + ANIMATION_TIMING.revealStagger}>
            <div>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.15] mb-8 md:mb-10">
                B.E. CSE (Data Science) student building AI systems and practical solutions.
              </h3>
            </div>
          </Reveal>

          <div className="space-y-5 md:space-y-6">
            <Reveal delay={ANIMATION_TIMING.revealDelay + ANIMATION_TIMING.revealStagger * 2}>
              <p className="text-lg md:text-xl text-muted leading-relaxed">
                I'm U Harshitha, a B.E. CSE (Data Science) student at Cambridge Institute of Technology, Bengaluru. 
                I specialize in AI systems, data science, full-stack development, and problem-solving.
              </p>
            </Reveal>

            <Reveal delay={ANIMATION_TIMING.revealDelay + ANIMATION_TIMING.revealStagger * 3}>
              <p className="text-lg md:text-xl text-muted leading-relaxed">
                Google Gemini Student Ambassador and GDG Core Team Member, promoting AI-focused learning and generative AI tools among students. 
                Winner of multiple hackathons including Buzi Buzz-26 and PulseX Phase-3 AI Hackathon.
              </p>
            </Reveal>

            <Reveal delay={ANIMATION_TIMING.revealDelay + ANIMATION_TIMING.revealStagger * 4}>
              <p className="text-lg md:text-xl text-muted leading-relaxed">
                Focused on building secure, scalable platforms with blockchain integration, AI-powered solutions, and practical applications that solve real-world problems.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
