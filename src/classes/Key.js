var Key = function() {
  this.note = null;
  this.tonality = null;
  this.scale = [];
}

Key.prototype = {
  setKey: function(targetNote, targetTone) {
    this.note = targetNote;
    this.tonality = tagetTone;
  },
  getKey: function() {
    return this.note + this.tonality;
  }
}
