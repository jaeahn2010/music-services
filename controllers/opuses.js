//req modules
const express = require('express')
const router = express.Router()

//req db connection & models
const db = require('../models')
const opusSchema = require('../models/opus')

let requestedRepertoire = [];

//all rts
//idx rt: all opuses, no reqs yet made
router.get('/', function (req, res) {
    db.Opus.find({})
        .then(opuses => {
            //to fill filter menu on opus-idx pg
            let fullComposersList = [];
            for (opus of opuses) {
                if (!fullComposersList.includes(opus.composer)) {
                    fullComposersList.push(opus.composer);
                }
            }
            fullComposersList.sort();
            //go to opus-idx w/ all opuses, composersList for filter, no client reqs yet
            res.render('opuses/opus-index', {
            opuses: opuses,
            fullComposersList: fullComposersList,
            filtered: false,
            requestMade: 'no'
        })
    })
})

//create rt:
router.post('/', (req, res) => {
    db.Opus.create(req.body)
        .then(opus => res.redirect('/opuses/' + opus._id))
})

//show rt: index w/ filters
router.get('/filter', function (req, res) {
    if (req.query.composer === undefined) {
        db.Opus.find( { instrumentation: { $elemMatch: { $eq: req.query.instrumentation } } } )
        .then(opuses => {
            res.render('opuses/opus-index', { 
                opuses: opuses,
                filtered: true,
                requestMade: 'no'
            })
        })
    } else if (req.query.instrumentation === undefined) {
        db.Opus.find( { composer: req.query.composer } )
        .then(opuses => {
            res.render('opuses/opus-index', { 
                opuses: opuses,
                filtered: true,
                requestMade: 'no'
            })
        })
    } else {
        db.Opus.find( { $and: [ { composer: req.query.composer }, { instrumentation: { $elemMatch: { $eq: req.query.instrumentation } } } ] } )
        .then(opuses => {
            res.render('opuses/opus-index', { 
                opuses: opuses,
                filtered: true,
                requestMade: 'no'
            })
        })
    }
})

//new rt: form to be filled to create new opus
router.get('/new', (req, res) => {
    res.render('opuses/opus-newform')
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

//update rt: get PUT req (whole opus) from opus-idx, add to req-new pg, redirect to req-new
router.put('/add-to-request/:requestMade/:opusId', (req, res) => {
    //if client didn't fill out req form yet
    console.log(req.params.requestMade);
    if (req.params.requestMade === 'no') {
        console.log("should display before cl req");
        db.Opus.findById(req.params.opusId)
            .then(opus => {
                requestedRepertoire.push(opus);
                res.render('client-requests/client-request-newform', { 
                requestedOpus: opus,
                requestedMvmt: null,
                requestMade: 'yes'
            })
        })
    //if client already filled out req form
    } else if (req.params.requestMade === 'yes') {
        console.log("should display after cl req");
        db.Opus.findById(req.params.opusId)
            .then(opus => {
                requestedRepertoire.push(opus);
                res.render('client-requests/client-request-edit', { 
                requestedOpus: opus,
                requestedMvmt: null,
                requestMade: 'yes'
            })
        })
    } else {
        console.log(req.params.opusId);
        res.render('404');
    }
})

//update rt: get PUT req (mvmt) from opus-idx, add to req-new pg, redirect to req-new
router.put('/add-to-request/:requestMade/:opusId/:movementNumber', (req, res) => {
    //if client didn't fill out req form yet
    if (req.params.requestMade === 'no') {
        db.Opus.findById(req.params.id)
            .then(opus => {
                requestedRepertoire.push({
                    title: opus.title,
                    composer: opus.composer,
                    movements: [{
                        movementNumber: opus.movements[opus.movements.indexOf(req.params.movementNumber)].movementNumber,
                        movementTitle: opus.movements[opus.movements.indexOf(req.params.movementNumber)].movementTitle,
                        movementPrice: opus.movements[opus.movements.indexOf(req.params.movementNumber)].movementPrice
                    }],
                    instrumentation: [...opus.instrumentation],
                    price: opus.price,
                    description: opus.description
                })
                res.render('client-requests/client-request-newform', { 
                requestedOpus: opus,
                requestedMvmt: req.params.movementNumber,
                requestMade: 'yes'
            })
        })
    //if client already filled out req form
    } else if (req.params.requestMade === 'yes') {
        db.Opus.findById(req.params.id)
            .then(opus => {
                requestedRepertoire.push({
                    title: opus.title,
                    composer: opus.composer,
                    movements: [{
                        movementNumber: opus.movements[opus.movements.indexOf(req.params.movementNumber)].movementNumber,
                        movementTitle: opus.movements[opus.movements.indexOf(req.params.movementNumber)].movementTitle,
                        movementPrice: opus.movements[opus.movements.indexOf(req.params.movementNumber)].movementPrice
                    }],
                    instrumentation: [...opus.instrumentation],
                    price: opus.price,
                    description: opus.description
                })
                res.render('client-requests/client-request-edit', { 
                requestedOpus: opus,
                requestedMvmt: req.params.movementNumber,
                requestMade: 'yes'
            })
        })
    }
})

// Export ^rts to be accessible in server.js
module.exports = router;
