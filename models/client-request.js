//req mongoose pkg
const mongoose = require('mongoose');

//schema for client-requests
const clientRequestSchema = new mongoose.Schema({
    clientName: {type: String, required: true},
    clientInstrument: {type: String, required: true},
    // requestedRepertoire: [opusSchema],
    eventTitle: {type: String, required: true},
    eventDate: {type: Date, required: true},
    eventLocation: {type: String, required: true},
    comments: {type: String}
})

//export schema as mongoose model, accessed in models/index.js
module.exports = mongoose.model('ClientRequest', clientRequestSchema)