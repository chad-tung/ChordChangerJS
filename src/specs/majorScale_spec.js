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
  });

  it('should setup an F major scale with a Bb in array', function() {
    let f_major = new MajorScale("F");
    assert.deepStrictEqual(f_major.scale, ["F", "G", "A", "Bb", "C", "D", "E", "F"]);
  });

  it('should setup as a default C major scale if input is invalid', function() {
    let invalid_major = new MajorScale('P');
    assert.deepStrictEqual(invalid_major.scale, ["C", "D", "E", "F", "G", "A", "B", "C"])
  })
})
