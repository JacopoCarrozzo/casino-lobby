import { renderHook, act } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'
import { useFavorites } from '@/hooks/useFavorites'

beforeEach(() => {
  localStorage.clear()
})

describe('useFavorites', () => {
  it('adds a game to favorites', () => {
    const { result } = renderHook(() => useFavorites())
    expect(result.current.favorites).toEqual([])

    act(() => {
      result.current.toggleFavorite(540)
    })

    expect(result.current.favorites).toContain(540)
  })

  it('removes the game when toggled twice', () => {
    const { result } = renderHook(() => useFavorites())

    act(() => {
      result.current.toggleFavorite(540)
    })
    act(() => {
      result.current.toggleFavorite(540)
    })

    expect(result.current.favorites).not.toContain(540)
    expect(result.current.favorites).toEqual([])
  })

  it('persists favorites to localStorage', () => {
    const { result } = renderHook(() => useFavorites())

    act(() => {
      result.current.toggleFavorite(540)
    })

    const stored = JSON.parse(localStorage.getItem('favorites') ?? '[]')
    expect(stored).toContain(540)
  })
})
