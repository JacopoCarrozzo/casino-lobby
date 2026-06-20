import { NextResponse } from 'next/server'
import type { Game } from '@/types'

export async function GET() {
  try {
    const response = await fetch('https://www.freetogame.com/api/games')

    if (!response.ok) {
      return NextResponse.json(
        { message: 'Failed to fetch games from upstream API' },
        { status: response.status }
      )
    }

    const games: Game[] = await response.json()
    return NextResponse.json(games)
  } catch (error) {
    return NextResponse.json(
      { message: 'Unexpected server error' },
      { status: 500 }
    )
  }
}