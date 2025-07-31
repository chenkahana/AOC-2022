import { day20part1, day20part2 } from '../src/day20/index'

describe('day 20', () => {
  const exampleInput = []
  test('testing day 20 part 1 example', () => {
    const expected = 20
    expect(day20part1(exampleInput)).toBe(expected)
  })

  test('testing day 20 part 1 for real', () => {
    const expected = 0
    expect(day20part1()).toBe(expected)
  })

  test('testing day 20 part 2 example', () => {
    const expected = 0
    expect(day20part2(exampleInput)).toBe(expected)
  })


  test('testing day 20 part 2 for real', () => {
    const expected = 0
    expect(day20part2()).toBe(expected)
  })
})
