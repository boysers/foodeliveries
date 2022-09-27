import React, { FC } from 'react'
import styled from 'styled-components'
import { Product } from '../../types/product.type'
import { ErrorFallback } from '../error-fallback/error-fallback.component'
import { ProductsFilterable } from './products-filterable.component'

type PropsProductsPage = { products?: Product[]; error?: Error }

const Title = styled.h2`
  text-align: center;
  font-size: 40px;
  margin: 50px 0;
`

export const ProductsPage: FC<PropsProductsPage> = ({ products, error }) => {
  return (
    <>
      <Title>Product List</Title>
      {products ? (
        <ProductsFilterable products={products} />
      ) : (
        <ErrorFallback>{error?.message || 'product unavailable'}</ErrorFallback>
      )}
    </>
  )
}
