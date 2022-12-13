import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { ColorModeProvider, ShoppingCartProvider } from './contexts'
import { Container, SnackbarProvider } from './lib/material-ui'
import { Footer, Header } from './components'

export const App: React.FC = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

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
