import React, { FC, useCallback, useState } from 'react'
import { Product } from '../../types/product.type'
import { HandleChange } from '../../types/handle-change.type'
import { SearchBar } from '../search-bar/search-bar.component'
import { ProductList } from './product-list.component'

export type FilterName = string
type PropsProductsFilterable = { products: Product[] }

export const ProductsFilterable: FC<PropsProductsFilterable> = ({
  products
}) => {
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
