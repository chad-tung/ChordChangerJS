let assert = require('assert');
let ScaleSet = require('../../classes/ScaleSet.js');

describe('ScaleSet test', function() {
  beforeEach(function() {
    def_scaleset = new ScaleSet();
    g_scaleset = new ScaleSet("G");
    c_sharp_scaleset = new ScaleSet("C#");
  });

  it('should default setup with a C tonic', function() {
    assert.strictEqual(def_scaleset.tonic, "C");
  })

  it('should default setup with a C major scale', function() {
    assert.deepStrictEqual(def_scaleset.major, ["C", "D", "E", "F", "G", "A", "B", "C"]);
  });

  it('should default setup with a C minor scale', function() {
    assert.deepStrictEqual(def_scaleset.minor, ["C", "D", "Eb", "F", "G", "Ab", "Bb", "C"]);
  });

  it('should default setup with a C chromatic', function() {
    assert.deepStrictEqual(def_scaleset.sharp_chromatic, ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C"]);
  });

  it('should default setup with a C chromatic with flats', function() {
    assert.deepStrictEqual(def_scaleset.flat_chromatic, ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B", "C"]);
  });

  it('should G initialise with a G tonic', function() {
    assert.strictEqual(g_scaleset.tonic, "G");
  })
})
