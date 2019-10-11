"use strict";

module.exports = function duplicateEncode (word) {
  return word.replace(/./g, "(")
}
