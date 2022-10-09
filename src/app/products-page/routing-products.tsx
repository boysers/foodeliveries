import { RouteObject } from 'react-router-dom'
import { TestPage } from '../test-page/test-page.component'
import { ProductsPage } from './products-page.component'

export const routingProductsPage: RouteObject[] = [
  {
    index: true,
    element: <ProductsPage />
  },
  {
    path: ':id',
    element: <TestPage />
  }
]
