import { renderRouter, screen, waitFor } from '@/tests/utils'
import productsData from '@/tests/utils/data/products'
import { Products } from './Products'

describe('The products component', () => {
  const routes = [
    {
      path: 'products',
      element: <Products />,
      loader: () => productsData
    }
  ]

  it('should', async () => {
    renderRouter('/products', routes)

    const nbrOfProduct = productsData.products.length

    await waitFor(() =>
      expect(screen.getAllByTestId('product-item').length).toBe(nbrOfProduct)
    )
  })
})
