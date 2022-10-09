import { useEffect, useState } from 'react'

export const useFetch = <D = unknown>(url: string) => {
  const [loading, setLoading] = useState<boolean>(true)
  const [data, setData] = useState<D>()

  useEffect(() => {
    const controller = new AbortController()

    const getProductList = async () => {
      try {
        const res = await fetch(url, { signal: controller.signal })

        if (!res.ok) throw new Error(`${res.status} Error`)

        const resData = (await res.json()) as D

        setData(resData)
        setLoading(false)
      } catch (error) {
        if (error instanceof Error) {
          console.error(error.message)
        }
        setLoading(false)
      }
    }
    getProductList()

    return () => {
      controller.abort()
      setLoading(false)
    }
  }, [url])

  return [loading, data] as const
}
