"use strict";

const arrayDiff = require('../src/array-difference');

describe('remove values from list a which are present in list b', () => {
  test('returns [] when passed ([], [4, 5])', () => {
    expect(arrayDiff([], [4, 5])).toStrictEqual([]);
  });
});
