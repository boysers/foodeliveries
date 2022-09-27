import React, { FC, useCallback, useState } from 'react'
import styled from 'styled-components'
import { Product } from '../../types/product.type'
import { HandleChange } from '../../types/handle-change.type'
import { SearchBar } from '../search-bar/search-bar.component'
import { ProductList } from '../product-list/product-list.component'
import { ErrorFallback } from '../error-fallback/error-fallback.component'

type PropsProductList = { products?: Product[] }
export type FilterName = string

const Title = styled.h2`
  text-align: center;
  font-size: 40px;
  margin: 50px 0;
`

export const FilterableProduct: FC<PropsProductList> = ({ products }) => {
  const [filterName, setFilterName] = useState<FilterName>('')

  const onHandleChange: HandleChange = useCallback((e) => {
    const { value } = e.target
    setFilterName(value.toLowerCase())
  }, [])

  return (
    <>
      <Title>Product List</Title>
      {!products ? (
        <ErrorFallback>Unavailable products</ErrorFallback>
      ) : (
        <>
          <SearchBar filterName={filterName} onChange={onHandleChange} />
          <ProductList products={products} filterName={filterName} />
        </>
      )}
    </>
  )
}
