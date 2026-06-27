'use client'

import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { GameCard } from '@/components/game/GameCard'
import type { Game } from '@/types'

interface GenreSliderProps {
  genre: string
  games: Game[]
  favorites: number[]
  onToggleFavorite: (id: number) => void
}

export function GenreSlider({
  genre,
  games,
  favorites,
  onToggleFavorite,
}: GenreSliderProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  function scroll(direction: 'left' | 'right') {
    if (!scrollRef.current) return
    const amount = scrollRef.current.clientWidth * 0.75
    scrollRef.current.scrollBy({
      left: direction === 'right' ? amount : -amount,
      behavior: 'smooth',
    })
  }

  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center justify-between px-6 xl:px-16">
        <h2 className="text-lg font-bold text-foreground">{genre}</h2>
        <div className="flex items-center gap-2">
          <button className="h-9 rounded-full border border-surface-border bg-surface px-4 text-sm font-medium text-muted-foreground cursor-pointer hover:border-brand-gold/30 hover:text-foreground">
            View all
          </button>

          <button
            onClick={() => scroll('left')}
            aria-label={`Scroll ${genre} left`}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-surface-border bg-surface text-muted-foreground cursor-pointer hover:border-brand-gold/30 hover:text-brand-gold active:scale-95"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <button
            onClick={() => scroll('right')}
            aria-label={`Scroll ${genre} right`}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-surface-border bg-surface text-muted-foreground cursor-pointer hover:border-brand-gold/30 hover:text-brand-gold active:scale-95"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="relative w-full px-6 xl:px-16">
        <div
          ref={scrollRef}
          className="scrollbar-hide flex gap-4 sm:gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory py-4 w-full justify-start"
        >
          {games.map((game) => (
            <div
              key={game.id}
              className="snap-start shrink-0 w-[170px] sm:w-[200px] md:w-[215px]"
            >
              <GameCard
                game={game}
                isFavorite={favorites.includes(game.id)}
                onToggleFavorite={onToggleFavorite}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
