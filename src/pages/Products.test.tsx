import { Header } from '@/components'
import {
  fireEvent,
  renderRouter,
  screen,
  TestComponent,
  waitFor
} from '@/tests/utils'
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

  it('should display the number of products', async () => {
    renderRouter('/products', routes)
    const nbrOfProduct = productsData.products.length
    await waitFor(() =>
      expect(screen.getAllByTestId('product-item').length).toBe(nbrOfProduct)
    )
  })

  it('should show header with link component', async () => {
    const routes = [
      {
        path: 'products',
        element: (
          <>
            <Header />
            <Products />
          </>
        ),
        loader: () => productsData
      },
      {
        path: '/',
        element: <TestComponent />
      }
    ]
    renderRouter('/products', routes)
    await waitFor(() => {
      const button = screen.getByText('Home')
      fireEvent.click(button)
      expect(screen.getByTestId('test-completed')).toBeTruthy()
    })
  })
})
