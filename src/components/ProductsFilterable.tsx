import React, { useCallback, useState, memo } from 'react'
import styled from 'styled-components'
import { Box, Divider, SelectChangeEvent } from '@/lib/material-ui'
import { CheckboxSearchBar, SelectSearchBar } from '@/components'
import { Product, SortBy, Category } from '@/types'
import { toUpperCaseFirstLetter } from '@/utils'
import { ProductCard } from './ProductCard'

type ProductsFilterableProps = {
  products: Product[]
  categories: Category[]
}

const FilterByStyled = styled.div`
  padding: 16px 0;
  width: 210px;
  height: calc(100vh - 64px);
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 64px;
  left: 0;
`

const GridStyled = styled.div`
  padding: 16px 0;
  height: auto;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, 270px);
  justify-content: center;
  grid-gap: 1rem;
`

const MemoizedProductCard = memo(ProductCard)

export const ProductsFilterable: React.FC<ProductsFilterableProps> = ({
  products,
  categories
}) => {
  const [filterSortBy, setFilteredSortBy] = useState<string>('')
  const [isFilteredCategoryList, setIsFilteredCategoryList] = useState(
    categories.map(() => false)
  )

  const onHandleChangeSortBy = useCallback(
    (e: SelectChangeEvent) => setFilteredSortBy(e.target.value),
    []
  )

  const onHandleChangeListCategory: (index: number, checked: boolean) => void =
    useCallback(
      (id) =>
        setIsFilteredCategoryList((prev) =>
          prev.map((cate, index) => (index !== id ? cate : !cate))
        ),
      []
    )

  const filteredCategories = categories.filter(
    (cate, index) => isFilteredCategoryList[index] && cate
  )

  const filteredProducts = products.filter(
    (product) =>
      (filteredCategories.find((cate) => product.category === cate) ||
        filteredCategories.length === 0) &&
      product
  )

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between'
      }}
    >
      <FilterByStyled>
        <CheckboxSearchBar
          label="Category"
          listCategory={categories.map((cate) => toUpperCaseFirstLetter(cate))}
          value={isFilteredCategoryList}
          onChange={onHandleChangeListCategory}
        />
        <Divider sx={{ margin: '16px 0' }} />
        <SelectSearchBar
          label="Sort by"
          words={[SortBy.ASCENDING_PRICE, SortBy.DECREASING_PRICE]}
          value={filterSortBy}
          onChance={onHandleChangeSortBy}
        />
      </FilterByStyled>
      <GridStyled>
        <Box sx={{ gridColumn: '1 / -1', margin: 0 }}>
          <span style={{ fontWeight: 700 }}>{filteredProducts.length}</span>{' '}
          {filteredProducts.length <= 1 ? 'product' : 'products'}
        </Box>
        {filteredProducts
          .sort((a, b) => {
            switch (filterSortBy) {
              case SortBy.ASCENDING_PRICE:
                return a.price - b.price
              case SortBy.DECREASING_PRICE:
                return b.price - a.price
              default:
                return a.title < b.title ? -1 : 0
            }
          })
          .map((sortProduct) => (
            <MemoizedProductCard key={sortProduct.id} {...sortProduct} />
          ))}
      </GridStyled>
    </Box>
  )
}
