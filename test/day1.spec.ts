import { day1part1, day1part2 } from '../src/day1/index'

describe('Day 1', () => {
  test('testing day 1 part 1 example', () => {
    const exampleInput = [
      '1000',
      '2000',
      '3000',
      '',
      '4000',
      '',
      '5000',
      '6000',
      '',
      '7000',
      '8000',
      '9000',
      '',
      '10000',
    ]
    const expected = 24000
    expect(day1part1(exampleInput)).toBe(expected)
  })
  test('testing day 1 part 1 for real', () => {
    const expected = 68787
    expect(day1part1()).toBe(expected)
  })

  test('testing day 2 part 1 example', () => {
    const exampleInput = [
      '1000',
      '2000',
      '3000',
      '',
      '4000',
      '',
      '5000',
      '6000',
      '',
      '7000',
      '8000',
      '9000',
      '',
      '10000',
    ]
    const expected = 45000
    expect(day1part2(exampleInput)).toBe(expected)
  })
  test('testing day 2 part 1 for real', () => {
    const expected = 198041
    expect(day1part2()).toBe(expected)
  })
})
