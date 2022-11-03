import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { useProductsContext } from '@/context'
import { Loader, ErrorFallback } from '@/components'
import { ProductsFilterable } from './ProductsFilterable'

export const ProductsPage: React.FC = () => {
  const { loading, products } = useProductsContext()

  if (loading) return <Loader />

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <ProductsFilterable products={products} />
    </ErrorBoundary>
  )
}
