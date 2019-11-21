"use strict";

const songDecoder = require('../src/dubstep');

describe('decodes dubstep song', () => {
  test('converts "AWUBB" to "A B"', () => {
    expect(songDecoder("AWUBB")).toBe("A B");
  });
});
