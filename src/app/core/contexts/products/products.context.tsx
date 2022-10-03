import React, {
  createContext,
  FC,
  PropsWithChildren,
  useMemo,
  useContext
} from 'react'
import { useFetch } from '../../hooks'
import { Product } from './product.interface'

type DefaultValueProductsContext = {
  loading: boolean
  products?: Product[]
}
type PropsProductsProvider = PropsWithChildren

const ProductsContext = createContext<DefaultValueProductsContext | null>(null)

export const ProductsProvider: FC<PropsProductsProvider> = ({ children }) => {
  const [loading, products] = useFetch<Product[]>(
    'https://fakestoreapi.com/products'
  )

  const value = useMemo<DefaultValueProductsContext>(
    () => ({ loading, products }),
    [loading, products]
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
