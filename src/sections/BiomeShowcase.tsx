import { CATEGORIES } from "../site";
import Icon, { type IconName } from "../components/Icon";

const POINTS: { icon: IconName; text: string }[] = [
  { icon: "grid", text: "Place each tree by hand on a 100-tile grid." },
  {
    icon: "camera",
    text: "Snap a photo of your world and save it to your gallery.",
  },
  {
    icon: "refresh",
    text: "Fill all 100 and reboot into a fresh world.",
  },
];

export default function BiomeShowcase() {
  // a little scatter of trees to suggest a growing isometric world
  const scatter = Array.from(
    { length: 12 },
    (_, i) => CATEGORIES[i % CATEGORIES.length],
  );

  return (
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:py-20 lg:grid-cols-2">
      <div className="order-2 lg:order-1">
        <span className="inline-flex items-center gap-2 rounded-full border-[2.5px] border-ink bg-biome px-4 py-1.5 font-display text-sm font-semibold text-ink shadow-pop-sm">
          <Icon name="sprout" className="h-4 w-4" />
          Your world
        </span>
        <h2 className="mt-5 text-3xl text-cream sm:text-4xl lg:text-5xl">
          A biome that remembers everything you did.
        </h2>
        <p className="mt-5 text-base font-semibold text-cream/70 sm:text-lg">
          Every level-up plants exactly one tree, and you decide where it goes.
          Over time your isometric world resembles a mini-world of the life
          you've been living.
        </p>
        <ul className="mt-6 space-y-3 font-semibold text-cream/80">
          {POINTS.map((p) => (
            <li key={p.icon} className="flex gap-3">
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border-2 border-cream/30 text-teal">
                <Icon name={p.icon} className="h-4 w-4" />
              </span>
              <span>{p.text}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative order-1 aspect-square w-full max-w-md justify-self-center overflow-hidden rounded-[28px] border-[3px] border-ink bg-biome-sky shadow-pop-lg lg:order-2">
        <div className="absolute inset-0 grid grid-cols-4 content-end gap-1 p-5">
          {scatter.map((c, i) => (
            <img
              key={i}
              src={c.tree}
              alt=""
              className="h-full w-full self-end object-contain"
            />
          ))}
        </div>
        <span className="absolute left-4 top-4 rounded-full border-[2.5px] border-ink bg-paper px-3 py-1 font-display text-sm font-bold text-ink shadow-pop-sm">
          WORLD 1
        </span>
      </div>
    </section>
  );
}
