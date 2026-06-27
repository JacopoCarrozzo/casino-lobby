'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X, User, Search } from 'lucide-react'
import { ThemeToggle } from '@/components/theme/ThemeToggle'
import { MobileDrawer } from '@/components/layout/MobileDrawer'
import { SearchOverlay } from '@/components/layout/SearchOverlay'
import Link from 'next/link'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'All Games', href: '/coming-soon' },
  { label: 'Promotions', href: '/coming-soon' },
  { label: 'VIP Club', href: '/coming-soon' },
]

export function NavbarMobile() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const searchButtonRef = useRef<HTMLButtonElement>(null)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    setIsSearchOpen(false)
    setIsOpen(false)
  }, [pathname])

  function closeSearch() {
    setIsSearchOpen(false)
    searchButtonRef.current?.focus()
  }

  return (
    <header className="sticky top-0 z-30 flex w-full flex-col border-b border-surface-border bg-background/85 backdrop-blur-xl">
      <div className="relative flex h-16 items-center justify-between px-4">
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
          className="flex h-10 w-10 items-center justify-center rounded-xl text-foreground transition-colors hover:text-brand-gold"
        >
          <Menu className="h-5 w-5" />
        </button>

        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.5">
          <span className="text-sm font-black uppercase tracking-wide text-foreground">
            Casino
          </span>
          <span className="text-sm font-black uppercase tracking-wide text-brand-gold/90">
            Lobby
          </span>
        </div>

        <div className="flex items-center gap-1">
          {isHome && (
            <button
              ref={searchButtonRef}
              onClick={() => setIsSearchOpen((v) => !v)}
              aria-label="Search games"
              aria-expanded={isSearchOpen}
              aria-controls="mobile-search"
              className="flex h-9 w-9 items-center justify-center rounded-xl text-foreground hover:text-brand-gold"
            >
              <Search className="h-5 w-5" />
            </button>
          )}

          <Link
            href="/"
            aria-label="Go to home"
            className="flex h-9 w-9 items-center justify-center text-brand-gold hover:text-brand-gold/80"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="h-5 w-5"
            >
              <path d="M6 3h12l4 6-10 12L2 9z" />
              <path d="M11 3L8 9l4 12 4-12-3-6" />
              <path d="M2 9h20" />
            </svg>
          </Link>
        </div>
      </div>

      <SearchOverlay isOpen={isSearchOpen} onClose={closeSearch} />

      <MobileDrawer isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="flex items-center justify-between border-b border-surface-border p-4">
          <span
            id="drawer-title"
            className="text-sm font-black uppercase tracking-wide text-foreground"
          >
            Menu
          </span>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-brand-gold"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex flex-col p-2">
          {navLinks.map((link) => {
            const isActive = link.href === '/' && isHome
            return (
              <Link
                key={link.label}
                href={link.href}
                aria-current={isActive ? 'page' : undefined}
                className={`rounded-lg px-4 py-3 text-left text-[15px] font-medium transition-colors ${
                  isActive
                    ? 'font-bold text-brand-gold'
                    : 'text-muted-foreground hover:bg-background hover:text-foreground'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex-1" />

        <div className="flex items-center justify-between border-t border-surface-border p-4">
          <Link
            href="/coming-soon"
            aria-label="Account"
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-brand-gold"
          >
            <User className="h-5 w-5" />
            <span>Account</span>
          </Link>

          <ThemeToggle />
        </div>
      </MobileDrawer>
    </header>
  )
}
