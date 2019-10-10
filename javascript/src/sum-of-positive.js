"use strict";

module.exports = function positiveSum(array) {
  var result = 0
  array.forEach(function(number) {
    if (number > 0) {
      result += number
    }
  });
  return result
}
