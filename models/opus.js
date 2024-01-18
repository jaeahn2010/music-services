//req mongoose pkg
const mongoose = require('mongoose');

//schema for opuses
const opusSchema = new mongoose.Schema({
    title: {type: String, required: true},
    composer: {type: String, required: true},
    movements: [{
        movementNumber: {type: Number},
        movementTitle: {type: String},
        movementPrice: {type: Number}
    }],
    instrumentation: [{type: String, required: true}],
    price: {type: Number, required: true},
    description: {type: String}
})

//schema -> 'models/index.js'
module.exports = mongoose.model('Opus', opusSchema)