import Image from 'next/image'
import Link from 'next/link'
import { Heart } from 'lucide-react'
import type { Game } from '@/types'

interface GameCardProps {
  game: Game
  isFavorite: boolean
  onToggleFavorite: (id: number) => void
}

export function GameCard({ game, isFavorite, onToggleFavorite }: GameCardProps) {
  return (
    <article className="group relative flex flex-col rounded-2xl border border-surface-border bg-surface overflow-hidden transition-all duration-300 hover:border-brand-gold/30 hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)]">

      {/* Thumbnail */}
      <Link href={`/games/${game.id}`} className="relative block aspect-video w-full overflow-hidden">
        <Image
          src={game.thumbnail}
          alt={game.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 280px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/15"
        />
      </Link>

      {/* Favorite button */}
      <button
        onClick={() => onToggleFavorite(game.id)}
        aria-label={isFavorite ? `Remove ${game.title} from favorites` : `Add ${game.title} to favorites`}
        className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 backdrop-blur-sm transition-all duration-200 hover:scale-110 active:scale-95"
      >
        <Heart
          className={`h-4 w-4 transition-colors duration-200 ${
            isFavorite
              ? 'fill-brand-gold text-brand-gold'
              : 'fill-none text-white/70 group-hover:text-white'
          }`}
        />
      </button>

      {/* Info */}
      <div className="flex flex-col gap-1.5 p-4">
        <Link href={`/games/${game.id}`}>
          <h3 className="text-sm font-bold text-foreground line-clamp-1 transition-colors duration-200 hover:text-brand-gold">
            {game.title}
          </h3>
        </Link>

        <div className="flex items-center gap-1.5">
          <span className="text-xs text-muted-foreground">{game.genre}</span>
          <span aria-hidden="true" className="text-xs text-muted-foreground/40">•</span>
          <span className="text-xs text-muted-foreground">{game.platform}</span>
        </div>

        <span className="text-xs text-muted-foreground/60 truncate">
          {game.publisher}
        </span>
      </div>

    </article>
  )
}