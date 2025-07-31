import { day22part1, day22part2 } from '../src/day22/index'

describe('day 22', () => {
  const exampleInput = []
  test('testing day 22 part 1 example', () => {
    const expected = 22
    expect(day22part1(exampleInput)).toBe(expected)
  })

  test('testing day 22 part 1 for real', () => {
    const expected = 0
    expect(day22part1()).toBe(expected)
  })

  test('testing day 22 part 2 example', () => {
    const expected = 0
    expect(day22part2(exampleInput)).toBe(expected)
  })


  test('testing day 22 part 2 for real', () => {
    const expected = 0
    expect(day22part2()).toBe(expected)
  })
})
