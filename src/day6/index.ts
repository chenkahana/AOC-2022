import { getLinesFromInput } from '../utils'

export const day6part1 = (input?: string[]) => {
  const lines = getLinesFromInput('./day6/input.txt', input)
  const linesAsArray = lines[0].split('')
  for (let i = 0; i + 4 < linesAsArray.length; i++) {
    const testedPart = new Set(linesAsArray.slice(i, i + 4))
    if (testedPart.size === 4) {
      return i + 4
    }
  }
  return -1
}

export const day6part2 = (input?: string[]) => {
  const lines = getLinesFromInput('./day6/input.txt', input)
    const linesAsArray = lines[0].split('')
  for (let i = 0; i + 14 < linesAsArray.length; i++) {
    const testedPart = new Set(linesAsArray.slice(i, i + 14))
    if (testedPart.size === 14) {
      return i + 14
    }
  }
  return -1
}
