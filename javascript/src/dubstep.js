"use strict";

module.exports = function songDecoder(song) {
  var replacedWUBs = song.replace(/WUB/g, " ");

  return replacedWUBs.replace(/\b\s+/g, " ");
}
