import Reveal from '../ui/Reveal'
import { ANIMATION_TIMING } from '../../styles/theme'

export default function About() {
  return (
    <section className="pt-32 pb-24 md:pt-44 md:pb-36 lg:pt-52 lg:pb-40" id="about">
      <div className="container">
        <Reveal delay={ANIMATION_TIMING.revealDelay}>
          <h2 className="text-xl md:text-2xl font-display uppercase tracking-wider text-muted mb-16 md:mb-20">
            About
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-20">
          <Reveal delay={ANIMATION_TIMING.revealDelay + ANIMATION_TIMING.revealStagger}>
            <div>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.15] mb-8 md:mb-10">
                AI engineer focused on building practical systems.
              </h3>
            </div>
          </Reveal>

          <div className="space-y-6 md:space-y-7">
            <Reveal delay={ANIMATION_TIMING.revealDelay + ANIMATION_TIMING.revealStagger * 2}>
              <p className="text-lg md:text-xl text-muted leading-relaxed">
                I specialize in creating AI-powered applications and intelligent systems that solve real problems. 
                My work spans machine learning pipelines, natural language processing, and full-stack development.
              </p>
            </Reveal>

            <Reveal delay={ANIMATION_TIMING.revealDelay + ANIMATION_TIMING.revealStagger * 3}>
              <p className="text-lg md:text-xl text-muted leading-relaxed">
                I believe in writing clean code, building scalable systems, and shipping products that people actually use. 
                My approach combines technical depth with practical engineering—focusing on solutions that work in production, not just in demos.
              </p>
            </Reveal>

            <Reveal delay={ANIMATION_TIMING.revealDelay + ANIMATION_TIMING.revealStagger * 4}>
              <p className="text-lg md:text-xl text-muted leading-relaxed">
                Currently exploring LLM applications, experimenting with emerging AI technologies, and learning through building.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
