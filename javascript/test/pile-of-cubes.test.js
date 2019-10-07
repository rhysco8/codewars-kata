"use strict";

const findNb = require('../src/pile-of-cubes');

describe('returns number of cubes', () => {
  test('returns 1 when m = 1', () => {
    expect(findNb(1)).toBe(1);
  });

  test('returns 2 when m = 9', () => {
    expect(findNb(9)).toBe(2);
  });

  test('returns 3 when m = 36', () => {
    expect(findNb(36)).toBe(3);
  });

  test('returns -1 when m = 34', () => {
    expect(findNb(34)).toBe(-1);
  })
});
