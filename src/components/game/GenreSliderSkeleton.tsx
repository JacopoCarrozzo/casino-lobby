import { GameCardSkeleton } from '@/components/game/GameCardSkeleton'

export function GenreSliderSkeleton() {
  return (
    <section className="flex flex-col gap-4">
      {/* Section title placeholder */}
      <div className="px-6 xl:px-16">
        <div className="h-6 w-40 animate-pulse rounded bg-muted-foreground/10" />
      </div>

      {/* Row of skeleton cards — matches the real slider's spacing/width */}
      <div className="flex gap-5 overflow-hidden px-6 xl:px-16 py-4">
        {Array.from({ length: 7 }).map((_, index) => (
          <div key={index} className="shrink-0 w-[200px] md:w-[215px]">
            <GameCardSkeleton />
          </div>
        ))}
      </div>
    </section>
  )
}
