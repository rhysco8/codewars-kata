"use strict";

const toCamelCase = require('../src/convert-to-camel-case');

describe('converts string to camel case', () => {
  test('returns empty string', () => {
    expect(toCamelCase("")).toBe("");
  });

  test('returns single word', () => {
    expect(toCamelCase("a")).toBe("a");
  });

  test('removes dash delimiters', () => {
    expect(toCamelCase("a-B")).toBe("aB");
  });
});
