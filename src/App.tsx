import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Container } from '@mui/material'
import { SnackbarProvider } from 'notistack'
import {
  ColorModeProvider,
  ProductsProvider,
  ShoppingCartProvider,
  ResearchProvider
} from './context'
import { Header } from './components'

export const App: FC = () => {
  return (
    <ColorModeProvider>
      <ProductsProvider>
        <ShoppingCartProvider>
          <SnackbarProvider maxSnack={3}>
            <ResearchProvider>
              <Header />
              <Container maxWidth="xl">
                <Outlet />
              </Container>
            </ResearchProvider>
          </SnackbarProvider>
        </ShoppingCartProvider>
      </ProductsProvider>
    </ColorModeProvider>
  )
}
