import { day24part1, day24part2 } from '../src/day24/index'

describe('day 24', () => {
  const exampleInput = []
  test('testing day 24 part 1 example', () => {
    const expected = 24
    expect(day24part1(exampleInput)).toBe(expected)
  })

  test('testing day 24 part 1 for real', () => {
    const expected = 0
    expect(day24part1()).toBe(expected)
  })

  test('testing day 24 part 2 example', () => {
    const expected = 0
    expect(day24part2(exampleInput)).toBe(expected)
  })


  test('testing day 24 part 2 for real', () => {
    const expected = 0
    expect(day24part2()).toBe(expected)
  })
})
