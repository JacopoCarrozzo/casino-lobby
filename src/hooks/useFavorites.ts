'use client'

import { useEffect, useState } from 'react'

const STORAGE_KEY = 'favorites'

export function useFavorites() {
  const [favorites, setFavorites] = useState<number[]>([])

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (!stored) return

      const parsed = JSON.parse(stored)
      if (Array.isArray(parsed)) {
        setFavorites(parsed.filter((id): id is number => typeof id === 'number'))
      }
    } catch {
      // Ignore corrupted localStorage and start with no favorites.
    }
  }, [])

  function toggleFavorite(id: number) {
    setFavorites((prev) => {
      const updated = prev.includes(id)
        ? prev.filter((favId) => favId !== id)
        : [...prev, id]

      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
      return updated
    })
  }

  return { favorites, toggleFavorite }
}