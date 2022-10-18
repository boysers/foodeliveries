import React from 'react'
import { Outlet } from 'react-router-dom'
import { SnackbarProvider } from 'notistack'
import { Container } from '@/lib/material-ui'
import { Header } from '@/components'
import {
  ColorModeProvider,
  ProductsProvider,
  ShoppingCartProvider,
  ResearchProvider
} from '@/context'

export const App: React.FC = () => {
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
