"use strict";

module.exports = function summation (number) {
  var total = 0
  for (var i = 0; i <= number; i++) {
    total += i
  }
  return total
}
