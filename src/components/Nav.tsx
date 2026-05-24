import { Link, useLocation } from 'react-router-dom'
import { logo, DOWNLOAD_URL } from '../site'
import PopButton from './PopButton'

export default function Nav() {
  const { pathname } = useLocation()
  const onGuide = pathname.startsWith('/guide')

  return (
    <header className="sticky top-0 z-50 border-b-[3px] border-ink bg-cream/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <Link to="/" className="flex items-center gap-2.5">
          <img src={logo} alt="" className="h-9 w-9" />
          <span className="font-display text-xl font-bold tracking-wide">
            OptiLife
          </span>
        </Link>

        <div className="flex items-center gap-2 sm:gap-5">
          {onGuide ? (
            <Link
              to="/"
              className="hidden font-display text-sm font-semibold text-ink/70 hover:text-ink sm:inline"
            >
              ← Home
            </Link>
          ) : (
            <>
              <a
                href="#features"
                className="hidden font-display text-sm font-semibold text-ink/70 hover:text-ink sm:inline"
              >
                Features
              </a>
              <a
                href="#categories"
                className="hidden font-display text-sm font-semibold text-ink/70 hover:text-ink sm:inline"
              >
                Categories
              </a>
            </>
          )}
          <Link
            to="/guide"
            className="font-display text-sm font-semibold text-ink/70 hover:text-ink"
          >
            Guide
          </Link>
          <PopButton href={DOWNLOAD_URL} size="md">
            Download
          </PopButton>
        </div>
      </nav>
    </header>
  )
}
