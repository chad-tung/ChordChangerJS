let assert = require('assert');
let MajorScale = require('../classes/scales/MajorScale.js');

describe('Major scale test', function() {
  it('should default set up as a C major scale', function() {
    let def_major = new MajorScale();
    assert.deepStrictEqual(def_major.scale, ["C", "D", "E", "F", "G", "A", "B", "C"]);
  });

  it('should setup with a G major scale when G is passed in as an argument', function() {
    let g_major = new MajorScale("G");
    assert.deepStrictEqual(g_major.scale, ["G", "A", "B", "C", "D", "E", "F#", "G"]);
  })
})
