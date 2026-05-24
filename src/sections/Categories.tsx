import { CATEGORIES } from '../site'

export default function Categories() {
  return (
    <section id="categories" className="mx-auto max-w-6xl px-5 py-20">
      <div className="text-center">
        <h2 className="text-4xl sm:text-5xl">Five ways to grow</h2>
        <p className="mx-auto mt-4 max-w-xl text-lg font-semibold text-ink/65">
          Every quest belongs to a category — and each category grows its own
          kind of tree. Do more of one, and your world starts to show it.
        </p>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {CATEGORIES.map((c) => (
          <div
            key={c.name}
            className="flex flex-col items-center rounded-[24px] border-[3px] border-ink bg-paper p-6 text-center shadow-pop"
          >
            <div
              className="flex h-28 w-full items-end justify-center rounded-2xl border-[3px] border-ink"
              style={{ backgroundColor: `color-mix(in srgb, ${c.color} 18%, white)` }}
            >
              <img src={c.tree} alt={`${c.name} tree`} className="h-24 w-24" />
            </div>
            <h3
              className="mt-4 flex items-center gap-1.5 text-lg"
              style={{ color: c.color }}
            >
              <span>{c.glyph}</span>
              {c.name}
            </h3>
            <p className="mt-1.5 text-sm font-semibold text-ink/60">{c.blurb}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
