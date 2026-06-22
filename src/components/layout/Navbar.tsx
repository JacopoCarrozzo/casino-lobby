'use client'

import { ThemeToggle } from '@/components/theme/ThemeToggle'

interface NavbarProps {
  searchValue?: string
  onSearchChange?: (value: string) => void
}

export function Navbar({ searchValue = '', onSearchChange }: NavbarProps) {
  const navLinks = [
    { label: 'Home' },
    { label: 'All Games' },
    { label: 'Promotions' },
    { label: 'VIP Club' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-surface-border bg-background/85 backdrop-blur-xl">
      <div className="w-full flex h-20 items-center justify-between px-6 xl:px-16 gap-8">
        
        <div className="group flex shrink-0 items-center gap-3.5 cursor-pointer">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-gold/20 to-brand-gold/5 text-brand-gold ring-1 ring-brand-gold/30 transition-all duration-500 group-hover:from-brand-gold/30 group-hover:to-brand-gold/10 group-hover:ring-brand-gold/50 group-hover:scale-105 shadow-[0_4px_12px_rgba(212,175,55,0.08)]">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="h-6 w-6 transition-transform duration-700 ease-out group-hover:rotate-[360deg]"
            >
              <path d="M6 3h12l4 6-10 12L2 9z" />
              <path d="M11 3L8 9l4 12 4-12-3-6" />
              <path d="M2 9h20" />
            </svg>
          </div>
          <div className="flex flex-col tracking-tight">
            <span className="font-display text-lg font-black uppercase text-foreground tracking-wide group-hover:text-brand-gold transition-colors duration-300">
              Casino
            </span>
            <span className="font-display text-[11px] font-bold tracking-[0.3em] uppercase text-brand-gold/90">
              Lobby
            </span>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-12 ml-4">
          {navLinks.map((link, index) => {
            const isActive = index === 0
            return (
              <div
                key={link.label}
                className="text-[15px] font-medium tracking-wide relative py-2.5 group/link cursor-pointer"
              >
                <span className={`transition-all duration-300 ${
                  isActive ? 'text-brand-gold font-bold drop-shadow-[0_0_8px_rgba(212,175,55,0.2)]' : 'text-muted-foreground group-hover/link:text-foreground'
                }`}>
                  {link.label}
                </span>
                <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] bg-brand-gold rounded-full transition-all duration-300 ease-out ${
                  isActive ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover/link:w-2/3 group-hover/link:opacity-40'
                }`} />
              </div>
            )
          })}
        </nav>

        <div className="flex items-center gap-6 flex-1 justify-end max-w-3xl">
          <div className="relative w-full max-w-sm hidden sm:block group/search">
            <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within/search:text-brand-gold transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.604 10.604z" />
              </svg>
            </div>
            <input
              type="text"
              value={searchValue}
              onChange={(e) => onSearchChange?.(e.target.value)}
              placeholder="Search games"
              className="w-full h-11 rounded-full border border-surface-border bg-surface/40 pl-11 pr-4 text-sm text-foreground placeholder:text-muted-foreground/40 transition-all duration-300 focus:border-brand-gold/40 focus:bg-surface focus:outline-none focus:ring-4 focus:ring-brand-gold/5 shadow-[inner_0_2px_4px_rgba(0,0,0,0.02)]"
            />
          </div>

          <div className="flex items-center gap-5 border-l border-surface-border pl-6 h-9 shrink-0">
            <ThemeToggle />

            <button className="flex h-11 w-11 items-center justify-center rounded-full border border-surface-border bg-surface/40 text-muted-foreground transition-all duration-300 hover:text-brand-gold hover:border-brand-gold/30 hover:bg-surface hover:scale-105 active:scale-95 shadow-md shadow-black/5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="h-5.5 w-5.5"
              >
                <circle cx="12" cy="6.5" r="4" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 13.5c-4.418 0-8 2.686-8 6v1c0 .552.448 1 1 1h14c.552 0 1-.448 1-1v-1c0-3.314-3.582-6-8-6z"
                />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </header>
  )
}