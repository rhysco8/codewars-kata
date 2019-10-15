"use strict";

module.exports = function tribonacci(signature, n) {
  let sequence
  if (n <= signature.length) {
    sequence = signature.slice(0, n)
  } else {
    sequence = signature
    for (var i = 2; sequence.length < n; i++) {
      sequence.push(nextNumber(sequence))
    }
  }
  return sequence
}

function nextNumber(array) {
  let lastElement = array.length - 1
  return array[lastElement] + array[lastElement - 1] + array[lastElement - 2]
}
