import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import Container from '@mui/material/Container'
import { SnackbarProvider } from 'notistack'
import {
  ColorModeProvider,
  ProductsProvider,
  ShoppingCartProvider
} from './core/contexts'
import { Header } from './core/components'

export const App: FC<{ pages: string[] }> = ({ pages }) => {
  return (
    <ColorModeProvider>
      <ProductsProvider>
        <ShoppingCartProvider>
          <SnackbarProvider maxSnack={3}>
            <Header pages={pages} />
            <Container maxWidth="xl">
              <Outlet />
            </Container>
          </SnackbarProvider>
        </ShoppingCartProvider>
      </ProductsProvider>
    </ColorModeProvider>
  )
}
