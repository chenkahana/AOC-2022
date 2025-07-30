import { getLinesFromInput } from '../utils'

const abcArr = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
const abcMap = Object.fromEntries(
  abcArr.map((letter, index) => [letter, index + 1]),
)

const getCommonItemsFromCompartments = (input: string[]) => {
  return input.reduce(
    (acc, rucksack) => {
      const compartment1 = new Set(
        rucksack.slice(0, rucksack.length / 2).split(''),
      )
      const compartment2 = new Set(
        rucksack.slice(rucksack.length / 2, rucksack.length).split(''),
      )

      acc.push(
        abcArr.reduce((acc2, letter) => {
          if (
            acc2.length < 1 &&
            compartment1.has(letter) &&
            compartment2.has(letter)
          ) {
            acc2 += letter
          }
          return acc2
        }, ''),
      )
      return acc
    },
    [''],
  )
}

const getCommonFromGroup = (group: Set<string>[]) => {
  return abcArr.reduce((acc2, letter) => {
    if (
      acc2.length < 1 &&
      group[0].has(letter) &&
      group[1].has(letter) &&
      group[2].has(letter)
    ) {
      acc2 += letter
    }
    return acc2
  }, '')
}

const getCommonItemsFromGroups = (input: string[]) => {
  let group: Set<string>[] = []
  return input.reduce(
    (acc, line) => {
      group.push(new Set(line.split('')))
      if (group.length === 3) {
        acc.push(getCommonFromGroup(group))
        group = []
      }
      return acc
    },
    [''],
  )
}

export const day3part1 = (input?: string[]) => {
  const lines = getLinesFromInput('./day3/input.txt', input)
  const commonItems = getCommonItemsFromCompartments(lines)
    .filter((item) => item !== '')
    .map((item) => abcMap[`${item}`])
  return commonItems.reduce((acc, item) => {
    acc += item
    return acc
  }, 0)
}

export const day3part2 = (input?: string[]) => {
  const lines = getLinesFromInput('./day3/input.txt', input)
  const commonItems = getCommonItemsFromGroups(lines)
    .filter((item) => item !== '')
    .map((item) => abcMap[`${item}`])
  return commonItems.reduce((acc, item) => {
    acc += item
    return acc
  }, 0)
}
