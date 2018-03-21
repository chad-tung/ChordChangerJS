let _ = require('lodash');
let SharpChromatic = require('./SharpChromatic.js');
let FlatChromatic = require('./FlatChromatic.js');


let MajorScale = function(note) {
  this.scale = this.setScale(note);
}

MajorScale.prototype.setScale = function(note) {
  let f_sharp_exception = "F#"
  let flat_scales = ["F", "Bb", "Eb", "Ab", "Db"];
  let sharp_scales = ["B", "E", "A", "D", "G", "C"];

  let exceptions = ["C#", "D#", "Gb", "G#", "A#"];
  let replacements = ["Db", "Eb", "F#", "Ab", "Bb"]

  let chromatic_scale = [];
  let major_scale = [];
  let keynote = ""

  if (note) {
    keynote = (exceptions.includes(note)) ?
      replacements[exceptions.indexOf(note)] : note;
  } else {
    keynote = "C"
  }

  if (keynote == f_sharp_exception) {
    major_scale = ["F#", "G#", "A#", "B", "C#", "D#", "E#", "F#"]
  } else {
    chromatic_scale = (flat_scales.includes(keynote)) ?
    new FlatChromatic(keynote).scale : new SharpChromatic(keynote).scale

    let majorArr = [0, 2, 4, 5, 7, 9, 11, 12];
    major_scale = _.at(chromatic_scale, majorArr);
  }

// Same with minor scale, I think this is incorrect. I should also look into enums, much better way of designing this.
  return major_scale;
}

module.exports = MajorScale;
