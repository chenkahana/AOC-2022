import { day18part1, day18part2 } from '../src/day18/index'

describe('day 18', () => {
  const exampleInput = []
  test('testing day 18 part 1 example', () => {
    const expected = 18
    expect(day18part1(exampleInput)).toBe(expected)
  })

  test('testing day 18 part 1 for real', () => {
    const expected = 0
    expect(day18part1()).toBe(expected)
  })

  test('testing day 18 part 2 example', () => {
    const expected = 0
    expect(day18part2(exampleInput)).toBe(expected)
  })


  test('testing day 18 part 2 for real', () => {
    const expected = 0
    expect(day18part2()).toBe(expected)
  })
})
