var _ = require('lodash');

var Scale = function() {
  this.chromatic = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C"];
  this.major = ["C", "D", "E", "F", "G", "A", "B", "C"];
  this.minor = ["C", "D", "D#", "F", "G", "G#", "A#", "C"];
}

Scale.prototype = {
  setChromatic: function(note) {
    var old_chromatic = this.chromatic;
    old_chromatic.pop();
    var keyIndex = old_chromatic.indexOf(note);
    var end_notes = old_chromatic.splice(0, keyIndex);
    new_chromatic = old_chromatic.concat(end_notes);
    new_chromatic.push(note);
    this.chromatic = new_chromatic;
  },

  setMajor: function() {
    var chromatic = this.chromatic;
    var majorArr = [0, 2, 4, 5, 7, 9, 11, 13];
    this.major = _.pullAt(chromatic, majorArr);
  }
};

module.exports = Scale;
