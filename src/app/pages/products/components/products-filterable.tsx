import React, { FC, useCallback, useState } from 'react'
import styled from 'styled-components'
import { SelectChangeEvent } from '@mui/material/Select'
import {
  Product,
  useResearchContext,
  useProductsContext
} from '../../../core/contexts'
import { CheckboxSearchBar, SelectSearchBar } from '../../../core/components'
import { ProductList } from './product-list'

type PropsProductsFilterable = {
  products?: Product[]
}

export type FilterName = string
export type FilterCategorie = string

const StyledContainer = styled.div`
  display: flex;
`
const StyledReseachBar = styled.div`
  width: 200px;
`

export const ProductsFilterable: FC<PropsProductsFilterable> = ({
  products
}) => {
  if (!products?.length) throw new Error('products unavailable !')

  const { state } = useResearchContext()
  const { categories } = useProductsContext()

  // filter
  const [filterSortBy, setFilterSortBy] = useState<FilterCategorie>('')
  const [filterListCategorie, setFilterListCategorie] = useState<boolean[]>(
    categories.map(() => false)
  )

  const onHandleChangeSortBy = useCallback(
    (e: SelectChangeEvent) => setFilterSortBy(e.target.value),
    []
  )

  const onHandleChangeListCategorie: (index: number, checked: boolean) => void =
    useCallback(
      (id) =>
        setFilterListCategorie((prev) =>
          prev.map((cate, index) => (index !== id ? cate : !cate))
        ),
      []
    )

  return (
    <StyledContainer>
      <StyledReseachBar>
        <CheckboxSearchBar
          label="categories"
          listCategorie={categories}
          value={filterListCategorie}
          onChange={onHandleChangeListCategorie}
        />

        <SelectSearchBar
          label="Sort by"
          words={['ascending price', 'decreasing price', 'average rating']}
          value={filterSortBy}
          onChance={onHandleChangeSortBy}
        >
          Sort by
        </SelectSearchBar>
      </StyledReseachBar>

      <ProductList
        products={products}
        filterName={state.search}
        filterSortBy={filterSortBy}
        filterCheckboxCategories={filterListCategorie}
      />
    </StyledContainer>
  )
}
