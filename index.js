var mongoose = require('mongoose')
var config = require('./config.js')
console.log(config)
console.log(process.env)
mongoose.connect('mongodb://' + config.host + '/' + config.database)

var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
  var kittySchema = mongoose.Schema({
    name: String
  })

  var Kitten = mongoose.model('Kitten', kittySchema)
  var silence = new Kitten({ name: 'Silence' })
  silence.save(function (err, doc) {
    console.log(err)
    console.log(doc)
  })

  setInterval(function () {
    var silence = new Kitten({ name: 'Silence' })
    silence.save(function (err, doc) {
      console.log(err)
      console.log(doc)
    })
  }, 5000)
})
