var Scale = function() {
  this.chromatic = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];
  this.major = [];
  this.minor = [];
}

Scale.prototype = {
  setChromatic: function(note) {
    var old_chromatic = this.chromatic;
    var keyIndex = old_chromatic.indexOf(note);
    var end_notes = old_chromatic.splice(0, keyIndex);
    new_chromatic = old_chromatic.concat(end_notes);
    this.chromatic = new_chromatic;
  }
};

module.exports = Scale;
