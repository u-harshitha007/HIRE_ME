# Animation System - Quick Reference Guide

## How to Adjust Animations Site-Wide

All animation timing is controlled from **one central location**: `src/styles/theme.ts`

### Main Controls

```typescript
export const ANIMATION_TIMING = {
  revealDuration: 900,     // How long reveal animations take (ms)
  revealStagger: 80,       // Delay between staggered items (ms)
  revealDelay: 120,        // Base delay for sections (ms)
  threshold: 0.05,         // When to trigger (0-1, lower = earlier)
  rootMargin: '0px 0px -8% 0px',  // Viewport offset trigger
  hoverDuration: 500,      // Hover transition speed (ms)
}
```

---

## Common Adjustments

### Make animations faster/slower
Change `revealDuration`:
- Faster: `700` (snappier)
- Current: `900` (smooth)
- Slower: `1200` (dramatic)

### Make stagger timing faster/slower
Change `revealStagger`:
- Faster: `50-60ms` (quick succession)
- Current: `80ms` (balanced)
- Slower: `120-150ms` (deliberate)

### Trigger animations earlier/later
Change `threshold`:
- Earlier: `0.01-0.03` (as soon as element enters)
- Current: `0.05` (slightly in view)
- Later: `0.1-0.2` (more in view)

### Make reveals more/less subtle
Edit `src/index.css`:
```css
.reveal-hidden {
  transform: translateY(30px);  /* Change this */
  /* 20px = subtle, 30px = current, 50px = dramatic */
}
```

---

## Pattern Examples

### Standard Section Pattern
```typescript
<Reveal delay={ANIMATION_TIMING.revealDelay}>
  <h2>Section Title</h2>
</Reveal>

{items.map((item, i) => (
  <Reveal 
    key={item.id} 
    delay={ANIMATION_TIMING.revealDelay + (i + 1) * ANIMATION_TIMING.revealStagger}
  >
    {/* Content */}
  </Reveal>
))}
```

### Multi-Level Stagger Pattern (Like Skills)
```typescript
const baseDelay = ANIMATION_TIMING.revealDelay + index * ANIMATION_TIMING.revealStagger * 2

<Reveal delay={baseDelay}>
  <h3>Category</h3>
</Reveal>

{items.map((item, i) => (
  <Reveal delay={baseDelay + ANIMATION_TIMING.revealStagger + i * 50}>
    {/* Item */}
  </Reveal>
))}
```

---

## Hover Transitions

All hover effects use consistent timing:
```css
transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
```

Or in TypeScript components:
```typescript
transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
```

To adjust hover speed site-wide, search for `duration-500` and replace with desired value:
- `duration-300` = faster
- `duration-500` = current (smooth)
- `duration-700` = slower

---

## Section Spacing

Control vertical spacing between sections in `src/styles/theme.ts`:

```typescript
sectionBase: 'py-20 md:py-28'
//            ^^^^    ^^^^^
//          mobile  desktop
```

- Less space: `py-16 md:py-20`
- Current: `py-20 md:py-28`
- More space: `py-24 md:py-32`

---

## Accessibility

The system respects `prefers-reduced-motion`:
- Animations disable for users who request reduced motion
- All content remains accessible without animations
- No functionality depends on animations

---

## Testing Changes

After making adjustments:

1. **Development**: `npm run dev`
2. **Build**: `npm run build`
3. **Preview**: `npm run preview`

Check responsiveness at breakpoints:
- Mobile: < 768px
- Desktop: ≥ 768px

---

## Animation Philosophy

This system follows these principles:

1. **Smooth over snappy** - Animations favor elegance over speed
2. **Subtle over dramatic** - Movement is refined, not distracting  
3. **Consistent over varied** - Same patterns repeat throughout
4. **Early over late** - Elements reveal before fully in view
5. **Natural over mechanical** - Easing curves feel organic

The goal: Create a continuous, premium experience from opening to footer.
