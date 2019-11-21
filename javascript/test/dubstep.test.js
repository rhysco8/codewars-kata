"use strict";

const songDecoder = require('../src/dubstep');

describe('decodes dubstep song', () => {
  test('converts "AWUBB" to "A B"', () => {
    expect(songDecoder("AWUBB")).toBe("A B");
  });

  test('converts "AWUBBWUBC" to "A B C"', () => {
    expect(songDecoder("AWUBBWUBC")).toBe("A B C");
  });

  test('replace multiple WUBs with only 1 space', () => {
    expect(songDecoder("AWUBWUBB")).toBe("A B");
  });

  test('removes heading or trailing whitespace', () => {
    expect(songDecoder("WUBAWUBBWUB")).toBe("A B");
  });
});
