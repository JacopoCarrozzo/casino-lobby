export function HeroSectionSkeleton() {
  return (
    <section
      aria-hidden="true"
      className="relative mb-3 w-full overflow-hidden bg-background"
    >
      <div className="relative grid w-full grid-cols-1 items-center gap-12 px-8 pt-8 md:grid-cols-2 md:pt-2 md:pb-0 md:px-16">
        {/* Left: text + button placeholders (mirrors HeroSection) */}
        <div className="flex w-full max-w-2xl flex-col items-start text-left">
          {/* Title (two lines) */}
          <div className="h-8 w-3/4 animate-pulse rounded bg-muted-foreground/10 md:h-9 lg:h-12" />
          <div className="mt-2 h-8 w-1/2 animate-pulse rounded bg-muted-foreground/10 md:h-9 lg:h-12" />

          {/* Subtitle */}
          <div className="mt-3 h-[14px] w-2/3 max-w-md animate-pulse rounded bg-muted-foreground/10" />

          {/* Play Now button */}
          <div className="mt-6 h-10 w-32 animate-pulse rounded-lg bg-muted-foreground/10" />
        </div>

        {/* Right: image placeholder — same aspect-ratio box as the real hero */}
        <div className="relative aspect-[4/3] w-full md:aspect-[16/10]">
          <div className="absolute inset-0 animate-pulse rounded-2xl bg-muted-foreground/10" />
        </div>
      </div>
    </section>
  )
}
