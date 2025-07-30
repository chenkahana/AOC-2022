import { getLinesFromInput } from '../utils'

const getOrdersAndStacksFromInput = (input: string[]) => {
  let ordersFlag = false
  const numOfStacks = (input[0].length + 1) / 4
  const stacks = Array.from({ length: numOfStacks }, () => [])
  const orders = []
  for (let j = 0; j < input.length; j++) {
    const line = input[j]

    if (line.length === 0) {
      ordersFlag = true
      continue
    }
    if (ordersFlag) {
      const shortenLine = line
        .replace(/[a-zA-Z]+/g, '')
        .split(' ')
        .filter((val) => val !== '')
      orders.push({ amount: shortenLine[0], start: shortenLine[1], end: shortenLine[2] })
    } else {
      if (!line.includes('[')) {
        continue
      }
      const splittedLine = line.split('')
      for (let i = 0; i < splittedLine.length; i++) {
        if (i % 4 === 0 && splittedLine[i] === '[') {
          stacks[i / 4].unshift(splittedLine[i + 1])
        }
      }
    }
  }
  return { orders, stacks }
}

export const day5part1 = (input?: string[]) => {
  const lines = getLinesFromInput('./day5/input.txt', input)
  const { orders, stacks } = getOrdersAndStacksFromInput(lines)
  for (let i = 0; i < orders.length; i++) {
    const { amount, start, end } = orders[i]
    for (let j = 0; j < amount; j++) {
      const create = stacks[start - 1].pop()
      stacks[end - 1].push(create)
    }
  }
  return stacks.reduce((acc, stack) => {
    acc += stack[stack.length - 1]
    return acc
  }, '')
}

export const day5part2 = (input?: string[]) => {
  const lines = getLinesFromInput('./day5/input.txt', input)
  const { orders, stacks } = getOrdersAndStacksFromInput(lines)
  for (let i = 0; i < orders.length; i++) {
    const { amount, start, end } = orders[i]
    const createArr = []
    for (let j = 0; j < amount; j++) {
      createArr.unshift(stacks[start - 1].pop())
    }
    stacks[end - 1].push(...createArr)
  }
  return stacks.reduce((acc, stack) => {
    acc += stack[stack.length - 1]
    return acc
  }, '')
}
