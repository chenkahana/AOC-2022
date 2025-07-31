import { day13part1, day13part2 } from '../src/day13/index'

describe('day 13', () => {
  const exampleInput = []
  test('testing day 13 part 1 example', () => {
    const expected = 13
    expect(day13part1(exampleInput)).toBe(expected)
  })

  test('testing day 13 part 1 for real', () => {
    const expected = 0
    expect(day13part1()).toBe(expected)
  })

  test('testing day 13 part 2 example', () => {
    const expected = 0
    expect(day13part2(exampleInput)).toBe(expected)
  })


  test('testing day 13 part 2 for real', () => {
    const expected = 0
    expect(day13part2()).toBe(expected)
  })
})
