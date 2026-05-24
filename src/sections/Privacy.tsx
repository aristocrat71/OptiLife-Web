import { DOWNLOAD_URL } from '../site'
import PopButton from '../components/PopButton'

const POINTS = [
  { glyph: '📵', title: 'Offline-first', body: 'Fully functional with no connection. No required network calls, ever.' },
  { glyph: '🔒', title: 'Private by design', body: 'Everything lives in a local database on your device. Nothing leaves it.' },
  { glyph: '🙅', title: 'No account', body: 'No sign-up, no email, no password. Open it and go.' },
  { glyph: '🎁', title: 'No noise', body: 'No ads, no upsells, no “10× your productivity”. This is for life, not work.' },
]

export default function Privacy() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {POINTS.map((p) => (
          <div
            key={p.title}
            className="rounded-[24px] border-[3px] border-ink bg-paper p-6 shadow-pop"
          >
            <div className="text-4xl">{p.glyph}</div>
            <h3 className="mt-3 text-lg">{p.title}</h3>
            <p className="mt-1.5 text-sm font-semibold text-ink/60">{p.body}</p>
          </div>
        ))}
      </div>

      <div
        id="download"
        className="mt-12 scroll-mt-24 rounded-[28px] border-[3px] border-ink bg-purple px-6 py-14 text-center text-cream shadow-pop-lg"
      >
        <h2 className="text-4xl text-cream sm:text-5xl">Start growing your world.</h2>
        <p className="mx-auto mt-4 max-w-md text-lg font-semibold text-cream/80">
          Download OptiLife and turn the next thing you do into the first tree in
          your biome.
        </p>
        <div className="mt-8 flex justify-center">
          <PopButton href={DOWNLOAD_URL} variant="ghost" size="lg">
            ⬇ Download OptiLife
          </PopButton>
        </div>
      </div>
    </section>
  )
}
