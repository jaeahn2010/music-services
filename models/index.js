// req mongoose pkg & env config
const mongoose = require('mongoose');
require('dotenv').config();

// connect to mdb atlas
mongoose.connect(process.env.MONGODBURI);
const db = mongoose.connection;

db.on('connected', function () {
    console.log(`Now connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
});

// models & seed data -> 'server.js'
module.exports = {
    Opus: require('./opus'),
    ClientRequest: require('./client-request'),
    seedOpuses: require('./seed')
}