"use strict";

const persistence = require('../src/persistence');

describe('returns mulitplicative persistence', () => {
  test('returns 0 given 4', () => {
    expect(persistence(4)).toBe(0);
  });

  test('returns 1 given 71', () => {
    expect(persistence(71)).toBe(1);
  });
})
