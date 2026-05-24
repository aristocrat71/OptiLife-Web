import { useEffect, useState } from 'react'

type Slide = {
  label: string
  from: string
  to: string
  // img?: string  // ← drop a real screenshot here (see note below)
}

/**
 * TODO: replace these placeholder slides with real app screenshots.
 * 1. Put PNGs in `src/assets/screenshots/` (e.g. side-quests.png).
 * 2. `import sideQuests from '../assets/screenshots/side-quests.png'`
 * 3. Add `img: sideQuests` to the matching slide and the component will
 *    render the image instead of the gradient placeholder.
 */
const SLIDES: Slide[] = [
  { label: 'Side Quests', from: 'var(--color-adventure)', to: 'var(--color-pink)' },
  { label: 'Your Biome', from: 'var(--color-biome)', to: 'var(--color-teal)' },
  { label: 'Journal', from: 'var(--color-creative)', to: 'var(--color-purple)' },
  { label: 'Analytics', from: 'var(--color-night)', to: 'var(--color-teal)' },
  { label: 'Habits', from: 'var(--color-teal)', to: 'var(--color-biome)' },
]

export default function ScreenshotGallery() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(
      () => setActive((a) => (a + 1) % SLIDES.length),
      2800,
    )
    return () => clearInterval(id)
  }, [])

  return (
    <div className="mx-auto w-full max-w-[260px]">
      {/* phone frame */}
      <div className="glow-purple relative aspect-[9/19] rounded-[2.5rem] border-[3px] border-ink bg-ink p-2 shadow-pop-lg">
        {/* notch */}
        <div className="absolute left-1/2 top-2 z-10 h-1.5 w-16 -translate-x-1/2 rounded-full bg-cream/40" />
        <div className="relative h-full w-full overflow-hidden rounded-[2rem]">
          {SLIDES.map((s, i) => (
            <div
              key={s.label}
              className="absolute inset-0 flex items-center justify-center transition-opacity duration-700"
              style={{
                opacity: i === active ? 1 : 0,
                background: `linear-gradient(160deg, ${s.from}, ${s.to})`,
              }}
            >
              <span className="rounded-full border-[2.5px] border-ink bg-cream px-4 py-1.5 font-display text-sm font-bold text-ink shadow-pop-sm">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* progress dots */}
      <div className="mt-4 flex justify-center gap-2">
        {SLIDES.map((s, i) => (
          <button
            key={s.label}
            type="button"
            aria-label={`Show ${s.label}`}
            onClick={() => setActive(i)}
            className={`h-2.5 rounded-full border-2 border-ink transition-all ${
              i === active ? 'w-6 bg-purple' : 'w-2.5 bg-cream/40'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
