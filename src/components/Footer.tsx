import { Link } from 'react-router-dom'
import { logo } from '../site'

export default function Footer() {
  return (
    <footer className="border-t-[3px] border-ink bg-ink text-cream">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 py-12 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="" className="h-10 w-10 rounded-full bg-cream p-1" />
          <div>
            <p className="font-display text-lg font-bold">OptiLife</p>
            <p className="text-sm text-cream/60">
              Turn real life into your favorite game.
            </p>
          </div>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-display text-sm font-semibold">
          <a href="#features" className="text-cream/70 hover:text-cream">
            Features
          </a>
          <a href="#categories" className="text-cream/70 hover:text-cream">
            Categories
          </a>
          <Link to="/guide" className="text-cream/70 hover:text-cream">
            Guide
          </Link>
        </nav>
      </div>
      <div className="border-t border-cream/15 px-5 py-4 text-center text-xs text-cream/50">
        Built with Flutter · Local-first &amp; private · © {new Date().getFullYear()} OptiLife
      </div>
    </footer>
  )
}
