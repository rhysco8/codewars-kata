"use strict";

const toCamelCase = require('../src/convert-to-camel-case');

describe('converts string to camel case', () => {
  test('returns empty string', () => {
    expect(toCamelCase("")).toBe("")
  });
});
