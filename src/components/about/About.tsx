import Reveal from '../ui/Reveal'
import { ANIMATION_TIMING } from '../../styles/theme'

const BIO_PARAGRAPHS = [
  "I'm an AI / GenAI engineer dedicated to turning ideas into creative, reliable products. I specialize in creating seamless experiences between models, data, and the interface.",
  'My approach focuses on scalable, high-performing work tailored to both people and product goals. By prioritizing performance, clarity, and responsiveness, I aim to ship work that actually holds up.',
]

export default function About() {
  return (
    <section className="pt-20 pb-16 md:pt-28 md:pb-20" id="about">
      <div className="container">
        <Reveal delay={ANIMATION_TIMING.revealDelay}>
          <h2 className="text-4xl md:text-6xl font-thin mb-16 md:mb-20 leading-[1.15]">
            I believe in building around real people — making sure every system I ship
            is shaped by actual needs, not assumptions.
          </h2>
        </Reveal>

        <Reveal delay={ANIMATION_TIMING.revealDelay + ANIMATION_TIMING.revealStagger}>
          <p className="pb-3 border-b border-border text-muted">This is me.</p>
        </Reveal>

        <div className="grid md:grid-cols-12 mt-9 gap-8">
          <Reveal className="md:col-span-5" delay={ANIMATION_TIMING.revealDelay + ANIMATION_TIMING.revealStagger * 2}>
            <p className="text-5xl">Hi, I&apos;m HARSHITHA.</p>
          </Reveal>
          <div className="md:col-span-7">
            <div className="text-lg text-muted max-w-[450px] space-y-6">
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
