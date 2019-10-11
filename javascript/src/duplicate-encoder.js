"use strict";

module.exports = function duplicateEncode (word) {
  var lettersArray = word.toLowerCase().split("")
  var duplicates = findDuplicates(lettersArray)
  var encodedArray = []
  lettersArray.forEach(letter => {
    if (duplicates.includes(letter)) {
      encodedArray.push(')');
    } else {
      encodedArray.push('(');
    }
  });

  return encodedArray.join("")
}

function findDuplicates(array) {
  let firstAppearance = []
  let duplicatesArray = []

  array.forEach(element => {
    if (!firstAppearance.includes(element)) {
      firstAppearance.push(element)
    } else {
      if (!duplicatesArray.includes(element)) {
        duplicatesArray.push(element)
      }
    }
  });

  return duplicatesArray;
}
