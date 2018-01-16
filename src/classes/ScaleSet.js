let _ = require('lodash');

let ScaleSet = function() {
  this.tonic = "C"
  this.sharp_chromatic = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C"];
  this.flat_chromatic = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B", "C"];
  this.major = ["C", "D", "E", "F", "G", "A", "B", "C"];
  this.minor = ["C", "D", "D#", "F", "G", "G#", "A#", "C"];
}

ScaleSet.prototype = {
  // setSharpChromatic: function() {
  //   let exceptions = ["Db", "Eb", "Gb", "Ab", "Bb"];
  //   let replacements = ["C#", "D#", "F#", "G#", "A#"];
  //   if (!exceptions.indexOf(this.tonic)) {
  //
  //   }
  // },
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


    // this.sharp_chromatic = new_chromatic;

// This function below works only for white keys.
    // let changed_chromatic = this.sharp_chromatic;
    // let changed_flat_chromatic = this.flat_chromatic;
    // let chromatics = [changed_chromatic, changed_flat_chromatic];
    // let new_chromatics = [];
    // for (var old_chromatic of chromatics) {
    //   old_chromatic.pop();
    //   let keyIndex = old_chromatic.indexOf(note);
    //   let end_notes = old_chromatic.splice(0, keyIndex);
    //   new_chromatic = old_chromatic.concat(end_notes);
    //   new_chromatic.push(note);
    //   new_chromatics.push(new_chromatic);
    // }
    // this.sharp_chromatic = new_chromatics[0];
    // this.flat_chromatic = new_chromatics[1];


    // let old_chromatic = this.chromatic;
    // old_chromatic.pop();
    // let keyIndex = old_chromatic.indexOf(note);
    // let end_notes = old_chromatic.splice(0, keyIndex);
    // new_chromatic = old_chromatic.concat(end_notes);
    // new_chromatic.push(note);
    // this.chromatic = new_chromatic;
  },

  setMajor: function() {
    let chromatic = this.sharp_chromatic;
    let majorArr = [0, 2, 4, 5, 7, 9, 11, 12];
    this.major = _.pullAt(chromatic, majorArr);
  },

  setMinor: function() {
    let chromatic = this.sharp_chromatic;
    let minorArr = [0, 2, 3, 5, 7, 8, 10, 12];
    this.minor = _.pullAt(chromatic, minorArr);
  },
  setScales: function(note) {
    this.tonic = note;
    this.setChromatic();
  }
};

module.exports = ScaleSet;
