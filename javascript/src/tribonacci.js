"use strict";

module.exports = function tribonacci(signature, n) {
  let sequence = (n <= signature.length) ? signature.slice(0, n) :
    fillInSequence(signature, n)
  return sequence
}

function nextNumber(array) {
  let lastThreeElements = array.slice(array.length - 3)
  return lastThreeElements.reduce((a, b) => a + b, 0)
}

function fillInSequence(array, n) {
  let sequence = array
  while (sequence.length < n) {
    sequence.push(nextNumber(sequence))
  }
  return sequence
}
