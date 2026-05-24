import { logo, DOWNLOAD_URL, CATEGORIES } from '../site'
import PopButton from '../components/PopButton'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* soft dot-grid backdrop, like the app's flat-cream mode */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            'radial-gradient(var(--color-haze-deep) 1.5px, transparent 1.5px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:py-24 lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border-[2.5px] border-ink bg-yellow px-4 py-1.5 font-display text-sm font-semibold shadow-pop-sm">
            ⚡ Life, gamified
          </span>

          <h1 className="mt-6 text-5xl leading-[1.02] sm:text-6xl">
            Turn real life into your{' '}
            <span className="text-purple">favorite game.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-md text-lg font-semibold text-ink/70 lg:mx-0">
            Complete real-world side quests, charge your Life Energy, level up,
            and grow a living biome of trees — one for every level you earn.
            Private, offline, no account.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <PopButton href={DOWNLOAD_URL} size="lg">
              ⬇ Download OptiLife
            </PopButton>
            <PopButton href="#loop" variant="ghost" size="lg">
              See how it works
            </PopButton>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2 text-sm font-semibold text-ink/55 lg:justify-start">
            {CATEGORIES.map((c) => (
              <span key={c.name} title={c.name} className="text-xl">
                {c.glyph}
              </span>
            ))}
            <span className="ml-1">5 quest categories, one growing world</span>
          </div>
        </div>

        {/* logo + floating trees motif */}
        <div className="relative mx-auto flex h-72 w-72 items-center justify-center sm:h-96 sm:w-96">
          <div className="absolute inset-0 rounded-full border-[3px] border-ink bg-biome-sky shadow-pop-lg" />
          <img
            src={logo}
            alt="OptiLife logo"
            className="animate-float relative h-44 w-44 drop-shadow-sm sm:h-56 sm:w-56"
          />
          {CATEGORIES.map((c, i) => {
            const angle = (i / CATEGORIES.length) * Math.PI * 2 - Math.PI / 2
            const r = 44 // % radius
            const x = 50 + Math.cos(angle) * r
            const y = 50 + Math.sin(angle) * r
            return (
              <img
                key={c.name}
                src={c.tree}
                alt=""
                className="animate-float absolute h-14 w-14 drop-shadow"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: 'translate(-50%, -50%)',
                  animationDelay: `${i * 0.4}s`,
                }}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
