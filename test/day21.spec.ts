import { day21part1, day21part2 } from '../src/day21/index'

describe('day 21', () => {
  const exampleInput = []
  test('testing day 21 part 1 example', () => {
    const expected = 21
    expect(day21part1(exampleInput)).toBe(expected)
  })

  test('testing day 21 part 1 for real', () => {
    const expected = 0
    expect(day21part1()).toBe(expected)
  })

  test('testing day 21 part 2 example', () => {
    const expected = 0
    expect(day21part2(exampleInput)).toBe(expected)
  })


  test('testing day 21 part 2 for real', () => {
    const expected = 0
    expect(day21part2()).toBe(expected)
  })
})
