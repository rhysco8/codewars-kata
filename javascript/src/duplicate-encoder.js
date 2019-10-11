"use strict";

module.exports = function duplicateEncode (word) {
  let firstAppearance = []
  var duplicateAppearance = []
  let wordArray = word.split("")

  wordArray.forEach(letter => {
    if (!firstAppearance.includes(letter)) {
      firstAppearance.push(letter)
    } else {
      if (!duplicateAppearance.includes(letter)) {
        duplicateAppearance.push(letter)
      }
    }
  });
  var encodedArray = []
  wordArray.forEach(letter => {
    if (duplicateAppearance.includes(letter)) {
      encodedArray.push(')')
    } else {
      encodedArray.push('(')
    }
  });

  return encodedArray.join("")
}
