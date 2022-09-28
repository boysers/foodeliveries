import React, { createContext, FC, PropsWithChildren, useMemo } from 'react'
import { useFetch } from '../hooks/use-fetch'
import { Product } from '../types/product.type'

type DefaultValueProductsContext = {
  loading: boolean
  products?: Product[]
}
type PropsColorModeProvider = PropsWithChildren

const defaultValue = { products: [], loading: true }

export const ProductsContext =
  createContext<DefaultValueProductsContext>(defaultValue)

export const ProductsProvider: FC<PropsColorModeProvider> = ({ children }) => {
  const [loading, products] = useFetch<Product[]>(
    'https://fakestoreapi.com/products'
  )

  const value = useMemo(() => ({ loading, products }), [loading, products])

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  )
}
