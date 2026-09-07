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
    <section id="home" className="relative overflow-hidden bg-bg">
      <HeroChevron />

      <div className="container h-[100svh] min-h-[650px] max-md:pb-10 flex justify-between items-center max-md:flex-col">
        <div className="max-md:grow max-md:flex flex-col justify-center items-start max-w-[680px]">
          <h1 className="slide-up-and-fade leading-[.95] text-[80px] sm:text-[100px] md:text-[120px] lg:text-[140px] font-display uppercase tracking-tighter" style={{ animationDelay: '2.5s' }}>
            <span className="text-primary">GenAI</span>
            <br />
            <span className="ml-4">Engineer</span>
          </h1>

          <p
            className="slide-up-and-fade mt-8 md:mt-10 text-lg md:text-xl text-muted max-w-[520px] leading-relaxed"
            style={{ animationDelay: '2.65s' }}
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
            className="relative overflow-hidden mt-10 md:mt-12 h-12 md:h-14 px-9 md:px-10 inline-flex justify-center items-center text-base md:text-lg uppercase font-display tracking-widest bg-primary text-black group slide-up-and-fade"
            style={{ animationDelay: '2.8s' }}
          >
            <span className="absolute top-[200%] left-0 right-0 h-full bg-white rounded-full group-hover:top-0 transition-all duration-500 scale-150" />
            <span className="z-[1]">Contact Me</span>
          </a>
        </div>

        <div className="md:absolute bottom-[8%] right-[4%] flex md:flex-col gap-5 md:gap-10 text-center md:text-right max-md:mt-12 max-md:w-full max-md:flex-row max-md:justify-between">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="slide-up-and-fade"
              style={{ animationDelay: `${2.7 + i * 0.08}s` }}
            >
              <h5 className="text-4xl sm:text-5xl md:text-6xl font-display text-primary mb-2 uppercase">
                {stat.value}
              </h5>
              <p className="text-muted text-base md:text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
