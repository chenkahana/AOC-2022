import { day2part1, day2part2 } from '../src/day2/index'

describe('Day 2', () => {
  const exampleInput = ['A Y', 'B X', 'C Z']
  test('testing day 2 part 1 example', () => {
    const expected = 15
    expect(day2part1(exampleInput)).toBe(expected)
  })
  test('testing day 2 part 1 for real', () => {
    const expected = 14264
    expect(day2part1()).toBe(expected)
  })

  test('testing day 2 part 1 example', () => {
    const expected = 12
    expect(day2part2(exampleInput)).toBe(expected)
  })
  test('testing day 2 part 1 for real', () => {
    const expected = 12382
    expect(day2part2()).toBe(expected)
  })
})
