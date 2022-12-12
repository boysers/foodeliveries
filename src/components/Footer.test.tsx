import { renderComponent, screen } from '@/tests/utils'
import { Footer } from './Footer'

describe('The footer component', () => {
  it('should display footer', () => {
    renderComponent(<Footer />)
    const expected = `© ${new Date().getFullYear()} Foodelivery`
    expect(screen.getByText(expected)).toBeTruthy()
  })
})
