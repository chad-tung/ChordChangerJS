let assert = require('assert');
let Key = require('../classes/Key.js');

describe('key tests', function() {

  beforeEach(function() {
    key = new Key();
  });

  it('should start with no note', function() {
    assert.strictEqual(key.note, null);
  });
})
