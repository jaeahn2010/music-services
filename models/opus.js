//req mongoose pkg
const mongoose = require('mongoose');

//schema for opuses
const opusSchema = new mongoose.Schema({
    title: {type: String, required: true},
    composer: {type: String, required: true},
    movements: [{type: String}, {type: Number}],
    instrumentation: [{type: String, required: true}],
    price: {type: Number, required: true}
})

//export schema as mongoose model, accessed in 'models/index.js'
module.exports = mongoose.model('Opus', opusSchema);