let assert = require('assert');
let ScaleSet = require('../../classes/ScaleSet.js');

describe('ScaleSet test', function() {
  beforeEach(function() {
    def_scaleset = new ScaleSet();
  });

  it('should default setup with a C major scale', function() {
    assert.deepStrictEqual(def_scaleset.major, ["C", "D", "E", "F", "G", "A", "B", "C"]);
  });

  it('should default setup with a C minor scale', function() {
    assert.deepStrictEqual(def_scaleset.minor, ["C", "D", "Eb", "F", "G", "Ab", "Bb", "C"]);
  });
})
