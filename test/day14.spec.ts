import { day14part1, day14part2 } from '../src/day14/index'

describe('day 14', () => {
  const exampleInput = []
  test('testing day 14 part 1 example', () => {
    const expected = 14
    expect(day14part1(exampleInput)).toBe(expected)
  })

  test('testing day 14 part 1 for real', () => {
    const expected = 0
    expect(day14part1()).toBe(expected)
  })

  test('testing day 14 part 2 example', () => {
    const expected = 0
    expect(day14part2(exampleInput)).toBe(expected)
  })


  test('testing day 14 part 2 for real', () => {
    const expected = 0
    expect(day14part2()).toBe(expected)
  })
})
