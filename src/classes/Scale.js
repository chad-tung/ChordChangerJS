var Scale = function() {
  this.chromatic = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];
  this.major = [];
  this.minor = [];
}

Scale.prototype = {
  setChromatic: function(key) {
    var new_chromatic = this.chromatic;
    var keyIndex = new_chromatic.indexOf(key.note);
    var array2 = new_chromatic.slice(keyIndex);
    new_chromatic.concat(array2);
    this.chromatic = new_chromatic;
  }
};

module.exports = Scale;
