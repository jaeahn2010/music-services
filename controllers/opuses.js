//req modules
const express = require('express')
const router = express.Router()

//req db connection & models
const db = require('../models')
const opusSchema = require('../models/opus')

let requestedRepertoire = [];

/* ----------------------------------------- USER & ADMIN ROUTES ----------------------------------------- */
//idx rt: 'see repertoire list' btn clicked while client-req NOT made: disp all opuses
router.get('/', function (req, res) {
    db.Opus.find({})
        .then(opuses => {
            //to fill composer-filter drop-down menu on opus-idx pg w/o any repeats
            let fullComposersList = [];
            for (opus of opuses) {
                if (!fullComposersList.includes(opus.composer)) {
                    fullComposersList.push(opus.composer);
                }
            }
            fullComposersList.sort();
            //go to opus-idx pg w/ all opuses, fullComposersList for filter, client-req NOT made
            res.render('opuses/opus-index', {
            opuses: opuses,
            fullComposersList: fullComposersList,
            filtered: false,
            requestInProgress: 'no'
        })
    })
})

//show rt: 'filter' btn clicked while client-req NOT made: disp idx pg w/ filters
router.get('/filter', function (req, res) {
    //instrumentation filter specified only
    if (req.query.composer === undefined) {
        db.Opus.find( { instrumentation: { $elemMatch: { $eq: req.query.instrumentation } } } )
        .then(opuses => {
            res.render('opuses/opus-index', { 
                opuses: opuses,
                filtered: true,
                requestInProgress: 'no'
            })
        })
    //composer filter specified only
    } else if (req.query.instrumentation === undefined) {
        db.Opus.find( { composer: req.query.composer } )
        .then(opuses => {
            res.render('opuses/opus-index', { 
                opuses: opuses,
                filtered: true,
                requestInProgress: 'no'
            })
        })
    //both filters specified
    } else {
        db.Opus.find( { $and: [ { composer: req.query.composer }, { instrumentation: { $elemMatch: { $eq: req.query.instrumentation } } } ] } )
        .then(opuses => {
            res.render('opuses/opus-index', { 
                opuses: opuses,
                filtered: true,
                requestInProgress: 'no'
            })
        })
    }
})

//show rt: spec 'opus link' clicked: show spec opus on details pg
router.get('/:id', function (req, res) {
    db.Opus.findById(req.params.id)
        .then(opus => res.render('opuses/opus-details', { opus: opus }))
        .catch(() => res.render('404'))
})

/* ----------------------------------------- USER-ONLY ROUTES ----------------------------------------- */

//update rt: 'cart img' btn of WHOLE OPUS clicked: add to req-new pg, redirect to req-new
router.put('/add-to-request/:requestInProgress/:opusId', (req, res) => {
    //if client didn't fill out req form yet
    if (req.params.requestInProgress === 'no') {
        db.Opus.findById(req.params.opusId)
            .then(opus => {
                requestedRepertoire.push(opus);
                res.render('client-requests/client-request-newform', { 
                opus: opus,
                allRequests: requestedRepertoire,
                requestedMvmt: null,
                requestInProgress: 'no'
            })
        })
    //if client already filled out req form
    } else if (req.params.requestInProgress === 'yes') {
        console.log("should display after cl req");
        db.Opus.findById(req.params.opusId)
            .then(opus => {
                requestedRepertoire.push(opus);
                res.render('client-requests/client-request-edit', { 
                opus: opus,
                allRequests: requestedRepertoire,
                requestedMvmt: null,
                requestInProgress: 'yes'
            })
        })
    } else {
        res.render('404');
    }
})

