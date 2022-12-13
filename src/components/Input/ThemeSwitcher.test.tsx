import { fireEvent, renderComponent, screen } from '@/tests/utils'
import { ThemeSwitcher } from './ThemeSwitcher'

describe('The theme switcher component', () => {
  it('should change theme', async () => {
    renderComponent(<ThemeSwitcher isText />)
    expect(screen.getByText('Light Theme')).toBeTruthy()
    fireEvent.click(screen.getByRole('checkbox'))
    expect(screen.getByText('Dark Theme')).toBeTruthy()
  })
})
