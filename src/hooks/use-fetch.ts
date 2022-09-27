import { useEffect, useState } from 'react'

type Loading = boolean

export const useFetch = <D = unknown>(url: string) => {
  const [loading, setLoading] = useState<Loading>(true)
  const [data, setData] = useState<D>()
  const [error, setError] = useState<Error>()

  useEffect(() => {
    const getProductList = async () => {
      try {
        const res = await fetch(url)
        if (!res.ok) throw new Error(`${res.status} : Error`)
        const resData = (await res.json()) as D
        setData(resData)
      } catch (err) {
        if (err instanceof Error) setError(err)
        else console.error('error useFetch:', err)
      }
      setLoading(false)
    }
    getProductList()
  }, [url])

  return [loading, data, error] as const
}
