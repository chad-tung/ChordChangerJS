let ScaleSet = require('./ScaleSet.js')
let ValidNotes = require('./rules/ValidNotes.js')

let validNoteObject = new ValidNotes()
let validLetters = validNoteObject.getValidNotes()



class Key {
  constructor(note, major_minor) {
    this.keynote = null
    this.tonality = null
    this.scale = []
    this.chords = []
  }

  setKey(targetNote, targetTone) {
    let validTonality = ['major', 'minor']
    this.note = targetNote
    this.tonality = (targetTone in validTonality) ? targetTone : 'major'
  }

  getKey() {
    return this.note + this.tonality
  }

  setScale(note) {
    let scales = new ScaleSet(note)
    this.scale = (tonality === 'major') ? scales.major : scales.minor
  }
}

module.exports = Key
