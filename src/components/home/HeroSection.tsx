import Image from 'next/image'

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-background py-0 px-6 xl:px-16">
      <div className="grid w-full grid-cols-1 items-center gap-12 pt-0 pb-6 px-8 md:grid-cols-2 md:pt-2 md:pb-20 md:px-16">

        <div className="flex flex-col items-start text-left max-w-xl">
          
          <h1 className="text-4xl font-black uppercase tracking-tight text-foreground md:text-5xl lg:text-6xl leading-[1.05]">
            Welcome to the <br />
            <span className="text-brand-gold drop-shadow-[0_0_12px_rgba(212,175,55,0.15)]">
              Casino Lobby
            </span>
          </h1>

          <p className="mt-5 text-[15px] font-medium leading-relaxed text-muted-foreground max-w-md">
            Discover the best free games across all genres.
          </p>

          <a href="#games"
             className="mt-8 inline-flex h-12 items-center rounded-xl bg-brand-gold px-9 text-[15px] font-black uppercase tracking-wider text-on-accent shadow-[0_4px_20px_rgba(212,175,55,0.3)] transition-all duration-300 hover:brightness-110 hover:scale-[1.03] hover:shadow-[0_6px_24px_rgba(212,175,55,0.45)] active:scale-95"
          >
            Play Now
          </a>
        </div>

        <div className="relative min-h-[320px] md:min-h-[420px] w-full aspect-video">
          <Image
            src="/images/hero.png"
            alt="Casino lobby hero illustration"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain transition-transform duration-700 hover:scale-[1.02]"
          />
        </div>

      </div>
    </section>
  )
}