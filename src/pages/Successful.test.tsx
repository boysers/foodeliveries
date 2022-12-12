import { render, screen } from '@/tests/utils'

describe('The successful component', () => {
  it('should show a successful message', () => {
    render('/successful')
    expect(screen.getByText('Successfully Purchase')).toBeTruthy()
  })
})
