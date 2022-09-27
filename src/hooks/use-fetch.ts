import { useEffect, useState } from 'react'

type Loading = boolean

export const useFetch = <I = unknown>(url: string) => {
  const [loading, setLoading] = useState<Loading>(true)
  const [data, setData] = useState<I>()

  useEffect(() => {
    const getProductList = async () => {
      const res = await fetch(url)

      if (res.ok) {
        const resData = (await res.json()) as I
        setData(resData)
      }
      setLoading(false)
    }
    getProductList()
  }, [url])

  return [loading, data] as const
}
