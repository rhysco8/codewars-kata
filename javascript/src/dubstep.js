"use strict";

module.exports = function songDecoder(song) {
  return song.replace(/(WUB)+/g, " ").trim();
}
