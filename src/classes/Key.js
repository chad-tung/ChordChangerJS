let ScaleSet = require('./ScaleSet.js');

let letters = ["A", "B", "C", "D", "E", "F", "G"];
let validLetters = [];
let validTonal = ["major", "minor"]

for (item of letters) {
  validLetters.push(item);
  validLetters.push(item + "#");
  validLetters.push(item + "b");
}

let Key = function(note, major_minor) {
  this.keynote = null;
  this.tonality = null;
  this.scale = [];
}

Key.prototype = {
  setKey: function(targetNote, targetTone) {
    this.note = targetNote;
    this.tonality = targetTone;
  },
  getKey: function() {
    return this.note + this.tonality;
  },
  setScale: function(note) {
    let scales = new ScaleSet(note);
    if (tonality == "major") {
      this.scale = scales.major;
    } else {
      this.scale = scales.minor;
    }
  }
}

module.exports = Key;
