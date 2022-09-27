import React from 'react'
import { useFetch } from './hooks/use-fetch'
import { Product } from './types/product.type'
import { ProductsPage } from './components/products-page/products-page.component'
import { Loader } from './components/loader/loader.component'

function App() {
  const [loading, products, error] = useFetch<Product[]>(
    'https://fakestoreapi.com/products'
  )

  return loading ? (
    <Loader />
  ) : (
    <ProductsPage products={products} error={error} />
  )
}

export default App
