const express = require('express')
const Artist = require('../models/artist') //The .. indicates backing out of the current folder

const router = express.Router()

// Read all artists
router.get('/artists', (req, res) => {
  // Ask the model to list all documents
  Artist.find()
    // Once it has loaded these documents
    .then(artists => {
      // Send them back as the response
      res.json(artists)
    })
})

// Read an individual artist
router.get('/artists/:id', (req, res) => {
  const id = req.params.id
  // Ask the model for the document with this id
  Artist.findById(id)
    // Once it has loaded this document
    .then((artist) => {
      if (artist) {
        res.json(artist)
      }
      else
        res.status(404).json({ error: `Artist not found with id: '${id}'` })
    })
    .catch((error) => {
      res.status(400).json({ error: error.message })
    })
})

// Create
router.post('/artists', (req, res) => {
  const attributes = req.body
  Artist.create(attributes)
    // Success
    .then((artist) => {
      res.status(201).json(artist)
    })
    // Failure
    .catch((error) => {
      res.status(400).json({ error: error })
    })
})

// Update

router.patch('/artists/:id', (req, res) => {
  const id = req.params.id
  const attributes = req.body
  Artist.findByIdAndUpdate(id, attributes, { new: true })
    .then((artist) => {
      res.json(artist)
    })
    .catch((error) => {
      res.status(400).json({ error: error.message })
    })

})

// Destroy

router.delete('/artists/:id', (req, res) => {
  const id = req.params.id
  Artist.findByIdAndRemove(id)
    .then((artist) => {
      res.json(artist)
    })
    .catch((error) => {
      res.status(400).json({ error: error.message })
    })

})

module.exports = router
