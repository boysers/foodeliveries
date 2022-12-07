import { toConvertPrice } from './toConvertPrice'

describe('The toConvertPrice function', () => {
  it('should 20,00 €', () => {
    expect(toConvertPrice(20)).equal('20,00 €')
  })

  it('should 5,95 €', () => {
    expect(toConvertPrice(5.95)).equal('5,95 €')
  })
})
