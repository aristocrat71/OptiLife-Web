const FEATURES = [
  {
    glyph: '🎯',
    title: 'Side Quests',
    body: 'A curated pool of 80+ presets plus your own. Roll daily, mark complete, re-roll once a day if today isn’t feeling it.',
    color: 'var(--color-adventure)',
  },
  {
    glyph: '🌍',
    title: 'A living Biome',
    body: 'A cartoon 2.5D isometric world you plant tree by tree. Place each one yourself, then snap a photo of your world.',
    color: 'var(--color-biome)',
  },
  {
    glyph: '🔁',
    title: 'Habits',
    body: 'Daily good or bad habits with a one-tap toggle. Each one logged drips +2 LE — small, steady, no loss-aversion.',
    color: 'var(--color-teal)',
  },
  {
    glyph: '✅',
    title: 'Tasks',
    body: 'Plain life-admin to-dos with due dates. No LE, no pressure — just a tidy place for the boring necessary stuff.',
    color: 'var(--color-pink)',
  },
  {
    glyph: '📓',
    title: 'Journal',
    body: 'One entry a day in your choice of handwriting or formal type. Export any range to a beautifully paginated PDF.',
    color: 'var(--color-creative)',
  },
  {
    glyph: '📊',
    title: 'Analytics',
    body: 'See your energy per day, activity heatmaps, completion rates and category mix across 7-day, 30-day and all-time windows.',
    color: 'var(--color-night)',
  },
]

export default function Features() {
  return (
    <section id="features" className="border-y-[3px] border-ink bg-haze">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl">Everything in one cozy app</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg font-semibold text-ink/65">
            Six screens, one swipe apart. Built for life — not for work.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <article
              key={f.title}
              className="rounded-[24px] border-[3px] border-ink bg-paper p-6 shadow-pop transition-transform hover:-translate-y-1"
            >
              <span
                className="flex h-14 w-14 items-center justify-center rounded-2xl border-[3px] border-ink text-3xl shadow-pop-sm"
                style={{ backgroundColor: f.color }}
              >
                {f.glyph}
              </span>
              <h3 className="mt-5 text-xl">{f.title}</h3>
              <p className="mt-2 text-[15px] font-semibold leading-relaxed text-ink/65">
                {f.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
