import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { ColorModeProvider } from './core/contexts/color-mode'
import { Header } from './core/components'
import { ProductsProvider } from './core/contexts/products'
import styled from 'styled-components'

type PropsApp = { pages: string[] }

const Container = styled.div`
  padding-top: 64px;
`

export const App: FC<PropsApp> = ({ pages }) => {
  return (
    <ColorModeProvider>
      <ProductsProvider>
        <Container>
          <Header pages={pages} />
          <Outlet />
        </Container>
      </ProductsProvider>
    </ColorModeProvider>
  )
}
