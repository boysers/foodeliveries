import { toUpperCaseFirstLetter } from './toUppercaseFirstLetter'

describe('#toUpperCaseFirstLetter', () => {
  it('return a word with the first letter capitalized', () => {
    expect(toUpperCaseFirstLetter('voiture')).equal('Voiture')
  })

  it('returns a sentence with the first letter of each word capitalized', () => {
    expect(toUpperCaseFirstLetter("J'ai une grande maison")).equal(
      "J'ai Une Grande Maison"
    )
  })

  it('returns "3 2 1" in string', () => {
    expect(toUpperCaseFirstLetter('3 2 1')).equal('3 2 1')
  })

  it('returns the same word', () => {
    expect(toUpperCaseFirstLetter('BaiGnoire')).equal('BaiGnoire')
  })
})
