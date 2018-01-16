let letters = ["A", "B", "C", "D", "E", "F", "G"];
let validLetters = [];

for (item of letters) {
  validLetters.push(item);
  validLetters.push(item + "#");
  validLetters.push(item + "b");
}

let defaultChromatic = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C"]


let SharpChromatic = function(note) {
  this.scale = [];
}

SharpChromatic.prototype.setScale = function (note) {
  
};

module.exports = SharpChromatic;
