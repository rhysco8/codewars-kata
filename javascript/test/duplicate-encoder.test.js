"use strict";

const duplicateEncode = require('../src/duplicate-encoder');

describe('converts string to new string', () => {
  test('converts din to (((', () => {
    expect(duplicateEncode("din")).toBe("(((");
  });

  test('converts recede to ()()()', () => {
    expect(duplicateEncode("recede")).toBe("()()()");
  });

  test('converts Success to )())())', () => {
    expect(duplicateEncode("Success")).toBe(")())())");
  });

  test('converts "(( @" to ))((', () => {
    expect(duplicateEncode("(( @")).toBe("))((");
  })
});
