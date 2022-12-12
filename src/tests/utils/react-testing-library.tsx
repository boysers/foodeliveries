import React from 'react'
import { render } from '@testing-library/react'
import {
  createMemoryRouter,
  Outlet,
  RouteObject,
  RouterProvider
} from 'react-router-dom'
import { Home, NotFoundPage, Successful } from '@/pages'
import { AllProvider } from './AllProvider'
import dataHome from './data/home'

type PathType = '/' | '/successful' | '/404' | '/not_found'

const AppTest: React.FC = () => {
  return (
    <>
      <AllProvider>
        <Outlet />
      </AllProvider>
    </>
  )
}

const routes: RouteObject[] = [
  {
    path: '/',
    element: <AppTest />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => dataHome
      },
      {
        path: 'successful',
        element: <Successful />
      },
      {
        path: '*',
        element: <NotFoundPage />
      }
    ]
  }
]

const renderCustom = (path: PathType) => {
  const router = createMemoryRouter(routes, {
    initialEntries: [path],
    initialIndex: 0
  })

  return render(<RouterProvider router={router} />)
}

export { renderCustom as render }

export {
  screen,
  fireEvent,
  waitFor,
  render as rtlRender
} from '@testing-library/react'
