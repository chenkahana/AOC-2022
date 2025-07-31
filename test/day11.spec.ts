import { day11part1, day11part2 } from '../src/day11/index'

describe('day 11', () => {
  const exampleInput = []
  test('testing day 11 part 1 example', () => {
    const expected = 11
    expect(day11part1(exampleInput)).toBe(expected)
  })

  test('testing day 11 part 1 for real', () => {
    const expected = 0
    expect(day11part1()).toBe(expected)
  })

  test('testing day 11 part 2 example', () => {
    const expected = 0
    expect(day11part2(exampleInput)).toBe(expected)
  })


  test('testing day 11 part 2 for real', () => {
    const expected = 0
    expect(day11part2()).toBe(expected)
  })
})
