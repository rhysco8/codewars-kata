const positiveSum = require('../src/sum-of-positive');

describe('sums only positive integers', () => {
  test('returns 0 when passed []', () => {
    expect(positiveSum([])).toBe(0);
  });

  test('returns 15 when passed [1, 2, 3, 4, 5]', () => {
    expect(positiveSum([1, 2, 3, 4, 5])).toBe(15);
  });

  test('returns 13 when passed [1, -2, 3, 4, 5]', () => {
    expect(positiveSum([1, -2, 3, 4, 5])).toBe(13);
  });
});
