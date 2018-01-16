let Key = function() {
  this.keynote = null;
  this.tonality = null;
  this.scale = [];
}

Key.prototype = {
  setKey: function(targetNote, targetTone) {
    this.note = targetNote;
    this.tonality = targetTone;
  },
  getKey: function() {
    return this.note + this.tonality;
  },
  setScale: function() {

  }
}

module.exports = Key;
