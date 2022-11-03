import React from 'react'
import { Outlet } from 'react-router-dom'
import { SnackbarProvider } from 'notistack'
import { Container } from '@/lib/material-ui'
import { Header } from '@/components'
import {
  ColorModeProvider,
  ProductsProvider,
  ShoppingCartProvider
} from '@/context'

export const App: React.FC = () => {
  return (
    <ColorModeProvider>
      <ProductsProvider>
        <ShoppingCartProvider>
          <SnackbarProvider maxSnack={3}>
            <Header />
            <Container maxWidth="xl">
              <Outlet />
            </Container>
          </SnackbarProvider>
        </ShoppingCartProvider>
      </ProductsProvider>
    </ColorModeProvider>
  )
}
