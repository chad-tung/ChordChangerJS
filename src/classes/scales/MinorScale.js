let _ = require('lodash');
let SharpChromatic = require('./SharpChromatic.js');
let FlatChromatic = require('./FlatChromatic.js');

let letters = ["A", "B", "C", "D", "E", "F", "G"];
let validLetters = [];

for (item of letters) {
  validLetters.push(item);
  validLetters.push(item + "#");
  validLetters.push(item + "b");
}

let MinorScale = function(note) {
  this.scale = this.setScale(note);
}

MinorScale.prototype.setScale = function(note) {
  let e_flat_exception = "Eb";
  let flat_scales = ["D", "G", "C", "F", "Bb"];
  let sharp_scales = ["G#", "C#", "F#", "B", "E", "A"];

  let chromatic_scale = [];
  let minor_scale = [];
  let keynote = ""

  if (validLetters.includes(note)) {
    keynote = note;
  } else {
    keynote = "C"
  }

  if (keynote == e_flat_exception) {
    minor_scale = ["Eb", "F", "Gb", "Ab", "Bb", "Cb", "Db", "Eb"];
  } else {
    if (flat_scales.includes(keynote)) {
      chromatic_scale = new FlatChromatic(keynote);
    } else {
      chromatic_scale = new SharpChromatic(keynote);
    }
    let minorArr = [0, 2, 3, 5, 7, 8, 10, 12];
    minor_scale = _.at(chromatic_scale, minorArr);
  }

  return minor_scale
};

module.exports = MinorScale;
