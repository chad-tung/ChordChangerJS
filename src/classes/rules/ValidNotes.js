class ValidNotes
{
  constructor() {
    this.setValidNotes()
    this.exceptions = ['Cb', 'B#', 'Fb', 'E#']
    this.replacements = ['B', 'C', 'E', 'F']
  }

  setValidNotes() {
    let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
    let validLetters = []

    for (let i = 0; i < letters.length; i ++) {
      validLetters.push(letters[i])
      validLetters.push(letters[i] + '#')
      validLetters.push(letters[i] + 'b')
    }

    this.notes = validLetters
  }

  getValidNotes() {
    return this.notes
  }

  getExceptions() {
    return this.exceptions
  }

  getReplacements() {
    return this.replacements
  }
}

module.exports = ValidNotes
