import { LoaderFunctionArgs } from 'react-router-dom'
import foodList from './data/foodList.json'
import {
  HomeLoaderData,
  ProductsLoaderData,
  SingleProductLoaderData
} from './types'

export function homeLoader(): HomeLoaderData {
  const productOne = foodList[Math.floor(Math.random() * foodList.length)]
  const filtered = foodList.filter((food) => food.id !== productOne.id)
  const productTwo = filtered[Math.floor(Math.random() * filtered.length)]
  const filteredWithoutFoodSelected = foodList.filter(
    (food) => food.id !== productOne.id && food.id !== productTwo.id
  )

  const regexCategories = new RegExp(
    `${productOne.category}|${productTwo.category}`
  )

  const similarCategoryProducts = filteredWithoutFoodSelected.filter((food) => {
    if (regexCategories.test(food.category)) return food
  })

  return {
    productOne,
    productTwo,
    similarCategoryProducts
  }
}

export function productsLoader(): ProductsLoaderData {
  return { products: foodList }
}

export function singleProductLoader({
  params
}: LoaderFunctionArgs): SingleProductLoaderData {
  const product = foodList.find((product) => product.id === Number(params.id))

  if (!product) throw new Error('Product not found')

  const similarCategoryProducts = foodList
    .filter(
      (food) => food.category === product.category && food.id !== product.id
    )
    .slice(0, 5)

  return { product, similarCategoryProducts }
}
