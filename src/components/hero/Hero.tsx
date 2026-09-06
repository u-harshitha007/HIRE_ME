const STATS = [
  { value: '4', label: 'Selected Projects' },
  { value: '2', label: 'Roles & Experience' },
  { value: 'Open', label: 'Available for Work' },
]

function HeroChevron() {
  return (
    <svg
      width="376"
      height="111"
      viewBox="0 0 376 111"
      fill="transparent"
      className="absolute bottom-20 left-1/2 -translate-x-1/2 z-0 max-w-[90vw]"
      aria-hidden="true"
    >
      <path d="M1 1V39.9286L188 110V70.6822L1 1Z" stroke="#2C2C2C" />
      <path d="M375 1V39.9286L188 110V70.6822L375 1Z" stroke="#2C2C2C" />
    </svg>
  )
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <HeroChevron />

      <div className="container h-[100svh] min-h-[530px] max-md:pb-10 flex justify-between items-center max-md:flex-col">
        <div className="max-md:grow max-md:flex flex-col justify-center items-start max-w-[544px]">
          <h1 className="slide-up-and-fade leading-[.95] text-6xl sm:text-[80px] font-display uppercase">
            <span className="text-primary">GenAI</span>
            <br />
            <span className="ml-4">Engineer</span>
          </h1>

          <p
            className="slide-up-and-fade mt-6 text-lg text-muted max-w-lg"
            style={{ animationDelay: '0.12s' }}
          >
            Hi! I&apos;m{' '}
            <span className="hero-name" tabIndex={0}>
              HARSHITHA
            </span>
            . AI / GenAI engineer crafting high-end, responsive digital experiences
            with modern web systems and careful attention to detail.
          </p>

          <a
            href="#contact"
            className="relative overflow-hidden mt-9 h-12 px-8 inline-flex justify-center items-center text-base md:text-lg uppercase font-display tracking-widest bg-primary text-black group slide-up-and-fade"
            style={{ animationDelay: '0.22s' }}
          >
            <span className="absolute top-[200%] left-0 right-0 h-full bg-white rounded-full group-hover:top-0 transition-all duration-500 scale-150" />
            <span className="z-[1]">Contact Me</span>
          </a>
        </div>

        <div className="md:absolute bottom-[10%] right-[4%] flex md:flex-col gap-4 md:gap-8 text-center md:text-right max-md:mt-10 max-md:w-full max-md:flex-row max-md:justify-between">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="slide-up-and-fade"
              style={{ animationDelay: `${0.16 + i * 0.1}s` }}
            >
              <h5 className="text-3xl sm:text-4xl font-display text-primary mb-1.5 uppercase">
                {stat.value}
              </h5>
              <p className="text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
