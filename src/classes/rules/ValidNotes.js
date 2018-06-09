class ValidNotes
{
  constructor() {
    this.notes = []
    this.setValidNotes()
  }

  setValidNotes() {
    let letters = ["A", "B", "C", "D", "E", "F", "G"]
    let validLetters = []

    for (item of letters) {
      validLetters.push(item)
      validLetters.push(item + "#")
      validLetters.push(item + "b")
    }

    this.notes = validLetters
  }

  getValidNotes() {
    return this.notes
  }
}

module.exports = ValidNotes
