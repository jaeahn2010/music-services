//req mongoose pkg
const mongoose = require('mongoose');
const opusSchema = require('./opus.js');

//schema for client-requests
const clientRequestSchema = new mongoose.Schema({
    clientName: {type: String, required: true},
    clientInstrument: {type: String, required: true},
    eventTitle: {type: String, required: true},
    eventDate: {type: Date, required: true},
    eventLocation: {
        address: {type: String, required: true},
        city: {type: String, required: true},
        state: {type: String, required: true},
        zip: {type: Number, maxLength: 5, required: true},
    },
    comments: {type: String},
    requestedRepertoire: [opusSchema.schema]
})

//schema -> models/index.js
module.exports = mongoose.model('ClientRequest', clientRequestSchema)