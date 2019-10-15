"use strict";

const tribonacci = require('../src/tribonacci');

describe('returns first n elements', () => {
  test('returns [1,1,1,3,5,9,17,31,57,105] given ([1,1,1], 10)', () => {
    expect(tribonacci([1,1,1], 10)).toStrictEqual([1,1,1,3,5,9,17,31,57,105]);
  });

  test('returns [0,0,1,1,2,4,7,13,24,44] given ([0,0,1],10)', () => {
    expect(tribonacci([0,0,1], 10)).toStrictEqual([0,0,1,1,2,4,7,13,24,44]);
  });

  test('returns [0,0,0,0,0,0,0,0,0,0] given ([0,0,0],10)', () => {
    expect(tribonacci([0,0,0], 10)).toStrictEqual([0,0,0,0,0,0,0,0,0,0]);
  });

  test('returns [1] given ([1,1,1],1)', () => {
    expect(tribonacci([1,1,1],1)).toStrictEqual([1]);
  });

  test('returns [] given ([300,200,100],0)', () => {
    expect(tribonacci([300,200,100],0)).toStrictEqual([]);
  });

  test('works with floats as well as integers', () => {
    expect(tribonacci([0.5, 0.5, 0.5],10)).toStrictEqual([0.5,0.5,0.5,1.5,2.5,4.5,8.5,15.5,28.5,52.5])
  });
});
