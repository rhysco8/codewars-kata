"use strict";

module.exports = function persistence(number) {
  var count = 0
  if (number.toString().length > 1) {
    count += 1
  }
  return count
}
