let assert = require('assert')
let ScaleSet = require('../../classes/ScaleSet.js')

describe('ScaleSet test', function() {
  beforeEach(function() {
    def_scaleset = new ScaleSet()
    g_scaleset = new ScaleSet("G")
    c_sharp_scaleset = new ScaleSet("C#")
    g_flat_scaleset = new ScaleSet("Gb")
    f_flat_scaleset = new ScaleSet("Fb")
    invalid_scaleset = new ScaleSet("H")
    invalid_scaleset2 = new ScaleSet(2)
  })

  // Default tests

  it('should default setup with a C tonic', function() {
    assert.strictEqual(def_scaleset.tonic, "C")
  })

  it('should default setup with a C major scale', function() {
    assert.deepStrictEqual(def_scaleset.major, ["C", "D", "E", "F", "G", "A", "B", "C"])
  })

  it('should default setup with a C minor scale', function() {
    assert.deepStrictEqual(def_scaleset.minor, ["C", "D", "Eb", "F", "G", "Ab", "Bb", "C"])
  })

  it('should default setup with a C chromatic', function() {
    assert.deepStrictEqual(def_scaleset.sharp_chromatic, ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C"])
  })

  it('should default setup with a C chromatic with flats', function() {
    assert.deepStrictEqual(def_scaleset.flat_chromatic, ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B", "C"])
  })

  // G scaleset tests

  it('should G initialise with a G tonic', function() {
    assert.strictEqual(g_scaleset.tonic, "G")
  })

  it('should G initialise with a G major scale', function() {
    assert.deepStrictEqual(g_scaleset.major, ["G", "A", "B", "C", "D", "E", "F#", "G"])
  })

  it('should G initialise with a G minor scale', function() {
    assert.deepStrictEqual(g_scaleset.minor, ["G", "A", "Bb", "C", "D", "Eb", "F", "G"])
  })

  it('should G initialise with a G chromatic sharp scale', function() {
    assert.deepStrictEqual(g_scaleset.sharp_chromatic, ["G", "G#", "A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G"])
  })

  it('should G initialise with a G chromatic flat scale', function() {
    assert.deepStrictEqual(g_scaleset.flat_chromatic, ["G", "Ab", "A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G"])
  })

  // C sharp tests

  it('should C# initialise with a C# tonic', function() {
    assert.strictEqual(c_sharp_scaleset.tonic, "C#")
  })

  it('should C# initialise with a C# major scale, which will be Db major', function() {
    assert.deepStrictEqual(c_sharp_scaleset.major, ["Db", "Eb", "F", "Gb", "Ab", "Bb", "C", "Db"])
  })

  it('should C# initialise with a C# minor scale', function() {
    assert.deepStrictEqual(c_sharp_scaleset.minor, ["C#", "D#", "E", "F#", "G#", "A", "B", "C#"])
  })

  it('should C# initialise with a C# chromatic scale', function() {
    assert.deepStrictEqual(c_sharp_scaleset.sharp_chromatic, ["C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#"])
  })

  it('should C# initialise with a Db chromatic scale', function() {
    assert.deepStrictEqual(c_sharp_scaleset.flat_chromatic, ["Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B", "C", "Db"])
  })

  // g flat tests

  it('should Gb initialise with a Gb tonic', function() {
    assert.strictEqual(g_flat_scaleset.tonic, "Gb")
  })

  it('should Gb initialise with a F# major scale', function() {
    assert.deepStrictEqual(g_flat_scaleset.major, ["F#", "G#", "A#", "B", "C#", "D#", "E#", "F#"])
  })

  it('should Gb initialise with a F# minor scale', function() {
    assert.deepStrictEqual(g_flat_scaleset.minor, ["F#", "G#", "A", "B", "C#", "D", "E", "F#"])
  })

  it('should Gb initialise with a F# chromatic scale', function() {
    assert.deepStrictEqual(g_flat_scaleset.sharp_chromatic, ["F#", "G", "G#", "A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#"])
  })

  it('should Gb initialise with a Gb chromatic flat scale', function() {
    assert.deepStrictEqual(g_flat_scaleset.flat_chromatic, ["Gb", "G", "Ab", "A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb"])
  })

  //  f flat tests

  it('should Fb initialise with an E tonic', function() {
    assert.strictEqual(f_flat_scaleset.tonic, "E")
  })

  it('should Fb initialise with an E major scale', function() {
    assert.deepStrictEqual(f_flat_scaleset.major, ["E", "F#", "G#", "A", "B", "C#", "D#", "E"])
  })

  it('should Fb initialise with an E minor scale', function() {
    assert.deepStrictEqual(f_flat_scaleset.minor, ["E", "F#", "G", "A", "B", "C", "D", "E"])
  })

  it('should Fb initialise with an E chromatic scale', function() {
    assert.deepStrictEqual(f_flat_scaleset.sharp_chromatic, ["E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D", "D#", "E"])
  })

  it('should Fb initialise with an E chromatic flat scale', function() {
    assert.deepStrictEqual(f_flat_scaleset.flat_chromatic, ["E", "F", "Gb", "G", "Ab", "A", "Bb", "B", "C", "Db", "D", "Eb", "E"])
  })

  // Invalid input tests

  it('should default construct for invalid input strings', function() {
    assert.deepStrictEqual(invalid_scaleset, def_scaleset)
  })

  it('should set the tonic as C for integer arguments', function() {
    assert.deepStrictEqual(invalid_scaleset2, def_scaleset)
  })

})
