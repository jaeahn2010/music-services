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
            })
        })
    //composer filter specified only
    } else if (req.query.instrumentation === undefined) {
        db.Opus.find( { composer: req.query.composer } )
        .then(opuses => {
            res.render('opuses/opus-index', { 
                opuses: opuses,
                filtered: true,
            })
        })
    //both filters specified
    } else {
        db.Opus.find( { $and: [ { composer: req.query.composer }, { instrumentation: { $elemMatch: { $eq: req.query.instrumentation } } } ] } )
        .then(opuses => {
            res.render('opuses/opus-index', { 
                opuses: opuses,
                filtered: true,
            })
        })
    }
})

/* ----------------------------------------- ADMIN-ONLY ROUTES ----------------------------------------- */
//need to place this above the next show rt b/c control flow
//new rt: 'add new repertoire' btn clicked: form to be filled to create new opus
router.get('/new', (req, res) => {
    res.render('opuses/opus-newform')
})

/* ----------------------------------------- USER & ADMIN ROUTES ----------------------------------------- */
//show rt: spec 'opus link' clicked: show spec opus on details pg
router.get('/:id', function (req, res) {
    db.Opus.findById(req.params.id)
        .then(opus => res.render('opuses/opus-details', { opus: opus }))
        .catch(() => res.render('404'))
})

/* ----------------------------------------- USER-ONLY ROUTES ----------------------------------------- */

//update rt: 'cart img' btn of WHOLE OPUS clicked: add to array, go to req-viewcart
router.put('/add-to-request/:opusId', (req, res) => {
    db.Opus.findById(req.params.opusId)
        .then(opus => {
            wholeOpus = opus;
            wholeOpus["isMovement"] = false;
            requestedRepertoire.push(wholeOpus);
            res.render('client-requests/client-request-viewcart', { 
                cart: requestedRepertoire,
            })
        })
    })

//update rt: 'cart img' btn of MOVEMENT clicked: add to array, go to req-viewcart
router.put('/add-to-request/:opusId/:movementIdx', (req, res) => {
    db.Opus.findById(req.params.opusId)
        .then(opus => {
            //push the opus obj w/ only the selected mvmt
            let mvmt = {
                _id: opus._id,
                title: opus.title,
                composer: opus.composer,
                movements: [{
                    movementNumber: opus.movements[req.params.movementIdx].movementNumber,
                    movementTitle: opus.movements[req.params.movementIdx].movementTitle,
                    movementPrice: opus.movements[req.params.movementIdx].movementPrice,
                }],
                instrumentation: [...opus.instrumentation],
                price: opus.price,
                description: opus.description,
                isMovement: true
            }
            requestedRepertoire.push(mvmt)
            res.render('client-requests/client-request-viewcart', { 
                cart: requestedRepertoire,
            })
        })
    })

//delete rt: 'remove from cart' btn of WHOLE OPUS clicked: remove from array, go to req-viewcart
router.put('/modify-request/:opusId', (req, res) => {
    db.Opus.findById(req.params.opusId)
        .then(opus => {
            for (let i = 0; i < requestedRepertoire.length; i++) {
                if (requestedRepertoire[i]._id.equals(opus._id)) {
                    requestedRepertoire.splice(i, 1);
                }
            }
            res.render('client-requests/client-request-viewcart', { 
                cart: requestedRepertoire
            })
        })
})

//delete rt: 'remove from cart' btn of MOVEMENT clicked: remove from array, go to req-viewcart
router.put('/modify-request/:opusId/:mvmtNumber', (req, res) => {
    db.Opus.findById(req.params.opusId)
        .then(opus => {
            for (let i = 0; i < requestedRepertoire.length; i++) {
                if (requestedRepertoire[i]._id.equals(opus._id) && requestedRepertoire[i].movements[0].movementNumber === Number(req.params.mvmtNumber)) {
                    requestedRepertoire.splice(i, 1);
                }
            }     
            res.render('client-requests/client-request-viewcart', { 
                cart: requestedRepertoire
            })
        })
})

//show rt: 'clear cart' btn clicked: empty array & return home
router.post('/clear-cart', (req, res) => {
    requestedRepertoire = [];
    res.redirect('/');
})

//show rt: 'done adding repertoire' btn clicked: pass array to req-new form
router.put('/done-adding', (req, res) => {
    res.render('client-requests/client-request-newform', {
        requestList: requestedRepertoire
    })
})

/* ----------------------------------------- ADMIN-ONLY ROUTES ----------------------------------------- */

//create rt: 'submit new repertoire' btn clicked: new rep added; redirect to its details pg
router.post('/', (req, res) => {
    if (req.body.movements !== undefined) {
        let newMvmtObj = {movementTitle: '', movementPrice: 0};
        let mvmtArr = [];
        for (let i = 0; i < req.body.movements.movementTitle.length; i++) {
            newMvmtObj.movementTitle = req.body.movements.movementTitle[i];
            newMvmtObj.movementPrice = req.body.movements.movementPrice[i];
            let tempCopy = {...newMvmtObj};
            mvmtArr.push(tempCopy);
        }
        req.body.movements = mvmtArr;
    }
    db.Opus.create(req.body)
        .then(opus => res.redirect('/opuses/' + opus._id))
})

//edit rt: 'edit repertoire' btn clicked: go to edit pg
router.get('/:id/edit', (req, res) => {
    db.Opus.findById(req.params.id)
        .then(opus => {
            let tempArr = opus.title.split(' ');
            let newStr = ''
            for (item of tempArr) {
                newStr += item + '-';
            }
            opus["title"] = newStr; //need this because otherwise, all chars after whitespace not passed to edit page
            res.render('opuses/opus-edit', { opus: opus })
        })
})

//update rt: 'submit revised information' btn clicked: edits spec opus, redirect to show pg of updated opus
router.put('/:id', (req, res) => {
    if (req.body.movements !== undefined) {
        let newMvmtObj = {movementTitle: '', movementPrice: 0};
        let mvmtArr = [];
        //below poss happening when only one movement?
        for (let i = 0; i < req.body.movements.movementTitle.length; i++) {
            newMvmtObj.movementTitle = req.body.movements.movementTitle[i];
            newMvmtObj.movementPrice = req.body.movements.movementPrice[i];
            let tempCopy = {...newMvmtObj};
            mvmtArr.push(tempCopy);
        }
        req.body.movements = mvmtArr;
        let tempArr = req.body.title.split('-');
        let newStr = '';
        for (item of tempArr) {
            newStr += item + ' ';
        }//undo '-' from above
        req.body["title"] = newStr;
    }
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
