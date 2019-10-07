"use strict";

const basicOp = require('../src/basic-maths-operations');

describe('performs appropriate mathematical operation', () => {
  test('performs addition', () => {
    expect(basicOp('+', 4, 7)).toBe(11);
  });

  test('performs subtraction', () => {
    expect(basicOp('-', 15, 18)).toBe(-3);
  });

  test('performs multiplication', () => {
    expect(basicOp('*', 5, 5)).toBe(25);
  });

  test('performs division', () => {
    expect(basicOp('/', 49, 7)).toBe(7);
  });
});
