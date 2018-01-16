let _ = require('lodash');

let ScaleSet = function() {
  this.tonic = "C"
  this.sharp_chromatic = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C"];
  this.flat_chromatic = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B", "C"];
  this.major = ["C", "D", "E", "F", "G", "A", "B", "C"];
  this.minor = ["C", "D", "D#", "F", "G", "G#", "A#", "C"];
}

ScaleSet.prototype = {

  setChromatic: function() {
    let exceptions = ["Db", "Eb", "Gb", "Ab", "Bb", "C#", "D#", "F#", "G#", "A#"]
    let relative_flats = ["Db", "Eb", "Gb", "Ab", "Bb"];
    let relative_sharps = ["C#", "D#", "F#", "G#", "A#"];

    let sharp_key = this.tonic;
    let flat_key = this.tonic;

    if (relative_flats.includes(this.tonic)) {
      sharp_key = relative_sharps[relative_flats.indexOf(this.tonic)]
    } else if (relative_sharps.includes(this.tonic)) {
      flat_key = relative_flats[relative_sharps.indexOf(this.tonic)];
    }

    let keys = [sharp_key, flat_key];
    let changed_chromatic = this.sharp_chromatic;
    let changed_flat_chromatic = this.flat_chromatic;
    let chromatics = [changed_chromatic, changed_flat_chromatic];
    let new_chromatics = [];

    for (let i=0; i < 2; i++) {
      let old_chromatic = chromatics[i];
      old_chromatic.pop();
      let keyIndex = old_chromatic.indexOf(keys[i]);
      let end_notes = old_chromatic.splice(0, keyIndex);
      new_chromatic = old_chromatic.concat(end_notes);
      new_chromatic.push(keys[i]);
      new_chromatics.push(new_chromatic);
    }

    this.sharp_chromatic = new_chromatics[0];
    this.flat_chromatic = new_chromatics[1];

  },

  setMajor: function() {
    let f_sharp_exception = "F#";
    let flat_scales = ["F", "Bb", "Eb", "Ab", "Db"];
    let sharp_scales = ["B", "E", "A", "D", "G", "C"];
    let tonic = this.tonic;

    let chromatic_scale = [];

    if (tonic == f_sharp_exception) {
      this.major = ["F#", "G#", "A#", "B", "C#", "D#", "E#", "F#"]
    } else {
      if (flat_scales.includes(tonic)) {
        chromatic_scale = this.flat_chromatic;
      } else {
        chromatic_scale = this.sharp_chromatic;
      }
      let majorArr = [0, 2, 4, 5, 7, 9, 11, 12];
      this.major = _.at(chromatic_scale, majorArr);
    }

  },

  setMinor: function() {
    let e_flat_exception = "Eb";
    let flat_scales = ["D", "G", "C", "F", "Bb"];
    let sharp_scales = ["G#", "C#", "F#", "B", "E", "A"];
    let tonic = this.tonic;

    let chromatic_scale = [];

    if (tonic == e_flat_exception) {
      this.minor = ["Eb", "F", "Gb", "Ab", "Bb", "Cb", "Db", "Eb"];
    } else {
      if (flat_scales.includes(tonic)) {
        chromatic_scale = this.flat_chromatic;
      } else {
        chromatic_scale = this.sharp_chromatic;
      }
      let minorArr = [0, 2, 3, 5, 7, 8, 10, 12];
      this.minor = _.at(chromatic_scale, minorArr);
    }

    // let chromatic = this.sharp_chromatic;
    // let minorArr = [0, 2, 3, 5, 7, 8, 10, 12];
    // this.minor = _.at(chromatic, minorArr);
  },
  setScales: function(note) {
    this.tonic = note;
    this.setChromatic();
    this.setMinor();
    this.setMajor();
  }
};

module.exports = ScaleSet;
