let letters = ["A", "B", "C", "D", "E", "F", "G"];
let validLetters = [];

for (item of letters) {
  validLetters.push(item);
  validLetters.push(item + "#");
  validLetters.push(item + "b");
}

let default_chromatic = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B", "C"]


let FlatChromatic = function(note) {
  this.scale = this.setScale(note);
}

FlatChromatic.prototype.setScale = function (note) {
  let relative_flats = ["Db", "Eb", "Gb", "Ab", "Bb"];
  let relative_sharps = ["C#", "D#", "F#", "G#", "A#"];

  let flat_key = note;

  if (note && validLetters.includes(note)) {

    if (relative_sharps.includes(note)) {
      flat_key = relative_flats[relative_sharps.indexOf(note)]
    }

    old_chromatic = default_chromatic.slice(0, 12);

    let keyIndex = old_chromatic.indexOf(flat_key);
    let end_notes = old_chromatic.splice(0, keyIndex);
    let new_chromatic = old_chromatic.concat(end_notes);
    new_chromatic.push(flat_key);
    return new_chromatic;
  } else {
    return default_chromatic;
  }


};

module.exports = FlatChromatic;
