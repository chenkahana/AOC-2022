import { day25part1, day25part2 } from '../src/day25/index'

describe('day 25', () => {
  const exampleInput = []
  test('testing day 25 part 1 example', () => {
    const expected = 25
    expect(day25part1(exampleInput)).toBe(expected)
  })

  test('testing day 25 part 1 for real', () => {
    const expected = 0
    expect(day25part1()).toBe(expected)
  })

  test('testing day 25 part 2 example', () => {
    const expected = 0
    expect(day25part2(exampleInput)).toBe(expected)
  })


  test('testing day 25 part 2 for real', () => {
    const expected = 0
    expect(day25part2()).toBe(expected)
  })
})
