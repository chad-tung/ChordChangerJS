let assert = require('assert');
let MajRootTriad = require('../../classes/chords/major/triads/MajRootTriad.js');

describe('Root triad test', function() {

  it('should default form into a cmajor', function() {
    let def_triad = new MajRootTriad()
    assert.deepStrictEqual(def_triad.scale, ["C", "D", "E", "F", "G", "A", "B", "C"]);
  })
});
