const summation = require('../src/grasshopper-summation');

describe('summation adds numbers from 1 to n', () => {
  test('returns 1 when passed 1', () => {
    expect(summation(1)).toBe(1);
  });

  test('returns 3 when passed 2', () => {
    expect(summation(2)).toBe(3);
  });
});
