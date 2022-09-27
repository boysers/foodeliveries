import React from 'react'
import { ProductsPage } from './components/products-page/products-page.component'
import { Header } from './components/header/header.component'
import { ColorModeProvider } from './contexts/color-mode.context'
import { ProductsProvider } from './contexts/products.context'

function App() {
  return (
    <ProductsProvider>
      <ColorModeProvider>
        <Header />
        <ProductsPage />
      </ColorModeProvider>
    </ProductsProvider>
  )
}

export default App
