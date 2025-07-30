import { getLinesFromInput } from '../utils'

const getElvesAndCaloriesFromInput = (lines: string[]) => {
  let elfCounter = 0
  return lines.reduce(
    (acc, line) => {
      if (line === '') {
        acc.push(0)
        elfCounter++
        return acc
      }
      acc[elfCounter]
        ? (acc[elfCounter] += Number(line))
        : (acc[elfCounter] = Number(line))

      return acc
    },
    [0],
  )
}

export const day1part1 = (input?: string[]) => {
  const lines = getLinesFromInput('./day1/input.txt', input)

  const elvesTotalCalories = getElvesAndCaloriesFromInput(lines)
  return elvesTotalCalories.reduce((acc, curr) => {
    if (curr > acc) {
      acc = curr
    }
    return acc
  }, 0)
}

export const day1part2 = (input?: string[]) => {
  const lines = getLinesFromInput('./day1/input.txt', input)
  const elvesTotalCalories = getElvesAndCaloriesFromInput(lines)
  const number1 = elvesTotalCalories.reduce((acc, curr) => {
    if (curr > acc) {
      acc = curr
    }
    return acc
  }, 0)
  const number2 = elvesTotalCalories.reduce((acc, curr) => {
    if (curr > acc && curr < number1) {
      acc = curr
    }
    return acc
  }, 0)
  const number3 = elvesTotalCalories.reduce((acc, curr) => {
    if (curr > acc && curr < number2) {
      acc = curr
    }
    return acc
  }, 0)

  return number1 + number2 + number3
}
