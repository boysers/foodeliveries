import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'
import { FallbackErrorComponent, ProductsFilterable } from '@/components'
import { Category, Product } from '@/types'

export const Products: React.FC = () => {
  const foodList = useLoaderData() as Product[]

  const categoryList = foodList.reduce<Category[]>(
    (acc, food) =>
      acc.includes(food.category) ? acc : acc.concat(food.category),
    []
  )

  return (
    <ErrorBoundary FallbackComponent={FallbackErrorComponent}>
      <ProductsFilterable products={foodList} categories={categoryList} />
    </ErrorBoundary>
  )
}
