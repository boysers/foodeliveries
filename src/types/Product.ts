export interface Product {
  id: number
  title: string
  price: number
  description: string
  category: Category
  image: string
  rating: Rating
}

export type Category = string

interface Rating {
  rate: number
  count: number
}
