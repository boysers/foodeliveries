import { render, screen } from '@/tests/utils'

describe('The not found page Component', () => {
  it('should show 404', () => {
    render('/404')
    expect(screen.getByRole('heading', { level: 1, name: '404' })).toBeTruthy()
  })

  it('should display the 404 error message', () => {
    render('/not_found')
    expect(screen.getByText('This Page Not Found!')).toBeTruthy()
  })

  it('should show back home button', () => {
    render('/not_found')
    expect(screen.getByTestId('button-home')).toBeTruthy()
  })
})
