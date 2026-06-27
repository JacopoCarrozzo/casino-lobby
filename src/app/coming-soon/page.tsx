import Link from 'next/link'
import { Hammer, ArrowLeft } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Coming Soon — Casino Lobby',
}

export default function ComingSoonPage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-32 text-center">
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl border border-brand-gold/20 bg-surface">
        <Hammer className="h-10 w-10 text-brand-gold" />
      </div>

      <h1 className="mb-3 text-3xl font-black uppercase tracking-tight text-foreground sm:text-4xl">
        Coming Soon
      </h1>
      <p className="mb-8 max-w-md text-sm leading-relaxed text-muted-foreground">
        This section is still under construction. In the meantime, explore our
        full library of free-to-play games.
      </p>

      <Link
        href="/"
        className="inline-flex h-12 items-center gap-2 rounded-xl bg-brand-gold px-6 text-sm font-black uppercase tracking-wider text-accent-foreground hover:brightness-110 active:scale-95"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Lobby
      </Link>
    </main>
  )
}
