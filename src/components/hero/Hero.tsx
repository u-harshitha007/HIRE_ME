import { theme } from '../../styles/theme'

// Placeholder background - replace with your own image later
const BG_URL =
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1280&q=85'

const PORTRAIT_URL = '/portrait-cutout.png'

export default function Hero() {
  return (
    <section id="home" className="relative h-[100dvh] w-full overflow-hidden">
      {/* ────────────────────────────────────────────
          Layer 0 — Background image (default z)
      ──────────────────────────────────────────── */}
      <img
        src={BG_URL}
        alt=""
        className="absolute inset-0 h-full w-full object-cover anim-fade-in"
      />

      {/* ────────────────────────────────────────────
          Layer z-10 — Marquee name
      ──────────────────────────────────────────── */}
      <div
        className={`absolute inset-x-0 top-[16vh] sm:top-[14vh] z-10 overflow-hidden ${theme.fadeUpAnim}`}
        style={{ animationDelay: '500ms' }}
      >
        <div className="marquee flex w-max whitespace-nowrap font-hn text-[16vh] sm:text-[26vh] leading-none text-cream">
          <span className="pr-[6vw]">YOUR&nbsp;NAME&nbsp;</span>
          <span className="pr-[6vw]">YOUR&nbsp;NAME&nbsp;</span>
        </div>
      </div>

      {/* ────────────────────────────────────────────
          Layer z-10 — Cream horizontal rule
      ──────────────────────────────────────────── */}
      <div
        className={`absolute inset-x-6 sm:inset-x-10 bottom-[5.5rem] sm:bottom-28 z-10 ${theme.creamDivider}`}
        style={{ animationDelay: '1200ms' }}
      />

      {/* ────────────────────────────────────────────
          Layer z-20 — Front portrait (cutout overlay)
      ──────────────────────────────────────────── */}
      <img
        src={PORTRAIT_URL}
        alt="Portrait"
        className="absolute inset-0 h-full w-full object-contain object-bottom z-20 pointer-events-none anim-rise-in"
        style={{ animationDelay: '300ms' }}
      />

      {/* ────────────────────────────────────────────
          Layer z-30 mobile / sm:z-10 desktop — Footer
      ──────────────────────────────────────────── */}
      <footer className="absolute inset-x-0 bottom-0 z-30 sm:z-10 flex items-end justify-between px-6 pb-5 sm:px-10 sm:pb-8 text-xs sm:text-sm leading-relaxed font-hn text-cream">
        <div
          className="anim-fade-up"
          style={{ animationDelay: '1400ms' }}
        >
          <p>YOUR SPECIALTY 1</p>
          <p>YOUR SPECIALTY 2</p>
          <p>YOUR INTEREST</p>
        </div>
        <div
          className="text-right anim-fade-up"
          style={{ animationDelay: '1550ms' }}
        >
          <p>Portfolio of</p>
          <p>YOUR NAME</p>
        </div>
      </footer>
    </section>
  )
}
