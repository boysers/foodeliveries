import { useEffect, useState } from 'react'

type Loading = boolean

export const useFetch = <D = unknown>(url: string) => {
  const [loading, setLoading] = useState<Loading>(true)
  const [data, setData] = useState<D>()

  useEffect(() => {
    const controller = new AbortController()

    const getProductList = async () => {
      const res = await fetch(url, { signal: controller.signal })

      if (!res.ok) {
        throw new Error(`${res.status} Error`)
      }

      const resData = (await res.json()) as D

      setData(resData)
    }
    getProductList()
    setLoading(false)

    return () => {
      controller.abort()
      setLoading(false)
    }
  }, [url])

  return [loading, data] as const
}
