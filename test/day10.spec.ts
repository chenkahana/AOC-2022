import { day10part1, day10part2 } from '../src/day10/index'

describe('day 10', () => {
  const exampleInput = []
  test('testing day 10 part 1 example', () => {
    const expected = 10
    expect(day10part1(exampleInput)).toBe(expected)
  })

  test('testing day 10 part 1 for real', () => {
    const expected = 0
    expect(day10part1()).toBe(expected)
  })

  test('testing day 10 part 2 example', () => {
    const expected = 0
    expect(day10part2(exampleInput)).toBe(expected)
  })


  test('testing day 10 part 2 for real', () => {
    const expected = 0
    expect(day10part2()).toBe(expected)
  })
})
