let _ = require('lodash');

let Scale = function() {
  this.chromatic = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C"];
  this.flat_chromatic = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B", "C"];
  this.major = ["C", "D", "E", "F", "G", "A", "B", "C"];
  this.minor = ["C", "D", "D#", "F", "G", "G#", "A#", "C"];
}

Scale.prototype = {
  setChromatic: function(note) {
    let old_chromatic = this.chromatic;
    old_chromatic.pop();
    let keyIndex = old_chromatic.indexOf(note);
    let end_notes = old_chromatic.splice(0, keyIndex);
    new_chromatic = old_chromatic.concat(end_notes);
    new_chromatic.push(note);
    this.chromatic = new_chromatic;
  },

  setMajor: function() {
    let chromatic = this.chromatic;
    let majorArr = [0, 2, 4, 5, 7, 9, 11, 12];
    this.major = _.pullAt(chromatic, majorArr);
  },

  setMinor: function() {
    let chromatic = this.chromatic;
    let minorArr = [0, 2, 3, 5, 7, 8, 10, 12];
    this.minor = _.pullAt(chromatic, minorArr);
  }
};

module.exports = Scale;
