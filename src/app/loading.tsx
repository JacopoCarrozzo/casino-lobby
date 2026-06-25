import { HeroSectionSkeleton } from '@/components/home/HeroSectionSkeleton'
import { GenreSliderSkeleton } from '@/components/game/GenreSliderSkeleton'

export default function Loading() {
  return (
    <div className="flex flex-col">
      <HeroSectionSkeleton />

      <div className="flex flex-col gap-12 py-8">
        {Array.from({ length: 4 }).map((_, index) => (
          <GenreSliderSkeleton key={index} />
        ))}
      </div>
    </div>
  )
}
