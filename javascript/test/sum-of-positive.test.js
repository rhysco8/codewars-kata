const positiveSum = require('../src/sum-of-positive');

describe('sums only positive integers', () => {
  test('returns 0 when passed []', () => {
    expect(positiveSum([])).toBe(0);
  });
});
