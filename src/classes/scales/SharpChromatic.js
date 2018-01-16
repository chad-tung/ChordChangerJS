let letters = ["A", "B", "C", "D", "E", "F", "G"];
let validLetters = [];

for (item of letters) {
  validLetters.push(item);
  validLetters.push(item + "#");
  validLetters.push(item + "b");
}

let default_chromatic = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C"]


let SharpChromatic = function(note) {
  this.scale = this.setScale(note);
}

SharpChromatic.prototype.setScale = function (note) {
  let relative_flats = ["Db", "Eb", "Gb", "Ab", "Bb"];
  let relative_sharps = ["C#", "D#", "F#", "G#", "A#"];

  let sharp_key = note;

  if (note && validLetters.includes(note)) {

    if (relative_flats.includes(note)) {
      sharp_key = relative_sharps[relative_flats.indexOf(note)]
    }

    old_chromatic = default_chromatic.slice(0, 12);

    let keyIndex = old_chromatic.indexOf(sharp_key);
    let end_notes = old_chromatic.splice(0, keyIndex);
    let new_chromatic = old_chromatic.concat(end_notes);
    new_chromatic.push(sharp_key);
    return new_chromatic;
  } else {
    return default_chromatic;
  }


};

module.exports = SharpChromatic;
