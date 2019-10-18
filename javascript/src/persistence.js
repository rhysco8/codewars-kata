"use strict";

module.exports = function persistence(number) {
  let numberString = number.toString();
  var count = 0
  while (numberString.length > 1) {
    count += 1
    numberString = eval(numberString.split('').join('*')).toString()
  }
  return count
}
