import { day3part1, day3part2 } from '../src/day3/index'

describe('day 3', () => {
  const exampleInput = [
    'vJrwpWtwJgWrhcsFMMfFFhFp',
    'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL',
    'PmmdzqPrVvPwwTWBwg',
    'wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn',
    'ttgJtRGJQctTZtZT',
    'CrZsJsPPZsGzwwsLwLmpwMDw',
  ]
  test('testing day 3 part 1 example', () => {
    const expected = 157
    expect(day3part1(exampleInput)).toBe(expected)
  })
  test('testing day 3 part 1 for real', () => {
    const expected = 7701
    expect(day3part1()).toBe(expected)
  })

  test('testing day 3 part 2 example', () => {
    const expected = 70
    expect(day3part2(exampleInput)).toBe(expected)
  })
  test('testing day 3 part 2 for real', () => {
    const expected = 2644
    expect(day3part2()).toBe(expected)
  })
})
