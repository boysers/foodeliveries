import { LoaderFunctionArgs } from 'react-router-dom'
import foodList from './data/foodList.json'
import {
  HomeLoaderData,
  Product,
  ProductsLoaderData,
  SingleProductLoaderData
} from './types'

export function homeLoader(): HomeLoaderData {
  const selectedFoods: Product[] = []

  for (let i = 0; i < foodList.length; i++) {
    const food = foodList[Math.floor(Math.random() * foodList.length)]

    if (food.category !== selectedFoods[0]?.category) selectedFoods.push(food)

    if (selectedFoods.length >= 2) break
  }

  const selectedFoodsString = selectedFoods.reduce(
    (acc, food, idx, array) =>
      (acc += `${food.category}|${food.id}${
        array.length !== idx + 1 ? '|' : ''
      }`),
    ''
  )

  const regex = new RegExp(`(${selectedFoodsString})$`)

  const similarCategoryProducts = foodList.filter(
    (food) => regex.test(food.category) && !regex.test(food.id.toString())
  )

  const [productOne, productTwo] = selectedFoods

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
