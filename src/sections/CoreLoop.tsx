const STEPS = [
  {
    glyph: '🎲',
    title: 'Roll a side quest',
    body: 'Each day rolls a fresh set of small, intentional offline quests — "do 50 push-ups", "draw something", "call a friend".',
    color: 'var(--color-adventure)',
  },
  {
    glyph: '⚡',
    title: 'Charge Life Energy',
    body: 'Completing a quest awards +10 LE. Logging a good habit adds +2. Your energy meter fills as you live.',
    color: 'var(--color-yellow)',
  },
  {
    glyph: '⭐',
    title: 'Level up',
    body: 'Every 50 LE earns a level. No XP weights, no streak guilt — just steady, honest progress.',
    color: 'var(--color-purple)',
  },
  {
    glyph: '🌳',
    title: 'Plant a tree',
    body: 'Each level-up plants one tree in your biome. Its type reflects the quests you’ve been doing most.',
    color: 'var(--color-biome)',
  },
]

export default function CoreLoop() {
  return (
    <section id="loop" className="mx-auto max-w-6xl px-5 py-20">
      <div className="text-center">
        <h2 className="text-4xl sm:text-5xl">The loop</h2>
        <p className="mx-auto mt-4 max-w-xl text-lg font-semibold text-ink/65">
          A tight, satisfying cycle that makes doing real things feel rewarding.
        </p>
      </div>

      <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((s, i) => (
          <li
            key={s.title}
            className="relative rounded-[24px] border-[3px] border-ink bg-paper p-6 shadow-pop"
          >
            <span
              className="flex h-14 w-14 items-center justify-center rounded-2xl border-[3px] border-ink text-3xl shadow-pop-sm"
              style={{ backgroundColor: s.color }}
            >
              {s.glyph}
            </span>
            <span className="absolute right-5 top-5 font-display text-3xl font-bold text-ink/15">
              {i + 1}
            </span>
            <h3 className="mt-5 text-xl">{s.title}</h3>
            <p className="mt-2 text-[15px] font-semibold leading-relaxed text-ink/65">
              {s.body}
            </p>
          </li>
        ))}
      </ol>

      <p className="mt-10 text-center font-display text-lg font-semibold text-ink/55">
        Fill your world with 100 trees → <span className="text-purple">reboot into a fresh one.</span> 🌀
      </p>
    </section>
  )
}
