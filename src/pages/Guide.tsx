import { useEffect, useState } from 'react'
import type { ReactNode } from 'react'

type Section = {
  id: string
  title: string
  glyph: string
  body: ReactNode
}

/** A chunky highlighted callout for tips / rules. */
function Note({ tone = 'tip', children }: { tone?: 'tip' | 'warn'; children: ReactNode }) {
  const styles =
    tone === 'warn'
      ? 'border-coral bg-coral/10'
      : 'border-teal bg-teal/10'
  return (
    <div className={`my-4 rounded-2xl border-[2.5px] ${styles} p-4 text-[15px] font-semibold text-ink/80`}>
      {children}
    </div>
  )
}

/** Reusable LE rules table. */
function LeTable() {
  const rows = [
    ['Complete a side quest', '+10 LE'],
    ['Log a good habit (done)', '+2 LE'],
    ['Avoid a bad habit', '+2 LE'],
    ['Complete a task', '0 LE'],
  ]
  return (
    <div className="my-4 overflow-hidden rounded-2xl border-[2.5px] border-ink">
      {rows.map(([action, le], i) => (
        <div
          key={action}
          className={`flex items-center justify-between px-4 py-2.5 text-[15px] font-semibold ${
            i % 2 ? 'bg-haze/60' : 'bg-paper'
          }`}
        >
          <span>{action}</span>
          <span className="font-display font-bold text-purple">{le}</span>
        </div>
      ))}
    </div>
  )
}

const SECTIONS: Section[] = [
  {
    id: 'getting-started',
    title: 'Getting started',
    glyph: '👋',
    body: (
      <>
        <p>
          OptiLife opens on the <strong>Side Quests</strong> screen. Everything
          else is one swipe away: swipe left for your <strong>Biome</strong>,
          right for <strong>Tasks</strong>, then <strong>Journal &amp; Habits</strong>.
        </p>
        <p className="mt-3">
          At the top of every screen sit three floating controls: your{' '}
          <strong>Life Energy ring</strong> (left), the pulsing{' '}
          <strong>nav button</strong> (middle — tap it for a radial menu to jump
          anywhere), and the <strong>calendar</strong> (right). Swipe vertically
          on any screen to move between days.
        </p>
      </>
    ),
  },
  {
    id: 'side-quests',
    title: 'Side Quests & rolling',
    glyph: '🎯',
    body: (
      <>
        <p>
          Side quests are small, intentional, real-world things — “go for a
          walk”, “sketch something”, “message an old friend”. Each day rolls a
          fresh set from your active pool (80+ curated presets plus any you’ve
          made). Tap a quest to mark it complete and earn <strong>+10 LE</strong>.
        </p>
        <p className="mt-3">
          Today not feeling it? <strong>Re-roll</strong> for a new set — once per
          day, costing 10 LE, and only before you’ve completed anything that day.
        </p>
        <Note>
          Only today’s rolled quests can be completed today — the roll is the
          gate. Past days are read-only.
        </Note>
      </>
    ),
  },
  {
    id: 'life-energy',
    title: 'Life Energy & levels',
    glyph: '⚡',
    body: (
      <>
        <p>
          Life Energy (LE) is the one and only currency — no XP, no coins. You
          earn it by living:
        </p>
        <LeTable />
        <p>
          Every <strong>50 LE</strong> earns a level. The ring at the top-left
          shows your progress within the current level (0 → 50), and a small
          badge shows your level number. Unmarking a quest or habit on the same
          day cleanly refunds the energy.
        </p>
      </>
    ),
  },
  {
    id: 'biome',
    title: 'The Biome & trees',
    glyph: '🌳',
    body: (
      <>
        <p>
          Every level-up plants exactly one tree in your biome, and{' '}
          <strong>you choose where it goes</strong> — the app drops into
          placement mode and you tap a tile on the grid. The tree’s type matches
          the category of quests you’ve been completing most.
        </p>
        <p className="mt-3">
          Your biome holds <strong>100 trees</strong>. Plant the 100th and you’re
          invited to <strong>reboot</strong>: a “dimensional travel” animation
          resets you to a fresh, empty world (your level returns to 1), while your
          completed-worlds count ticks up as a trophy. History stays intact for
          analytics.
        </p>
        <Note>
          Tip: while placement mode is active, every other control is locked —
          the only valid move is placing your tree. Tap a tile to plant it.
        </Note>
      </>
    ),
  },
  {
    id: 'habits',
    title: 'Habits',
    glyph: '🔁',
    body: (
      <>
        <p>
          Habits are daily and binary. A <strong>good</strong> habit is toggled
          “Done”; a <strong>bad</strong> habit is toggled “Avoided”. Either one
          logged for the day drips <strong>+2 LE</strong>. Not logging is simply
          neutral — there’s no penalty and no guilt.
        </p>
        <p className="mt-3">
          Habits live on the Journal screen as a strip of toggle chips, and you
          create or edit them in the Workshop (see Settings).
        </p>
      </>
    ),
  },
  {
    id: 'tasks',
    title: 'Tasks',
    glyph: '✅',
    body: (
      <p>
        Tasks are plain life-admin to-dos with optional due dates. They award{' '}
        <strong>no LE</strong> and don’t affect your biome — they’re just a tidy
        place for the necessary stuff. Unlike quests and journals, tasks on{' '}
        <strong>future dates are fully editable</strong>, because planning ahead
        is the whole point.
      </p>
    ),
  },
  {
    id: 'journal',
    title: 'Journal',
    glyph: '📓',
    body: (
      <>
        <p>
          One entry per day, autosaved as you type. Choose your writing style in
          Settings — flowing <strong>handwriting</strong> or a clean{' '}
          <strong>formal</strong> serif — and left or right alignment. It’s your
          space; it earns no LE.
        </p>
        <p className="mt-3">
          Export any date range to a beautifully paginated PDF from Settings →
          Export journal.
        </p>
      </>
    ),
  },
  {
    id: 'settings',
    title: 'Settings & Workshop',
    glyph: '⚙️',
    body: (
      <>
        <p>
          Open Settings from the radial nav menu (the pulsing middle button → Set).
          From here you can toggle the liquid-fill background, set your journal
          style, manage reminders, and open the <strong>Workshop</strong>.
        </p>
        <p className="mt-3">
          The Workshop is where you curate your game: create, edit and delete your
          own <strong>quests</strong> and <strong>habits</strong>, and toggle which
          preset quests are in your active pool.
        </p>
      </>
    ),
  },
  {
    id: 'reminders',
    title: 'Reminders',
    glyph: '🔔',
    body: (
      <p>
        Set up to two daily local reminders — a morning nudge for your quests and
        an evening one for your journal — each at a time you pick. They’re
        on-device notifications; turn them on in Settings and grant the OS
        permission when asked.
      </p>
    ),
  },
  {
    id: 'dates',
    title: 'Time travel & read-only days',
    glyph: '📅',
    body: (
      <>
        <p>
          Swipe vertically to change the day, or long-press the calendar to jump
          to any date. The biome ignores dates entirely — it’s your cumulative
          world.
        </p>
        <Note tone="warn">
          Past days are <strong>read-only</strong>: you can look but not change
          history, which keeps progress honest. Side quests and journals on{' '}
          <strong>future</strong> days are locked until the day arrives — only
          tasks can be planned ahead.
        </Note>
      </>
    ),
  },
]

