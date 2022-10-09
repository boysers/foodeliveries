import React, { FC } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { ProductsFilterable } from './products-filterable/products-filterable.component'
import { Loader, ErrorFallback } from '../core/components'
import { Typography } from '@mui/material'
import { useProductsContext } from '../core/contexts'
// import { useRecipesCookContext } from '../../contexts'

export const ProductsPage: FC = () => {
  const { loading, products } = useProductsContext()
  // const { loading, recipesCook: products } = useRecipesCookContext()

  return loading ? (
    <Loader />
  ) : (
    <>
      <Typography variant="h4" sx={{ textAlign: 'center', m: 4 }}>
        Products
        {/* Recipes Cooking */}
      </Typography>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <ProductsFilterable products={products} />
      </ErrorBoundary>
    </>
  )
}
