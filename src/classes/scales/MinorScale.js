let _ = require('lodash');
let SharpChromatic = require('./SharpChromatic.js');
let FlatChromatic = require('./FlatChromatic.js');


let MinorScale = function(note) {
  this.scale = this.setScale(note);
}

MinorScale.prototype.setScale = function(note) {
  let e_flat_exception = "Eb";
  let flat_scales = ["D", "G", "C", "F", "Bb"];
  let sharp_scales = ["G#", "C#", "F#", "B", "E", "A"];

  let exceptions = ["Db", "D#", "Gb", "Ab", "A#"];
  let replacements = ["C#", "Eb", "F#", "G#", "Bb"];

  let chromatic_scale = [];
  let minor_scale = [];
  let keynote = ""

  if (note) {
    keynote = (exceptions.includes(note)) ?
      replacements[exceptions.indexOf(note)] : note;
  } else {
    keynote = "C"
  }

  if (keynote == e_flat_exception) {
    minor_scale = ["Eb", "F", "Gb", "Ab", "Bb", "Cb", "Db", "Eb"];
  } else {
    chromatic_scale = (flat_scales.includes(keynote)) ?
      new FlatChromatic(keynote).scale : new SharpChromatic(keynote).scale

    let minorArr = [0, 2, 3, 5, 7, 8, 10, 12];
    minor_scale = _.at(chromatic_scale, minorArr);
  }
// I think this is incorrect, this function should only deal with setting the function, not returning the scale it has set. That should be dealt with by a getter.
  return minor_scale
};

module.exports = MinorScale;
