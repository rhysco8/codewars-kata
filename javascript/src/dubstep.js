"use strict";

module.exports = function songDecoder(song) {
  var replacedWUBs = song.replace(/WUB/g, " ");

  return replacedWUBs.trim().replace(/\b\s+/g, " ");
}
