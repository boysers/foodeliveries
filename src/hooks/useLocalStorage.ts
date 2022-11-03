import { useEffect, useState } from 'react'

type Key = string

export function useLocalStorage<V = unknown>(key: Key, initialValue: V) {
  const [storedValue, setStoredValue] = useState<V>(() => {
    const item = localStorage.getItem(key)
    try {
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.error(error)
      return initialValue
    }
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storedValue))
  }, [key, storedValue])

  return [storedValue, setStoredValue] as const
}
