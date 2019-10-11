"use strict";

const duplicateEncode = require('../src/duplicate-encoder');

describe('converts string to new string', () => {
  test('converts din to (((', () => {
    expect(duplicateEncode("din")).toBe("(((");
  });
});
