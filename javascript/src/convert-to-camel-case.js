"use strict";

module.exports = function toCamelCase(string) {
  return string.replace(/(-|_)/g, "")
}
