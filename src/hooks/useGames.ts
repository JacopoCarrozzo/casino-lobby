'use client'

import { useEffect, useState } from 'react'
import { fetchAllGames } from '@/lib/api'
import type { Game } from '@/types'

export function useGames() {
  const [games, setGames] = useState<Game[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchAllGames()
      .then((data) => {
        setGames(data)
        setError(null)
      })
      .catch(() => {
        setError('Unable to load games. Please try again later.')
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return { games, loading, error }
}