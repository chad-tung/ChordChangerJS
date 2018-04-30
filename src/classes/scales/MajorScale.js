let _ = require('lodash');
let SharpChromatic = require('./SharpChromatic.js');
let FlatChromatic = require('./FlatChromatic.js');
let Scale = require('./Scale.js');

class MajorScale extends Scale {
  constructor(note) {
    super(note);
    this.scale = this.setScale(note);
  }

  setScale(note) {
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
    return major_scale;
  }

  getScale() {
    return this.scale;
  }
}

module.exports = MajorScale;
