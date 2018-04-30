let ScaleSet = require('../../../ScaleSet.js')
let Scale = require('../../../Scale.js');

let RootTriad = function(scale, note) {
  (scale instanceof ScaleSet)this.scale = scale;
  this.notes = [];
}

RootTriad.prototype.setTriad = function(note) {

}

module.exports = RootTriad;
