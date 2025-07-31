import { day15part1, day15part2 } from '../src/day15/index'

describe('day 15', () => {
  const exampleInput = []
  test('testing day 15 part 1 example', () => {
    const expected = 15
    expect(day15part1(exampleInput)).toBe(expected)
  })

  test('testing day 15 part 1 for real', () => {
    const expected = 0
    expect(day15part1()).toBe(expected)
  })

  test('testing day 15 part 2 example', () => {
    const expected = 0
    expect(day15part2(exampleInput)).toBe(expected)
  })


  test('testing day 15 part 2 for real', () => {
    const expected = 0
    expect(day15part2()).toBe(expected)
  })
})
