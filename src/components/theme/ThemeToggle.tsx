'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return <div className="h-8 w-16" />
  }

  const isDark = theme === 'dark'

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="relative flex h-8 w-16 cursor-pointer items-center rounded-full border border-surface-border bg-surface shadow-inner transition-colors hover:border-accent"
    >
      <div
        className={`absolute left-1 flex h-6 w-6 items-center justify-center rounded-full transition-transform duration-300 ease-in-out ${
          isDark ? 'translate-x-8 bg-brand-gold' : 'translate-x-0 bg-foreground'
        }`}
      >
        {isDark ? (
          <Moon className="h-3.5 w-3.5 text-background" />
        ) : (
          <Sun className="h-3.5 w-3.5 text-background" />
        )}
      </div>

      <Sun
        className={`absolute left-1.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground transition-opacity ${
          isDark ? 'opacity-40' : 'opacity-0'
        }`}
      />
      <Moon
        className={`absolute right-1.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground transition-opacity ${
          isDark ? 'opacity-0' : 'opacity-40'
        }`}
      />
    </button>
  )
}