import { day23part1, day23part2 } from '../src/day23/index'

describe('day 23', () => {
  const exampleInput = []
  test('testing day 23 part 1 example', () => {
    const expected = 23
    expect(day23part1(exampleInput)).toBe(expected)
  })

  test('testing day 23 part 1 for real', () => {
    const expected = 0
    expect(day23part1()).toBe(expected)
  })

  test('testing day 23 part 2 example', () => {
    const expected = 0
    expect(day23part2(exampleInput)).toBe(expected)
  })


  test('testing day 23 part 2 for real', () => {
    const expected = 0
    expect(day23part2()).toBe(expected)
  })
})
