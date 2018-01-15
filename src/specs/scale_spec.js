let assert = require('assert');
let Scale = require('../classes/Scale.js');

describe('key tests', function() {

  beforeEach(function() {
    scale = new Scale();
  });

  it('should have a chromatic', function() {
    assert.deepStrictEqual(scale.chromatic, ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"]);
  })
})
