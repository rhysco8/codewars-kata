"use strict";

const basicOp = require('../src/basic-maths-operations');

describe('performs appropriate mathematical operation', () => {
  test('performs addition', () => {
    expect(basicOp('+', 4, 7)).toBe(11);
  });
});
