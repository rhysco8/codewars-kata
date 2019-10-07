"use strict";

module.exports = function basicOp(operation, value1, value2) {
  return eval(`${value1} ${operation} ${value2}`)
}
