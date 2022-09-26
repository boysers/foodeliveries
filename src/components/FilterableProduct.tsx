import React, { FC, useState } from 'react'
import './FilterableProduct.css'
import { TypeProduct } from '../types/typeProduct'

import { ProductList } from './ProductList'
import { HandleChange } from '../types/handleChange'
import { SearchBar } from './SearchBar'

type PropsProductList = { products: TypeProduct[] }
export type FilterName = string

export const FilterableProduct: FC<PropsProductList> = ({ products }) => {
  const [filterName, setFilterName] = useState<FilterName>('')

  const onHandleChange: HandleChange = (e) => {
    const { value } = e.target
    setFilterName(value.toLowerCase())
  }

  return (
    <>
      <h2 className="title">Product List</h2>
      <SearchBar filterName={filterName} onChange={onHandleChange} />
      <ProductList products={products} filterName={filterName} />
    </>
  )
}
