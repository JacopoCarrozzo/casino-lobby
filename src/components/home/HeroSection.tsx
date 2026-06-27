import Image from 'next/image'

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-background">
      <div className="relative grid w-full grid-cols-1 items-center gap-12 px-8 pt-8 md:grid-cols-2 md:pt-2 md:pb-0 md:px-16">
        <div className="flex flex-col items-start text-left max-w-xl">
          <h1 className="text-3xl font-black uppercase tracking-tight text-foreground md:text-4xl lg:text-5xl leading-[1.05]">
            Welcome to the <br />
            <span className="text-brand-gold drop-shadow-[0_0_12px_rgba(245,158,11,0.15)]">
              Casino Lobby
            </span>
          </h1>

          <p className="mt-3 text-[14px] font-medium leading-relaxed text-muted-foreground max-w-sm">
            Discover the best free games across all genres.
          </p>

          <a
            href="#games"
            className="mt-6 inline-flex h-10 items-center rounded-lg bg-brand-gold px-7 text-[13px] font-black uppercase tracking-wider text-accent-foreground shadow-[0_4px_15px_rgba(245,158,11,0.2)] hover:brightness-110 active:scale-95"
          >
            Play Now
          </a>
        </div>

        <div className="relative h-[220px] md:h-[320px] w-full">
          <div className="absolute top-[57%] -translate-y-1/2 -right-10 w-[120%] md:w-[150%] h-[120%] md:h-[130%] pointer-events-none">
            <Image
              src="/images/hero.png"
              alt="Casino lobby hero illustration"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 80vw"
              className="object-contain object-right md:object-center hover:scale-[1.02]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
