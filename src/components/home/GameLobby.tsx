'use client'

import { useState, useMemo } from 'react'
import { useFavorites } from '@/hooks/useFavorites'
import { FilterBar } from '@/components/home/FilterBar'
import { GenreSlider } from '@/components/game/GenreSlider'
import type { Game, SortOption } from '@/types'

interface GameLobbyProps {
  initialGames: Game[]
  initialError: string | null
}

export function GameLobby({ initialGames, initialError }: GameLobbyProps) {
  const [selectedGenre, setSelectedGenre] = useState('all')
  const [sort, setSort] = useState<SortOption>('title')

  const { favorites, toggleFavorite } = useFavorites()

  const genres = useMemo(
    () => Array.from(new Set(initialGames.map((g) => g.genre))).sort(),
    [initialGames]
  )

  const filteredGames = useMemo(() => {
    let result = [...initialGames]

    if (selectedGenre !== 'all') {
      result = result.filter((g) => g.genre === selectedGenre)
    }

    result.sort((a, b) => {
      if (sort === 'title') return a.title.localeCompare(b.title)
      if (sort === 'release_date') return new Date(b.release_date).getTime() - new Date(a.release_date).getTime()
      if (sort === 'publisher') return a.publisher.localeCompare(b.publisher)
      return 0
    })

    return result
  }, [initialGames, selectedGenre, sort])

  const groupedByGenre = useMemo(
    () =>
      filteredGames.reduce<Record<string, Game[]>>((acc, game) => {
        if (!acc[game.genre]) acc[game.genre] = []
        acc[game.genre].push(game)
        return acc
      }, {}),
    [filteredGames]
  )

  // Logica per ordinare le categorie: Shooter sempre per primo
  const genreEntries = useMemo(() => {
    return Object.entries(groupedByGenre).sort((a, b) => {
      const genreA = a[0]
      const genreB = b[0]

      if (genreA === 'Shooter') return -1
      if (genreB === 'Shooter') return 1
      
      return genreA.localeCompare(genreB)
    })
  }, [groupedByGenre])

  if (initialError) {
    return (
      <div className="flex flex-col items-center justify-center py-32 gap-3">
        <p className="text-lg font-semibold text-foreground">Something went wrong</p>
        <p className="text-sm text-muted-foreground">{initialError}</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-2 -mt-2">
      <FilterBar
        genres={genres}
        selectedGenre={selectedGenre}
        onGenreChange={setSelectedGenre}
        sort={sort}
        onSortChange={setSort}
      />

      {genreEntries.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-32 gap-3">
          <p className="text-lg font-semibold text-foreground">No games found</p>
          <p className="text-sm text-muted-foreground">Try adjusting your filters.</p>
        </div>
      ) : (
        <div className="flex flex-col gap-12">
          {genreEntries.map(([genre, games]) => (
            <GenreSlider
              key={genre}
              genre={genre}
              games={games}
              favorites={favorites}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      )}
    </div>
  )
}