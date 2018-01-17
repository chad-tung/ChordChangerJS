let _ = require('lodash');

let letters = ["A", "B", "C", "D", "E", "F", "G"];
let validLetters = [];

for (item of letters) {
  validLetters.push(item);
  validLetters.push(item + "#");
  validLetters.push(item + "b");
}

let default_scale = ["C", "D", "E", "F", "G", "A", "B", "C"];

let MajorScale = function(note) {
  this.scale = this.setScale(note);
}

MajorScale.prototype.setScale = function(note) {
  let f_sharp_exception = "F#"
  let flat_scales = ["F", "Bb", "Eb", "Ab", "Db"];
  let sharp_scales = ["B", "E", "A", "D", "G", "C"];
  let sharp_chromatic = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C"];
  let flat_chromatic = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B", "C"];

  let chromatic_scale = [];

  if (!validLetters.includes(note)) {
    note = "C";
  }

  if (note == f_sharp_exception) {
    this.major = ["F#", "G#", "A#", "B", "C#", "D#", "E#", "F#"]
  } else {
    if (flat_scales.includes(note)) {
      chromatic_scale = flat_chromatic;
    } else {
      chromatic_scale = sharp_chromatic;
    }
    let majorArr = [0, 2, 4, 5, 7, 9, 11, 12];
    this.scale = _.at(chromatic_scale, majorArr);
  }
}

module.exports = MajorScale;
