let SharpChromatic = require('./scales/SharpChromatic.js')
let FlatChromatic = require('./scales/FlatChromatic.js')
let MajorScale = require('./scales/MajorScale.js')
let MinorScale = require('./scales/MinorScale.js')
let ValidNotes = require('./rules/ValidNotes')

class ScaleSet {
  constructor(note) {
    this.tonic = ''
    this.sharp_chromatic = []
    this.flat_chromatic = []
    this.major = []
    this.minor = []

    this.setScales(note)
  }

  setTonic(note) {
    let validNoteObject = new ValidNotes()
    let validLetters = validNoteObject.getValidNotes()
    let exceptions = validNoteObject.getExceptions()
    let replacements = validNoteObject.getReplacements()

    if (note && validLetters.includes(note)) {
      this.tonic = (exceptions.includes(note)) ? replacements[exceptions.indexOf(note)] : note
    } else {
      this.tonic = 'C'
    }
  }

  setChromatic() {
    this.sharp_chromatic = new SharpChromatic(this.tonic).scale
    this.flat_chromatic = new FlatChromatic(this.tonic).scale
  }

  setMajorMinor() {
    this.major = new MajorScale(this.tonic).scale
    this.minor = new MinorScale(this.tonic).scale
  }

  setScales(note) {
    this.setTonic(note)

    this.setChromatic()
    this.setMajorMinor()
  }
}

module.exports = ScaleSet
