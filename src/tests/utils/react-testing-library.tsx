import React from 'react'
import { render } from '@testing-library/react'
import {
  createMemoryRouter,
  Outlet,
  RouteObject,
  RouterProvider,
  MemoryRouter
} from 'react-router-dom'
import { AllProvider } from './AllProvider'

const AppTest: React.FC = () => {
  return (
    <>
      <AllProvider>
        <Outlet />
      </AllProvider>
    </>
  )
}

export const renderRouter = (path: string, children: RouteObject[]) => {
  const router = createMemoryRouter(
    [{ path: '/', element: <AppTest />, children }],
    {
      initialEntries: [path],
      initialIndex: 0
    }
  )

  return render(<RouterProvider router={router} />)
}

export const renderComponent = (children: React.ReactNode) => {
  return render(
    <MemoryRouter>
      <AllProvider>{children}</AllProvider>
    </MemoryRouter>
  )
}

export { screen, fireEvent, waitFor } from '@testing-library/react'
