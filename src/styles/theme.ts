// Animation timing constants for consistent feel
export const ANIMATION_TIMING = {
  // Reveal animation durations
  revealDuration: 900, // ms - main reveal animation
  revealStagger: 80, // ms - delay between staggered items
  revealDelay: 120, // ms - base delay for sections
  
  // Intersection Observer settings
  threshold: 0.05, // trigger earlier for smoother reveals
  rootMargin: '0px 0px -8% 0px', // less aggressive margin
  
  // Hover/interaction transitions
  hoverDuration: 500, // ms - smoother hover transitions
  
  // Easing functions
  easeSmooth: 'cubic-bezier(0.22, 1, 0.36, 1)', // smooth out
  easeExpo: 'cubic-bezier(0.76, 0, 0.24, 1)', // expo
} as const

export const theme = {
  sectionBase:
    'relative bg-bg text-fg font-body py-12 md:py-16 px-6 md:px-10 overflow-x-hidden',
  container: 'w-full max-w-6xl mx-auto',
  headingDisplay:
    'font-display font-normal uppercase leading-[0.95] tracking-tight',
  headingSection: 'text-2xl md:text-3xl lg:text-4xl font-display uppercase tracking-wider text-muted',
  labelMuted:
    'text-muted text-xs md:text-sm uppercase tracking-[0.2em] mb-4 md:mb-6',
  bodyText: 'text-muted leading-relaxed text-base md:text-lg',
  bodyLarge: 'text-xl md:text-2xl text-muted leading-relaxed',
  creamDivider: 'h-px bg-border anim-line',
  linkHover: 'transition-opacity duration-300 hover:opacity-60',
  fadeUpAnim: 'anim-fade-up',
  accent: '#eab308',
  accentSoft: 'rgba(234, 179, 8, 0.15)',
} as const
