'use client'

import type { SortOption } from '@/types'
import { Select } from './Select'

interface FilterBarProps {
  genres: string[]
  selectedGenre: string
  onGenreChange: (genre: string) => void
  sort: SortOption
  onSortChange: (sort: SortOption) => void
}

const sortOptions: { value: SortOption; label: string }[] = [
  { value: 'title', label: 'Sort by: Title' },
  { value: 'release_date', label: 'Sort by: Release Date' },
  { value: 'publisher', label: 'Sort by: Publisher' },
]

export function FilterBar({
  genres,
  selectedGenre,
  onGenreChange,
  sort,
  onSortChange,
}: FilterBarProps) {
  const genreOptions = [
    { value: 'all', label: 'All Genres' },
    ...genres.map((genre) => ({ value: genre, label: genre })),
  ]

  return (
    <div className="flex flex-nowrap sm:flex-wrap items-center gap-2 sm:gap-3 px-6 xl:px-16 py-2">
      <Select
        value={selectedGenre}
        options={genreOptions}
        onChange={onGenreChange}
        aria-label="Filter by genre"
      />
      <Select
        value={sort}
        options={sortOptions}
        onChange={onSortChange}
        aria-label="Sort games"
      />
    </div>
  )
}
