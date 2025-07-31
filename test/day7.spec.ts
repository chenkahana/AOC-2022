import { day7part1, day7part2 } from '../src/day7/index'

describe('day 7', () => {
  const exampleInput = []
  test('testing day 7 part 1 example', () => {
    const expected = 7
    expect(day7part1(exampleInput)).toBe(expected)
  })

  test('testing day 7 part 1 for real', () => {
    const expected = 0
    expect(day7part1()).toBe(expected)
  })

  test('testing day 7 part 2 example', () => {
    const expected = 0
    expect(day7part2(exampleInput)).toBe(expected)
  })


  test('testing day 7 part 2 for real', () => {
    const expected = 0
    expect(day7part2()).toBe(expected)
  })
})
