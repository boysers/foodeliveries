import { renderRouter, screen } from '@/tests/utils'
import { NotFoundPage } from './NotFoundPage'

describe('The not found page Component', () => {
  const routes = [
    {
      path: '*',
      element: <NotFoundPage />
    }
  ]

  it('should show 404', () => {
    renderRouter('/404', routes)
    expect(screen.getByRole('heading', { level: 1, name: '404' })).toBeTruthy()
  })

  it('should display the 404 error message', () => {
    renderRouter('/not_found', routes)
    expect(screen.getByText('This Page Not Found!')).toBeTruthy()
  })

  it('should show back home button', () => {
    renderRouter('/not_found', routes)
    expect(screen.getByTestId('button-home')).toBeTruthy()
  })
})
