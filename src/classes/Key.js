let ScaleSet = require('./ScaleSet.js')

let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
let validLetters = []
let validTonal = ['major', 'minor']

for (item of letters) {
  validLetters.push(item)
  validLetters.push(item + '#')
  validLetters.push(item + 'b')
}

class Key {
  constructor(note, major_minor) {
    this.keynote = null
    this.tonality = null
    this.scale = []
    this.chords = []
  }

  setKey(targetNote, targetTone) {
      this.note = targetNote
      this.tonality = targetTone
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
