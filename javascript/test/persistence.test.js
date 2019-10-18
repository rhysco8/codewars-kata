"use strict";

const persistence = require('../src/persistence');

describe('returns mulitplicative persistence', () => {
  test('returns 0 given 4', () => {
    expect(persistence(4)).toBe(0);
  })
})
