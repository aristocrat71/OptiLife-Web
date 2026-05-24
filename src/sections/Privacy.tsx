import Icon, { type IconName } from '../components/Icon'

const POINTS: { icon: IconName; title: string; body: string }[] = [
  { icon: 'wifiOff', title: 'Offline-first', body: 'Fully functional with no connection. No required network calls, ever.' },
  { icon: 'lock', title: 'Private by design', body: 'Everything lives in a local database on your device. Nothing leaves it.' },
  { icon: 'userOff', title: 'No account', body: 'No sign-up, no email, no password. Open it and go.' },
  { icon: 'sparkles', title: 'No noise', body: 'No ads, no upsells, no “10× your productivity”. This is for life, not work.' },
]

export default function Privacy() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {POINTS.map((p) => (
          <div
            key={p.title}
            className="rounded-[24px] border-[3px] border-ink bg-paper p-6 text-ink shadow-pop"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl border-[2.5px] border-ink bg-haze text-purple">
              <Icon name={p.icon} className="h-6 w-6" />
            </span>
            <h3 className="mt-4 text-lg">{p.title}</h3>
            <p className="mt-1.5 text-sm font-semibold text-ink/60">{p.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
