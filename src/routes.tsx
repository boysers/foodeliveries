import React from 'react'
import { Navigate, RouteObject } from 'react-router-dom'
import { App } from './App'
import { ProductsPage, SingleProductPage, ShoppingCartPage } from './pages'

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
            element: <ProductsPage />
          },
          {
            path: ':id',
            element: <SingleProductPage />
          }
        ]
      },
      {
        path: 'cart',
        element: <ShoppingCartPage />
      },
      {
        path: '*',
        element: <Navigate to="/" replace />
      }
    ]
  }
]
