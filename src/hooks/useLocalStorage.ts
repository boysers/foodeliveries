import { useEffect, useState } from 'react'

export function useLocalStorage<V = unknown>(key: string, initialValue: V) {
  const [storedValue, setStoredValue] = useState<V>(() => {
    const item = localStorage.getItem(key)
    try {
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)
      return initialValue
    }
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storedValue))
  }, [key, storedValue])

  return [storedValue, setStoredValue] as const
}
