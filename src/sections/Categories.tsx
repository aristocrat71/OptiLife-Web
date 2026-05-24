import { CATEGORIES } from '../site'

export default function Categories() {
  return (
    <section id="categories" className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
      <div className="text-center">
        <h2 className="text-3xl text-cream sm:text-4xl lg:text-5xl">
          Five ways to grow
        </h2>
      </div>

      <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-5">
        {CATEGORIES.map((c) => (
          <div
            key={c.name}
            className="flex flex-col items-center rounded-[24px] border-[3px] border-ink bg-paper p-5 text-center text-ink shadow-pop"
          >
            <div
              className="flex h-28 w-full items-end justify-center rounded-2xl border-[3px] border-ink"
              style={{
                backgroundColor: `color-mix(in srgb, ${c.color} 18%, white)`,
              }}
            >
              <img src={c.tree} alt={`${c.name} tree`} className="h-24 w-24" />
            </div>
            <h3 className="mt-4 text-lg" style={{ color: c.color }}>
              {c.name}
            </h3>
            <p className="mt-1.5 text-sm font-semibold text-ink/60">{c.blurb}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
