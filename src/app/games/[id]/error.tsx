'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { RefreshCw, ArrowLeft } from 'lucide-react'

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function GameDetailError({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main className="flex-1 flex flex-col items-center justify-center gap-5 px-6 py-32">
      <div className="flex flex-col items-center gap-2 text-center">
        <p className="text-lg font-semibold text-foreground">
          Something went wrong
        </p>
        <p className="max-w-sm text-sm text-muted-foreground">
          We couldn&apos;t load this game. Please try again.
        </p>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={reset}
          className="inline-flex h-11 items-center gap-2 rounded-full bg-brand-gold px-5 text-sm font-bold text-accent-foreground transition-all duration-200 hover:brightness-110 active:scale-95 cursor-pointer"
        >
          <RefreshCw className="h-4 w-4" />
          Try again
        </button>

        <Link
          href="/"
          className="inline-flex h-11 items-center gap-2 rounded-full border border-surface-border bg-surface px-5 text-sm font-medium text-muted-foreground transition-all duration-200 hover:text-foreground active:scale-95"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Lobby
        </Link>
      </div>
    </main>
  )
}
