import { day8part1, day8part2 } from '../src/day8/index'

describe('day 8', () => {
  const exampleInput = []
  test('testing day 8 part 1 example', () => {
    const expected = 8
    expect(day8part1(exampleInput)).toBe(expected)
  })

  test('testing day 8 part 1 for real', () => {
    const expected = 0
    expect(day8part1()).toBe(expected)
  })

  test('testing day 8 part 2 example', () => {
    const expected = 0
    expect(day8part2(exampleInput)).toBe(expected)
  })


  test('testing day 8 part 2 for real', () => {
    const expected = 0
    expect(day8part2()).toBe(expected)
  })
})
