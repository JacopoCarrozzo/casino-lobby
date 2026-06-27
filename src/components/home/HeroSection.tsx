import Image from 'next/image'

export function HeroSection() {
  return (
    <section className="relative mb-3 w-full overflow-hidden bg-background">
      <div className="relative grid w-full grid-cols-1 items-center gap-12 px-8 pt-8 md:grid-cols-2 md:pt-2 md:pb-0 md:px-16">
        <div className="flex w-full max-w-2xl flex-col items-start text-left">
          <h1 className="text-3xl font-black uppercase tracking-tight text-foreground md:text-4xl lg:text-5xl leading-[1.05]">
            Welcome to the <br />
            <span className="text-brand-gold drop-shadow-[0_0_12px_rgba(245,158,11,0.15)]">
              Casino Lobby
            </span>
          </h1>

          <p className="mt-3 max-w-md text-[14px] font-medium leading-relaxed text-muted-foreground">
            Discover the best free games across all genres.
          </p>

          <a
            href="#games"
            className="mt-6 inline-flex h-10 items-center rounded-lg bg-brand-gold px-7 text-[13px] font-black uppercase tracking-wider text-accent-foreground shadow-[0_4px_15px_rgba(245,158,11,0.2)] hover:brightness-110 active:scale-95"
          >
            Play Now
          </a>
        </div>

        <div className="relative aspect-[4/3] w-full md:aspect-[16/10]">
          <Image
            src="/images/hero.png"
            alt="Casino lobby hero illustration"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain object-center"
          />
        </div>
      </div>
    </section>
  )
}
