let assert = require('assert');
let SharpChromatic = require('../classes/scales/SharpChromatic.js');

describe('Sharp chromatic scale tests', function() {

  it('should have a default chromatic starting with C', function() {
    let c_chrom = new SharpChromatic();
    assert.deepStrictEqual(c_chrom.scale, ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C"]);
  });

  it('should set a chromatic scale starting with A as its scale when initialised with argument', function() {
    let a_chrom = new SharpChromatic("A");
    assert.deepStrictEqual(a_chrom.scale, ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A"]);
  });

  it('should handle flat accidentals', function() {
    let db_chrom = new SharpChromatic("Db");
    assert.deepStrictEqual(db_chrom.scale, ["C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#"]);
  });

  it('should set C as the chromatic for incompatible inputs', function() {
    let z_chrom = new SharpChromatic("h");
    assert.deepStrictEqual(z_chrom.scale, ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C"]);
  });

  it('should NOT be able to set different keys after being initialised', function() {
    let g_chrom = new SharpChromatic("G");
    assert.deepStrictEqual(g_chrom.scale, ["G", "G#", "A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G"]);
    g_chrom.setScale("B");
    assert.deepStrictEqual(g_chrom.scale, ["G", "G#", "A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G"]);
  })
})
