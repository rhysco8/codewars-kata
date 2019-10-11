"use strict";

module.exports = function arrayDiff (a, b) {
  return a.filter(element => !b.includes(element));
}
