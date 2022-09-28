import React, { FC, useCallback, useContext, useState } from 'react'
import { HandleChange } from '../../types/handle-change.type'
import { SearchBar } from '../search-bar/search-bar.component'
import { ProductList } from './product-list.component'
import { ProductsContext } from '../../contexts/products.context'

export type FilterName = string
type PropsProductsFilterable = {}

export const ProductsFilterable: FC<PropsProductsFilterable> = () => {
  const { products } = useContext(ProductsContext)

  if (!products?.length) throw new Error('products unavailable')

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
      <ProductList products={products} filterName={filterName} />
    </>
  )
}
