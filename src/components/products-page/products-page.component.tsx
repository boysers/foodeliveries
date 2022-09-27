import React, { FC, useContext } from 'react'
import styled from 'styled-components'
import { ProductsContext } from '../../contexts/products.context'
import { Loader } from '../loader/loader.component'
import { ProductsFilterable } from './products-filterable.component'

type PropsProductsPage = {}

const Main = styled.div`
  padding-top: 64px;
`
const Title = styled.h2`
  text-align: center;
  font-size: 40px;
  margin: 40px 0;
`

export const ProductsPage: FC<PropsProductsPage> = () => {
  const { loading } = useContext(ProductsContext)

  return (
    <Main>
      <Title>Product List</Title>
      {loading ? <Loader /> : <ProductsFilterable />}
    </Main>
  )
}
