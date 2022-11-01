import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import { SelectChangeEvent } from '@/lib/material-ui'
import { useResearchContext, useProductsContext } from '@/context'
import { CheckboxSearchBar, SelectSearchBar } from '@/components'
import { Product } from '@/types'
import { ProductList } from './ProductList'

type PropsProductsFilterable = {
  products: Product[]
}

export type FilterName = string
export type FilterCategorie = string

const StyledContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 16px auto;
`
const StyledReseachBar = styled.div`
  width: 200px;
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;

  position: sticky;
  top: 80px;
  left: 0;
`
import Divider from '@mui/material/Divider'
export const ProductsFilterable: React.FC<PropsProductsFilterable> = ({
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

  const onHandleChangeListCategory: (index: number, checked: boolean) => void =
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
          label="Category"
          listCategorie={categories}
          value={filterListCategorie}
          onChange={onHandleChangeListCategory}
        />

        <Divider sx={{ margin: '16px 0' }} variant="fullWidth" />

        <SelectSearchBar
          label="Sort by"
          words={['ascending price', 'decreasing price', 'average rating']}
          value={filterSortBy}
          onChance={onHandleChangeSortBy}
        >
          Sort by
        </SelectSearchBar>
      </StyledReseachBar>

      <div style={{ width: '100%' }}>
        <ProductList
          products={products}
          filterName={state.search}
          filterSortBy={filterSortBy}
          filterCheckboxCategories={filterListCategorie}
        />
      </div>
    </StyledContainer>
  )
}
