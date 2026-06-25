export function GameDetailSkeleton() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-5xl px-6 py-10 xl:px-8">
        {/* Back link */}
        <div className="mb-8 h-4 w-28 animate-pulse rounded bg-muted-foreground/10" />

        {/* Hero image */}
        <div className="mb-8 aspect-video w-full animate-pulse rounded-2xl bg-muted-foreground/10" />

        {/* Title block + Play button */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-col gap-2">
            {/* Genre */}
            <div className="h-3 w-20 animate-pulse rounded bg-muted-foreground/10" />
            {/* Title */}
            <div className="h-9 w-64 animate-pulse rounded bg-muted-foreground/10" />
          </div>
          {/* Play Now button */}
          <div className="h-11 w-36 shrink-0 animate-pulse rounded-xl bg-muted-foreground/10" />
        </div>

        {/* Meta grid — same columns as the real page */}
        <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 rounded-xl border border-surface-border bg-surface p-4"
            >
              {/* Label */}
              <div className="h-3 w-16 animate-pulse rounded bg-muted-foreground/10" />
              {/* Value */}
              <div className="h-4 w-24 animate-pulse rounded bg-muted-foreground/10" />
            </div>
          ))}
        </div>

        {/* About box */}
        <div className="rounded-2xl border border-surface-border bg-surface p-6">
          {/* "About" heading */}
          <div className="mb-3 h-3 w-16 animate-pulse rounded bg-muted-foreground/10" />
          {/* Description lines */}
          <div className="flex flex-col gap-2">
            <div className="h-4 w-full animate-pulse rounded bg-muted-foreground/10" />
            <div className="h-4 w-full animate-pulse rounded bg-muted-foreground/10" />
            <div className="h-4 w-2/3 animate-pulse rounded bg-muted-foreground/10" />
          </div>
        </div>
      </div>
    </main>
  )
}
