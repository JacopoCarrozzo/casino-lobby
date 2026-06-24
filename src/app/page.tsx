import { HeroSection } from '@/components/home/HeroSection'
import { GameLobby } from '@/components/home/GameLobby'
import { getAllGames } from '@/lib/api'
import type { Game } from '@/types'

export default async function Home() {
  let games: Game[] = []
  let error: string | null = null

  try {
    games = await getAllGames()
  } catch {
    error = 'Unable to load games. Please try again later.'
  }

  return (
    <main>
      <HeroSection />
      <section id="games">
        <GameLobby initialGames={games} initialError={error} />
      </section>
    </main>
  )
}