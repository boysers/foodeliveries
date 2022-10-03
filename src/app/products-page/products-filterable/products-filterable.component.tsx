import React, { FC, useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import { SelectChangeEvent } from '@mui/material/Select'
import { FuncHandleChange } from '../../core/types'
import { SearchBar, SelectSearchBar } from '../../core/components'
import { ProductList } from '../product-list/product-list.component'
import { Product } from '../../core/contexts/products/product.interface'

export type FilterName = string
export type FilterCategorie = string

type PropsProductsFilterable = {
  products?: Product[]
}

const SearchBarStyled = styled.div`
  display: flex;
  justify-content: center;
`

export const ProductsFilterable: FC<PropsProductsFilterable> = ({
  products
}) => {
  if (!products?.length) throw new Error('products unavailable !')

  const [categories, setCategories] = useState<string[]>([])
  const [filterName, setFilterName] = useState<FilterName>('')
  const [filterCategorie, setFilterCategorie] = useState<FilterCategorie>('')

  const onHandleChangeName: FuncHandleChange = useCallback(
    (e) => setFilterName(e.target.value.toLowerCase()),
    []
  )

  const onHandleChangeCategorie = useCallback(
    (e: SelectChangeEvent) => setFilterCategorie(e.target.value),
    []
  )

  useEffect(() => {
    setCategories(
      products.reduce<string[]>(
        (acc, product) =>
          acc.includes(product.category) ? acc : acc.concat(product.category),
        []
      )
    )
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
        {/* <CheckboxSearchBar label="Categories" /> */}
      </SearchBarStyled>
      <ProductList
        products={products}
        filterName={filterName}
        filterCategorie={filterCategorie}
      />
    </>
  )
}
