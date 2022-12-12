import React, { useMemo } from 'react'
import { ProductsFilterable } from '@/components'
import { Category, ProductsLoaderData } from '@/types'
import { useLoaderData } from '@/hooks'

export const Products: React.FC = () => {
  const { products } = useLoaderData<ProductsLoaderData>()

  const categories = useMemo(
    () =>
      products.reduce<Category[]>(
        (acc, food) =>
          acc.includes(food.category) ? acc : acc.concat(food.category),
        []
      ),
    [products]
  )

  return <ProductsFilterable products={products} categories={categories} />
}
