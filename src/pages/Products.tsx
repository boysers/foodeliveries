import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { FallbackErrorComponent, ProductsFilterable } from '@/components'
import { Category, ProductsLoaderData } from '@/types'
import { useLoaderData } from '@/hooks'

export const Products: React.FC = () => {
  const { products } = useLoaderData<ProductsLoaderData>()

  const categoryList = products.reduce<Category[]>(
    (acc, food) =>
      acc.includes(food.category) ? acc : acc.concat(food.category),
    []
  )

  return (
    <ErrorBoundary FallbackComponent={FallbackErrorComponent}>
      <ProductsFilterable products={products} categories={categoryList} />
    </ErrorBoundary>
  )
}
