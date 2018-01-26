let ScaleSet = require('../../../ScaleSet.js')

let MajRootTriad = function(root_note) {
  this.scale = new ScaleSet(root_note).major;
}

MajRootTriad.prototype.setScale = function (root_note) {
  if (!root_note) {
    this.scale = new ScaleSet().major;
  } else {
    this.scale = newScaleSet(root_note);
  }
};

MajRootTriad.prototype.setTriad = function (note) {

}

module.exports = MajRootTriad;
