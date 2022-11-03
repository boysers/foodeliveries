import React, {
  createContext,
  PropsWithChildren,
  useMemo,
  useContext
} from 'react'
import { useFetch } from '@/hooks'
import { Product } from '@/types'

type ValueProductsContext = {
  loading: boolean
  products: Product[]
  error: Error | null
}
type PropsProductsProvider = PropsWithChildren

const ProductsContext = createContext<ValueProductsContext | null>(null)

export const ProductsProvider: React.FC<PropsProductsProvider> = ({
  children
}) => {
  const { data, error, loading } = useFetch<Product[]>(
    'https://fakestoreapi.com/products'
  )

  const value = useMemo<ValueProductsContext>(
    () => ({ loading, products: data ?? [], error }),
    [data, error, loading]
  )

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  )
}

export const useProductsContext = () => {
  const productsContext = useContext(ProductsContext)

  if (!productsContext)
    throw new Error('useProductsContext was used outside of its Provider')

  return productsContext
}
