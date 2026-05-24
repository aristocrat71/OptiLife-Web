import Icon, { type IconName } from "../components/Icon";

const FEATURES: {
  icon: IconName;
  title: string;
  body: string;
  color: string;
}[] = [
  {
    icon: "target",
    title: "Side Quests",
    body: "Select from a pool of 80+ presets or create your own. Roll daily, mark complete, re-roll once a day.",
    color: "var(--color-adventure)",
  },
  {
    icon: "globe",
    title: "A living Biome",
    body: "Build your own 2.5D isometric world tree by tree. Place each one yourself, and snap a photo anytime you want.",
    color: "var(--color-biome)",
  },
  {
    icon: "repeat",
    title: "Habits",
    body: "Track you daily good or bad habits with a one-tap toggle. Each one logged drips +2 LE.",
    color: "var(--color-teal)",
  },
  {
    icon: "check",
    title: "Tasks",
    body: "Plain life-admin to-dos with due dates. No LE, no pressure, just a tidy place for the boring necessary stuff.",
    color: "var(--color-pink)",
  },
  {
    icon: "book",
    title: "Journal",
    body: "One entry a day in your choice of handwriting or formal type. Export to a beautifully paginated PDF.",
    color: "var(--color-creative)",
  },
  {
    icon: "chart",
    title: "Analytics",
    body: "See your energy per day, activity heatmaps, blah blah blah across multiple time ranges.",
    color: "var(--color-night)",
  },
];

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
      <div className="text-center">
        <h2 className="text-3xl text-cream sm:text-4xl lg:text-5xl">
          Everything in one cozy app
        </h2>
      </div>

      <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((f) => (
          <article
            key={f.title}
            className="rounded-[24px] border-[3px] border-ink bg-paper p-6 text-ink shadow-pop transition-transform hover:-translate-y-1"
          >
            <span
              className="flex h-14 w-14 items-center justify-center rounded-2xl border-[3px] border-ink text-ink shadow-pop-sm"
              style={{ backgroundColor: f.color }}
            >
              <Icon name={f.icon} className="h-7 w-7" />
            </span>
            <h3 className="mt-5 text-xl">{f.title}</h3>
            <p className="mt-2 text-[15px] font-semibold leading-relaxed text-ink/65">
              {f.body}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
