import { ColorModeProvider, ShoppingCartProvider } from '@/contexts'
import { SnackbarProvider } from 'notistack'
import React, { PropsWithChildren } from 'react'

export const AllProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <ColorModeProvider>
      <ShoppingCartProvider>
        <SnackbarProvider maxSnack={3}>{children}</SnackbarProvider>
      </ShoppingCartProvider>
    </ColorModeProvider>
  )
}
