import React, { FC } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import styled from 'styled-components'
import { ProductsFilterable } from './products-filterable/products-filterable.component'
import { Loader, ErrorFallback } from '../core/components'
import { useProductsContext } from '../core/contexts'
// import { useRecipesCookContext } from '../../contexts'

const Title = styled.h2`
  text-align: center;
  font-size: 40px;
  margin: 40px 0;
`

export const ProductsPage: FC = () => {
  const { loading, products } = useProductsContext()
  // const { loading, recipesCook: products } = useRecipesCookContext()

  return loading ? (
    <Loader />
  ) : (
    <>
      <Title>Products</Title>
      {/* <Title>Recipes Cooking</Title> */}
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <ProductsFilterable products={products} />
      </ErrorBoundary>
    </>
  )
}
