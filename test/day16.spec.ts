import { day16part1, day16part2 } from '../src/day16/index'

describe('day 16', () => {
  const exampleInput = []
  test('testing day 16 part 1 example', () => {
    const expected = 16
    expect(day16part1(exampleInput)).toBe(expected)
  })

  test('testing day 16 part 1 for real', () => {
    const expected = 0
    expect(day16part1()).toBe(expected)
  })

  test('testing day 16 part 2 example', () => {
    const expected = 0
    expect(day16part2(exampleInput)).toBe(expected)
  })


  test('testing day 16 part 2 for real', () => {
    const expected = 0
    expect(day16part2()).toBe(expected)
  })
})
