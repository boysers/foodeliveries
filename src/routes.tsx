import { Navigate, RouteObject } from 'react-router-dom'
import { App } from './App'
import { ShoppingCart, Products, SingleProduct } from '@/pages'
import foodList from '@/data/foodList.json'
import { NotFound } from './components'

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="products" replace />
      },
      {
        path: 'products',
        children: [
          {
            index: true,
            element: <Products />,
            loader: () => foodList
          },
          {
            path: ':id',
            element: <SingleProduct />,
            errorElement: <NotFound />,
            loader: ({ params }) =>
              foodList.find((product) => product.id === Number(params.id))
          }
        ]
      },
      {
        path: 'cart',
        element: <ShoppingCart />
      },
      {
        path: '*',
        element: <Navigate to="/" replace />
      }
    ]
  }
]
