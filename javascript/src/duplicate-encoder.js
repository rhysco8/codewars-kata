"use strict";

module.exports = function duplicateEncode (word) {
  var lettersArray = word.split("")
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
  let arrayOfDuplicates = []

  array.forEach(letter => {
    if (!firstAppearance.includes(letter)) {
      firstAppearance.push(letter)
    } else {
      if (!arrayOfDuplicates.includes(letter)) {
        arrayOfDuplicates.push(letter)
      }
    }
  });

  return arrayOfDuplicates;
}
