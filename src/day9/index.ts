import { getLinesFromInput } from '../utils'

const orderToChangesMap = {
  R: [0, 1],
  D: [1, 0],
  L: [0, -1],
  U: [-1, 0],
}

const getOrdersFromLines = (input: string[]) => {
  const orders = []
  for (let i = 0; i < input.length; i++) {
    const [order, times] = input[i].split(' ')
    orders.push(...Array.from({ length: Number(times) }, () => order))
  }
  return orders
}

const getTailVisited = (orders: string[]) => {
  const visited = new Set()
  const head = { row: 0, col: 0 }
  const tail = { row: 0, col: 0 }
  visited.add(`${tail.row}, ${tail.col}`)

  for (let i = 0; i < orders.length; i++) {
    const order = orders[i]
    const [rowAdd, colAdd] = orderToChangesMap[`${order}`]
    head.row += rowAdd
    head.col += colAdd
    if (Math.abs(head.row - tail.row) < 2 && Math.abs(head.col - tail.col) < 2) {
      continue
    } else {
      switch (order) {
        case 'R':
          tail.row = head.row
          tail.col = head.col - 1
          break
        case 'D':
          tail.row = head.row - 1
          tail.col = head.col
          break
        case 'L':
          tail.row = head.row
          tail.col = head.col + 1
          break
        case 'U':
          tail.row = head.row + 1
          tail.col = head.col
          break
      }
      visited.add(`${tail.row}, ${tail.col}`)
    }
  }
  return visited.size
}

export const day9part1 = (input?: string[]) => {
  const lines = getLinesFromInput('./day9/input.txt', input)
  const orders = getOrdersFromLines(lines)
  return getTailVisited(orders)
}

const getTailVisited2 = (orders: string[]) => {
  const visited = new Set()
  const tails = Array.from({ length: 10 }, () => ({ row: 0, col: 0 }))
  for (let i = 0; i < orders.length; i++) {
    const order = orders[i]
    const [rowAdd, colAdd] = orderToChangesMap[`${order}`]
    tails[0].row += rowAdd
    tails[0].col += colAdd
    for (let j = 0; j < tails.length - 1; j++) {
      const currHead = tails[j]
      const currTail = tails[j + 1]
      moveForwardInPair(currHead, currTail)
    }
    visited.add(`${tails[tails.length - 1].row}, ${tails[tails.length - 1].col}`)
  }
  return visited.size
}

type Point = {
  row: number
  col: number
}

const moveForwardInPair = (head: Point, tail: Point) => {
  const dr = head.row - tail.row
  const dc = head.col - tail.col

  if (Math.abs(dr) > 1 || Math.abs(dc) > 1) {
    tail.row += Math.sign(dr)
    tail.col += Math.sign(dc)
  }
}

export const day9part2 = (input?: string[]) => {
  const lines = getLinesFromInput('./day9/input.txt', input)
  const orders = getOrdersFromLines(lines)
  return getTailVisited2(orders)
}
