import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '@/components'
import { ColorModeProvider, ShoppingCartProvider } from '@/context'
import { Container, SnackbarProvider } from '@/lib/material-ui'

export const App: React.FC = () => {
  return (
    <ColorModeProvider>
      <ShoppingCartProvider>
        <SnackbarProvider maxSnack={3}>
          <Header />
          <Container maxWidth="xl">
            <Outlet />
          </Container>
        </SnackbarProvider>
      </ShoppingCartProvider>
    </ColorModeProvider>
  )
}
