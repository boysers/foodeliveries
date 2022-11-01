export function toStringSlice(str: string, nbrOfCharacter = 50): string {
  if (str.length < nbrOfCharacter) return str

  return str.slice(0, nbrOfCharacter - 3) + '...'
}
