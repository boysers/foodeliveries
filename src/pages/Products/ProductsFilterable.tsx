import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import { Box, Divider, SelectChangeEvent } from '@/lib/material-ui'
import { useProductsContext } from '@/context'
import { CheckboxSearchBar, SelectSearchBar } from '@/components'
import { Product, SortBy } from '@/types'
import { toUpperCaseFirstLetter } from '@/utils'
import { ProductList } from './ProductList'

type PropsProductsFilterable = {
  products: Product[]
}

export type FilterName = string
export type FilterCategorie = string

const StyledReseachBar = styled.div`
  width: 200px;
  height: calc(100vh - 64px);
  display: flex;
  flex-direction: column;
  padding: 16px 0;

  position: sticky;
  top: 64px;
  left: 0;
`
export const ProductsFilterable: React.FC<PropsProductsFilterable> = ({
  products
}) => {
  if (!products?.length) throw new Error('products unavailable !')

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

  const onHandleChangeListCategory: (index: number, checked: boolean) => void =
    useCallback(
      (id) =>
        setFilterListCategorie((prev) =>
          prev.map((cate, index) => (index !== id ? cate : !cate))
        ),
      []
    )

  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
      <StyledReseachBar>
        <CheckboxSearchBar
          label="Category"
          listCategory={categories.map((cate) => toUpperCaseFirstLetter(cate))}
          value={filterListCategorie}
          onChange={onHandleChangeListCategory}
        />

        <Divider sx={{ margin: '16px 0' }} />

        <SelectSearchBar
          label="Sort by"
          words={[SortBy.ASCENDING_PRICE, SortBy.DECREASING_PRICE]}
          value={filterSortBy}
          onChance={onHandleChangeSortBy}
        >
          Sort by
        </SelectSearchBar>
      </StyledReseachBar>

      <Box style={{ width: '100%', padding: '16px 0' }}>
        <ProductList
          products={products}
          filterName={''}
          filterSortBy={filterSortBy}
          filterCheckboxCategories={filterListCategorie}
        />
      </Box>
    </Box>
  )
}
