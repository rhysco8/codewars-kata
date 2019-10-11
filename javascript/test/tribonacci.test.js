"use strict";

const tribonacci = require('../src/tribonacci');

describe('returns first n elements', () => {
  test('returns [1,1,1,3,5,9,17,31,57,105] given ([1,1,1], 10)', () => {
    expect(tribonacci([1,1,1], 0)).toStrictEqual([1,1,1,3,5,9,17,31,57,105]);
  });
});
