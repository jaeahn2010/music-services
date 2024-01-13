//req modules
const express = require('express')
const router = express.Router()

//req db connection & models
const db = require('../models')

//all rts
//index rt (GET/read): disp all reqs
router.get('/', function (req, res) {
    db.ClientRequest.find({})
        .then(clientRequests => res.json(clientRequests))
})

// show rt (GET/Read): disp specified req
router.get('/:id', function (req, res) {
    db.ClientRequest.findById(req.params.id)
        .then(clientRequest => res.json(clientRequest))
        .catch(() => res.send('404 Error: Page Not Found'))
})

/* Export these routes so that they are accessible in `server.js`
--------------------------------------------------------------- */
module.exports = router
