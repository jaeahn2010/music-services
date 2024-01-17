//req modules
const express = require('express')
const router = express.Router()

//req db connection & models
const db = require('../models')

//all rts
//idx rt (GET/Read): disp all reqs
router.get('/', function (req, res) {
    db.ClientRequest.find({})
        .then(clientRequests => res.render('client-requests/client-request-index', { clientRequests: clientRequests }))
})

//create rt (POST/Create): receive POST req sent from new rt, creates new req doc w/ form data, redirect to show pg of new req
router.post('/', (req, res) => {
    console.log(req.body);
    db.ClientRequest.create(req.body)
        .then(() => res.redirect('/client-requests'))
        })

//new rt (GET/Read): form to be filled out by user to POST new req
router.get('/new', (req, res) => {
    db.Opus.find({})
        .then(opuses => res.render('client-requests/client-request-newform', { opuses: opuses, isNewRequest: true }))
})

//show rt (GET/Read): disp spec req w/ url param
router.get('/:id', function (req, res) {
    db.ClientRequest.findById(req.params.id)
        .then(clientRequest => res.render('client-requests/client-request-details', { clientRequest: clientRequest }))
        .catch(() => res.render('404'))
})

//update rt (PUT/Update): receive PUT req from edit rt, edit spec req doc w/ form data, redirect to show pg of updated req
router.put('/:id', (req, res) => {
    db.ClientRequest.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(() => res.redirect('/client-requests'))
})

//destroy rt (DELETE/Delete): del req doc w/ url param
router.delete('/:id', (req, res) => {
    db.ClientRequest.findByIdAndDelete(req.params.id)
        .then(() => res.redirect('/client-requests'))
})

//edit rt (GET/Read): form to be used by user to PUT (edit) props of existing req
router.get('/:id/edit', (req, res) => {
    db.ClientRequest.findById(req.params.id)
        .then(clientRequest => res.render('client-requests/client-request-edit', { clientRequest: clientRequest }))
})

//export ^rts to be accessible in 'server.js'
module.exports = router