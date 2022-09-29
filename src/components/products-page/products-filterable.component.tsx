import React, { FC, useCallback, useContext, useEffect, useState } from 'react'
import { HandleChange } from '../../types/handle-change.type'
import { SearchBar } from '../search-bar/search-bar.component'
import { ProductList } from './product-list.component'
import { ProductsContext } from '../../contexts/products.context'
import { SelectSearchBar } from '../select-search-bar/select-search-bar.component'
import { SelectChangeEvent } from '@mui/material/Select'
import styled from 'styled-components'

export type FilterName = string
export type FilterCategorie = string
type PropsProductsFilterable = {}

const SearchBarStyled = styled.div`
  display: flex;
  justify-content: center;
`

export const ProductsFilterable: FC<PropsProductsFilterable> = () => {
  const { products } = useContext(ProductsContext)

  if (!products?.length) throw new Error('products unavailable')

  const [filterName, setFilterName] = useState<FilterName>('')
  const [filterCategorie, setFilterCategorie] = useState<FilterCategorie>('')

  const [categories, setCategories] = useState<string[]>([])

  const onHandleChangeName: HandleChange = useCallback((e) => {
    const { value } = e.target
    setFilterName(value.toLowerCase())
  }, [])

  const onHandleChangeCategorie = useCallback((e: SelectChangeEvent) => {
    setFilterCategorie(e.target.value)
  }, [])

  useEffect(() => {
    const categories = products.reduce<string[]>(
      (acc, product) =>
        acc.includes(product.category) ? acc : acc.concat(product.category),
      []
    )
    setCategories(categories)
  }, [products])

  return (
    <>
      <SearchBarStyled>
        <SearchBar
          value={filterName}
          onChange={onHandleChangeName}
          id="search"
          label="Search"
        />
        <SelectSearchBar
          label="categories"
          words={categories}
          value={filterCategorie}
          onChance={onHandleChangeCategorie}
        >
          Categories
        </SelectSearchBar>
      </SearchBarStyled>
      <ProductList
        products={products}
        filterName={filterName}
        filterCategorie={filterCategorie}
      />
    </>
  )
}
