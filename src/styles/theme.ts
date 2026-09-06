export const theme = {
  sectionBase:
    'relative bg-bg text-fg font-body py-24 md:py-32 px-6 md:px-10 overflow-x-hidden',
  container: 'w-full max-w-6xl mx-auto',
  headingDisplay:
    'font-display font-normal uppercase leading-[0.95] tracking-tight',
  headingSection: 'font-display text-4xl md:text-5xl uppercase leading-none',
  labelMuted:
    'text-muted text-xs md:text-sm uppercase tracking-[0.2em] mb-4 md:mb-6',
  bodyText: 'text-muted leading-relaxed',
  bodyLarge: 'text-lg md:text-xl text-muted leading-relaxed',
  creamDivider: 'h-px bg-border anim-line',
  linkHover: 'transition-opacity duration-300 hover:opacity-60',
  fadeUpAnim: 'anim-fade-up',
  accent: '#eab308',
  accentSoft: 'rgba(234, 179, 8, 0.15)',
} as const
