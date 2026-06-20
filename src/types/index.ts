export interface Game {
  id: number
  title: string
  thumbnail: string
  genre: string
  platform: string
  publisher: string
  developer: string
  release_date: string
  game_url: string
}

export interface GameDetails extends Game {
  description: string
}