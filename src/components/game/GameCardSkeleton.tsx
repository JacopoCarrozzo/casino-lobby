export function GameCardSkeleton() {
  return (
    <div className="flex flex-col rounded-2xl border border-surface-border bg-surface overflow-hidden">
      {/* Image placeholder — same aspect ratio as the real card */}
      <div className="aspect-video w-full animate-pulse bg-muted-foreground/10" />

      <div className="flex flex-col gap-2 p-4">
        {/* Title line */}
        <div className="h-4 w-3/4 animate-pulse rounded bg-muted-foreground/10" />
        {/* Genre + platform line */}
        <div className="h-3 w-1/2 animate-pulse rounded bg-muted-foreground/10" />
        {/* Publisher line */}
        <div className="h-3 w-2/5 animate-pulse rounded bg-muted-foreground/10" />
      </div>
    </div>
  )
}
