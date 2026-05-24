import { useEffect, useState } from 'react'
import sqScreen from '../../assets/sq_screen.png'
import biomeScreen from '../../assets/biome_screen.png'
import journalScreen from '../../assets/journal_screen.png'
import tasksScreen from '../../assets/tasks_screen.png'
import analysisScreen from '../../assets/analysis_screen.png'
import workshopScreen from '../../assets/workshop_screen.png'

type Slide = { name: string; img: string }

const SLIDES: Slide[] = [
  { name: 'Side Quests', img: sqScreen },
  { name: 'Your Biome', img: biomeScreen },
  { name: 'Journal', img: journalScreen },
  { name: 'Tasks', img: tasksScreen },
  { name: 'Analytics', img: analysisScreen },
  { name: 'Workshop', img: workshopScreen },
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
      {/* phone frame (inner screen matches the 1080×2424 screenshots) */}
      <div className="glow-purple relative aspect-[1080/2424] rounded-[2.5rem] border-[3px] border-ink bg-ink p-2 shadow-pop-lg">
        {/* notch */}
        <div className="absolute left-1/2 top-2 z-10 h-1.5 w-16 -translate-x-1/2 rounded-full bg-cream/40" />
        <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-ink">
          {SLIDES.map((s, i) => (
            <img
              key={s.name}
              src={s.img}
              alt={`OptiLife — ${s.name} screen`}
              loading={i === 0 ? 'eager' : 'lazy'}
              className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700"
              style={{ opacity: i === active ? 1 : 0 }}
            />
          ))}
        </div>
      </div>

      {/* progress dots */}
      <div className="mt-4 flex justify-center gap-2">
        {SLIDES.map((s, i) => (
          <button
            key={s.name}
            type="button"
            aria-label={`Show ${s.name}`}
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
