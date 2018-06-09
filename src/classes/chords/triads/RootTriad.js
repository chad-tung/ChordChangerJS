let ScaleSet = require('../../../ScaleSet.js')
let Scale = require('../../../Scale.js')

let RootTriad = function(scale, note) {
  this.scale = (scale instanceof Scale) ? scale : new Scale()
  this.notes = []
}

RootTriad.prototype.setTriad = function(note) {
  this.notes[] =
}

module.exports = RootTriad