//update rt: 'cart img' btn of MOVEMENT clicked:, add to req-new pg, redirect to req-new
router.put('/add-to-request/:requestInProgress/:opusId/:movementIdx', (req, res) => {
    //if client didn't fill out req form yet
    if (req.params.requestInProgress === 'no') {
        db.Opus.findById(req.params.opusId)
            .then(opus => {
                //push the opus obj w/ only the selected mvmt
                requestedRepertoire.push({
                    title: opus.title,
                    composer: opus.composer,
                    movements: [{
                        movementNumber: opus.movements[req.params.movementIdx].movementNumber,
                        movementTitle: opus.movements[req.params.movementIdx].movementTitle,
                        movementPrice: opus.movements[req.params.movementIdx].movementPrice,
                    }],
                    instrumentation: [...opus.instrumentation],
                    price: opus.price,
                    description: opus.description
                })
                res.render('client-requests/client-request-newform', { 
                opus: opus,
                allRequests: requestedRepertoire,
                requestedMvmt: opus.movements[req.params.movementIdx],
                requestInProgress: 'no'
            })
        })
    //if client already filled out req form
    } else if (req.params.requestInProgress === 'yes') {
        db.Opus.findById(req.params.opusId)
            .then(opus => {
                requestedRepertoire.push({
                    title: opus.title,
                    composer: opus.composer,
                    movements: [{
                        movementNumber: opus.movements[req.params.movementIdx].movementNumber,
                        movementTitle: opus.movements[req.params.movementIdx].movementTitle,
                        movementPrice: opus.movements[req.params.movementIdx].movementPrice,
                    }],
                    instrumentation: [...opus.instrumentation],
                    price: opus.price,
                    description: opus.description
                })
                res.render('client-requests/client-request-edit', { 
                opus: opus,
                allRequests: requestedRepertoire,
                requestedMvmt: opus.movements[req.params.movementIdx],
                requestInProgress: 'yes'
            })
        })
    }
})

//idx rt: 'see repertoire list' or 'add repertoire' btn clicked while client-req IN PROGRESS: disp all opuses
router.get('/:clientRequestId', function (req, res) {
    db.Opus.find({})
        .then(opuses => {
            //to fill composer-filter drop-down menu on opus-idx pg w/o any repeats
            let fullComposersList = [];
            for (opus of opuses) {
                if (!fullComposersList.includes(opus.composer)) {
                    fullComposersList.push(opus.composer);
                }
            }
            fullComposersList.sort();
            //go to opus-idx pg w/ all opuses, fullComposersList for filter, client-req NOT made
            res.render('opuses/opus-index', {
            opuses: opuses,
            fullComposersList: fullComposersList,
            filtered: false,
            requestInProgress: 'yes'
        })
    })
})

//show rt: 'filter' btn clicked while client-req IN PRORESS: disp idx pg w/ filters
router.get('/:clientRequestId/filter', function (req, res) {
    //instrumentation filter specified only
    if (req.query.composer === undefined) {
        db.Opus.find( { instrumentation: { $elemMatch: { $eq: req.query.instrumentation } } } )
        .then(opuses => {
            res.render('opuses/opus-index', { 
                opuses: opuses,
                filtered: true,
                requestInProgress: 'yes'
            })
        })
    //composer filter specified only
    } else if (req.query.instrumentation === undefined) {
        db.Opus.find( { composer: req.query.composer } )
        .then(opuses => {
            res.render('opuses/opus-index', { 
                opuses: opuses,
                filtered: true,
                requestInProgress: 'yes'
            })
        })
    //both filters specified
    } else {
        db.Opus.find( { $and: [ { composer: req.query.composer }, { instrumentation: { $elemMatch: { $eq: req.query.instrumentation } } } ] } )
        .then(opuses => {
            res.render('opuses/opus-index', { 
                opuses: opuses,
                filtered: true,
                requestInProgress: 'yes'
            })
        })
    }
})

/* ----------------------------------------- ADMIN-ONLY ROUTES ----------------------------------------- */
//new rt: 'add new repertoire' btn clicked: form to be filled to create new opus
router.get('/new', (req, res) => {
    res.render('opuses/opus-newform')
})

//create rt: 'submit new repertoire' btn clicked: new rep added; redirect to its details pg
router.post('/', (req, res) => {
    db.Opus.create(req.body)
        .then(opus => res.redirect('/opuses/' + opus._id))
})

//edit rt: 'edit repertoire' btn clicked: go to edit pg
router.get('/:id/edit', (req, res) => {
    db.Opus.findById(req.params.id)
        .then(opus => res.render('opuses/opus-edit', { opus: opus }))
})

//update rt: 'apply changes' btn clicked: edits spec opus, redirect to show pg of updated opus
router.put('/:id', (req, res) => {
    db.Opus.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(opus => res.redirect('/opuses/' + opus._id))
})

//destroy rt: 'delete repertoire' btn clicked: del spec opus, redirect to opus-idx pg
router.delete('/:id', (req, res) => {
    db.Opus.findByIdAndDelete(req.params.id)
        .then(() => res.redirect('/opuses'))
})

// Export ^rts to be accessible in server.js
module.exports = router;
