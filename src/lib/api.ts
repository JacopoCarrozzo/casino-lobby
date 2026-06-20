import type { Game, GameDetails } from '@/types'

export async function fetchAllGames(): Promise<Game[]> {
  const response = await fetch('/api/games')

  if (!response.ok) {
    throw new Error('Failed to load games')
  }

  return response.json()
}

export async function fetchGameById(id: string): Promise<GameDetails> {
  const response = await fetch(`/api/games/${id}`)

  if (!response.ok) {
    throw new Error('Failed to load game details')
  }

  return response.json()
}