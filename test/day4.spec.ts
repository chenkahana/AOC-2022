import { day4part1, day4part2 } from '../src/day4/index'

describe('day 4', () => {
  const exampleInput = [
    '2-4,6-8',
    '2-3,4-5',
    '5-7,7-9',
    '2-8,3-7',
    '6-6,4-6',
    '2-6,4-8',
  ]
  // test('testing day 4 part 1 example', () => {
  //   const expected = 2
  //   expect(day4part1(exampleInput)).toBe(expected)
  // })
  // test('testing day 4 part 1 for real', () => {
  //   const expected = 0
  //   expect(day4part1()).toBe(expected)
  // })

  test('testing day 4 part 2 example', () => {
    const expected = 4
    expect(day4part2(exampleInput)).toBe(expected)
  })
  test('testing day 4 part 2 for real', () => {
    const expected = 0
    expect(day4part2()).toBe(expected)
  })
})
