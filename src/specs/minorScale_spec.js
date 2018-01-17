let assert = require('assert');
let MinorScale = require('../classes/scales/MinorScale.js');

describe('Minor scale test', function() {
  it('should default set up as a C minor scale', function() {
    let def_minor = new MinorScale();
    assert.deepStrictEqual(def_minor.scale, ["C", "D", "Eb", "F", "G", "Ab", "Bb", "C"]);
  });
})
