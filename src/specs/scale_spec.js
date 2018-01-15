let assert = require('assert');
let Scale = require('../classes/Scale.js');

describe('key tests', function() {

  beforeEach(function() {
    scale = new Scale();
  });

  it('should have a chromatic', function() {
    assert.deepStrictEqual(scale.chromatic, ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A"]);
  });

  it('should be able to alter the chromatic start point', function() {
    scale.setChromatic("C");
    assert.deepStrictEqual(scale.chromatic, ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C"])
  });
})
