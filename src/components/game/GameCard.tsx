'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Heart } from 'lucide-react'
import type { Game } from '@/types'

interface GameCardProps {
  game: Game
  isFavorite: boolean
  onToggleFavorite: (id: number) => void
}

export function GameCard({
  game,
  isFavorite,
  onToggleFavorite,
}: GameCardProps) {
  const cleanPlatform = game.platform.replace('PC (Windows)', 'PC')

  return (
    <article className="group relative flex flex-col rounded-2xl border border-surface-border bg-surface overflow-hidden hover:border-brand-gold/30 hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)]">
      <div className="relative block aspect-video w-full overflow-hidden">
        <Image
          src={game.thumbnail}
          alt={game.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 280px"
          className="object-cover group-hover:scale-105"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-black/0 group-hover:bg-black/15"
        />
      </div>

      <button
        onClick={() => onToggleFavorite(game.id)}
        aria-pressed={isFavorite}
        aria-label={
          isFavorite
            ? `Remove ${game.title} from favorites`
            : `Add ${game.title} to favorites`
        }
        className="absolute top-3 right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 backdrop-blur-sm hover:scale-110 active:scale-95 cursor-pointer"
      >
        <Heart
          className={`h-4 w-4 ${
            isFavorite
              ? 'fill-brand-gold text-brand-gold'
              : 'fill-none text-white/70 group-hover:text-white'
          }`}
        />
      </button>

      <div className="flex flex-col gap-1.5 p-4 min-w-0">
        <h3 className="text-sm font-bold text-foreground line-clamp-1 group-hover:text-brand-gold">
          <Link
            href={`/games/${game.id}`}
            className="after:absolute after:inset-0"
          >
            {game.title}
          </Link>
        </h3>

        <p className="text-xs text-muted-foreground truncate">
          {game.genre}{' '}
          <span className="text-muted-foreground/40 px-1" aria-hidden="true">
            •
          </span>{' '}
          {cleanPlatform}
        </p>

        <span className="text-xs text-muted-foreground/60 truncate">
          {game.publisher}
        </span>
      </div>
    </article>
  )
}
