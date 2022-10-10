import { useCallback, useMemo, useState } from 'react'

export const useSlice = (str: string, end: number, initSlice = true) => {
  const [sliceState, setSliceState] = useState<boolean>(initSlice)

  const setIsSlice = useCallback(() => setSliceState((prev) => !prev), [])

  return useMemo(
    () => ({
      slice: sliceState ? str.slice(0, end) + '...' : str,
      sliceState,
      setIsSlice
    }),
    [end, setIsSlice, sliceState, str]
  )
}
