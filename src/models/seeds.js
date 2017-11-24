const Artist = require('./artist')

// artist.dropDatabase()

// List all existing artists
Artist.find() // Find all artist documents
  .then(artists => {
    // Once it had loaded, this function will be called
    console.log('Artists:', artists)
  })
  .catch(error => {
    console.error(error)
  })

// Artist.create({ name: 'Queen' })
//   // When this has completed, this function will be called
//   .then((artist) => {
//     console.log('Created artist', artist)
//   })

// Artist.create([
//   { name: 'sleepmakeswaves' },
//   { name: 'Groove Armada' }
// ])
//   // When this has completed, this function will be called
//   .then((artist) => {
//     console.log('Created artist', artist)
//   })
