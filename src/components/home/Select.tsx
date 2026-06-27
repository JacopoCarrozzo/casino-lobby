'use client'

import { useEffect, useId, useRef, useState } from 'react'
import { ChevronDown, Check } from 'lucide-react'

interface SelectOption<T extends string> {
  value: T
  label: string
}

interface SelectProps<T extends string> {
  value: T
  options: SelectOption<T>[]
  onChange: (value: T) => void
  'aria-label': string
}

export function Select<T extends string>({
  value,
  options,
  onChange,
  'aria-label': ariaLabel,
}: SelectProps<T>) {
  const [open, setOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  const containerRef = useRef<HTMLDivElement>(null)
  const optionRefs = useRef<(HTMLLIElement | null)[]>([])
  const listboxId = useId()

  const selectedIndex = options.findIndex((o) => o.value === value)
  const selectedLabel = options[selectedIndex]?.label ?? ''

  useEffect(() => {
    if (!open) return
    function handlePointerDown(event: MouseEvent) {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handlePointerDown)
    return () => document.removeEventListener('mousedown', handlePointerDown)
  }, [open])

  useEffect(() => {
    if (open)
      optionRefs.current[activeIndex]?.scrollIntoView({ block: 'nearest' })
  }, [open, activeIndex])

  function openMenu() {
    setActiveIndex(selectedIndex === -1 ? 0 : selectedIndex)
    setOpen(true)
  }

  function selectIndex(index: number) {
    onChange(options[index].value)
    setOpen(false)
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLButtonElement>) {
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault()
        open
          ? setActiveIndex((i) => Math.min(i + 1, options.length - 1))
          : openMenu()
        break
      case 'ArrowUp':
        event.preventDefault()
        open ? setActiveIndex((i) => Math.max(i - 1, 0)) : openMenu()
        break
      case 'Home':
        if (open) {
          event.preventDefault()
          setActiveIndex(0)
        }
        break
      case 'End':
        if (open) {
          event.preventDefault()
          setActiveIndex(options.length - 1)
        }
        break
      case 'Enter':
      case ' ':
        event.preventDefault()
        open ? selectIndex(activeIndex) : openMenu()
        break
      case 'Escape':
        if (open) {
          event.preventDefault()
          setOpen(false)
        }
        break
      case 'Tab':
        if (open) setOpen(false)
        break
    }
  }

  return (
    <div ref={containerRef} className="relative flex-1 sm:flex-none min-w-0">
      <button
        type="button"
        aria-label={ariaLabel}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={open ? listboxId : undefined}
        aria-activedescendant={
          open ? `${listboxId}-opt-${activeIndex}` : undefined
        }
        onClick={() => (open ? setOpen(false) : openMenu())}
        onKeyDown={handleKeyDown}
        className="flex w-full h-8 sm:h-9 items-center justify-between gap-2 rounded-full border border-surface-border bg-surface pl-3 pr-3 sm:pl-5 sm:pr-4 text-xs text-foreground cursor-pointer hover:border-brand-gold/40 focus:border-brand-gold/40 focus:outline-none focus:ring-4 focus:ring-brand-gold/5"
      >
        <span className="truncate">{selectedLabel}</span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-muted-foreground ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <ul
          id={listboxId}
          role="listbox"
          aria-label={ariaLabel}
          className="absolute left-0 z-50 mt-2 max-h-72 min-w-full w-max overflow-auto rounded-2xl border border-surface-border bg-surface p-1.5 shadow-xl shadow-black/20 scrollbar-hide"
        >
          {options.map((option, index) => {
            const isSelected = option.value === value
            const isActive = index === activeIndex
            return (
              <li
                key={option.value}
                id={`${listboxId}-opt-${index}`}
                ref={(el) => {
                  optionRefs.current[index] = el
                }}
                role="option"
                aria-selected={isSelected}
                onClick={() => selectIndex(index)}
                onMouseEnter={() => setActiveIndex(index)}
                className={`flex cursor-pointer items-center justify-between gap-6 rounded-xl px-3 py-2.5 text-xs whitespace-nowrap ${
                  isActive ? 'bg-brand-gold/10' : ''
                } ${isSelected ? 'font-semibold text-foreground' : 'text-muted-foreground'}`}
              >
                {option.label}
                {isSelected && (
                  <Check className="h-4 w-4 shrink-0 text-brand-gold" />
                )}
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
