import { NextResponse } from 'next/server'
import type { GameDetails } from '@/types'

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params

  try {
    const response = await fetch(
      `https://www.freetogame.com/api/game?id=${id}`
    )

    if (!response.ok) {
      return NextResponse.json(
        { message: 'Failed to fetch game from upstream API' },
        { status: response.status }
      )
    }

    const game: GameDetails = await response.json()
    return NextResponse.json(game)
  } catch (error) {
    return NextResponse.json(
      { message: 'Unexpected server error' },
      { status: 500 }
    )
  }
}