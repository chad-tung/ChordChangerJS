var Scale = function() {
  this.chromatic = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C"];
  this.major = [];
  this.minor = [];
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
    var majorArr = [0, 2, 4, 5, 7, 9, 11, 13];
    for (var i of majorArr) {
      this.major.push(this.chromatic[i]);
    }
  }
};

module.exports = Scale;
