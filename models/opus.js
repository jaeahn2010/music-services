//req mongoose pkg
const mongoose = require('mongoose');

//schema for opuses
const opusSchema = new mongoose.Schema({
    title: {type: String, required: true},
    composer: {type: String, required: true},
    // movements: [
    //     new mongoose.Schema( {
    //         movementTitle: {type: String},
    //         movementPrice: {type: Number}
    //     })
    // ],
    movements: [{
        type: Object,
        schema: {
            movementTitle: {type: String},
            movementPrice: {type: Number}
        }
    }],
    instrumentation: [{type: String, required: true}],
    price: {type: Number, required: true},
    description: {type: String}
})

//schema -> 'models/index.js'
module.exports = mongoose.model('Opus', opusSchema)