import { Product } from './Product'

export type HomeLoaderData = {
  productOne: Product
  productTwo: Product
  similarCategoryProducts: Product[]
}

export type ProductsLoaderData = { products: Product[] }

export type SingleProductLoaderData = {
  product: Product
  similarCategoryProducts: Product[]
}
