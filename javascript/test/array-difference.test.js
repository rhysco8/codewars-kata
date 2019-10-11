"use strict";

const arrayDiff = require('../src/array-difference');

describe('remove values from list a which are present in list b', () => {
  test('returns [] when passed ([], [4, 5])', () => {
    expect(arrayDiff([], [4, 5])).toStrictEqual([]);
  });

  test('returns [1, 8, 2] when passed ([1, 8, 2], [])', () => {
    expect(arrayDiff([1, 8, 2], [])).toStrictEqual([1, 8, 2]);
  });

  test('returns [4] when passed ([3, 4], [3])', () => {
    expect(arrayDiff([3, 4], [3])).toStrictEqual([4]);
  });

  test('returns [2, 5] when passed ([1, 2, 3, 3, 4, 5], [1, 3, 4, 6, 7])', () => {
    expect(arrayDiff([1, 2, 3, 3, 4, 5], [1, 3, 4, 6, 7])).toStrictEqual([2, 5]);
  });
});
