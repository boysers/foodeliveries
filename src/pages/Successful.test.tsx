import { renderRouter, screen } from '@/tests/utils'
import { Successful } from './Successful'

describe('The successful component', () => {
  const routes = [
    {
      path: 'successful',
      element: <Successful />
    }
  ]

  it('should show a successful message', () => {
    renderRouter('/successful', routes)
    expect(screen.getByText('Successfully Purchase')).toBeTruthy()
  })
})
