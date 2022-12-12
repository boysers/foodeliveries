import { renderRouter, screen, waitFor } from '@/tests/utils'
import singleProduct from '@/tests/utils/data/singleProduct'
import { SingleProduct } from './SingleProduct'

describe('The single product component', () => {
  const routes = [
    {
      path: 'products/1',
      element: <SingleProduct />,
      loader: () => singleProduct
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
})
