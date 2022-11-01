import React, { memo, useMemo } from 'react'
import styled from 'styled-components'
import { useProductsContext } from '@/context'
import { Product, SortBy } from '@/types'
import { ProductCard } from './ProductCard'
import { FilterName } from './ProductsFilterable'

type PropsProductList = {
  products: Product[]
  filterName: FilterName
  filterSortBy: string
  filterCheckboxCategories: boolean[]
}

const Grid = styled.div`
  height: auto;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, 270px);
  justify-content: center;
  grid-gap: 1rem;
`
const ProductGrid = styled.p`
  grid-column: 1 / -1;
  margin: 0;
`

const MemoizedProductCard = memo(ProductCard)

export const ProductList: React.FC<PropsProductList> = ({
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
      <ProductGrid>
        <span style={{ fontWeight: 700 }}>{products.length}</span> Products
      </ProductGrid>
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
              return a.title < b.title ? -1 : 0
          }
        })
        .map((sortProduct) => (
          <MemoizedProductCard key={sortProduct.id} product={sortProduct} />
        ))}
    </Grid>
  )
}
