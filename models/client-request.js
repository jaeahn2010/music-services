//req mongoose pkg
const mongoose = require('mongoose');
const opusSchema = require('./opus.js');

//schema for client-requests
const clientRequestSchema = new mongoose.Schema({
    clientName: {type: String, required: true},
    clientInstrument: {type: String, required: true},
    eventTitle: {type: String, required: true},
    eventDate: {type: Date, required: true},
    eventLocation: {type: String, required: true},
    comments: {type: String},
    requestedRepertoire: [
        new mongoose.Schema({
            title: {type: String, required: true},
            composer: {type: String, required: true},
            movements: [
                new mongoose.Schema( {
                    movementTitle: {type: String},
                    price: {type: Number}
                })
            ],
            instrumentation: [{type: String, required: true}],
            price: {type: Number, required: true},
        })
    ]
    //testing reference in place of embedding below
    // requestedRepertoire: [
    //     {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: "Opus"
    //     }
    // ]
})

//schema -> models/index.js
module.exports = mongoose.model('ClientRequest', clientRequestSchema)