import { Navigate, RouteObject } from 'react-router-dom'
import { App } from './App'
import {
  Home,
  NotFoundPage,
  Products,
  SingleProduct,
  Successful
} from './pages'
import { homeLoader, productsLoader, singleProductLoader } from './loaders'
import { NotFound } from './components'

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: homeLoader
      },
      {
        path: 'products',
        children: [
          {
            index: true,
            element: <Products />,
            loader: productsLoader
          },
          {
            path: ':id',
            element: <SingleProduct />,
            errorElement: <NotFound />,
            loader: singleProductLoader
          }
        ]
      },
      {
        path: 'successful',
        element: <Successful />
      },
      {
        path: 'not_found',
        element: <NotFoundPage />
      },
      {
        path: '*',
        element: <Navigate to="not_found" replace />
      }
    ]
  }
]
