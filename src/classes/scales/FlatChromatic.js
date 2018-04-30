const Scale = require('./Scale.js');

class FlatChromatic extends Scale {
  constructor(note) {
    super(note);
    this.scale = this.setScale(note);
  }

  setScale(note) {
    const default_chromatic = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B", "C"]

    const relative_flats = ["Db", "Eb", "Gb", "Ab", "Bb"];
    const relative_sharps = ["C#", "D#", "F#", "G#", "A#"];

    let flat_key = note;

    if (note) {

      if (relative_sharps.includes(note)) {
        flat_key = relative_flats[relative_sharps.indexOf(note)]
      }

      let old_chromatic = default_chromatic.slice(0, 12);

      let keyIndex = old_chromatic.indexOf(flat_key);
      let end_notes = old_chromatic.splice(0, keyIndex);
      let new_chromatic = old_chromatic.concat(end_notes);
      new_chromatic.push(flat_key);
      return new_chromatic;
    } else {
      return default_chromatic;
    }
  }

  getScale(note) {
    return this.scale;
  }
}

module.exports = FlatChromatic;
