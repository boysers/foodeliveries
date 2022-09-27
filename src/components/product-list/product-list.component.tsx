import React, { FC } from 'react'
import { Product } from '../../types/product.type'
import { MemoizedProductCard } from '../product-card/product-card.component'
import { FilterName } from '../filterable-product/filterable-product.component'
import styled from 'styled-components'

type PropsProductList = { products?: Product[]; filterName: FilterName }

const Grid = styled.div`
  max-width: 1300px;
  width: 80%;
  height: auto;
  margin: 30px auto;

  display: grid;
  grid-template-columns: repeat(auto-fill, 160px);
  justify-content: center;
  grid-gap: 1rem;
`

export const ProductList: FC<PropsProductList> = ({ products, filterName }) => {
  if (!products) return null

  const newProducts: JSX.Element[] = []
  products.forEach((product) => {
    const { title } = product

    if (!title.toLowerCase().includes(filterName)) return

    newProducts.push(<MemoizedProductCard key={product.id} product={product} />)
  })

  return <Grid className="grille">{newProducts}</Grid>
}
