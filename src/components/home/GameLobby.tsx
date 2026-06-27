'use client'

import { useState, useMemo, useEffect } from 'react'
import { useFavorites } from '@/hooks/useFavorites'
import { FilterBar } from '@/components/home/FilterBar'
import { GenreSlider } from '@/components/game/GenreSlider'
import type { Game, SortOption } from '@/types'
import { useSearch } from '@/context/SearchContext'
import { Gamepad2 } from 'lucide-react'

interface GameLobbyProps {
  initialGames: Game[]
  initialError: string | null
}

export function GameLobby({ initialGames, initialError }: GameLobbyProps) {
  const { query: searchQuery } = useSearch()
  const [selectedGenre, setSelectedGenre] = useState('all')
  const [sort, setSort] = useState<SortOption>('title')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 7

  const { favorites, toggleFavorite } = useFavorites()

  useEffect(() => {
    setCurrentPage(1)
  }, [selectedGenre, sort, searchQuery])

  const genres = useMemo(
    () => Array.from(new Set(initialGames.map((g) => g.genre))).sort(),
    [initialGames],
  )

  const filteredGames = useMemo(() => {
    let result = [...initialGames]

    if (searchQuery) {
      const q = searchQuery.toLowerCase()
      result = result.filter((g) => g.title.toLowerCase().includes(q))
    }

    if (selectedGenre !== 'all') {
      result = result.filter((g) => g.genre === selectedGenre)
    }

    result.sort((a, b) => {
      if (sort === 'title') return a.title.localeCompare(b.title)
      if (sort === 'release_date')
        return (
          new Date(b.release_date).getTime() -
          new Date(a.release_date).getTime()
        )
      if (sort === 'publisher') return a.publisher.localeCompare(b.publisher)
      return 0
    })

    return result
  }, [initialGames, searchQuery, selectedGenre, sort])

  const groupedByGenre = useMemo(
    () =>
      filteredGames.reduce<Record<string, Game[]>>((acc, game) => {
        if (!acc[game.genre]) acc[game.genre] = []
        acc[game.genre].push(game)
        return acc
      }, {}),
    [filteredGames],
  )

  const allGenreEntries = useMemo(() => {
    return Object.entries(groupedByGenre).sort(
      ([genreA, gamesA], [genreB, gamesB]) => {
        if (gamesA.length !== gamesB.length) {
          return gamesB.length - gamesA.length
        }
        return genreA.localeCompare(genreB)
      },
    )
  }, [groupedByGenre])

  const totalPages = Math.ceil(allGenreEntries.length / itemsPerPage)

  const pagedGenreEntries = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage
    return allGenreEntries.slice(startIndex, startIndex + itemsPerPage)
  }, [allGenreEntries, currentPage])

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (initialError) {
    return (
      <div className="flex flex-col items-center justify-center py-32 gap-3">
        <p className="text-lg font-semibold text-foreground">
          Something went wrong
        </p>
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

      {pagedGenreEntries.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-32 gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-surface-border bg-surface">
            <Gamepad2 className="h-8 w-8 text-muted-foreground/50" />
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <p className="text-lg font-semibold text-foreground">
              No games found
            </p>
            <p className="text-sm text-muted-foreground">
              Try adjusting your search or filters.
            </p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-12">
          {pagedGenreEntries.map(([genre, games]) => (
            <GenreSlider
              key={genre}
              genre={genre}
              games={games}
              favorites={favorites}
              onToggleFavorite={toggleFavorite}
            />
          ))}

          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-3 pt-6 pb-12">
              {Array.from({ length: totalPages }, (_, index) => {
                const pageNumber = index + 1
                const isActive = pageNumber === currentPage

                return (
                  <button
                    key={pageNumber}
                    aria-current={isActive ? 'page' : undefined}
                    onClick={() => handlePageChange(pageNumber)}
                    className={`min-w-[44px] h-11 px-3 rounded-xl text-sm font-black border active:scale-95 cursor-pointer ${
                      isActive
                        ? 'bg-brand-gold border-brand-gold text-accent-foreground shadow-[0_0_15px_rgba(245,158,11,0.4)]'
                        : 'bg-transparent border-muted-foreground/20 text-muted-foreground hover:border-brand-gold hover:text-brand-gold hover:scale-105 hover:shadow-[0_0_10px_rgba(245,158,11,0.15)]'
                    }`}
                  >
                    {pageNumber}
                  </button>
                )
              })}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
