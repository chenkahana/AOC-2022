import { getLinesFromInput } from '../utils'

// A for Rock, B for Paper, and C for Scissors.
//  X for Rock, Y for Paper, and Z for Scissors
// 1 for Rock, 2 for Paper, and 3 for Scissors
// 0 if you lost, 3 if the round was a draw, and 6 if you won

const getRoundsArrayFromInput = (input: string[]) => {
  return input.reduce(
    (acc, line) => {
      const round = line.split(' ')
      acc.push({ elf: round[0], you: round[1] })
      return acc
    },
    [{ you: '', elf: '' }],
  )
}
const getRoundsArrayFromInput2 = (input: string[]) => {
  return input.reduce(
    (acc, line) => {
      const round = line.split(' ')
      acc.push({ elf: round[0], result: round[1] })
      return acc
    },
    [{ elf: '', result: '' }],
  )
}

const getRockPaperScissorsFromABC = (abc: string) => {
  switch (abc) {
    case 'X':
    case 'A':
      return 'Rock'
    case 'Y':
    case 'B':
      return 'Paper'

    default:
      return 'Scissors'
  }
}
const getRockPaperScissorsFromABC2 = (abc: string) => {
  switch (abc) {
    case 'X':
      return 'Lose'
    case 'A':
      return 'Rock'
    case 'Y':
      return 'Draw'
    case 'B':
      return 'Paper'
    case 'Z':
      return 'Win'
    default:
      return 'Scissors'
  }
}

export const day2part1 = (input?: string[]) => {
  const lines = getLinesFromInput('./day2/input.txt', input)

  const scoreMap = {
    Rock: {
      Rock: 4,
      Paper: 1,
      Scissors: 7,
    },
    Paper: {
      Rock: 8,
      Paper: 5,
      Scissors: 2,
    },
    Scissors: {
      Rock: 3,
      Paper: 9,
      Scissors: 6,
    },
  }

  const roundsArray = getRoundsArrayFromInput(lines)
  return roundsArray.reduce((acc, round) => {
    const { you, elf } = round
    if (you === '') {
      return acc
    }
    acc +=
      scoreMap[getRockPaperScissorsFromABC(you)][
        getRockPaperScissorsFromABC(elf)
      ]
    return acc
  }, 0)
}

export const day2part2 = (input?: string[]) => {
  const lines = getLinesFromInput('./day2/input.txt', input)
  const roundsArray = getRoundsArrayFromInput2(lines)
  const resultsMap = {
    Rock: {
      Lose: 3,
      Draw: 4,
      Win: 8,
    },
    Paper: {
      Lose: 1,
      Draw: 5,
      Win: 9,
    },
    Scissors: { Lose: 2, Draw: 6, Win: 7 },
  }

  return roundsArray.reduce((acc, round) => {
    const { result, elf } = round
    if (result === '') {
      return acc
    }
    acc +=
      // @ts-ignore
      resultsMap[getRockPaperScissorsFromABC2(elf)][
        getRockPaperScissorsFromABC2(result)
      ]
    return acc
  }, 0)
}
