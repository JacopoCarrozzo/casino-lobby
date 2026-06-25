export function HeroSectionSkeleton() {
  return (
    <section className="relative w-full overflow-hidden bg-background">
      <div className="relative grid w-full grid-cols-1 items-center gap-12 px-8 md:grid-cols-2 md:pt-2 md:pb-0 md:px-16">
        {/* Left: text + button placeholders (mirrors HeroSection) */}
        <div className="flex flex-col items-start max-w-xl">
          {/* Title (two lines) */}
          <div className="h-10 w-3/4 animate-pulse rounded bg-muted-foreground/10 md:h-12" />
          <div className="mt-2 h-10 w-1/2 animate-pulse rounded bg-muted-foreground/10 md:h-12" />

          {/* Subtitle */}
          <div className="mt-5 h-4 w-2/3 animate-pulse rounded bg-muted-foreground/10" />

          {/* Play Now button */}
          <div className="mt-6 h-10 w-32 animate-pulse rounded-lg bg-muted-foreground/10" />
        </div>

        {/* Right: image placeholder — same height box as the real hero */}
        <div className="relative h-[220px] w-full md:h-[320px]">
          <div className="absolute inset-y-0 -left-6 right-0 animate-pulse rounded-2xl bg-muted-foreground/10 md:-left-12" />
        </div>
      </div>
    </section>
  )
}
