import { Product } from './Product.interface'

export interface Order {
  id: string
  address: string
  delivery: Delivery
  products: ProductOrder[]
  price: Price
}

interface Delivery {
  date: Date
  address: string
  status: boolean
  price: number
}

interface ProductOrder {
  id: Pick<Product, 'id'>
  name: string
  price: number
}

interface Price {
  ht: number
  tva: number
  ttc: number
}
