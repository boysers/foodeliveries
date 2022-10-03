import React, { FC, memo } from 'react'
import { Product } from '../../core/contexts/products/product.interface'
import { ProductCard } from '../product-card/product-card.component'
import {
  FilterCategorie,
  FilterName
} from '../products-filterable/products-filterable.component'
import styled from 'styled-components'

type PropsProductList = {
  products: Product[]
  filterName: FilterName
  filterCategorie: FilterCategorie
}

const Grid = styled.div`
  max-width: 1600px;
  width: 80%;
  height: auto;
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
  filterCategorie
}) => {
  return (
    <Grid>
      {products.map(
        (product) =>
          !(
            (filterCategorie && product.category !== filterCategorie) ||
            !product.title.toLowerCase().includes(filterName)
          ) && <MemoizedProductCard key={product.id} product={product} />
      )}
    </Grid>
  )
}
