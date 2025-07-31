import { day17part1, day17part2 } from '../src/day17/index'

describe('day 17', () => {
  const exampleInput = []
  test('testing day 17 part 1 example', () => {
    const expected = 17
    expect(day17part1(exampleInput)).toBe(expected)
  })

  test('testing day 17 part 1 for real', () => {
    const expected = 0
    expect(day17part1()).toBe(expected)
  })

  test('testing day 17 part 2 example', () => {
    const expected = 0
    expect(day17part2(exampleInput)).toBe(expected)
  })


  test('testing day 17 part 2 for real', () => {
    const expected = 0
    expect(day17part2()).toBe(expected)
  })
})
