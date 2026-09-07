import Reveal from '../ui/Reveal'
import { ANIMATION_TIMING } from '../../styles/theme'

const BIO_PARAGRAPHS = [
  "I'm an AI / GenAI engineer dedicated to turning ideas into creative, reliable products. I specialize in creating seamless experiences between models, data, and the interface.",
  'My approach focuses on scalable, high-performing work tailored to both people and product goals. By prioritizing performance, clarity, and responsiveness, I aim to ship work that actually holds up.',
]

export default function About() {
  return (
    <section className="pt-28 pb-20 md:pt-40 md:pb-32 lg:pt-48 lg:pb-36" id="about">
      <div className="container">
        <Reveal delay={ANIMATION_TIMING.revealDelay}>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-thin mb-20 md:mb-28 lg:mb-32 leading-[1.15]">
            I believe in building around real people — making sure every system I ship
            is shaped by actual needs, not assumptions.
          </h2>
        </Reveal>

        <Reveal delay={ANIMATION_TIMING.revealDelay + ANIMATION_TIMING.revealStagger}>
          <p className="pb-4 border-b border-border text-muted text-sm md:text-base">This is me.</p>
        </Reveal>

        <div className="grid md:grid-cols-12 mt-12 md:mt-14 gap-10 md:gap-12">
          <Reveal className="md:col-span-5" delay={ANIMATION_TIMING.revealDelay + ANIMATION_TIMING.revealStagger * 2}>
            <p className="text-5xl md:text-6xl lg:text-7xl leading-none">Hi, I&apos;m HARSHITHA.</p>
          </Reveal>
          <div className="md:col-span-7">
            <div className="text-lg md:text-xl text-muted max-w-[480px] space-y-7 md:space-y-8 leading-relaxed">
              {BIO_PARAGRAPHS.map((paragraph, i) => (
                <Reveal key={i} delay={ANIMATION_TIMING.revealDelay + ANIMATION_TIMING.revealStagger * (3 + i)}>
                  <p>{paragraph}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
