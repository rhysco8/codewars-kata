"use strict";

module.exports = function tribonacci(signature, n) {
  let sequence = (n <= signature.length) ? signature.slice(0, n) :
    addNextInSequence(signature, n)
  return sequence
}

function nextNumber(array) {
  let lastElement = array.length - 1
  return array[lastElement] + array[lastElement - 1] + array[lastElement - 2]
}

function addNextInSequence(array, n) {
  let sequence = array
  while (sequence.length < n) {
    sequence.push(nextNumber(sequence))
  }
  return sequence
}
