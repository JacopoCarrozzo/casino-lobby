'use client'

import Link from 'next/link'
import { FileQuestion, Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="relative flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
      <div className="relative mb-6 flex h-24 w-24 items-center justify-center rounded-3xl border border-brand-gold/20 bg-surface shadow-[0_0_50px_rgba(212,175,55,0.1)]">
        <FileQuestion className="h-12 w-12 text-brand-gold animate-pulse" />
        <div className="absolute -bottom-2 -right-2 flex h-8 w-8 items-center justify-center rounded-lg bg-secondary border border-surface-border text-xs font-black text-foreground shadow-lg">
          404
        </div>
      </div>

      <h1 className="mb-2 text-3xl font-black tracking-tight text-foreground sm:text-4xl uppercase">
        Page Not Found
      </h1>
      <p className="mb-8 max-w-md text-sm text-muted-foreground leading-relaxed">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. 
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 z-10">
        <Link
          href="/"
          className="flex items-center justify-center gap-2 min-w-[180px] h-12 px-6 rounded-xl bg-brand-gold text-on-accent text-sm font-black uppercase tracking-wider transition-all duration-300 hover:brightness-110 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] active:scale-95 cursor-pointer"
        >
          <Home className="h-4 w-4" />
          <span>Go to Lobby</span>
        </Link>

        <button
          onClick={() => window.history.back()}
          className="flex items-center justify-center gap-2 min-w-[180px] h-12 px-6 rounded-xl bg-transparent border border-muted-foreground/20 text-muted-foreground text-sm font-black uppercase tracking-wider transition-all duration-300 hover:border-brand-gold hover:text-brand-gold hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(212,175,55,0.1)] active:scale-95 cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Go Back</span>
        </button>
      </div>

      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.02)_0%,transparent_70%)] pointer-events-none" />
    </div>
  )
}