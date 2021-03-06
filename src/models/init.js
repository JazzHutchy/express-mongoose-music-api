const mongoose = require('mongoose')

// Connect to our local database
mongoose.connect('mongodb://localhost/music-api',
  { useMongoClient: true },
  (error) => {
    // If there was an error connecting to the database
    if (error) {
      console.error('Error connecting to MongoDB database', error)
    }
  }
)
// Use the Promise functionality built into Node.js
mongoose.Promise = global.Promise

module.exports = mongoose