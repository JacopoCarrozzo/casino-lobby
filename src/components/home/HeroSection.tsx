import Image from 'next/image'

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-background py-12 px-6 xl:px-16">
      <div className="grid w-full grid-cols-1 items-center gap-12 py-12 px-8 md:grid-cols-2 md:py-20 md:px-16">

        <div className="flex flex-col items-start text-left max-w-xl">
          <span className="text-[13px] font-black tracking-[0.25em] uppercase text-muted-foreground mb-3">
            400+ free-to-play games
          </span>

          <h1 className="text-4xl font-black uppercase tracking-tight text-foreground md:text-5xl lg:text-6xl leading-[1.05]">
            Welcome to the <br />
            <span className="text-brand-gold drop-shadow-[0_0_12px_rgba(212,175,55,0.15)]">
              Casino Lobby
            </span>
          </h1>

          <p className="mt-5 text-[15px] font-medium leading-relaxed text-muted-foreground max-w-md">
            Discover the best free games across all genres. Smooth gameplay,
            premium look, and instant play right from your browser.
          </p>

          
           <a href="#games"
            className="mt-8 inline-flex h-12 items-center rounded-xl bg-brand-gold px-9 text-[15px] font-black uppercase tracking-wider text-on-accent shadow-[0_4px_20px_rgba(212,175,55,0.3)] transition-all duration-300 hover:brightness-110 hover:scale-[1.03] hover:shadow-[0_6px_24px_rgba(212,175,55,0.45)] active:scale-95"
          >
            Play Now
          </a>
        </div>

        <div className="relative min-h-[320px] md:min-h-[420px] w-full aspect-video">

          <div className="absolute inset-0 block dark:hidden">
            <Image
              src="/images/hero-light.webp"
              alt="Casino lobby hero illustration"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain transition-transform duration-700 hover:scale-[1.02]"
            />
          </div>

          <div className="absolute inset-0 hidden dark:block">
            <Image
              src="/images/hero-dark.webp"
              alt="Casino lobby hero illustration"
              fill
              priority={false}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain transition-transform duration-700 hover:scale-[1.02]"
            />
          </div>

        </div>

      </div>
    </section>
  )
}