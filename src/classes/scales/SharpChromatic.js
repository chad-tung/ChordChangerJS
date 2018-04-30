let Scale = require('./Scale.js');

// let SharpChromatic = function(note) {
//   this.scale = this.setScale(note);
// }
//
// SharpChromatic.prototype.setScale = function (note) {
//   let default_chromatic = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C"]
//
//   let relative_flats = ["Db", "Eb", "Gb", "Ab", "Bb"];
//   let relative_sharps = ["C#", "D#", "F#", "G#", "A#"];
//
//   let sharp_key = note;
//
//   if (note) {
//     if (relative_flats.includes(note)) {
//       sharp_key = relative_sharps[relative_flats.indexOf(note)]
//     }
//
//     old_chromatic = default_chromatic.slice(0, 12);
//
//     let keyIndex = old_chromatic.indexOf(sharp_key);
//     let end_notes = old_chromatic.splice(0, keyIndex);
//     let new_chromatic = old_chromatic.concat(end_notes);
//     new_chromatic.push(sharp_key);
//     return new_chromatic;
//   } else {
//     return default_chromatic;
//   }
// };
//
// SharpChromatic.prototype.getScale = function() {
//   return this.scale;
// }



class SharpChromatic extends Scale {
  constructor(note) {
    super(note);
    this.scale = this.setScale(note);
  }

  setScale(note) {
    let default_chromatic = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C"]

    let relative_flats = ["Db", "Eb", "Gb", "Ab", "Bb"];
    let relative_sharps = ["C#", "D#", "F#", "G#", "A#"];

    let sharp_key = note;

    if (note) {
      if (relative_flats.includes(note)) {
        sharp_key = relative_sharps[relative_flats.indexOf(note)]
      }

      let old_chromatic = default_chromatic.slice(0, 12);

      let keyIndex = old_chromatic.indexOf(sharp_key);
      let end_notes = old_chromatic.splice(0, keyIndex);
      let new_chromatic = old_chromatic.concat(end_notes);
      new_chromatic.push(sharp_key);
      return new_chromatic;
    } else {
      return default_chromatic;
    }
  }

  getScale() {
    return this.scale;
  }
}

module.exports = SharpChromatic;
