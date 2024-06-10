const weekFn = require('./weekFn.js')

test('returns correct day names for valid inputs 1 through 7', () => {
  expect(weekFn(1)).toBe('Понеділок')
  expect(weekFn(4)).toBe('Четвер')
  expect(weekFn(7)).toBe('Неділя')
  expect(weekFn(2)).toBe('Вівторок')
  expect(weekFn(6)).toBe('Субота')
  expect(weekFn(3)).toBe('Середа')
  expect(weekFn(5)).toBe('П\'ятниця')
})

test('returns null for invalid inputs like numbers outside 1-7, non-numeric strings, or decimals', () => {
  expect(weekFn(0)).toBeNull()
  expect(weekFn(-1)).toBeNull()
  expect(weekFn(10)).toBeNull()
  expect(weekFn(1.1)).toBeNull()
  expect(weekFn(7.9)).toBeNull()
  expect(weekFn('seven')).toBeNull()
  expect(weekFn('')).toBeNull()
})


