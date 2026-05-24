import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { logo, DOWNLOAD_URL } from '../site'
import PopButton from './PopButton'

export default function Nav() {
  const { pathname } = useLocation()
  const onGuide = pathname.startsWith('/guide')

  // Only reveal the nav Download once the hero's Download has scrolled out of
  // view. On pages without a hero (e.g. the Guide), show it straight away.
  const [showDownload, setShowDownload] = useState(true)
  useEffect(() => {
    const el = document.getElementById('hero-download')
    if (!el) {
      setShowDownload(true)
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => setShowDownload(!entry.isIntersecting),
      { threshold: 0 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [pathname])

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-space-2/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-5">
        <Link to="/" className="flex items-center gap-2 sm:gap-2.5">
          <img
            src={logo}
            alt=""
            className="h-8 w-8 rounded-full bg-cream p-0.5 sm:h-9 sm:w-9"
          />
          <span className="font-display text-lg font-bold tracking-wide text-cream sm:text-xl">
            OptiLife
          </span>
        </Link>

        <div className="flex items-center gap-2 sm:gap-4">
          {!onGuide && (
            <>
              <a
                href="#features"
                className="hidden font-display text-sm font-semibold text-cream/65 hover:text-cream md:inline"
              >
                Features
              </a>
              <a
                href="#categories"
                className="hidden font-display text-sm font-semibold text-cream/65 hover:text-cream md:inline"
              >
                Categories
              </a>
            </>
          )}
          {onGuide ? (
            <PopButton href="/" variant="ghost" size="sm" router>
              Home
            </PopButton>
          ) : (
            <PopButton href="/guide" size="sm" router>
              Guide
            </PopButton>
          )}
          {showDownload && (
            <PopButton href={DOWNLOAD_URL} size="sm">
              Download
            </PopButton>
          )}
        </div>
      </nav>
    </header>
  )
}
