"use strict";

module.exports = function toCamelCase(string) {
  if (string.length > 1) {
    var individualWords = string.split(/\W|_/)
    for (var i = 1; i < individualWords.length; i++) {
      individualWords[i] = individualWords[i][0].toUpperCase() + individualWords[i].slice(1)
    }
    return individualWords.join("")
  } else {
    return string
  }
}
