let assert = require('assert');
let ScaleSet = require('../classes/ScaleSet.js');

describe('key tests', function() {

  beforeEach(function() {
    scale = new ScaleSet();
  });

  it('should have a default tonic of C', function() {
    assert.strictEqual(scale.tonic, "C");
  })

  it('should have a chromatic', function() {
    assert.deepStrictEqual(scale.sharp_chromatic, ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C"]);
  });

  it('should have a flat_chromatic', function() {
    assert.deepStrictEqual(scale.flat_chromatic, ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B", "C"]);
  });

  it('should have a major', function() {
    assert.deepStrictEqual(scale.major, ["C", "D", "E", "F", "G", "A", "B", "C"]);
  })

  it('should be able to alter the chromatic start point', function() {
    scale.setScales("A");
    assert.deepStrictEqual(scale.sharp_chromatic, ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A"]);
  });

  it('should be able to set up major scale', function() {
    scale.setScales("D");
    assert.deepStrictEqual(scale.major, ["D", "E", "F#", "G", "A", "B", "C#", "D"]);
  });

  it('should be able to set up minor scale', function() {
    scale.setScales("A");
    assert.deepStrictEqual(scale.minor, ["A", "B", "C", "D", "E", "F", "G", "A"]);
  });

  it('should be able to mutate the chromatic scales despite accidentals', function() {
    scale.setScales("A#");
    assert.deepStrictEqual(scale.sharp_chromatic, ["A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#"]);

    assert.deepStrictEqual(scale.flat_chromatic, ["Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb"]);
  });

  it('should be able to use flats for major scales when appropriate', function() {
    scale.setScales("F");
    assert.deepStrictEqual(scale.major, ["F", "G", "A", "Bb", "C", "D", "E", "F"]);
  });

  it('should be able to use flats for minor scales when appropriate', function() {
    scale.setScales("D");
    assert.deepStrictEqual(scale.minor, ["D", "E", "F", "G", "A", "Bb", "C", "D"]);
  });

  it('should be able to handle accidentals that are white notes and alter the tonic accordingly', function() {
    scale.setScales("B#");
    assert.strictEqual(scale.tonic, "C");
  });

  it('should be able to construct with a different starting tonic', function() {
    let newScaleSet = new ScaleSet("A");
    assert.strictEqual(newScaleSet.tonic, "A");
    assert.deepStrictEqual(newScaleSet.sharp_chromatic, ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A"]);
    assert.deepStrictEqual(newScaleSet.flat_chromatic, ["A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A"]);
    assert.deepStrictEqual(newScaleSet.minor, ["A", "B", "C", "D", "E", "F", "G", "A"]);
  });

  it('should not set tonic for invalid notes', function() {
    let newScaleSet = new ScaleSet("H");
    assert.strictEqual(newScaleSet.tonic, "C");
  });
})
