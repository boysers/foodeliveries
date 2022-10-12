import React, { FC, memo, useMemo } from 'react'
import styled from 'styled-components'
import { Product, useProductsContext } from '@context'
import { ProductCard } from './product-card'
import { FilterName } from './products-filterable'

enum SortBy {
  ASCENDING_PRICE = 'ascending price',
  DECREASING_PRICE = 'decreasing price',
  AVERAGE_RATING = 'average rating'
}

type PropsProductList = {
  products: Product[]
  filterName: FilterName
  filterSortBy: string
  filterCheckboxCategories: boolean[]
}

const Grid = styled.div`
  height: auto;
  width: 100%;
  margin: 30px auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, 270px);
  justify-content: center;
  grid-gap: 1rem;
`

const MemoizedProductCard = memo(ProductCard)

export const ProductList: FC<PropsProductList> = ({
  products,
  filterName,
  filterSortBy,
  filterCheckboxCategories
}) => {
  const { categories } = useProductsContext()

  const cates = useMemo(
    () =>
      categories.filter(
        (cate, index) => filterCheckboxCategories[index] && cate
      ),
    [categories, filterCheckboxCategories]
  )

  return (
    <Grid>
      {products
        .filter(
          (product) =>
            product.title.toLowerCase().includes(filterName) &&
            (cates.find((cate) => product.category === cate) ||
              cates.length === 0) &&
            product
        )
        .sort((a, b) => {
          switch (filterSortBy) {
            case SortBy.ASCENDING_PRICE:
              return a.price - b.price
            case SortBy.DECREASING_PRICE:
              return b.price - a.price
            case SortBy.AVERAGE_RATING:
              return b.rating.rate - a.rating.rate
            default:
              return a.id - b.id
          }
        })
        .map((sortProduct) => (
          <MemoizedProductCard key={sortProduct.id} product={sortProduct} />
        ))}
    </Grid>
  )
}
