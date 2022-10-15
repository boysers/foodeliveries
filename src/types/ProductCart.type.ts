import { Product } from './Product.interface'

export type ProductCart = Pick<Product, 'id'> & { quantity: number }
