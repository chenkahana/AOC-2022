import { getLinesFromInput } from '../utils'

const Direction = {
  LEFT: [0, -1],
  RIGHT: [0, 1],
  UP: [-1, 0],
  DOWN: [1, 0],
}

const visibleMemo = {}

const countVisibleTrees = (input: string[][]) => {
  let visibleTrees = (input.length + input[0].length) * 2 - 4 // the edges
  for (let i = 1; i < input.length - 1; i++) {
    for (let j = 1; j < input[i].length - 1; j++) {
      if (
        isVisible(input, i, j, Direction.LEFT, Number(input[i][j])) ||
        isVisible(input, i, j, Direction.RIGHT, Number(input[i][j])) ||
        isVisible(input, i, j, Direction.UP, Number(input[i][j])) ||
        isVisible(input, i, j, Direction.DOWN, Number(input[i][j]))
      ) {
        visibleTrees++
      }
    }
  }
  return visibleTrees
}

const isVisible = (matrix: string[][], row: number, col: number, dir: number[], height: number): boolean => {
  const newRow = row + dir[0]
  const newCol = col + dir[1]
  if (newRow < 0 || newCol < 0 || newRow >= matrix.length || newCol >= matrix[row].length) {
    return true
  }
  if (Number(matrix[newRow][newCol]) >= height) {
    return false
  }
  return isVisible(matrix, newRow, newCol, dir, height)
}

const mostScenicTreeScore = (input: string[][]) => {
  let highestScore = 0
  for (let i = 1; i < input.length - 1; i++) {
    for (let j = 1; j < input[i].length - 1; j++) {
      const leftScore = countSeenTrees(input, i, j, Direction.LEFT, 'LEFT', Number(input[i][j]))
      seenMemo[`${i},${j},LEFT`] = leftScore
      const rightScore = countSeenTrees(input, i, j, Direction.RIGHT, 'RIGHT', Number(input[i][j]))
      seenMemo[`${i},${j},RIGHT`] = rightScore
      const downScore = countSeenTrees(input, i, j, Direction.DOWN, 'DOWN', Number(input[i][j]))
      seenMemo[`${i},${j},DOWN`] = downScore
      const upScore = countSeenTrees(input, i, j, Direction.UP, 'UP', Number(input[i][j]))
      seenMemo[`${i},${j},UP`] = upScore
      const tempScore = leftScore * rightScore * downScore * upScore
      if (tempScore > highestScore) {
        highestScore = tempScore
      }
    }
  }
  return highestScore
}

const seenMemo = {}

const countSeenTrees = (
  matrix: string[][],
  row: number,
  col: number,
  dir: number[],
  dirString: string,
  height: number,
  seen = 0,
): number => {
//   if (seenMemo[`${row},${col},${dirString}`]) {
//     return seen + seenMemo[`${row},${col},${dirString}`]
//   }
  const newRow = row + dir[0]
  const newCol = col + dir[1]
  if (newRow < 0 || newCol < 0 || newRow >= matrix.length || newCol >= matrix[row].length) {
    return seen
  }
  if (Number(matrix[newRow][newCol]) >= height) {
    return seen + 1
  }
  return countSeenTrees(matrix, newRow, newCol, dir, dirString, height, seen + 1)
}

export const day8part1 = (input?: string[]) => {
  const lines = getLinesFromInput('./day8/input.txt', input)
  //@ts-ignore
  return countVisibleTrees(lines)
}

export const day8part2 = (input?: string[]) => {
  const lines = getLinesFromInput('./day8/input.txt', input)
  //@ts-ignore
  return mostScenicTreeScore(lines)
}
