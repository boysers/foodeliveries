import { useState, MouseEvent, KeyboardEvent, useCallback } from 'react'

export function useToggleDrawer() {
  const [isOpen, setIsOpen] = useState(false)

  const onToggleDrawer = useCallback((event: KeyboardEvent | MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as KeyboardEvent).key === 'Tab' ||
        (event as KeyboardEvent).key === 'Shift')
    ) {
      return
    }

    setIsOpen((prev) => !prev)
  }, [])

  return { isOpen, onToggleDrawer } as const
}
