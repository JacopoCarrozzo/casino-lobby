'use client'

import { useEffect, type ReactNode } from 'react'

interface MobileDrawerProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
}

export function MobileDrawer({ isOpen, onClose, children }: MobileDrawerProps) {
  useEffect(() => {
    if (!isOpen) return

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  return (
    <>
      <div
        onClick={onClose}
        aria-hidden="true"
        className={`fixed inset-0 z-[90] bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />

      <div
        role="dialog"
        aria-modal="true"
        className={`fixed inset-y-0 left-0 z-[100] flex h-[100dvh] w-72 max-w-[80%] flex-col border-r border-surface-border bg-surface shadow-2xl transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {children}
      </div>
    </>
  )
}
