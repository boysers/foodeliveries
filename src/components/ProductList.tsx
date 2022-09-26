import React, { FC } from 'react'
import './ProductList.css'
import { TypeProduct } from '../types/typeProduct'
import { FilterName } from './FilterableProduct'
import { MemoizedProduct } from './Product'

type PropsProductList = { products: TypeProduct[]; filterName: FilterName }

export const ProductList: FC<PropsProductList> = ({ products, filterName }) => {
  const newProducts: JSX.Element[] = []

  products.forEach((product) => {
    const { title } = product

    if (!title.toLowerCase().includes(filterName)) return

    newProducts.push(<MemoizedProduct key={product.id} product={product} />)
  })

  return <div className="grille">{newProducts}</div>
}
