'use client'

import type { SortOption } from '@/types'

interface FilterBarProps {
  genres: string[]
  selectedGenre: string
  onGenreChange: (genre: string) => void
  sort: SortOption
  onSortChange: (sort: SortOption) => void
}
export function FilterBar({
  genres, selectedGenre, onGenreChange,
  sort, onSortChange,
}: FilterBarProps) {
  return (
    <div className="flex flex-wrap items-center gap-2 px-6 xl:px-16 py-2">

      {/* Rimpiccioliti ulteriormente: h-8, text-[10px], px-2.5 */}
      <select
        value={selectedGenre}
        onChange={(e) => onGenreChange(e.target.value)}
        className="h-8 rounded-full border border-surface-border bg-surface px-2.5 text-[10px] text-foreground transition-all duration-200 focus:border-brand-gold/40 focus:outline-none cursor-pointer"
      >
        <option value="all">All Genres</option>
        {genres.map((genre) => (
          <option key={genre} value={genre}>{genre}</option>
        ))}
      </select>

      {/* Sort - h-10 ridotto a h-9, text-sm a text-xs */}
      <select
        value={sort}
        onChange={(e) => onSortChange(e.target.value as SortOption)}
        className="h-8 rounded-full border border-surface-border bg-surface px-2.5 text-[10px] text-foreground transition-all duration-200 focus:border-brand-gold/40 focus:outline-none cursor-pointer"
      >
        <option value="title">Sort: Title</option>
        <option value="release_date">Sort: Release Date</option>
        <option value="publisher">Sort: Publisher</option>
      </select>

    </div>
  )
}