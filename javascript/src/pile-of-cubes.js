"use strict";

module.exports = function findNb(m) {
  for (var n = 1; n > 0; n++) {
    if (m === calculateVolume(n)) {
      break;
    } else if (m < calculateVolume(n)) {
      n = -1;
      break;
    }
  }
  return n;
}

function calculateVolume(numberOfCubes) {
  var volume = 0;

  while (numberOfCubes > 0) {
    volume += numberOfCubes ** 3
    numberOfCubes--
  }
  return volume;
}
