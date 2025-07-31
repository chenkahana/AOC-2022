import { day12part1, day12part2 } from '../src/day12/index'

describe('day 12', () => {
  const exampleInput = []
  test('testing day 12 part 1 example', () => {
    const expected = 12
    expect(day12part1(exampleInput)).toBe(expected)
  })

  test('testing day 12 part 1 for real', () => {
    const expected = 0
    expect(day12part1()).toBe(expected)
  })

  test('testing day 12 part 2 example', () => {
    const expected = 0
    expect(day12part2(exampleInput)).toBe(expected)
  })


  test('testing day 12 part 2 for real', () => {
    const expected = 0
    expect(day12part2()).toBe(expected)
  })
})
