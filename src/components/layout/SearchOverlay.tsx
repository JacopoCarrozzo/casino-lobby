'use client'

import { useEffect, useRef } from 'react'
import { Search, X } from 'lucide-react'
import { useSearch } from '@/context/SearchContext'

interface SearchOverlayProps {
  isOpen: boolean
  onClose: () => void
}

export function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const { query, setQuery } = useSearch()
  const inputRef = useRef<HTMLInputElement>(null)

  // Chiusura con Escape
  useEffect(() => {
    if (!isOpen) return
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  // Autofocus sull'input all'apertura
  useEffect(() => {
    if (!isOpen) return
    const id = requestAnimationFrame(() => inputRef.current?.focus())
    return () => cancelAnimationFrame(id)
  }, [isOpen])

  return (
    // In flusso: niente `fixed`. Collassa a 0 altezza quando chiuso.
    // Sta DENTRO l'header sticky → si muove con lui, sempre.
    <div
      id="mobile-search"
      aria-hidden={!isOpen}
      className={`overflow-hidden transition-all duration-300 ease-out ${
        isOpen ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'
      }`}
    >
      <div className="flex items-center gap-3 border-t border-surface-border px-4 py-3">
        <div className="relative flex-1">
          <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
            <Search className="h-4 w-4" />
          </div>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search games"
            aria-label="Search games by title"
            tabIndex={isOpen ? 0 : -1}
            className="h-11 w-full rounded-full border border-surface-border bg-surface/40 pl-11 pr-10 text-sm text-foreground placeholder:text-muted-foreground/40 transition-all duration-300 focus:border-brand-gold/40 focus:bg-surface focus:outline-none focus:ring-4 focus:ring-brand-gold/5"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              aria-label="Clear search"
              tabIndex={isOpen ? 0 : -1}
              className="absolute right-3 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-brand-gold"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        <button
          onClick={onClose}
          tabIndex={isOpen ? 0 : -1}
          className="shrink-0 text-sm font-medium text-muted-foreground transition-colors hover:text-brand-gold"
        >
          Cancel
        </button>
      </div>
    </div>
  )
}
