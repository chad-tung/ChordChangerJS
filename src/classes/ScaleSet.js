let SharpChromatic = require('./scales/SharpChromatic.js');
let FlatChromatic = require('./scales/FlatChromatic.js');
let MajorScale = require('./scales/MajorScale.js');
let MinorScale = require('./scales/MinorScale.js');

let ScaleSet = function(note) {
  this.tonic = "";
  this.sharp_chromatic = [];
  this.flat_chromatic = [];
  this.major = [];
  this.minor = [];

  (note) ? this.setScales(note) : this.setScales();
  // if (note) {
  //   this.setScales(note);
  // } else {
  //   this.setScales();
  // }
}

ScaleSet.prototype = {

  setTonic(note) {
    let letters = ["A", "B", "C", "D", "E", "F", "G"];
    let validLetters = [];

    for (item of letters) {
      validLetters.push(item);
      validLetters.push(item + "#");
      validLetters.push(item + "b");
    }

    let exceptions = ["Cb", "B#", "Fb", "E#"];
    let replacements = ["B", "C", "E", "F"];

    if (!note || !validLetters.includes(note)) {
      this.tonic = "C";
    } else {
      if (exceptions.includes(note)) {
        this.tonic = replacements[exceptions.indexOf(note)]
      } else {
        this.tonic = note;
      };
    };
  },

  setChromatic: function() {
    this.sharp_chromatic = new SharpChromatic(this.tonic).scale;
    this.flat_chromatic = new FlatChromatic(this.tonic).scale;
  },

  setMajorMinor: function() {
    this.major = new MajorScale(this.tonic).scale;
    this.minor = new MinorScale(this.tonic).scale;
  },

  setScales: function(note) {
    if (note) {
      this.setTonic(note);
    } else {
      this.setTonic();
    }
    this.setChromatic();
    this.setMajorMinor();
  }
}

module.exports = ScaleSet;
