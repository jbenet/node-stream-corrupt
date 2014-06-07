var through2 = require('through2')
var shuffle = require('shuffle-buffer')

module.exports = Corrupt

function Corrupt(probability) {
  return through2(corrupt)

  function corrupt(data, enc, next) {
    if (Math.random() <= probability) {
      if (Math.random() < 0.5)
        data = shuffle(data)
      else
        data[0] = data[1]
    }
    this.push(data)
    next()
  }
}
