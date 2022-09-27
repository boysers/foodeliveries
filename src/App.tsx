import React from 'react'
import { useFetch } from './hooks/use-fetch'
import { FilterableProduct } from './components/filterable-product/filterable-product.component'
import styled from 'styled-components'
import { Product } from './types/product.type'

const LoadingStyled = styled.p`
  text-align: center;
  font-size: 1.6rem;
`

function App() {
  const [loading, products] = useFetch<Product[]>(
    'https://fakestoreapi.com/products'
  )

  return (
    <div>
      {!loading ? (
        <FilterableProduct products={products} />
      ) : (
        <LoadingStyled>Loading...</LoadingStyled>
      )}
    </div>
  )
}

export default App
