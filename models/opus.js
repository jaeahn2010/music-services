//req mongoose pkg
const mongoose = require('mongoose');

//schema for opuses
const opusSchema = new mongoose.Schema({
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
    //testing reference in place of embedding below
    // requests: [
    //     {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: "ClientRequest"
    //     }
    // ]
})

//schema -> 'models/index.js'
module.exports = mongoose.model('Opus', opusSchema)