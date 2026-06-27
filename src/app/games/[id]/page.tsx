import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  ArrowLeft,
  ExternalLink,
  Calendar,
  Monitor,
  Building2,
} from 'lucide-react'
import type { Metadata } from 'next'
import { getGameById } from '@/lib/api'

interface Props {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const game = await getGameById(id)

  if (!game) {
    return { title: 'Game Not Found — Casino Lobby' }
  }

  return {
    title: `${game.title} — Casino Lobby`,
    description: game.description,
  }
}

export default async function GameDetailPage({ params }: Props) {
  const { id } = await params
  const game = await getGameById(id)

  if (!game) notFound()

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-5xl px-6 py-10 xl:px-8">
        <Link
          href="/"
          className="group mb-8 inline-flex items-center gap-3 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-brand-gold"
        >
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-surface-border bg-surface text-muted-foreground transition-all duration-200 group-hover:border-brand-gold group-hover:text-brand-gold group-active:scale-95">
            <ArrowLeft className="h-5 w-5" />
          </span>
          Back to Lobby
        </Link>

        <div className="relative w-full aspect-video overflow-hidden rounded-2xl border border-surface-border mb-8">
          <Image
            src={game.thumbnail}
            alt={game.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 896px"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between mb-8">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold">
              {game.genre}
            </span>
            <h1 className="text-3xl font-black text-foreground lg:text-4xl">
              {game.title}
            </h1>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={game.game_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-11 rounded-xl bg-brand-gold px-5 text-sm font-bold uppercase tracking-wide text-accent-foreground shadow-[0_4px_20px_rgba(245,158,11,0.25)] transition-all duration-200 hover:brightness-110 hover:scale-[1.02] active:scale-95"
            >
              Play Now
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 mb-8">
          {[
            { icon: Monitor, label: 'Platform', value: game.platform },
            { icon: Building2, label: 'Publisher', value: game.publisher },
            { icon: Building2, label: 'Developer', value: game.developer },
            { icon: Calendar, label: 'Release Date', value: game.release_date },
          ].map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="flex flex-col gap-1 rounded-xl border border-surface-border bg-surface p-4"
            >
              <div className="flex items-center gap-1.5 text-muted-foreground">
                <Icon className="h-3.5 w-3.5" />
                <span className="text-[11px] font-semibold uppercase tracking-widest">
                  {label}
                </span>
              </div>
              <span className="text-sm font-semibold text-foreground">
                {value}
              </span>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-surface-border bg-surface p-6">
          <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-3">
            About
          </h2>
          <p className="text-[15px] leading-relaxed text-foreground">
            {game.description}
          </p>
        </div>
      </div>
    </main>
  )
}
