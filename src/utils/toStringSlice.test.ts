import { toStringSlice } from './toStringSlice'

describe('#toStringSlice', () => {
  it('must not return the word with dots', () => {
    expect(toStringSlice('camion', 20)).equal('camion')
  })

  it('return the word with dots', () => {
    expect(toStringSlice('Normalement tu dois couper la phrase ici', 40)).equal(
      'Normalement tu dois couper la phrase ...'
    )
  })

  it('return the same number of cut letters', () => {
    const end = 40
    const sentence = toStringSlice(
      'Normalement tu dois couper la phrase ici',
      end
    )

    expect(sentence.length).equal(end)
  })
})
