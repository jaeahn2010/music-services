// req mongoose pkg & env config
const mongoose = require('mongoose');
require('dotenv').config()

// connect to mdb atlas
mongoose.connect(process.env.MONGODBURI);
const db = mongoose.connection

db.on('connected', function () {
    console.log(`You're connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
});

// export models & seed data to 'server.js'
module.exports = {
    ClientRequest: require('./client-request'),
    seedClientRequests: require('./seed')
}