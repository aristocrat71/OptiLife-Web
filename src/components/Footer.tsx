export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-6 px-5 pb-20">
      {/* The app's central-nav heart: heartbeat swell + outward ripple rings. */}
      <div className="relative inline-flex items-center justify-center">
        <span className="animate-ripple pointer-events-none absolute inset-0 rounded-full border-2 border-purple" />
        <span className="animate-ripple pointer-events-none absolute inset-0 rounded-full border-2 border-purple [animation-delay:0.85s]" />
        <div className="animate-heartbeat relative flex h-16 w-16 items-center justify-center rounded-full border-[3px] border-ink bg-purple text-cream">
          <svg
            viewBox="0 0 24 24"
            className="h-7 w-7"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
        </div>
      </div>

      <p className="text-center text-xs font-semibold text-cream/45">
        Projekt Dreamscape · © {new Date().getFullYear()} OptiLife
      </p>
    </footer>
  );
}
