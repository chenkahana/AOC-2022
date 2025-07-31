import { day6part1, day6part2 } from '../src/day6/index'

describe('day 6', () => {
  const exampleInput = ['mjqjpqmgbljsphdztnvjfqwrcgsmlb']
  test('testing day 6 part 1 example', () => {
    const expected = 7
    expect(day6part1(exampleInput)).toBe(expected)
  })

  test.each([
    ['bvwbjplbgvbhsrlpgdmjqwftvncz', 5],
    ['nppdvjthqldpwncqszvftbrmjlhg', 6],
    ['nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg', 10],
    ['zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw', 11],
  ])('testing day 6 part 1 with input %s should return %i', (input, expected) => {
    expect(day6part1([input])).toBe(expected)
  })
  // test('testing day 6 part 1 for real', () => {
  //   const expected = 0
  //   expect(day6part1()).toBe(expected)
  // })

  test('testing day 6 part 2 example', () => {
    const expected = 19
    expect(day6part2(exampleInput)).toBe(expected)
  })


    test.each([
    ['bvwbjplbgvbhsrlpgdmjqwftvncz', 23],
    ['nppdvjthqldpwncqszvftbrmjlhg', 23],
    ['nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg', 29],
    ['zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw', 26],
  ])('testing day 6 part 1 with input %s should return %i', (input, expected) => {
    expect(day6part2([input])).toBe(expected)
  })
  test('testing day 6 part 2 for real', () => {
    const expected = 3298
    expect(day6part2()).toBe(expected)
  })
})
