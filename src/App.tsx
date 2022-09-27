import React from 'react'
import { useFetch } from './hooks/use-fetch'
import { FilterableProduct } from './components/filterable-product/filterable-product.component'
import styled from 'styled-components'
import { Product } from './types/product.type'
import LoadingGif from './assets/loading.gif'
import { ErrorFallback } from './components/error-fallback/error-fallback.component'

const LoadingStyled = styled.div`
  text-align: center;
  font-size: 1.6rem;

  margin: 25px 0;
`
const Img = styled.img`
  max-width: 100px;
`
const Paragraph = styled.p`
  margin: 0;
`

function App() {
  const [loading, products, error] = useFetch<Product[]>(
    'https://fakestoreapi.com/products'
  )

  if (loading)
    return (
      <LoadingStyled>
        <Img src={LoadingGif} alt="Loading" />
        <Paragraph>Loading...</Paragraph>
      </LoadingStyled>
    )
  else if (products) return <FilterableProduct products={products} />
  else
    return (
      <ErrorFallback>{error?.message || 'product unavailable'}</ErrorFallback>
    )
}

export default App
