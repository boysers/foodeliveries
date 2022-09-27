import React, { FC, useCallback, useContext, useState } from 'react'
import { HandleChange } from '../../types/handle-change.type'
import { SearchBar } from '../search-bar/search-bar.component'
import { ProductList } from './product-list.component'
import { ProductsContext } from '../../contexts/products.context'
import { ErrorFallback } from '../error-fallback/error-fallback.component'

export type FilterName = string
type PropsProductsFilterable = {}

export const ProductsFilterable: FC<PropsProductsFilterable> = () => {
  const { error, products } = useContext(ProductsContext)

  const [filterName, setFilterName] = useState<FilterName>('')

  const onHandleChange: HandleChange = useCallback((e) => {
    const { value } = e.target
    setFilterName(value.toLowerCase())
  }, [])

  return (
    <>
      <SearchBar
        value={filterName}
        onChange={onHandleChange}
        id="search"
        label="Search"
      />
      {error ? (
        <ErrorFallback>{error.message}</ErrorFallback>
      ) : products ? (
        <ProductList products={products} filterName={filterName} />
      ) : (
        <ErrorFallback>products unavailable</ErrorFallback>
      )}
    </>
  )
}
