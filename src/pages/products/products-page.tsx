import React, { FC } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { Typography } from '@lib/mui'
import { useProductsContext } from '@context'
import { Loader, ErrorFallback } from '@components'
import { ProductsFilterable } from './components/products-filterable'

export const ProductsPage: FC = () => {
  const { loading, products } = useProductsContext()

  return loading ? (
    <Loader />
  ) : (
    <>
      <Typography variant="h4" sx={{ textAlign: 'center', m: 4 }}>
        Food
      </Typography>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <ProductsFilterable products={products} />
      </ErrorBoundary>
    </>
  )
}
