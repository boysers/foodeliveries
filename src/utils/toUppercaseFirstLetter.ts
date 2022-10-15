export function toUpperCaseFirstLetter(str: string): string {
  const arr = str.split(' ')

  const newStr = arr
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  return newStr
}
