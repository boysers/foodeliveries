import {
  fireEvent,
  renderRouter,
  screen,
  TestComponent,
  waitFor
} from '@/tests/utils'
import { Home } from './Home'
import dataHome from '@/tests/utils/data/home'

describe('The home component', () => {
  const routes = [
    {
      path: '/',
      element: <Home />,
      loader: () => dataHome
    },
    {
      path: '/products',
      element: <TestComponent />
    }
  ]

  it('should display the "Découvrir" button and it should click on the button to go to the products page', async () => {
    renderRouter('/', routes)
    await waitFor(() => {
      const button = screen.getByTestId('button')
      expect(button).toBeTruthy()
      fireEvent.click(button)
      expect(screen.findByTestId('test-completed')).toBeTruthy()
    })
  })

  it('should display title foods', async () => {
    renderRouter('/', routes)
    await waitFor(() => {
      expect(screen.getByText('Velouté De Courgette Aux Gratons')).toBeTruthy()
      expect(screen.getByText('Burger De Boeuf Et Frites')).toBeTruthy()
    })
  })

  it('should show all food categories select', async () => {
    renderRouter('/', routes)
    await waitFor(() => {
      expect(screen.getAllByTestId('category').length).toBe(2)
      expect(screen.getAllByTestId('cate-title')[0].textContent).toBe('Plat')
      expect(screen.getAllByTestId('cate-title')[1].textContent).toBe('Entrée')
    })
  })
})
