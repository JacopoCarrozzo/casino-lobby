'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return <div className="h-11 w-20" />
  }

  const isDark = theme === 'dark'

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      className="relative flex h-11 w-20 cursor-pointer items-center rounded-full border border-surface-border bg-surface/40 shadow-sm shadow-black/5 hover:border-brand-gold/30 hover:bg-surface hover:scale-105 active:scale-95"
    >
      <div
        className={`absolute left-1.5 flex h-7 w-7 items-center justify-center rounded-full transition-transform duration-300 ease-in-out ${
          isDark
            ? 'translate-x-10 bg-brand-gold text-accent-foreground'
            : 'translate-x-0 bg-foreground text-background'
        }`}
      >
        {isDark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
      </div>

      <Sun
        className={`absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground transition-opacity duration-300 ${
          isDark ? 'opacity-40' : 'opacity-0'
        }`}
      />
      <Moon
        className={`absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground transition-opacity duration-300 ${
          isDark ? 'opacity-0' : 'opacity-40'
        }`}
      />
    </button>
  )
}
