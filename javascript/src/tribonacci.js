"use strict";

module.exports = function tribonacci(signature, n) {
  var sequence = signature
  for (var i = 0; i < 7; i++) {
    let lastElement = sequence.length - 1
    let nextNumber = sequence[lastElement] + sequence[lastElement - 1] + sequence[lastElement - 2]
    sequence.push(nextNumber)
  }
  return sequence
}
