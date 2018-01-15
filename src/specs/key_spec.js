let assert = require('assert');
let Key = require('../classes/Key.js');

describe('key tests', function() {

  beforeEach(function() {
    key = new Key();
  });

  it('should start with no note', function() {
    assert.strictEqual(key.note, null);
  });

  it('should have no scale', function() {
    assert.deepStrictEqual(key.scale, []);
  });

  it('should have no tonality', function() {
    assert.strictEqual(key.tonality, null);
  });

  it('should be able to setKey', function() {
    key.setKey('C', 'major');
    assert.strictEqual(key.getKey(), 'Cmajor');
  })
})
