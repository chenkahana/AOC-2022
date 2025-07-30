import { getLinesFromInput } from '../utils'

const getPairsToSectionArr = (lines: string[]) => {
  return lines.reduce((acc, line) => {
    const elves = line.split(',')
    const elf1 = elves[0].split('-').map((value) => Number(value))
    const elf2 = elves[1].split('-').map((value) => Number(value))
    acc.push([
      { start: elf1[0], end: elf1[1] },
      { start: elf2[0], end: elf2[1] },
    ])
    return acc
  }, [])
}

export const day4part1 = (input?: string[]) => {
  const lines = getLinesFromInput('./day4/input.txt', input)
  const pairsToSectionArr = getPairsToSectionArr(lines).filter((pair) => Object.keys(pair).length > 0)
  return pairsToSectionArr.reduce((acc, pair) => {
    const range1 = pair[0]
    const range2 = pair[1]

    if (
      (range1.start <= range2.start && range1.end >= range2.end) ||
      (range2.start <= range1.start && range2.end >= range1.end)
    ) {
      console.log({ elf1: range1, elf2: range2 })
      acc += 1
    }
    return acc
  }, 0)
}

export const day4part2 = (input?: string[]) => {
  const lines = getLinesFromInput('./day4/input.txt', input)
  const pairsToSectionArr = getPairsToSectionArr(lines).filter((pair) => Object.keys(pair).length > 0)
  return pairsToSectionArr.reduce((acc, pair) => {
    const range1 = pair[0]
    const range2 = pair[1]

    if (
      (range1.start <= range2.start && range1.end >= range2.end) ||
      (range2.start <= range1.start && range2.end >= range1.end) ||
      (range1.start >= range2.start && range1.start <= range2.end) ||
      (range2.start >= range1.start && range2.start <= range1.end)
    ) {
      acc += 1
    }
    return acc
  }, 0)
}
