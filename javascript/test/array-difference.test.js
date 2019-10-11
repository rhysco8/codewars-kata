"use strict";

const arrayDiff = require('../src/array-difference');

describe('remove values from list a which are present in list b', () => {
  test('returns [] when passed ([], [4, 5])', () => {
    expect(arrayDiff([], [4, 5])).toStrictEqual([]);
  });

  test('returns [1, 8, 2] when passed ([1, 8, 2], [])', () => {
    expect(arrayDiff([1, 8, 2], [])).toStrictEqual([1, 8, 2]);
  });
});
