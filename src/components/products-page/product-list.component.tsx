import React, { FC, memo } from 'react'
import { Product } from '../../types/product.type'
import { ProductCard } from './product-card.component'
import { FilterName } from './products-filterable.component'
import styled from 'styled-components'

type PropsProductList = { products: Product[]; filterName: FilterName }

const Grid = styled.div`
  max-width: 1300px;
  width: 80%;
  height: auto;
  margin: 30px auto;

  display: grid;
  grid-template-columns: repeat(auto-fill, 270px);
  justify-content: center;
  grid-gap: 1rem;
`

const MemoizedProductCard = memo(ProductCard)

export const ProductList: FC<PropsProductList> = ({ products, filterName }) => {
  const cards: JSX.Element[] = []

  products.forEach((product) => {
    const { title } = product

    if (!title.toLowerCase().includes(filterName)) return

    cards.push(<MemoizedProductCard key={product.id} product={product} />)
  })

  return <Grid>{cards}</Grid>
}
