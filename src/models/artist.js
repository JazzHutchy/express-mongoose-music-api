// Ensure we have established a connection to the database
const mongoose = require('./init')

var Artist = mongoose.model('Artist', {
  name: String  //String and Text do the same thing
})

module.exports = Artist
