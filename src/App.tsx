import React from 'react'
import { Outlet } from 'react-router-dom'
import { ColorModeProvider, ShoppingCartProvider } from './context'
import { Container, SnackbarProvider } from './lib/material-ui'
import { Footer, Header } from './components'

export const App: React.FC = () => {
  return (
    <ColorModeProvider>
      <ShoppingCartProvider>
        <SnackbarProvider maxSnack={3}>
          <Header />
          <Container maxWidth="xl">
            <Outlet />
          </Container>
          <Footer />
        </SnackbarProvider>
      </ShoppingCartProvider>
    </ColorModeProvider>
  )
}
