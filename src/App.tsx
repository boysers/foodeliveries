import React from 'react'
import { useFetch } from './hooks/use-fetch'
import { Product } from './types/product.type'
import { ProductsPage } from './components/products-page/products-page.component'
import { Loader } from './components/loader/loader.component'

import { Header } from './components/header/header.component'
import { ColorModeProvider } from './contexts/color-mode.context'

function App() {
  const [loading, products, error] = useFetch<Product[]>(
    'https://fakestoreapi.com/products'
  )

  return (
    <ColorModeProvider>
      <Header />
      {loading ? (
        <Loader />
      ) : (
        <ProductsPage products={products} error={error} />
      )}
    </ColorModeProvider>
  )
}

export default App
