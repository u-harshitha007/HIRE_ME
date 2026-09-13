const STATS = [
  { value: '2', label: 'First Place Wins' },
  { value: '10+', label: 'Projects & Hackathons' },
  { value: 'Open', label: 'To Opportunities' },
]

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-bg pt-16 md:pt-20">
      <div className="container h-[calc(100svh-4rem)] md:h-[calc(100svh-5rem)] min-h-[700px] flex flex-col justify-center py-20">
        <div className="max-w-[900px]">
          <h1 
            className="slide-up-and-fade leading-[0.9] text-[70px] sm:text-[100px] md:text-[130px] lg:text-[160px] font-display uppercase tracking-tight mb-8 md:mb-10" 
            style={{ animationDelay: '2.5s' }}
          >
            HARSHITHA
          </h1>

          <p
            className="slide-up-and-fade text-2xl sm:text-3xl md:text-4xl text-fg/90 mb-6 md:mb-8 font-light tracking-wide"
            style={{ animationDelay: '2.6s' }}
          >
            AI Engineer / Developer
          </p>

          <p
            className="slide-up-and-fade text-xl sm:text-2xl md:text-3xl text-muted mb-8 md:mb-10 font-light"
            style={{ animationDelay: '2.7s' }}
          >
            Building systems and useful products.
          </p>

          <p
            className="slide-up-and-fade text-base md:text-lg text-muted max-w-[600px] leading-relaxed mb-12 md:mb-14"
            style={{ animationDelay: '2.8s' }}
          >
            I build AI-powered applications, intelligent systems, and practical software solutions. 
            Focused on creating tools that solve real problems with clean code and thoughtful design.
          </p>

          <div
            className="slide-up-and-fade flex flex-wrap gap-4 mb-12 md:mb-14"
            style={{ animationDelay: '2.9s' }}
          >
            <a
              href="#projects"
              className="relative overflow-hidden h-12 md:h-14 px-8 md:px-10 inline-flex justify-center items-center text-sm md:text-base uppercase font-display tracking-wider bg-primary text-black group transition-all duration-300 hover:bg-fg"
            >
              <span className="z-[1]">View Projects</span>
            </a>
            <a
              href="#contact"
              className="relative overflow-hidden h-12 md:h-14 px-8 md:px-10 inline-flex justify-center items-center text-sm md:text-base uppercase font-display tracking-wider border border-border text-fg group transition-all duration-300 hover:border-fg"
            >
              <span className="z-[1]">Get in Touch</span>
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden h-12 md:h-14 px-8 md:px-10 inline-flex justify-center items-center text-sm md:text-base uppercase font-display tracking-wider border border-primary text-primary group transition-all duration-300 hover:bg-primary hover:text-black"
            >
              <span className="z-[1]">Resume</span>
            </a>
          </div>

          <div
            className="slide-up-and-fade flex items-center gap-6"
            style={{ animationDelay: '3s' }}
          >
            <a
              href="https://github.com/u-harshitha007"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-fg transition-colors duration-300 text-sm uppercase tracking-wider"
            >
              GitHub
            </a>
            <span className="text-border">|</span>
            <a
              href="https://www.linkedin.com/in/u-harshitha007"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-fg transition-colors duration-300 text-sm uppercase tracking-wider"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="absolute bottom-12 md:bottom-16 right-4 md:right-10 flex flex-col gap-8 text-right">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="slide-up-and-fade"
              style={{ animationDelay: `${3 + i * 0.1}s` }}
            >
              <h5 className="text-3xl md:text-4xl lg:text-5xl font-display text-primary mb-1 uppercase tracking-tight">
                {stat.value}
              </h5>
              <p className="text-muted text-xs md:text-sm uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
