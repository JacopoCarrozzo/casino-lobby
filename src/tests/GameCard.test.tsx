import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { GameCard } from '@/components/game/GameCard'
import type { Game } from '@/types'

const mockGame: Game = {
  id: 540,
  title: 'Overwatch',
  thumbnail: 'https://www.freetogame.com/g/540/thumbnail.jpg',
  genre: 'Shooter',
  platform: 'PC (Windows)',
  publisher: 'Activision Blizzard',
  developer: 'Blizzard Entertainment',
  release_date: '2022-10-04',
  game_url: 'https://www.freetogame.com/open/overwatch',
}

describe('GameCard', () => {
  it('renders the game title, genre and publisher', () => {
    render(
      <GameCard
        game={mockGame}
        isFavorite={false}
        onToggleFavorite={() => {}}
      />,
    )

    expect(screen.getByText('Overwatch')).toBeInTheDocument()
    expect(screen.getByText('Shooter', { exact: false })).toBeInTheDocument()
    expect(screen.getByText('Activision Blizzard')).toBeInTheDocument()
  })

  it('calls onToggleFavorite with the game id when the heart is clicked', async () => {
    const onToggleFavorite = vi.fn()
    const user = userEvent.setup()

    render(
      <GameCard
        game={mockGame}
        isFavorite={false}
        onToggleFavorite={onToggleFavorite}
      />,
    )

    await user.click(
      screen.getByRole('button', { name: /add overwatch to favorites/i }),
    )

    expect(onToggleFavorite).toHaveBeenCalledWith(540)
  })

  it('reflects the favorite state via aria-pressed', () => {
    render(
      <GameCard
        game={mockGame}
        isFavorite={true}
        onToggleFavorite={() => {}}
      />,
    )

    const favoriteButton = screen.getByRole('button', {
      name: /remove overwatch from favorites/i,
    })
    expect(favoriteButton).toHaveAttribute('aria-pressed', 'true')
  })
})
