import React from 'react'
import './App.css'
import { useFetch } from './hooks/useFetch'
import { FilterableProduct } from './components/FilterableProduct'

function App() {
  const [products, loading] = useFetch('https://fakestoreapi.com/products')

  return (
    <div>
      {!loading ? (
        <FilterableProduct products={products} />
      ) : (
        <p className="loading">Loading...</p>
      )}
    </div>
  )
}

export default App
