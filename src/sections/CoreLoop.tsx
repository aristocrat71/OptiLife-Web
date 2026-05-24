import Icon, { type IconName } from "../components/Icon";

const STEPS: { icon: IconName; title: string; body: string; color: string }[] =
  [
    {
      icon: "dice",
      title: "Roll a side quest",
      body: 'Each day rolls a fresh set of small offline quests like "do 50 push-ups", "draw something", "call a friend".',
      color: "var(--color-adventure)",
    },
    {
      icon: "zap",
      title: "Charge Life Energy",
      body: "Completing your side quests awards you +10 LE. Logging a good habit adds +2. Your life energy fills as you live.",
      color: "var(--color-yellow)",
    },
    {
      icon: "star",
      title: "Level up",
      body: "Every 50 LE earns a level. No difficulty bias, no streak guilt.",
      color: "var(--color-purple)",
    },
    {
      icon: "sprout",
      title: "Plant a tree",
      body: "Each level-up plants one tree in your biome. Its type reflects the quests you’ve been doing most.",
      color: "var(--color-biome)",
    },
  ];

export default function CoreLoop() {
  return (
    <section id="loop" className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
      <div className="text-center">
        <h2 className="text-3xl text-cream sm:text-4xl lg:text-5xl">
          The loop
        </h2>
      </div>

      <ol className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((s, i) => (
          <li
            key={s.title}
            className="relative rounded-[24px] border-[3px] border-ink bg-paper p-6 text-ink shadow-pop"
          >
            <span
              className="flex h-14 w-14 items-center justify-center rounded-2xl border-[3px] border-ink text-ink shadow-pop-sm"
              style={{ backgroundColor: s.color }}
            >
              <Icon name={s.icon} className="h-7 w-7" />
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

      <p className="mx-auto mt-10 flex max-w-xl items-center justify-center gap-2 text-center font-display text-base font-semibold text-cream/60 sm:text-lg">
        <Icon name="refresh" className="h-5 w-5 shrink-0 text-teal" />
        Fill your world with 100 trees, then reboot into a fresh one.
      </p>
    </section>
  );
}
