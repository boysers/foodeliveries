import React, { FC } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { Typography } from '@mui/material'
import { ProductsFilterable } from './components/products-filterable'
import { useProductsContext } from '../../core/contexts'
import { Loader, ErrorFallback } from '../../core/components'

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
