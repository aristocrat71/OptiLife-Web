import { CATEGORIES } from '../site'

export default function BiomeShowcase() {
  // a little scatter of trees to suggest a growing isometric world
  const scatter = Array.from({ length: 14 }, (_, i) => CATEGORIES[i % CATEGORIES.length])

  return (
    <section className="border-y-[3px] border-ink bg-biome-sky">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 lg:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border-[2.5px] border-ink bg-biome px-4 py-1.5 font-display text-sm font-semibold shadow-pop-sm">
            🌳 Your world
          </span>
          <h2 className="mt-6 text-4xl sm:text-5xl">
            A biome that remembers everything you did.
          </h2>
          <p className="mt-5 text-lg font-semibold text-ink/70">
            Every level-up plants exactly one tree, and you decide where it goes.
            Over time your isometric world fills in — a quiet, honest record of
            the life you’ve been living.
          </p>
          <ul className="mt-6 space-y-3 font-semibold text-ink/75">
            <li className="flex gap-3">
              <span className="text-xl">🪴</span> Place each tree by hand on a 100-tile grid.
            </li>
            <li className="flex gap-3">
              <span className="text-xl">📸</span> Snap a photo of your world and save it to your gallery.
            </li>
            <li className="flex gap-3">
              <span className="text-xl">🌀</span> Fill all 100 and reboot — a “dimensional travel” into a fresh world, with your completed-worlds count as a trophy.
            </li>
          </ul>
        </div>

        <div className="relative aspect-square w-full max-w-md justify-self-center overflow-hidden rounded-[28px] border-[3px] border-ink bg-biome/25 shadow-pop-lg">
          <div className="absolute inset-0 grid grid-cols-4 content-end gap-1 p-5">
            {scatter.map((c, i) => (
              <img
                key={i}
                src={c.tree}
                alt=""
                className="animate-float h-full w-full self-end object-contain"
                style={{ animationDelay: `${(i % 5) * 0.3}s` }}
              />
            ))}
          </div>
          <span className="absolute left-4 top-4 rounded-full border-[2.5px] border-ink bg-paper px-3 py-1 font-display text-sm font-bold shadow-pop-sm">
            WORLD 1
          </span>
        </div>
      </div>
    </section>
  )
}
