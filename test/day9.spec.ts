import { day9part1, day9part2 } from '../src/day9/index'

describe('day 9', () => {
  const exampleInput = []
  test('testing day 9 part 1 example', () => {
    const expected = 9
    expect(day9part1(exampleInput)).toBe(expected)
  })

  test('testing day 9 part 1 for real', () => {
    const expected = 0
    expect(day9part1()).toBe(expected)
  })

  test('testing day 9 part 2 example', () => {
    const expected = 0
    expect(day9part2(exampleInput)).toBe(expected)
  })


  test('testing day 9 part 2 for real', () => {
    const expected = 0
    expect(day9part2()).toBe(expected)
  })
})
