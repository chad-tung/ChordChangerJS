let assert = require('assert');
let FlatChromatic = require('../classes/scales/FlatChromatic.js');

describe('Flat chromatic scale tests', function() {

  it('should have a default chromatic starting with C', function() {
    let c_chrom = new FlatChromatic();
    assert.deepStrictEqual(c_chrom.scale, ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B", "C"]);
  });

  it('should set a chromatic scale starting with A as its scale when initialised with argument', function() {
    let a_chrom = new FlatChromatic("A");
    assert.deepStrictEqual(a_chrom.scale, ["A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A"]);
  });

  it('should handle sharp accidentals', function() {
    let db_chrom = new FlatChromatic("C#");
    assert.deepStrictEqual(db_chrom.scale, ["Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B", "C", "Db"]);
  });

  it('should set C as the chromatic for incompatible inputs', function() {
    let z_chrom = new FlatChromatic("h");
    assert.deepStrictEqual(z_chrom.scale, ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B", "C"]);
  });
})
