let assert = require('assert');
let MinorScale = require('../classes/scales/MinorScale.js');

describe('Minor scale test', function() {
  it('should default set up as a C minor scale', function() {
    let def_minor = new MinorScale();
    assert.deepStrictEqual(def_minor.scale, ["C", "D", "Eb", "F", "G", "Ab", "Bb", "C"]);
  });

  it('should setup with an A minor scale when A is passed in as an argument', function() {
    let a_minor = new MinorScale("A");
    assert.deepStrictEqual(a_minor.scale, ["A", "B", "C", "D", "E", "F", "G", "A"]);
  });
})
