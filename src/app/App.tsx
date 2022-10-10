import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import Container from '@mui/material/Container'
import { SnackbarProvider } from 'notistack'
import {
  ColorModeProvider,
  ProductsProvider,
  ShoppingCartProvider,
  ResearchProvider
} from './core/contexts'
import { Header } from './core/components'

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
