import type { Game, GameDetails } from '@/types'

export async function getAllGames(): Promise<Game[]> {
  const response = await fetch('https://www.freetogame.com/api/games', {
    next: { revalidate: 3600 },
  })
  if (!response.ok) throw new Error('Failed to load games')
  return response.json()
}

export async function getGameById(id: string): Promise<GameDetails> {
  const response = await fetch(`https://www.freetogame.com/api/game?id=${id}`, {
    next: { revalidate: 3600 },
  })
  if (!response.ok) throw new Error('Failed to load game')
  return response.json()
}