export default function Guide() {
  const [active, setActive] = useState(SECTIONS[0].id)

  // highlight the TOC entry for the section currently in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id)
        }
      },
      { rootMargin: '-30% 0px -60% 0px' },
    )
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <main className="mx-auto max-w-6xl px-5 py-12">
      <header className="mb-10 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border-[2.5px] border-ink bg-yellow px-4 py-1.5 font-display text-sm font-semibold shadow-pop-sm">
          📖 The manual
        </span>
        <h1 className="mt-5 text-4xl sm:text-5xl">How to use OptiLife</h1>
        <p className="mx-auto mt-3 max-w-lg text-lg font-semibold text-ink/65">
          Everything you need to know to play your life.
        </p>
      </header>

      <div className="grid gap-10 lg:grid-cols-[220px_1fr]">
        {/* sticky table of contents */}
        <aside className="hidden lg:block">
          <nav className="sticky top-24 space-y-1">
            {SECTIONS.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={`block rounded-xl px-3 py-2 text-sm font-semibold transition-colors ${
                  active === s.id
                    ? 'bg-purple text-cream'
                    : 'text-ink/60 hover:bg-haze hover:text-ink'
                }`}
              >
                <span className="mr-2">{s.glyph}</span>
                {s.title}
              </a>
            ))}
          </nav>
        </aside>

        {/* sections */}
        <div className="max-w-2xl">
          {SECTIONS.map((s) => (
            <section
              key={s.id}
              id={s.id}
              className="mb-12 scroll-mt-24 border-b-[2.5px] border-ink/10 pb-10 last:border-0"
            >
              <h2 className="flex items-center gap-3 text-2xl sm:text-3xl">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl border-[2.5px] border-ink bg-paper text-2xl shadow-pop-sm">
                  {s.glyph}
                </span>
                {s.title}
              </h2>
              <div className="mt-4 text-[17px] font-semibold leading-relaxed text-ink/75 [&_strong]:font-bold [&_strong]:text-ink">
                {s.body}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  )
}
