import React, { lazy, Suspense } from 'react'
import { Navigate, RouteObject } from 'react-router-dom'
import { App } from './App'
import { CartPage } from './cart-page/cart-page.component'
import { routingProductsPage } from './products-page/routing-products'

const pages = ['products', 'cart', 'test']

const TestPage = lazy(() =>
  import('./test-page/test-page.component').then((module) => ({
    default: module.TestPage
  }))
)

export const routingApp: RouteObject[] = [
  {
    path: '/',
    element: <App pages={pages} />,
    children: [
      {
        index: true,
        element: <Navigate to="products" replace />
      },
      {
        path: 'products',
        children: routingProductsPage
      },
      {
        path: 'cart',
        element: <CartPage />
      },
      {
        path: 'test',
        element: <Suspense children={<TestPage />} />
      },
      {
        path: '*',
        element: <Navigate to="/" replace />
      }
    ]
  }
]
