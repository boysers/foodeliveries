import { NotFound } from '@/components'
import { renderRouter, screen, waitFor } from '@/tests/utils'
import singleProduct from '@/tests/utils/data/singleProduct'
import { RouteObject } from 'react-router-dom'
import { SingleProduct } from './SingleProduct'

describe('The single product component', () => {
  const expectedErrorMessage = 'Product Not Found'

  const routes: RouteObject[] = [
    {
      path: 'products/:id',
      element: <SingleProduct />,
      errorElement: <NotFound />,
      loader: ({ params }) => {
        if (Number(params.id) !== 1) throw new Error(expectedErrorMessage)

        return singleProduct
      }
    }
  ]

  it('should show titles foods', async () => {
    renderRouter('/products/1', routes)
    await waitFor(() => {
      expect(
        screen.getByRole('heading', {
          level: 3,
          name: 'Burger De Boeuf Et Frites'
        })
      ).toBeTruthy()
      expect(screen.getByText('Pizza')).toBeTruthy()
    })
  })

  it('should display an error message product not found', async () => {
    renderRouter('/products/not_found', routes)
    await waitFor(() => {
      expect(screen.getByText(expectedErrorMessage)).toBeTruthy()
    })
  })
})
