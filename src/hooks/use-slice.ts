import { useEffect, useState } from 'react'

export const useSlice = (str: string, end: number, isSlice = true) => {
  const [sentence, setSentence] = useState<string>('')
  const [slice, setSlice] = useState<boolean>(isSlice)

  const setIsSlice = (bool: boolean) => setSlice(bool)

  useEffect(() => {
    if (!slice || str.length <= end) {
      setSentence(str)
      setSlice(false)
    } else setSentence(str.slice(0, end) + '...')
  }, [end, slice, str])

  return [sentence, slice, setIsSlice] as const
}
//
