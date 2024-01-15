//req modules
const express = require('express')
const router = express.Router()

//req db connection & models
const db = require('../models')
const opusSchema = require('../models/opus')

//all rts
//idx rt: all opuses
router.get('/', function (req, res) {
    db.Opus.find({})
        .then(opuses => res.render('opuses/opus-index', { opuses: opuses }))
})

//create rt:
router.post('/', (req, res) => {
    db.Opus.create(req.body)
        .then(opus => res.redirect('/opuses/' + opus._id))
})

//show rt: disp all opuses w/ spec filter
router.get('/filter/:category', function (req, res) {
    db.Opus.find( { category: req.params.category} )
        .then(opuses => res.render('opuses/opus-index', { opuses: opuses }))
})

//new rt: form to be filled to create new opus
router.get('/new/:id', (req, res) => {
    db.Opus.findById(req.params.id)
        .then(opus => res.render('opuses/opus-newform', { opus : opus }))
})

//show rt: spec opus
router.get('/:id', function (req, res) {
    db.Opus.findById(req.params.id)
        .then(opus => res.render('opuses/opus-details', { opus: opus }))
        .catch(() => res.render('404'))
})

//update rt: get PUT req from ^edit, edits spec opus, redirect to show pg of updated opus
router.put('/:id', (req, res) => {
    db.Opus.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(opus => res.redirect('/opuses/' + opus._id))
})

//destroy rt: del spec opus
router.delete('/:id', (req, res) => {
    db.Opus.findByIdAndDelete(req.params.id)
        .then(() => res.redirect('/opuses'))
})

//edit rt: edit spec opus
router.get('/:id/edit', (req, res) => {
    db.Opus.findById(req.params.id)
        .then(opus => res.render('opuses/opus-edit', { opus: opus }))
})

//update rt: get PUT req from rq new pg, add to rq new pg, redirect to rq new
router.get('/:id/add-to-request', (req, res) => {
    db.Opus.findById(req.params.id)
        .then(opus => res.render('client-requests/client-request-newform', { 
            requestedOpus: opus,
            isNewRequest: false 
        }))
})

// Export ^rts to be accessible in server.js
module.exports = router;
