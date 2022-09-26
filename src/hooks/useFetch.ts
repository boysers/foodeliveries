import { useEffect, useState } from 'react'
import { TypeProduct } from '../types/typeProduct'

type UseFetch = (url: string) => Readonly<[TypeProduct[], boolean]>

export const useFetch: UseFetch = (url) => {
  const [products, setProducts] = useState<TypeProduct[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const getProductList = async () => {
      const response = await fetch(url)
      if (!response.ok) return

      const data = await response.json()

      setProducts(data)
      setLoading(false)
    }
    getProductList()
  }, [url])

  return [products, loading]
}
