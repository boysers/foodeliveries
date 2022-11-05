export type ProductCart = Pick<Product, 'id'> & { quantity: number }
export type Category = string

export interface Product {
  id: number
  title: string
  price: number
  description: string
  category: Category
  image: string
  rating: Rating
}

interface Rating {
  rate: number
  count: number
}
