import Link from 'next/link'

const footerLinks = [
  {
    title: 'Games',
    links: ['All Games', 'New Releases', 'Popular', 'Promotions'],
  },
  {
    title: 'Company',
    links: ['About Us', 'Careers', 'Press', 'Contact'],
  },
  {
    title: 'Support',
    links: ['Help Center', 'Terms of Service', 'Privacy Policy', 'FAQ'],
  },
]

export function Footer() {
  return (
    <footer
      aria-label="Site footer"
      className="mt-16 w-full border-t border-surface-border bg-surface/30"
    >
      <div className="mx-auto w-full px-6 py-12 xl:px-16">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex max-w-xs flex-col gap-4">
            <Link
              href="/"
              aria-label="Go to home"
              className="group flex w-fit items-center gap-3"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-gold/20 to-brand-gold/5 text-brand-gold ring-1 ring-brand-gold/30 group-hover:ring-brand-gold/50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="h-5 w-5 transition-transform duration-700 ease-out group-hover:rotate-[360deg]"
                >
                  <path d="M6 3h12l4 6-10 12L2 9z" />
                  <path d="M11 3L8 9l4 12 4-12-3-6" />
                  <path d="M2 9h20" />
                </svg>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-base font-black uppercase tracking-wide text-foreground group-hover:text-brand-gold">
                  Casino
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-gold/90">
                  Lobby
                </span>
              </div>
            </Link>

            <p className="text-sm leading-relaxed text-muted-foreground">
              Hundreds of free-to-play games. No registration, no limits — just
              play.
            </p>
          </div>

          <nav
            aria-label="Footer navigation"
            className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:gap-16"
          >
            {footerLinks.map((column) => (
              <div key={column.title} className="flex flex-col gap-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">
                  {column.title}
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {column.links.map((label) => (
                    <li key={label}>
                      <Link
                        href="/coming-soon"
                        className="text-sm text-muted-foreground hover:text-brand-gold"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-surface-border pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground/70">
            © {new Date().getFullYear()} Casino Lobby. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <Link
              href="/coming-soon"
              className="text-xs text-muted-foreground/70 hover:text-brand-gold"
            >
              Terms
            </Link>
            <Link
              href="/coming-soon"
              className="text-xs text-muted-foreground/70 hover:text-brand-gold"
            >
              Privacy
            </Link>
            <Link
              href="/coming-soon"
              className="text-xs text-muted-foreground/70 hover:text-brand-gold"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
