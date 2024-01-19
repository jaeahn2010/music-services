//req modules
const express = require('express')
const router = express.Router()

//req db connection & models
const db = require('../models')
const clientRequest = require('../models/client-request')

//all rts
//idx rt: "my reqs" btn clicked: disp all reqs
router.get('/', function (req, res) {
    db.ClientRequest.find({})
        .then(clientRequests => res.render('client-requests/client-request-index', { clientRequests: clientRequests }))
})

//create rt: "submit new req" btn clicked: create new req w/ form data, redirect -> req-idx pg
router.post('/', (req, res) => {
    req.body.requestedRepertoire = JSON.parse(req.body.requestedRepertoire);
    db.ClientRequest.create(req.body)
        .then(clientRequest => {
            res.render('client-requests/client-request-details', { clientRequest: clientRequest })
        })
    })

//show rt: disp spec req
router.get('/:id', function (req, res) {
    db.ClientRequest.findById(req.params.id)
        .then(clientRequest => res.render('client-requests/client-request-details', { clientRequest: clientRequest }))
        .catch(() => res.render('404'))
})

//edit rt: "edit req" btn clicked: form to be used to edit spec req
router.get('/:id/edit', (req, res) => {
    db.ClientRequest.findById(req.params.id)
        .then(clientRequest => res.render('client-requests/client-request-edit', { clientRequest: clientRequest }))
})

//update rt: "apply changes" btn clicked: edit spec req w/ form data, redirect -> req-idx pg
router.put('/:id', (req, res) => {
    db.ClientRequest.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(() => res.redirect('/client-requests'))
})

//destroy rt: "delete this req" btn clicked: del req
router.delete('/:id', (req, res) => {
    db.ClientRequest.findByIdAndDelete(req.params.id)
        .then(() => res.redirect('/client-requests'))
})

//export ^rts to be accessible in 'server.js'
module.exports = router